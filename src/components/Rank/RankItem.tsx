import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { Flex, Text } from '@chakra-ui/react';
import { useMobileMediaQuery } from 'hooks';
import { palette } from 'shared/styles/Palette';
import { RankType } from 'types/Rank';
import { formatNameNumber, formatRank } from 'utils/format';

interface RankItemProps {
  data: RankType;
  userName?: string;
}

const RankItem = ({
  data: { rankType, rankValue, rankingNumber, summonerResDto },
  userName,
}: RankItemProps) => {
  const [isMobile] = useMobileMediaQuery();
  const { userDto } = summonerResDto;

  const name = formatNameNumber(
    userDto.grade,
    userDto.classNum,
    userDto.num,
    userDto.name,
  );

  const rank = formatRank(rankType, rankValue);

  return (
    <Flex
      width="100%"
      alignItems="center"
      height="4.688rem"
      padding="0 0.75rem"
      css={
        userName === userDto.name &&
        css`
          background-color: #e3f0ff;
        `
      }
      borderRadius="1rem"
      marginTop="0.5rem"
    >
      <Text
        fontSize={palette.fontSize.medium}
        color={palette.color.main}
        width="10%"
        textAlign="center"
        marginRight="15px"
      >
        {rankingNumber}
      </Text>

      <Flex height="3.125rem" gap="20px" alignItems="center">
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${summonerResDto.profileIconId}.png`}
          alt=""
          width={isMobile ? '40' : '50'}
          height={isMobile ? '40' : '50'}
          css={css`
            border-radius: 50%;
          `}
        />
        <Flex flexDir="column" justifyContent="space-between" height="100%">
          <Text fontSize={palette.fontSize.smallTitle} fontWeight="700">
            {summonerResDto.name}
          </Text>
          <Text
            fontSize={palette.fontSize.smallContent}
            color={palette.color.gray}
          >
            {name}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        height="3.125rem"
        justifyContent="space-between"
        alignItems="flex-end"
        marginLeft="auto"
      >
        <Text color={palette.color.red} fontSize={palette.fontSize.smallTitle}>
          {rank}
        </Text>
        <Link href={`/info/${summonerResDto.name}`}>
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
