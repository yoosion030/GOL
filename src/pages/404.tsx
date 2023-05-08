import { NotFound, SEOHelmet } from 'components';
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="Not Found" desc="접근할 수 없는 페이지입니다." />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
