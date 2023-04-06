import { SummonersInfo } from 'types/Info';
import InfoBanner from './InfoBanner';

const Info = ({ nickname, name }: SummonersInfo) => {
  return (
    <>
      <InfoBanner nickname={nickname} name={name} />
    </>
  );
};

export default Info;
