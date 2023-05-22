import { instance } from 'config/Interceptor';
import { CategoryType, RankType } from 'types/Rank';

export const getRankByCategory = async (category: CategoryType) => {
  const accessToken = window.localStorage.getItem('accessToken');
  try {
    const { data } = await instance.get<RankType[]>(
      `api/rank/v1/ranks/by-category/${category}`,
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
