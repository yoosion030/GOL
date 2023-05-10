import {
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useMobileMediaQuery } from 'hooks';
import { palette } from 'shared/styles/Palette';
interface ModalPropsType {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  modalContent: string;
  mode: string;
  colorScheme: 'red' | 'main';
}

const ModalContainer = ({
  isOpen,
  onClose,
  modalTitle,
  modalContent,
  mode,
  colorScheme,
}: ModalPropsType) => {
  const [isMobile] = useMobileMediaQuery();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.24)" />
      <ModalContent
        display="flex"
        width="36vh"
        height="23vh"
        backgroundColor={palette.color.white}
        borderRadius="32px"
        padding="3.5vh 3.5vh 2.8vh"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text
          fontSize={
            isMobile ? palette.fontSize.smallTitle : palette.fontSize.medium
          }
          fontWeight="700"
        >
          {modalTitle}
        </Text>
        <Text
          color={palette.color.gray}
          fontSize={
            isMobile ? palette.fontSize.content : palette.fontSize.smallTitle
          }
          lineHeight={isMobile ? '20px' : '24px'}
          whiteSpace="pre-wrap"
        >
          {modalContent}
        </Text>
        <Flex justifyContent="space-between" height="4.5vh">
          <Button
            width="45%"
            height="100%"
            fontSize={
              isMobile ? palette.fontSize.content : palette.fontSize.smallTitle
            }
            color={palette.color[colorScheme]}
            onClick={onClose}
            borderRadius="10px"
          >
            취소
          </Button>
          <Button
            width="45%"
            height="100%"
            fontSize={
              isMobile ? palette.fontSize.content : palette.fontSize.smallTitle
            }
            color={palette.color.white}
            backgroundColor={palette.color[colorScheme]}
            borderRadius="10px"
            colorScheme={colorScheme === 'main' ? 'blue' : colorScheme}
          >
            {mode}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
