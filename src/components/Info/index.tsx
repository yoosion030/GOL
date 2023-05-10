import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GameHistory, InfoBanner, RegisterForm } from 'components';
import { SummeonerType } from 'types/Summoner';

interface InfoProps {
  data: SummeonerType;
}

const Info = ({ data }: InfoProps) => {
  useEffect(() => {}, []);

  const { userDto } = data;
  const number = [userDto.grade, userDto.classNum, userDto.num].join('');
  const name = [number, userDto.name].join(' ');
  return (
    <>
      <InfoBanner nickname={data?.name} name={name} />

      {!data?.isRegistered ? (
        <RegisterForm accountId={data?.accountId} />
      ) : (
        <GameHistory />
      )}
    </>
  );
};

export default Info;
