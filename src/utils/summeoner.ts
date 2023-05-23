import { instance } from 'config/Interceptor';
import { SummeonerType } from 'types/Summoner';

export const getSummeonerByName = async (nickname: string) => {
  try {
    const { data } = await instance.get<SummeonerType>(
      `http://gsm-of-legends.p-e.kr/api/summoner/v1/summoner/by-name/${nickname}`,
    );

    return data;
  } catch (e) {
    window.location.replace('/info');
    console.log(e);
  }
};

export const getSummeonerByUser = async () => {
  try {
    const { data } = await instance.get<SummeonerType[]>(
      '/api/summoner/v1/summoners/by-user',
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const registerSummeoner = async (accountId?: string) => {
  try {
    await instance.post('api/summoner/v1/summoner', {
      accountId,
    });
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

export const deleteSummeoner = async (accountId: string) => {
  try {
    await instance.delete('api/summoner/v1/summoner', {
      data: {
        accountId,
      },
    });
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};
