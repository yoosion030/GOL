import { instance } from 'config/Interceptor';
import { SummeonerType } from 'types/Summoner';

export const getSummeonerByUser = async () => {
  try {
    const accessToken = window.localStorage.getItem('accessToken');
    const { data } = await instance.get<SummeonerType[]>(
      '/api/summoner/v1/summoners/by-user',
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

export const registerSummeoner = async (accountId: string) => {
  const accessToken = window.localStorage.getItem('accessToken');
  try {
    await instance.post(
      'api/summoner/v1/summoner',
      {
        accountId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      },
    );
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

export const deleteSummeoner = async (accountId: string) => {
  const accessToken = window.localStorage.getItem('accessToken');
  try {
    await instance.delete('api/summoner/v1/summoner', {
      data: {
        accountId,
      },
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};
