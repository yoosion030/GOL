import { Login, SEOHelmet } from 'components';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { useQuery } from 'react-query';
import { instance } from 'config/Interceptor';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoginPage: NextPage<{ code: string }> = ({ code }: { code: string }) => {
  const { push } = useRouter();
  // Todo: useQuery 사용
  const getData = async () => {
    try {
      const { data } = await instance.get(
        `http://gsm-of-legends.p-e.kr/api/auth/v1/gauth/code?code=${code}`,
      );

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      push('/info');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [code]);

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
