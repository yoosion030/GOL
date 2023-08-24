import { useQuery } from '@tanstack/react-query';
import { getLogout } from 'utils/auth';

export const useGetLogout = () => useQuery(['logout'], () => getLogout);
