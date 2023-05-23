import { UserDto } from './Summoner';

export interface RankItemType {
  nickname: string;
  name: string;
  tier: string;
  rank: string;
}

export interface RankType {
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
}

export type CategoryType =
  | 'TIER_RANKED_SOLO_5x5'
  | 'TIER_RANKED_FLEX_SR'
  | 'CUR_LOSE_STREAK'
  | 'CUR_WIN_STREAK'
  | 'MATCH_COUNT'
  | 'SUMMONER_LEVEL';

export type labelType =
  | '솔로랭크'
  | '자유랭크'
  | '연패'
  | '연승'
  | '플레이횟수'
  | '레벨';

export interface RankCategoryType {
  category: CategoryType;
  label: labelType;
}

export type TierType =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER';
