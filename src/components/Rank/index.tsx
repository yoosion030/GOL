import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';
import {
  PageLayout,
  RankHeader,
  RankItem,
  SelectCategory,
  TitleSection,
  NonData,
  Loading,
} from 'components';
import { RankCategoryType } from 'types/Rank';
import { getRankByCategory } from 'utils/rank';

const Rank = () => {
  const [category, setCategory] = useState<RankCategoryType>({
    category: 'TIER_RANKED_SOLO_5x5',
    label: '솔로랭크',
  });

  const { data, isLoading } = useQuery(
    `getRankByCategory-${category.category}`,
    () => getRankByCategory(category.category),
  );

  return (
    <PageLayout>
      <TitleSection mode="rank" />
      <SelectCategory onChangeCategory={setCategory} />
      <Box overflow="scroll" height="55.5rem" position="relative">
        <RankHeader label={category.label} />

        <Box
          paddingBottom="8rem"
          paddingTop={`${isLoading || data?.length === 0 ? '6.25rem' : 0}`}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data?.length === 0 ? (
                <NonData title="랭킹 정보가 없습니다." />
              ) : (
                data?.map(rank => (
                  <RankItem data={rank} key={rank.summonerResDto.accountId} />
                ))
              )}
            </>
          )}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Rank;
