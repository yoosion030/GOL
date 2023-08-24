import { Box } from '@chakra-ui/react';
import { GameHistory, InfoBanner, Loading, RegisterForm } from 'components';
import { formatNameNumber } from 'utils/format';
import { useGetSummeonerByName } from 'hooks';

const Info = ({ nickname }: { nickname: string }) => {
  const { data, isLoading } = useGetSummeonerByName(nickname);

  const name = formatNameNumber(
    data?.userDto?.grade,
    data?.userDto?.classNum,
    data?.userDto?.num,
    data?.userDto?.name,
  );

  return (
    <>
      <InfoBanner
        nickname={data?.name}
        name={!data?.isRegistered ? '사용자 등록 필요' : name}
        profileIconId={data?.profileIconId}
      />

      {isLoading ? (
        <Box padding="3.75rem 0">
          <Loading />
        </Box>
      ) : (
        <>
          {!data?.isRegistered ? (
            <RegisterForm accountId={data?.accountId} />
          ) : (
            <GameHistory id={data.id} />
          )}
        </>
      )}
    </>
  );
};

export default Info;
