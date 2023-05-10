import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GameHistory, Modal, InfoBanner, RegisterForm } from 'components';
import { SummeonerType } from 'types/Summoner';

interface InfoProps {
  data: SummeonerType;
}

const Info = ({ data }: InfoProps) => {
  useEffect(() => {}, []);

  const router = useRouter();
  const { nickname } = router.query;

  return (
    <>
      <InfoBanner nickname={nickname} name={data?.name} />

      {!data?.isRegistered ? <RegisterForm /> : <GameHistory />}
    </>
  );
};

export default Info;
