import axios from 'axios';

// Axios 인스턴스 생성
export const instance = axios.create({
  // Axios 구성 옵션 설정
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
