import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const ModalContainer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.24)" />
      <ModalContent
        display="flex"
        width="36vh"
        height="23vh"
        backgroundColor="#ffffff"
        borderRadius="32px"
        padding="3.5vh 3.5vh 2.8vh"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text fontSize={palette.fontSize.medium} fontWeight="700">
          본인의 계정이 확실한가요?
        </Text>
        <Text
          color={palette.color.gray}
          fontSize={palette.fontSize.smallTitle}
          lineHeight="25px"
        >
          본인의 계정이 아닌 다른 사람의 계정을 <br /> 등록하지 않도록
          주의해주세요.
        </Text>
        <Flex justifyContent="space-between" height="4.5vh">
          <Button
            width="45%"
            height="100%"
            fontSize={palette.fontSize.smallTitle}
            color={palette.color.main}
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            width="45%"
            height="100%"
            fontSize={palette.fontSize.smallTitle}
            color="#ffffff"
            backgroundColor={palette.color.main}
          >
            등록
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
