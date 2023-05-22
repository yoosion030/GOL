import { Modal } from 'components';
import { Button, Flex, Text } from '@chakra-ui/react';
import { deleteSummeoner } from 'utils/summeoner';
import { useState } from 'react';
import Image from 'next/image';
import { formatProfileImage } from 'utils';
import { css } from '@emotion/react';
import { SummeonerType } from 'types/Summoner';

const UserInfo = ({ data }: { data: SummeonerType }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <Flex alignItems="center">
      <Image
        src={formatProfileImage(data?.profileIconId)}
        width="50"
        height="50"
        css={css`
          border-radius: 50%;
        `}
        alt=""
      />
      <Text>{data?.name}</Text>
      <Button
        onClick={() => setIsDeleteModalOpen(true)}
        colorScheme="red"
        width="250px"
      >
        등록 해제하기
      </Button>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        modalTitle="정말 등록을 해제할까요?"
        modalContent={`등록 해제 시 모든 기록이 삭제됩니다. \n정말로 등록 해제를 진행하시겠습니까? \n이 작업은 되돌릴 수 없습니다.`}
        mode="해제"
        colorScheme="red"
        success={() => deleteSummeoner(data?.accountId)}
      />
    </Flex>
  );
};

export default UserInfo;
