import { useState } from 'react';
import { Modal, PageLayout } from 'components';
import { registerSummeoner } from 'utils/Summeoner';
import { Button, Text } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const RegisterForm = ({ accountId }: { accountId: string }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <PageLayout>
      <Text fontSize={palette.fontSize.medium} fontWeight="700">
        전적 조회를 위해서는 사용자 등록을 해야합니다.
      </Text>
      <Button
        onClick={() => setIsRegisterModalOpen(true)}
        marginTop="50px"
        height="50px"
        colorScheme="blue"
      >
        등록
      </Button>
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        modalTitle="본인의 계정이 확실한가요?"
        modalContent={`본인의 계정이 아닌 다른 사람의 계정을 \n등록하지 않도록 주의해주세요.`}
        mode="등록"
        colorScheme="main"
        success={() => registerSummeoner(accountId)}
      />
    </PageLayout>
  );
};

export default RegisterForm;
