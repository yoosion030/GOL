import { TierType } from 'types/Rank';

const formatTier = (
  tier: TierType,
  tierLevel: string,
  tierScore: string,
): string => {
  let krTier = '';
  switch (tier) {
    case 'IRON':
      krTier = '아이언';
      break;
    case 'BRONZE':
      krTier = '브론즈';
      break;
    case 'SILVER':
      krTier = '실버';
      break;
    case 'GOLD':
      krTier = '골드';
      break;
    case 'PLATINUM':
      krTier = '플래티넘';
      break;
    case 'DIAMOND':
      krTier = '다이아몬드';
      break;
    case 'MASTER':
      krTier = '마스터';
      break;
    case 'GRANDMASTER':
      krTier = '그랜드마스터';
      break;
    case 'CHALLENGER':
      krTier = '챌린저';
      break;
    default:
      krTier = '';
      break;
  }

  switch (tierLevel) {
    case 'I':
      tierLevel = '1';
      break;
    case 'II':
      tierLevel = '2';
      break;
    case 'III':
      tierLevel = '3';
      break;
    case 'IV':
      tierLevel = '4';
      break;
    case 'V':
      tierLevel = '5';
      break;
    default:
      tierLevel = '0';
      break;
  }

  return `${krTier}${tierLevel} ${tierScore}점`;
};

export default formatTier;
