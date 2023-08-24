import { useQuery } from '@tanstack/react-query';
import { getLogin } from 'utils/auth';

export const useGetLogin = (code: string) =>
  useQuery(['login', code], () => getLogin(code));
