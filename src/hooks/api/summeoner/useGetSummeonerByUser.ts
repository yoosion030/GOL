import { useQuery } from '@tanstack/react-query';
import { getSummeonerByUser } from 'utils/summeoner';

export const useGetSummeonerByUser = () =>
  useQuery(['getSummeonerByUser'], getSummeonerByUser);
