import { instance } from 'config/Interceptor';
import { MatchType } from 'types/Match';

export const getGameHistory = async (id: string) => {
  const accessToken = window.localStorage.getItem('accessToken');
  const { data } = await instance.get<MatchType>('api/match/v1/matches', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
    params: { summonerId: id },
  });

  return data;
};
