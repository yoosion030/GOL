import { Modal } from 'components';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { formatProfileImage } from 'utils/format';
import { css } from '@emotion/react';
import { SummeonerType } from 'types/Summoner';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';
import { useDeleteSummeoner, useMobileMediaQuery } from 'hooks';

const UserInfo = ({ data }: { data: SummeonerType }) => {
  const { mutate } = useDeleteSummeoner();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isMobile] = useMobileMediaQuery();

  return (
    <Flex
      alignItems="center"
      height="4.25rem"
      justifyContent="space-between"
      marginBottom="1.875rem"
    >
      <Image
        src={formatProfileImage(data?.profileIconId)}
        width={isMobile ? '35' : '50'}
        height={isMobile ? '35' : '50'}
        css={css`
          border-radius: 50%;
          margin-right: 0.625rem;
        `}
        alt=""
        placeholder="blur"
        blurDataURL="/static/ProfileBlur.png"
      />
      <Flex
        flexDir="column"
        justifyContent="space-between"
        flex="1"
        fontWeight="500"
        height={isMobile ? '35px' : '42px'}
        fontSize="0.875rem"
      >
        <Link href={`info/${data.name}`}>
          <Text>{data?.name}</Text>
        </Link>
        <Text color={palette.color.main}>Lv. {data.summonerLevel}</Text>
      </Flex>
      <Button
        onClick={() => setIsDeleteModalOpen(true)}
        color={palette.color.gray}
        background="none"
        fontSize="0.875rem"
      >
        등록 해제
      </Button>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        modalTitle="정말 등록을 해제할까요?"
        modalContent={`등록 해제 시 모든 기록이 삭제됩니다. \n정말로 등록 해제를 진행하시겠습니까? \n이 작업은 되돌릴 수 없습니다.`}
        mode="해제"
        colorScheme="red"
        success={() => mutate(data?.accountId)}
      />
    </Flex>
  );
};

export default UserInfo;
