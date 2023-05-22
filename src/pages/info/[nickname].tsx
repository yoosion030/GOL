import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { Info, SEOHelmet } from 'components';

interface InfoPageProps {
  nickname: string;
}

const InfoPage: NextPage<InfoPageProps> = ({ nickname }: InfoPageProps) => {
  return (
    <>
      <SEOHelmet seoTitle="전적" desc="닉네임으로 전적을 검색합니다." />
      <Info nickname={nickname} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const nickname = params?.nickname;

  return {
    props: {
      nickname,
    },
  };
};

export default InfoPage;
