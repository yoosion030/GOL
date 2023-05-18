import { GameHistory, InfoBanner, RegisterForm } from 'components';
import { SummeonerType } from 'types/Summoner';
import { formatNameNumber } from 'utils';

interface InfoProps {
  data: SummeonerType;
}

const Info = ({ data }: InfoProps) => {
  const { userDto } = data;
  const name = formatNameNumber(
    userDto.grade,
    userDto.classNum,
    userDto.num,
    userDto.name,
  );

  return (
    <>
      <InfoBanner
        nickname={data?.name}
        name={name}
        profileIconId={data.profileIconId}
      />

      {!data?.isRegistered ? (
        <RegisterForm accountId={data?.accountId} />
      ) : (
        <GameHistory />
      )}
    </>
  );
};

export default Info;
