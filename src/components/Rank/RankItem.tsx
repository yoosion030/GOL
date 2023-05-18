import { Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useMobileMediaQuery } from 'hooks';
import Image from 'next/image';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';
import { RankType } from 'types/Rank';
import { formatNameNumber, formatRank } from 'utils';

const RankItem = ({
  data: { rankType, rankValue, rankingNumber, summonerResDto },
}: {
  data: RankType;
}) => {
  const [isMobile] = useMobileMediaQuery();
  const { userDto } = summonerResDto;

  const name = formatNameNumber(
    userDto.grade,
    userDto.classNum,
    userDto.num,
    userDto.name,
  );

  const rank = formatRank(rankType, rankValue);
  console.log(rank);
  return (
    <Flex width="100%" alignItems="center" height="6.7vh" padding="0 1vh">
      <Text
        fontSize={
          isMobile ? palette.fontSize.smallTitle : palette.fontSize.medium
        }
        color={palette.color.main}
        width="10%"
        textAlign="center"
        marginRight="15px"
      >
        {rankingNumber}
      </Text>

      <Flex height="4.5vh" gap="20px" alignItems="center">
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
          <Text
            fontSize={
              isMobile ? palette.fontSize.content : palette.fontSize.smallTitle
            }
            fontWeight="700"
          >
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
        height="4.5vh"
        justifyContent="space-between"
        alignItems="flex-end"
        marginLeft="auto"
      >
        <Text
          color={palette.color.red}
          fontSize={
            isMobile ? palette.fontSize.content : palette.fontSize.smallTitle
          }
        >
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
