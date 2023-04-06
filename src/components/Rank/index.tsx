import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';
import RankItem from './RankItem';
import TitleSection from './TitleSection';

const Rank = () => {
  const data = [
    {
      nickname: '롯데리아케찹도둑엄준식',
      name: '3333 엄준식',
      tier: 'sliver 3',
      rank: '13연승',
    },
    {
      nickname: '롯데리아케찹도둑엄준식',
      name: '3333 엄준식',
      tier: 'sliver 3',
      rank: '13연승',
    },
  ];
  return (
    <Box>
      <TitleSection />
      {data.map((v, i) => (
        <RankItem {...v} key={i} index={i} />
      ))}
    </Box>
  );
};

export default Rank;
