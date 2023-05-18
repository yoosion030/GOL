import { CategoryType, TierType } from 'types/Rank';
import formatTier from './formatTier';

const formatRank = (rankType: CategoryType, rankValue: string): string => {
  switch (rankType) {
    case 'TIER_RANKED_SOLO_5x5':
    case 'TIER_RANKED_FLEX_SR':
      let rank = rankValue.split('_');
      return formatTier(rank[3] as TierType, rank[4], rank[5]);

    case 'CUR_LOSE_STREAK':
      return rankValue + '연패';

    case 'CUR_WIN_STREAK':
      return rankValue + '연승';

    case 'MATCH_COUNT':
      return rankValue + '판';

    case 'SUMMONER_LEVEL':
      return rankValue + '레벨';

    default:
      return '없음';
  }
};

export default formatRank;
