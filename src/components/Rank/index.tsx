import { Box, Select } from '@chakra-ui/react';
import { PageLayout } from 'components';
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
    {
      nickname: '롯데리아케찹도둑엄준식',
      name: '3333 엄준식',
      tier: 'sliver 3',
      rank: '13연승',
    },
  ];

  return (
    <PageLayout>
      <TitleSection />

      <Select
        marginTop="30px"
        variant="unstyled"
        placeholder="연승"
        width="60px"
        fontSize={palette.fontSize.content}
      >
        <option>연패</option>
      </Select>

      <Box overflow="scroll" height="80vh" paddingBottom="70px">
        {data.map((v, i) => (
          <RankItem {...v} key={i} index={i} />
        ))}
      </Box>
    </PageLayout>
  );
};

export default Rank;
