import { SEOHelmet } from 'components';
import type { NextPage } from 'next';

const UserPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="마이" desc="내 정보를 확인합니다." />
    </>
  );
};

export default UserPage;
