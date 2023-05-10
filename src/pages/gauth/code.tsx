import { Login, SEOHelmet } from 'components';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useQuery } from 'react-query';
import axios from 'axios';

const LoginPage: NextPage<{ code: string }> = ({ code }: { code: string }) => {
  // const { data } = useQuery('login', () => {
  //   axios.get(`http://localhost:8080/api/auth/v1/gauth/code?code=${code}`);
  // });
  return (
    <>
      <SEOHelmet seoTitle="로그인" desc="GAuth 계정으로 로그인합니다." />
      <Login />
    </>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { code } = query;

  return {
    props: { code },
  };
};
