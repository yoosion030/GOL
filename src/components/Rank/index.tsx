import { Box } from '@chakra-ui/react';
import {
  PageLayout,
  RankHeader,
  RankItem,
  SelectCategory,
  TitleSection,
} from 'components';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { RankCategoryType } from 'types/Rank';
import { getRankByCategory } from 'utils/rank';

const Rank = () => {
  const [category, setCategory] = useState<RankCategoryType>({
    category: 'TIER_RANKED_SOLO_5x5',
    label: '솔로랭크',
  });

  const { data } = useQuery(`getRankByCategory-${category.category}`, () =>
    getRankByCategory(category.category),
  );

  return (
    <PageLayout>
      <TitleSection mode="rank" />
      <SelectCategory onChangeCategory={setCategory} />
      <Box overflow="scroll" height="80vh" position="relative">
        <RankHeader label={category.label} />
        <Box padding="0px 0 20vh">
          {data?.map(rank => (
            <RankItem data={rank} key={rank.summonerResDto.accountId} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Rank;
