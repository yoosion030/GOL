import { Modal } from 'components';
import { Button, Flex, Text } from '@chakra-ui/react';
import { deleteSummeoner } from 'utils/summeoner';
import { useState } from 'react';
import Image from 'next/image';
import { formatProfileImage } from 'utils';
import { css } from '@emotion/react';
import { SummeonerType } from 'types/Summoner';
import Link from 'next/link';

const UserInfo = ({ data }: { data: SummeonerType }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <Flex alignItems="center" height="4.375rem" justifyContent="space-between">
      <Image
        src={formatProfileImage(data?.profileIconId)}
        width="50"
        height="50"
        css={css`
          border-radius: 50%;
          margin-right: 0.625rem;
        `}
        alt=""
      />
      <Text flex="1" fontWeight="500">
        <Link href={`info/${data.name}`}>{data?.name}</Link>
      </Text>
      <Button
        onClick={() => setIsDeleteModalOpen(true)}
        width="6.25rem"
        fontSize="0.8rem"
        height="2.5rem"
        colorScheme="red"
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
