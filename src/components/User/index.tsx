import { Text } from '@chakra-ui/react';
import { NonData, PageLayout, TitleSection, UserInfo } from 'components';
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
      {data?.length !== 0 ? (
        <NonData title="등록된 소환사가 없습니다." />
      ) : (
        data?.map((info, i) => <UserInfo key={i} data={info} />)
      )}
    </PageLayout>
  );
};

export default User;
