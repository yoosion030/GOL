import { useRouter } from 'next/router';
import { SummonersInfo } from 'types/Info';
import InfoBanner from './InfoBanner';
import { GameHistory, Modal } from 'components';
import { useState } from 'react';

const Info = ({ nickname, name }: SummonersInfo) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router);

  return (
    <>
      <InfoBanner nickname={nickname} name={name} />
      <div onClick={() => setIsOpen(true)}>사용자 등록 테스트</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div>사용자 등록 해제 테스트</div>
      <GameHistory />
    </>
  );
};

export default Info;
