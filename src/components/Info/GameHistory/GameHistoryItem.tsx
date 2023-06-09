import Image from 'next/image';
import { css } from '@emotion/react';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { ItemImage } from 'components';
import { palette } from 'shared/styles/Palette';
import { Content } from 'types/Match';
import {
  formatGameMode,
  formatItemImage,
  formatRuneImage,
  formatSpellImage,
} from 'utils/format';
import { useMobileMediaQuery } from 'hooks';

interface GameHistoryItemProps {
  data: Content;
}

const GameHistoryItem = ({ data }: GameHistoryItemProps) => {
  const [isMobile] = useMobileMediaQuery();
  const KDA = ((data.kills + data.assists) / data.deaths).toFixed(1);

  return (
    <>
      <Flex
        width="100%"
        height="6.250rem"
        backgroundColor={data.win ? '#E8F7FF' : '#FFE8E8'}
        borderBottom={`0.5px solid ${palette.color.gray}`}
      >
        <Box
          width="0.625rem"
          height="100%"
          backgroundColor={data.win ? '#5653C2' : '#C25353'}
          borderRadius="0 0.625rem 0.625rem 0 "
        />
        <Flex
          padding=" 0 2.063rem"
          flex="1"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex gap="0.438rem" alignItems="center">
            <Box position="relative">
              <Image
                width={isMobile ? '45' : '55'}
                height={isMobile ? '45' : '55'}
                css={css`
                  border-radius: 50%;
                `}
                src={data.championProfileUri}
                alt=""
                placeholder="blur"
                blurDataURL="/static/ProfileBlur.png"
              />
              <Box
                position="absolute"
                bottom="-0.5rem"
                backgroundColor={data.win ? '#5653C2' : '#AF4444'}
                fontSize="0.5rem"
                color={palette.color.white}
                width="2.5rem"
                height="1.25rem"
                textAlign="center"
                lineHeight="1.25rem"
                fontWeight="700"
                borderRadius="6.25rem"
                zIndex="5"
                css={css`
                  left: 50%;
                  transform: translateX(-50%);
                `}
              >
                {data.win ? '승리' : '패배'}
              </Box>
              <Box
                position="absolute"
                bottom="0"
                backgroundColor="#000000"
                fontSize="0.5rem"
                color={palette.color.white}
                width="1.25rem"
                height="1.25rem"
                textAlign="center"
                lineHeight="1.25rem"
                fontWeight="700"
                borderRadius="50%"
                top="2.154rem"
                left="2.5rem"
              >
                {data.champLevel}
              </Box>
            </Box>
            <Grid templateColumns="repeat(2, 2fr)" gap="2px">
              <ItemImage src={formatSpellImage(data.summoner1Id.toString())} />
              <ItemImage src={formatRuneImage(data.primaryStyle)} />
              <ItemImage src={formatSpellImage(data.summoner2Id.toString())} />
              <ItemImage src={formatRuneImage(data.subStyle)} />
            </Grid>
          </Flex>
          <Box textAlign="center" lineHeight="1.3" fontWeight="700">
            {data.kills} /{' '}
            <Text color={palette.color.red} display="inline">
              {data.deaths}
            </Text>{' '}
            / {data.assists}
            <br />({KDA})
            <br />{' '}
            <Text fontWeight="400" fontSize="0.8rem">
              {formatGameMode(data.queueId)}
            </Text>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap="2px">
            <ItemImage src={formatItemImage(data.item0)} />
            <ItemImage src={formatItemImage(data.item1)} />
            <ItemImage src={formatItemImage(data.item2)} />
            <GridItem
              css={css`
                grid-column-start: 4;
                grid-row: 1 / span 2;
              `}
              colSpan={1}
              display="flex"
              alignItems="center"
            >
              <ItemImage src={formatItemImage(data.item6)} />
            </GridItem>
            <ItemImage src={formatItemImage(data.item3)} />
            <ItemImage src={formatItemImage(data.item4)} />
            <GridItem>
              <ItemImage src={formatItemImage(data.item5)} />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default GameHistoryItem;
