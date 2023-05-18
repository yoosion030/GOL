import { Flex, Text } from '@chakra-ui/react';
import { labelType } from 'types/Rank';

const RankHeader = ({ label }: { label: labelType }) => {
  return (
    <Flex
      height="45px"
      position="sticky"
      top="0"
      alignItems="center"
      backgroundColor="rgba(226, 232, 240, 0.7);"
      fontSize="12px"
      fontWeight="700"
      color="#666666"
      borderRadius="10px"
      backdropFilter=" blur(10px)"
      padding="0 1vh"
    >
      <Text width="10%" textAlign="center" marginRight="15px">
        순위
      </Text>
      <Text>사용자</Text>
      <Text width="60px" marginLeft="auto" textAlign="center">
        {label}
      </Text>
    </Flex>
  );
};

export default RankHeader;
