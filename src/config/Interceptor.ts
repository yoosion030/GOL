import axios from 'axios';
import { TokenType } from 'types/Auth';

// Axios 인스턴스 생성
export const instance = axios.create({
  // Axios 구성 옵션 설정
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // 응답 오류 처리
    if (error.response.status === 401 && !error.config.__isRetryRequest) {
      if (
        !window.localStorage.getItem('accessToken') &&
        !localStorage.getItem('refreshToken')
      ) {
        localStorage.clear();
        window.location.replace('/gauth');
      }
      const { data }: { data: TokenType } = await refreshToken();
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      // 기존 요청을 복원하여 다시 보냄
      const config = error.config;
      config.headers.Authorization = `Bearer ${data.accessToken}`;
      error.config.__isRetryRequest = true;
      return instance(config);
    }
    return Promise.reject(error);
  },
);

// 토큰 재발급 함수 예시
function refreshToken() {
  const refresh_token = localStorage.getItem('refreshToken');
  try {
    return instance.post('/api/auth/v1/refresh', {
      refreshToken: refresh_token,
    });
  } catch (error) {
    localStorage.clear();
    window.location.replace('/gauth');
    return Promise.reject(error);
  }
}
