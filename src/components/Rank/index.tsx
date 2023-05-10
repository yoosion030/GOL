import { Box } from '@chakra-ui/react';
import {
  PageLayout,
  RankHeader,
  RankItem,
  SelectCategory,
  TitleSection,
} from 'components';

const Rank = () => {
  const data = [
    {
      nickname: '일이삼사오육칠팔구십일이삼사오육',
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
      <TitleSection mode="rank" />
      <SelectCategory />
      <Box overflow="scroll" height="80vh" position="relative">
        <RankHeader />
        <Box padding="0px 0 20vh">
          {data.map((v, i) => (
            <RankItem {...v} key={i} index={i} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Rank;
