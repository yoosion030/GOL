import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as I from 'assets';
import { Box, Flex } from '@chakra-ui/react';

const Banner = () => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const characterBackground = [
      'Aatrox',
      'Gwen',
      'Hecarim',
      'Jin',
      'Karen',
      'Yummi',
    ];

    const randomIndex = Math.floor(Math.random() * characterBackground.length);
    setImage(characterBackground[randomIndex]);
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center">
      <Image
        src={`/Character/${image}.png`}
        alt=""
        width="500"
        height="280"
        placeholder="blur"
        blurDataURL="/Character/${image}.png"
        style={{ filter: 'brightness(40%)' }}
      />
      <Box filter="none" position="absolute" zIndex="100">
        <I.Logo />
      </Box>
    </Flex>
  );
};

export default Banner;
