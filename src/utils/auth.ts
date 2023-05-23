import { instance } from 'config/Interceptor';
import { TokenType } from 'types/Auth';

export const getLogin = async (code: string) => {
  try {
    const { data } = await instance.get<TokenType>(
      `api/auth/v1/gauth/code?code=${code}`,
    );

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    window.location.replace('/info');
  } catch (e) {
    console.error(e);
  }
};

export const getSignout = async () => {
  try {
    await instance.get('api/auth/v1/signout');
    window.localStorage.clear();
    window.location.replace('/gauth');
  } catch (e) {
    console.error(e);
  }
};
