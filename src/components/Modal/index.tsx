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
  success: () => void;
}

const ModalContainer = ({
  isOpen,
  onClose,
  modalTitle,
  modalContent,
  mode,
  colorScheme,
  success,
}: ModalPropsType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.24)" />
      <ModalContent
        display="flex"
        width="25rem"
        height="16.25rem"
        backgroundColor={palette.color.white}
        borderRadius="2rem"
        padding="2.5rem 2.5rem 1.875rem"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text fontSize={palette.fontSize.medium} fontWeight="700">
          {modalTitle}
        </Text>
        <Text
          color={palette.color.gray}
          fontSize={palette.fontSize.smallTitle}
          lineHeight="1.5rem"
          whiteSpace="pre-wrap"
        >
          {modalContent}
        </Text>
        <Flex justifyContent="space-between" height="25%">
          <Button
            width="45%"
            height="100%"
            fontSize={palette.fontSize.smallTitle}
            color={palette.color[colorScheme]}
            onClick={onClose}
            borderRadius="0.625rem"
          >
            취소
          </Button>
          <Button
            width="45%"
            height="100%"
            fontSize={palette.fontSize.smallTitle}
            color={palette.color.white}
            backgroundColor={palette.color[colorScheme]}
            borderRadius="0.625rem"
            colorScheme={colorScheme === 'main' ? 'blue' : colorScheme}
            onClick={success}
          >
            {mode}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
