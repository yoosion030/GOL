import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { Info, SEOHelmet } from 'components';
import { SummonersInfo } from 'types/Info';

const InfoPage: NextPage<{ nickname: string }> = ({
  nickname,
}: {
  nickname: string;
}) => {
  const data: SummonersInfo = {
    nickname: '롯데리아케찹도둑엄준식',
    name: '3333 엄준식',
  };

  return (
    <>
      <SEOHelmet seoTitle="전적" desc="닉네임으로 전적을 검색합니다." />
      <Info {...data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const nickname = params?.nickname;
  console.log(`nickname으로 데이터 요청`);

  return {
    props: { nickname },
  };
};

export default InfoPage;
