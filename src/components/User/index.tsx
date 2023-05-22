import { Text } from '@chakra-ui/react';
import { PageLayout, TitleSection, UserInfo } from 'components';
import { useQuery } from 'react-query';
import { getSummeonerByUser } from 'utils/summeoner';

const User = () => {
  const { data } = useQuery('getSummeonerByUser', getSummeonerByUser);

  return (
    <PageLayout>
      <TitleSection name="유시온" mode="user" />
      <Text>현재 등록된 소환사</Text>
      {data?.map((v, i) => (
        <UserInfo key={i} data={v} />
      ))}
    </PageLayout>
  );
};

export default User;
