import { instance } from 'config/Interceptor';

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
