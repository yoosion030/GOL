import { GameHistory, InfoBanner, RegisterForm } from 'components';
import { SummeonerType } from 'types/Summoner';
import { formatNameNumber } from 'utils';

interface InfoProps {
  data: SummeonerType;
}

const Info = ({ data }: InfoProps) => {
  const name = formatNameNumber(
    data.userDto?.grade,
    data.userDto?.classNum,
    data.userDto?.num,
    data.userDto?.name,
  );

  return (
    <>
      <InfoBanner
        nickname={data?.name}
        name={!data.isRegistered ? '사용자 등록 필요' : name}
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
