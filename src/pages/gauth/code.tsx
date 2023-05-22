import { Login, SEOHelmet } from 'components';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getLogin } from 'utils/auth';

interface LoginPageProps {
  code: string;
}

const LoginPage: NextPage<LoginPageProps> = ({ code }: LoginPageProps) => {
  const { push } = useRouter();

  useQuery('login', () => getLogin(code));

  return (
    <>
      <SEOHelmet seoTitle="로그인" desc="GAuth 계정으로 로그인합니다." />
      {/* Todo: 로딩 창 제작 */}
      {/* <Login /> */}
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
