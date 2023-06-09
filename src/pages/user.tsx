import type { NextPage } from 'next';
import { SEOHelmet, User } from 'components';

const UserPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="정보" desc="내 정보를 확인합니다." />
      <User />
    </>
  );
};

export default UserPage;
