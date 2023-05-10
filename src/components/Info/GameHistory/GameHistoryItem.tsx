import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { ItemImage } from 'components';
import { palette } from 'shared/styles/Palette';
import { Content } from 'types/Match';

const GameHistoryItem = ({ data }: { data: Content }) => {
  const KDA = (data.kills + data.assists / data.deaths).toFixed(1);
  return (
    <>
      <Flex
        width="100%"
        height="9vh"
        backgroundColor={data.win ? '#E8F7FF' : '#FFE8E8'}
        borderBottom={`0.5px solid ${palette.color.gray}`}
      >
        <Box
          width="9px"
          height="100%"
          backgroundColor={data.win ? '#5653C2' : '#C25353'}
          borderRadius="0 10px 10px 0 "
        />
        <Flex
          padding=" 0 33px"
          flex="1"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex gap="7px" alignItems="center">
            <Box position="relative">
              <Image
                width="55"
                height="55"
                css={css`
                  border-radius: 50%;
                `}
                src={data.championProfileUri}
                alt=""
              />
              <Box
                position="absolute"
                bottom="-10px"
                backgroundColor={data.win ? '#5653C2' : '#AF4444'}
                fontSize="1px"
                color={palette.color.white}
                width="40px"
                height="20px"
                textAlign="center"
                lineHeight="20px"
                fontWeight="700"
                borderRadius="109px"
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
                fontSize="1px"
                color={palette.color.white}
                width="20px"
                height="20px"
                textAlign="center"
                lineHeight="20px"
                fontWeight="700"
                borderRadius="50%"
                top="34.46px"
                left="40.62px"
              >
                {data.champLevel}
              </Box>
            </Box>
            <Grid templateColumns="repeat(2, 2fr)" gap="2px">
              <ItemImage src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ItemImage src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ItemImage src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ItemImage src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            </Grid>
          </Flex>
          <Box textAlign="center">
            {data.kills} / {data.deaths} / {data.assists} <br /> 111 ({KDA}) CS
          </Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="2px"
            // gridTemplateRows="repeat(2, 1fr)"
          >
            <ItemImage src={data.item0Uri} />
            <ItemImage src={data.item1Uri} />
            <ItemImage src={data.item2Uri} />
            <GridItem
              css={css`
                grid-column-start: 4;
                grid-row: 1 / span 2;
              `}
              colSpan={1}
              display="flex"
              alignItems="center"
            >
              <ItemImage src={data.item6Uri} />
            </GridItem>
            <ItemImage src={data.item3Uri} />
            <ItemImage src={data.item4Uri} />
            <GridItem>
              <ItemImage src={data.item5Uri} />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default GameHistoryItem;
