import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';

const today = new Date();

const TitleSection = () => {
  return (
    <Flex flexDir="column">
      <Text
        fontSize={palette.fontSize.title}
        fontWeight="700"
        lineHeight="40px"
      >
        GSM 랭크
      </Text>
      <Text fontSize={palette.fontSize.content} marginBottom="20px">
        순위가 계속 변동되고 있어요 🔥
      </Text>

      <GrayText>
        {today.getMonth() + 1}월 {today.getDate()}일 기준
      </GrayText>
      <Link href="/">
        <GrayText>사용자 등록하러 가기 &gt;</GrayText>
      </Link>
    </Flex>
  );
};

const GrayText = ({ children }: { children: any }) => (
  <Text
    fontSize={palette.fontSize.content}
    color={palette.color.gray}
    lineHeight="15px"
  >
    {children}
  </Text>
);

export default TitleSection;
