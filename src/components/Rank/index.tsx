import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { PageLayout } from 'components';
import { palette } from 'shared/styles/Palette';
import RankItem from './RankItem';
import TitleSection from './TitleSection';

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
      <TitleSection />
      <Select>
        <option>연승</option>
        <option>연패</option>
        <option>솔로랭크</option>
        <option>자유랭크</option>
        <option>레벨</option>
        <option>플레이횟수</option>
      </Select>
      <Box overflow="scroll" height="80vh" position="relative">
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

const Select = styled.select`
  /* select 요소의 스타일 */
  height: 40px;
  background-color: rgba(20, 97, 184, 0.1);
  color: ${palette.color.main};
  font-size: ${palette.fontSize.content};
  font-weight: 800;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  width: 70px;
  margin-bottom: 20px;
`;
