import { instance } from 'config/Interceptor';
import { CategoryType, RankType } from 'types/Rank';

export const getRankByCategory = async (category: CategoryType) => {
  try {
    const { data } = await instance.get<RankType[]>(
      `api/rank/v1/ranks/by-category/${category}`,
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
