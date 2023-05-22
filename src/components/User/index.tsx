import { Text } from '@chakra-ui/react';
import { PageLayout, TitleSection, UserInfo } from 'components';
import { useQuery } from 'react-query';
import { palette } from 'shared/styles/Palette';
import { getSummeonerByUser } from 'utils/summeoner';

const User = () => {
  const { data } = useQuery('getSummeonerByUser', getSummeonerByUser);

  return (
    <PageLayout>
      <TitleSection name="유시온" mode="user" />
      <Text
        fontWeight="700"
        marginBottom="20px"
        fontSize={palette.fontSize.medium}
      >
        현재 등록된 소환사
      </Text>
      {data?.map((v, i) => (
        <UserInfo key={i} data={v} />
      ))}
    </PageLayout>
  );
};

export default User;
