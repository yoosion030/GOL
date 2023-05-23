import type { NextPage } from 'next';
import { NonData, SEOHelmet } from 'components';

const ErrorPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="Error" desc="에러가 발생하였습니다." />
      <NonData title="에러가 발생했습니다." />
    </>
  );
};

export default ErrorPage;
