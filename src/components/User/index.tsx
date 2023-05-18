import { Text } from '@chakra-ui/react';
import { PageLayout, TitleSection, UserInfo } from 'components';
import { UserType } from 'types/User';

const User = ({ data }: { data: UserType[] }) => {
  return (
    <PageLayout>
      <TitleSection name="유시온" mode="user" />
      <Text>현재 등록된 소환사</Text>
      {data.map((v, i) => (
        <UserInfo key={i} data={v} />
      ))}
    </PageLayout>
  );
};

export default User;
