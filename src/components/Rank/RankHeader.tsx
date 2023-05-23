import { Flex, Text } from '@chakra-ui/react';
import { labelType } from 'types/Rank';

interface RankHeaderProps {
  label: labelType;
}

const RankHeader = ({ label }: RankHeaderProps) => {
  return (
    <Flex
      height="2.813rem"
      position="sticky"
      top="0"
      alignItems="center"
      backgroundColor="rgba(226, 232, 240, 0.7);"
      fontSize="0.75rem"
      fontWeight="700"
      color="#666666"
      borderRadius="0.625rem"
      backdropFilter=" blur(10px)"
      padding="0 0.75rem"
    >
      <Text width="10%" textAlign="center" marginRight="0.938rem">
        순위
      </Text>
      <Text>사용자</Text>
      <Text width="3.75rem" marginLeft="auto" textAlign="center">
        {label}
      </Text>
    </Flex>
  );
};

export default RankHeader;
