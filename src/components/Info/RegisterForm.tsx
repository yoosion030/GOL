import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Modal, PageLayout } from 'components';
import { palette } from 'shared/styles/Palette';
import { usePostRegisterSummeoner } from 'hooks';

interface RegisterFormProps {
  accountId?: string;
}

const RegisterForm = ({ accountId }: RegisterFormProps) => {
  const { mutate } = usePostRegisterSummeoner();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <PageLayout>
      <Text fontSize={palette.fontSize.medium} fontWeight="700">
        전적 조회를 위해서는 사용자 등록을 해야합니다.
      </Text>
      <Button
        onClick={() => setIsRegisterModalOpen(true)}
        marginTop="3.125rem"
        height="3.125rem"
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
        success={() => mutate(accountId)}
      />
    </PageLayout>
  );
};

export default RegisterForm;
