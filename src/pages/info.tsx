import { Search, SEOHelmet } from 'components';
import type { NextPage } from 'next';

const SearchPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="검색" desc="닉네임으로 전적을 검색합니다." />
      <Search />
    </>
  );
};

export default SearchPage;
