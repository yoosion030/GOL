import axios from 'axios';

export const registerSummeoner = async (accountId: string) => {
  try {
    await axios.post('http://localhost:8080/api/summoner/v1/summoner', {
      accountId,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteSummeoner = async (accountId: string) => {
  try {
    await axios.delete('http://localhost:8080/api/summoner/v1/summoner', {
      data: {
        accountId,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
