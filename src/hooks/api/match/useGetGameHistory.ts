import { useQuery } from '@tanstack/react-query';
import { getGameHistory } from 'utils/match';

export const useGetGameHistory = (id: string) =>
  useQuery(['getGameHistory', id], () => getGameHistory(id));
