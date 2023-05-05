import { Rank, SEOHelmet } from 'components';
import type { NextPage } from 'next';

const RankPage: NextPage = () => {
  return (
    <>
      <SEOHelmet
        seoTitle="랭크"
        desc="GSM 내의 리그오브레전드 순위를 확인합니다."
      />
      <Rank />
    </>
  );
};

export default RankPage;
