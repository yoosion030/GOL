import { useRouter } from 'next/router';
import { useState } from 'react';
import { GameHistory, Modal, InfoBanner } from 'components';
import { SummonersInfo } from 'types/Info';

const Info = ({ nickname, name }: SummonersInfo) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();
  console.log(router);

  return (
    <>
      <InfoBanner nickname={nickname} name={name} />
      <div onClick={() => setIsRegisterModalOpen(true)}>사용자 등록 테스트</div>
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        modalTitle="본인의 계정이 확실한가요?"
        modalContent={`본인의 계정이 아닌 다른 사람의 계정을 \n등록하지 않도록 주의해주세요.`}
        mode="등록"
        colorScheme="main"
      />

      <div onClick={() => setIsDeleteModalOpen(true)}>사용자 해제 테스트</div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        modalTitle="정말 등록을 해제할까요?"
        modalContent={`등록 해제 시 모든 기록이 삭제됩니다. \n정말로 등록 해제를 진행하시겠습니까? \n이 작업은 되돌릴 수 없습니다.`}
        mode="해제"
        colorScheme="red"
      />
      <GameHistory />
    </>
  );
};

export default Info;
