import { instance } from 'config/Interceptor';
import { MatchType } from 'types/Match';

export const getGameHistory = async (id: string) => {
  try {
    const { data } = await instance.get<MatchType>('api/match/v1/matches', {
      params: { summonerId: id },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
