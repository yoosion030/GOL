import { useRouter } from 'next/router';
import { SummonersInfo } from 'types/Info';
import InfoBanner from './InfoBanner';
import { GameHistory } from 'components';

const Info = ({ nickname, name }: SummonersInfo) => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <InfoBanner nickname={nickname} name={name} />
      <GameHistory />
    </>
  );
};

export default Info;
