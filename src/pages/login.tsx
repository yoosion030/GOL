import { Login, SEOHelmet } from 'components';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <>
      <SEOHelmet seoTitle="로그인" desc="GAuth 계정으로 로그인합니다." />
      <Login />
    </>
  );
};

export default LoginPage;
