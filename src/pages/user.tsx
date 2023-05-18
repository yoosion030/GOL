import { SEOHelmet, User } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { UserType } from 'types/User';

interface UserPageProps {
  data: UserType[];
}

const UserPage: NextPage<UserPageProps> = ({ data }: UserPageProps) => {
  console.log(data);
  return (
    <>
      <SEOHelmet seoTitle="정보" desc="내 정보를 확인합니다." />
      <User data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const testData: UserType[] = [
      {
        rankType: 'CUR_LOSE_STREAK',
        rankingNumber: 1,
        rankValue: '2',
        summonerResDto: {
          id: 'bee23add-2ec6-4af0-88cb-99f843afc4c2',
          summonerApiId: 'vkqcHZK6RT4NX4UfwIe3zWcuZsBRTHhVR4lnKD-JAUWVlOY',
          accountId: 'vz3-jvm9gb1SODe3jRshCg1xzkVOXTkt6YbIuy44DlIVSqE',
          puuid:
            'ad951W1ExSx9ho7R4eYMZvAMB8wEMLvh-Z-azO1zh3gFkGqFg3ESYZySp9ed-O-IbY0N7mMWT813Fg',
          name: '잠은 뒤져서 잔다',
          profileIconId: 5464,
          revisionDate: 1683034046273,
          summonerLevel: 2422,
          isRegistered: true,
          userDto: {
            id: 'd320186e-1c0b-4f77-beff-2530d47f274c',
            email: 'Dummy1',
            name: 'Dummy1',
            grade: 1,
            classNum: 1,
            num: 11,
            gender: 'Dummy1',
            profileUrl: 'Dummy1',
            gAuthRole: 'Dummy1',
            role: 'ROLE_USER',
          },
        },
      },
      {
        rankType: 'MATCH_COUNT',
        rankingNumber: 1,
        rankValue: '9',
        summonerResDto: {
          id: 'bee23add-2ec6-4af0-88cb-99f843afc4c2',
          summonerApiId: 'vkqcHZK6RT4NX4UfwIe3zWcuZsBRTHhVR4lnKD-JAUWVlOY',
          accountId: 'vz3-jvm9gb1SODe3jRshCg1xzkVOXTkt6YbIuy44DlIVSqE',
          puuid:
            'ad951W1ExSx9ho7R4eYMZvAMB8wEMLvh-Z-azO1zh3gFkGqFg3ESYZySp9ed-O-IbY0N7mMWT813Fg',
          name: '잠은 뒤져서 잔다',
          profileIconId: 5464,
          revisionDate: 1683034046273,
          summonerLevel: 2422,
          isRegistered: true,
          userDto: {
            id: 'd320186e-1c0b-4f77-beff-2530d47f274c',
            email: 'Dummy1',
            name: 'Dummy1',
            grade: 1,
            classNum: 1,
            num: 11,
            gender: 'Dummy1',
            profileUrl: 'Dummy1',
            gAuthRole: 'Dummy1',
            role: 'ROLE_USER',
          },
        },
      },
      {
        rankType: 'CUR_WIN_STREAK',
        rankingNumber: 2,
        rankValue: '0',
        summonerResDto: {
          id: 'bee23add-2ec6-4af0-88cb-99f843afc4c2',
          summonerApiId: 'vkqcHZK6RT4NX4UfwIe3zWcuZsBRTHhVR4lnKD-JAUWVlOY',
          accountId: 'vz3-jvm9gb1SODe3jRshCg1xzkVOXTkt6YbIuy44DlIVSqE',
          puuid:
            'ad951W1ExSx9ho7R4eYMZvAMB8wEMLvh-Z-azO1zh3gFkGqFg3ESYZySp9ed-O-IbY0N7mMWT813Fg',
          name: '잠은 뒤져서 잔다',
          profileIconId: 5464,
          revisionDate: 1683034046273,
          summonerLevel: 2422,
          isRegistered: true,
          userDto: {
            id: 'd320186e-1c0b-4f77-beff-2530d47f274c',
            email: 'Dummy1',
            name: 'Dummy1',
            grade: 1,
            classNum: 1,
            num: 11,
            gender: 'Dummy1',
            profileUrl: 'Dummy1',
            gAuthRole: 'Dummy1',
            role: 'ROLE_USER',
          },
        },
      },
      {
        rankType: 'SUMMONER_LEVEL',
        rankingNumber: 2,
        rankValue: '2422',
        summonerResDto: {
          id: 'bee23add-2ec6-4af0-88cb-99f843afc4c2',
          summonerApiId: 'vkqcHZK6RT4NX4UfwIe3zWcuZsBRTHhVR4lnKD-JAUWVlOY',
          accountId: 'vz3-jvm9gb1SODe3jRshCg1xzkVOXTkt6YbIuy44DlIVSqE',
          puuid:
            'ad951W1ExSx9ho7R4eYMZvAMB8wEMLvh-Z-azO1zh3gFkGqFg3ESYZySp9ed-O-IbY0N7mMWT813Fg',
          name: '잠은 뒤져서 잔다',
          profileIconId: 5464,
          revisionDate: 1683034046273,
          summonerLevel: 2422,
          isRegistered: true,
          userDto: {
            id: 'd320186e-1c0b-4f77-beff-2530d47f274c',
            email: 'Dummy1',
            name: 'Dummy1',
            grade: 1,
            classNum: 1,
            num: 11,
            gender: 'Dummy1',
            profileUrl: 'Dummy1',
            gAuthRole: 'Dummy1',
            role: 'ROLE_USER',
          },
        },
      },
    ];
    return {
      props: { data: testData },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default UserPage;
