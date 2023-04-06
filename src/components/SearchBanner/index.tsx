import Image from 'next/image';
import { Box, Flex, Input } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import useRandomBackground from 'hooks/useRandomCharacter';
import * as I from 'assets';

const SearchBanner = () => {
  const image = useRandomBackground();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Image
        src={`/Character/${image}.png`}
        alt=""
        width="500"
        height="280"
        placeholder="blur"
        blurDataURL={`/Character/${image}.png`}
        style={{ filter: 'brightness(40%)' }}
      />
      <Box filter="none" position="absolute" zIndex="100">
        <I.Logo />
      </Box>
      <Input
        placeholder="소환사 명을 입력해주세요."
        width="431px"
        height="50px"
        fontSize={palette.fontSize.content}
        variant="unstyled"
        borderRadius="48px"
        background="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(4px)"
        position="absolute"
        zIndex="5"
        padding="0 26px"
        marginTop="130px"
        color="#000000"
        _placeholder={{ color: 'rgba(0, 0, 0, 0.5)' }}
      />
    </Flex>
  );
};

export default SearchBanner;
