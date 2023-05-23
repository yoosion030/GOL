import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import { useRandomCharacter } from 'hooks';
import * as I from 'assets';
import { SearchInput } from 'components';
import { css } from '@emotion/react';

const SearchBanner = () => {
  const image = useRandomCharacter();

  return (
    <Flex justifyContent="center" alignItems="center" position="relative">
      <Image
        src={`/Character/${image}.png`}
        alt=""
        width="500"
        height="280"
        placeholder="blur"
        blurDataURL={`/Character/${image}.png`}
        css={css`
          filter: brightness(40%);
        `}
      />
      <Box filter="none" position="absolute" zIndex="100">
        <I.Logo />
      </Box>
      <SearchInput />
    </Flex>
  );
};

export default SearchBanner;
