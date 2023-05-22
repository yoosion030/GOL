import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from 'next';
import { Info, SEOHelmet } from 'components';
import { SummeonerType } from 'types/Summoner';
import { instance } from 'config/Interceptor';

interface InfoPageProps {
  data: SummeonerType;
}

const InfoPage: NextPage<InfoPageProps> = ({ data }: InfoPageProps) => {
  console.log(data);

  return (
    <>
      <SEOHelmet seoTitle="전적" desc="닉네임으로 전적을 검색합니다." />
      <Info data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const nickname = params?.nickname;
  try {
    const { data } = await instance.get(
      `http://gsm-of-legends.p-e.kr/api/summoner/v1/summoner/by-name/${nickname}`,
    );

    return {
      props: { data },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default InfoPage;
