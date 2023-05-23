import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';

const today = new Date();

interface TitleSectionProps {
  name?: string;
  mode: 'user' | 'rank';
}

const TitleSection = ({ name = '', mode }: TitleSectionProps) => {
  return (
    <Flex flexDir="column" marginBottom="40px">
      <Text fontSize={palette.fontSize.title} fontWeight="700">
        {mode === 'rank' ? 'GSM 랭크' : `${name}님의 소환사 정보입니다!`}
      </Text>
      <Text fontSize={palette.fontSize.content} lineHeight="40px">
        {name && `${name}님의`} 순위가 계속 변동되고 있어요 🔥
      </Text>

      <GrayText>
        {today.getMonth() + 1}월 {today.getDate()}일 기준
      </GrayText>
      <Link href={mode === 'rank' ? '/' : '/rank'}>
        <GrayText>
          {mode === 'rank' ? '사용자 등록하러 가기' : '랭킹 보러 가기'} &gt;
        </GrayText>
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
