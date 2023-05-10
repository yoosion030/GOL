import { useState } from 'react';
import { Modal } from 'components';

const RegisterForm = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <h1>전적 조회를 위해서는 사용자 등록을 해야합니다.</h1>
      <button onClick={() => setIsRegisterModalOpen(true)}>등록</button>
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        modalTitle="본인의 계정이 확실한가요?"
        modalContent={`본인의 계정이 아닌 다른 사람의 계정을 \n등록하지 않도록 주의해주세요.`}
        mode="등록"
        colorScheme="main"
        success={() => {}}
      />
    </>
  );
};

export default RegisterForm;
