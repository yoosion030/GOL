import { useQuery } from '@tanstack/react-query';
import { getSummeonerByName } from 'utils/summeoner';

export const useGetSummeonerByName = (nickname: string) =>
  useQuery(['getSummeonerByName', nickname], () =>
    getSummeonerByName(nickname),
  );
