import { Box, Flex, Grid } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ImageLayout } from 'components';
import { palette } from 'shared/styles/Palette';

const GameHistoryItem = () => {
  return (
    <>
      <Flex
        width="100%"
        height="9vh"
        backgroundColor="#FFE8E8"
        borderBottom={`0.5px solid ${palette.color.gray}`}
      >
        <Box
          width="9px"
          height="100%"
          backgroundColor="#C25353"
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
              <img
                width="55px"
                height="55px"
                css={css`
                  border-radius: 50%;
                `}
                src="data:image/jpeg;base64,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"
              />
              <Box
                position="absolute"
                bottom="0"
                backgroundColor="#AF4444"
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
                패배
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
                12
              </Box>
            </Box>
            <Grid templateColumns="repeat(2, 2fr)" gap="2px">
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            </Grid>
          </Flex>
          <Box textAlign="center">
            1 / 2 / 7 <br /> 111 (0.1) CS
          </Box>
          <Grid templateColumns="repeat(3, 2fr)" gap="2px">
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
          </Grid>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height="100px"
        backgroundColor="#E8F7FF"
        borderBottom={`0.5px solid ${palette.color.gray}`}
      >
        <Box
          width="9px"
          height="100%"
          backgroundColor="#5653C2"
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
              <img
                width="55px"
                height="55px"
                css={css`
                  border-radius: 50%;
                `}
                src="data:image/jpeg;base64,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"
              />
              <Box
                position="absolute"
                bottom="0"
                backgroundColor="#5653C2"
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
                승리
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
                12
              </Box>
            </Box>
            <Grid templateColumns="repeat(2, 2fr)" gap="2px">
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
              <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            </Grid>
          </Flex>
          <Box textAlign="center">
            1 / 2 / 7 <br /> 111 (0.1) CS
          </Box>
          <Grid templateColumns="repeat(3, 2fr)" gap="2px">
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
            <ImageLayout src="https://opgg-static.akamaized.net/meta/images/lol/item/4633.png?image=q_auto,f_webp,w_44&v=1683110240889" />
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default GameHistoryItem;
