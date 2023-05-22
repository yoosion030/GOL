import { GameHistory, InfoBanner, RegisterForm } from 'components';
import { useQuery } from 'react-query';
import { formatNameNumber } from 'utils';
import { getSummeonerByName } from 'utils/summeoner';

const Info = ({ nickname }: { nickname: string }) => {
  const { data } = useQuery('getSummeonerByName', () =>
    getSummeonerByName(nickname),
  );

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

      {!data?.isRegistered ? (
        <RegisterForm accountId={data?.accountId} />
      ) : (
        <GameHistory id={data.id} />
      )}
    </>
  );
};

export default Info;
