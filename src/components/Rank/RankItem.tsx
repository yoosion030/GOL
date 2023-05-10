import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';
import { RankItemType } from 'types/Rank';

const RankItem = ({
  nickname,
  name,
  tier,
  rank,
  index,
}: RankItemType & { index: number }) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      height="75px"
      padding="0 10px"
    >
      <Text
        fontSize={palette.fontSize.medium}
        color={palette.color.main}
        width="30px"
        textAlign="center"
      >
        {index + 1}
      </Text>

      <Flex width="60%" height="50px" gap="20px">
        <Image
          src="data:image/jpeg;base64,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"
          alt=""
          width="50"
          height="50"
          css={css`
            border-radius: 50%;
          `}
        />
        <div>
          <Text
            fontSize={palette.fontSize.smallTitle}
            fontWeight="700"
            lineHeight="24px"
          >
            {nickname}
          </Text>
          <Text
            fontSize={palette.fontSize.smallContent}
            color={palette.color.gray}
          >
            {name}
          </Text>
          <Text
            fontSize={palette.fontSize.smallContent}
            color={palette.color.main}
            marginTop="4px"
          >
            {tier}
          </Text>
        </div>
      </Flex>
      <Flex flexDir="column" height="50px" justifyContent="space-between">
        <Text color={palette.color.red} fontSize={palette.fontSize.medium}>
          {rank}
        </Text>
        <Link href={`/info/${nickname}`}>
          <Text
            fontSize={palette.fontSize.smallContent}
            color={palette.color.gray}
            textDecoration="underline"
          >
            전적 보러가기
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default RankItem;
