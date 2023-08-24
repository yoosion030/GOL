import { useQuery } from '@tanstack/react-query';
import { CategoryType } from 'types/Rank';
import { getRankByCategory } from 'utils/rank';

export const useGetRankByCategory = (category: CategoryType) =>
  useQuery(['getRankByCategory', category], () => getRankByCategory(category));
