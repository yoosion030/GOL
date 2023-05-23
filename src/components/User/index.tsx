import { Text } from '@chakra-ui/react';
import {
  Loading,
  NonData,
  PageLayout,
  TitleSection,
  UserInfo,
} from 'components';
import { useQuery } from 'react-query';
import { palette } from 'shared/styles/Palette';
import { getLogout } from 'utils/auth';
import { getSummeonerByUser } from 'utils/summeoner';

const User = () => {
  const { data, isLoading } = useQuery(
    'getSummeonerByUser',
    getSummeonerByUser,
  );

  if (isLoading) return <Loading />;

  return (
    <PageLayout>
      <TitleSection name={data && data[0]?.userDto?.name} mode="user" />
      <Text
        fontWeight="700"
        marginBottom="1.25rem"
        fontSize={palette.fontSize.medium}
      >
        현재 등록된 소환사
      </Text>
      {data?.length === 0 ? (
        <NonData title="등록된 소환사가 없습니다." />
      ) : (
        data?.map((info, i) => <UserInfo key={i} data={info} />)
      )}
      <div onClick={getLogout}>로그아웃</div>
    </PageLayout>
  );
};

export default User;
