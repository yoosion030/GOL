import { useQuery } from 'react-query';
import { Box, Button } from '@chakra-ui/react';
import {
  Loading,
  NonData,
  PageLayout,
  TitleSection,
  UserInfo,
} from 'components';
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

      <Box overflow="scroll" height="50rem">
        {data?.length === 0 ? (
          <NonData title="등록된 소환사가 없습니다." />
        ) : (
          data?.map((info, i) => <UserInfo key={i} data={info} />)
        )}
      </Box>
      <Button
        onClick={getLogout}
        colorScheme="red"
        marginTop="auto"
        height="50px"
      >
        로그아웃
      </Button>
    </PageLayout>
  );
};

export default User;
