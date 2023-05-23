import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useQuery } from 'react-query';
import { Loading, SEOHelmet } from 'components';
import { getLogin } from 'utils/auth';

interface LoginPageProps {
  code: string;
}

const LoginPage: NextPage<LoginPageProps> = ({ code }: LoginPageProps) => {
  const { isLoading } = useQuery('login', () => getLogin(code));
  if (isLoading) return <Loading />;

  return (
    <>
      <SEOHelmet seoTitle="로그인" desc="GAuth 계정으로 로그인합니다." />
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
