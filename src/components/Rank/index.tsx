import { useState } from 'react';
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
import { useGetSummeonerByUser, useGetRankByCategory } from 'hooks';

const Rank = () => {
  const [category, setCategory] = useState<RankCategoryType>({
    category: 'TIER_RANKED_SOLO_5x5',
    label: '솔로랭크',
  });

  const { data, isLoading } = useGetRankByCategory(category.category);

  const { data: summonerData } = useGetSummeonerByUser();

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
                  <RankItem
                    data={rank}
                    key={rank.summonerResDto.accountId}
                    userName={summonerData && summonerData[0].userDto?.name}
                  />
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
