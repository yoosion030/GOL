import { Flex, Text } from '@chakra-ui/react';

const RankHeader = () => {
  return (
    <Flex
      height="45px"
      position="sticky"
      top="0"
      alignItems="center"
      backgroundColor="rgba(226, 232, 240, 0.7);"
      justifyContent="space-between"
      fontSize="12px"
      fontWeight="700"
      color="#666666"
      borderRadius="10px"
      backdropFilter=" blur(10px)"
      padding="0 1vh"
    >
      <Text width="10%" textAlign="center">
        순위
      </Text>
      <Text width="60%">사용자</Text>
      <Text width="60px">연승</Text>
    </Flex>
  );
};

export default RankHeader;
