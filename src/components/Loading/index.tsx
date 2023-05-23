import { Flex, Text } from '@chakra-ui/react';
import { useRandomFeeling } from 'hooks';
import Image from 'next/image';

const Loading = () => {
  const image = useRandomFeeling();

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
      height="100%"
    >
      <Image
        src={`/Feeling/${image}.png`}
        alt=""
        placeholder="blur"
        blurDataURL={`/Feeling/${image}.png`}
        width="200"
        height="200"
      />
      <Text fontWeight="700">로딩중입니다...</Text>
    </Flex>
  );
};

export default Loading;
