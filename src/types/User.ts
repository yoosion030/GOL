import { UserDto } from './Summoner';
import { CategoryType } from './Rank';

export interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export type UserType = {
  rankType: CategoryType;
  rankingNumber: number;
  rankValue: string;
  summonerResDto: {
    id: string;
    summonerApiId: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    isRegistered: boolean;
    userDto: UserDto;
  };
};
