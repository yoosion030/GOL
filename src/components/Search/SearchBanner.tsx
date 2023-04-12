import Image from 'next/image';
import { Box, Flex, Input } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import useRandomBackground from 'hooks/useRandomCharacter';
import * as I from 'assets';
import SearchInput from './SearchInput';

const SearchBanner = () => {
  const image = useRandomBackground();

  return (
    <Flex justifyContent="center" alignItems="center" position="relative">
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
      <SearchInput />
    </Flex>
  );
};

export default SearchBanner;