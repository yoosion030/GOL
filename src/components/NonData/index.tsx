import { Flex, Text } from '@chakra-ui/react';
import useRandomFeeling from 'hooks/useRandomFeeling';
import Image from 'next/image';

interface NonDataProps {
  title: string;
}

const NonData = ({ title }: NonDataProps) => {
  const image = useRandomFeeling();

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="30px"
      paddingTop="40px"
    >
      <Text fontWeight="700">{title}</Text>
      <Image
        src={`/Feeling/${image}.png`}
        alt=""
        placeholder="blur"
        blurDataURL={`/Feeling/${image}.png`}
        width="200"
        height="200"
      />
    </Flex>
  );
};

export default NonData;
