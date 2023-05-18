import { Box } from '@chakra-ui/react';
import {
  PageLayout,
  RankHeader,
  RankItem,
  SelectCategory,
  TitleSection,
} from 'components';
import { useState } from 'react';
import { RankCategoryType, RankType } from 'types/Rank';

const Rank = () => {
  const [category, setCategory] = useState<RankCategoryType>({
    category: 'TIER_RANKED_SOLO_5x5',
    label: '솔로랭크',
  });

  const testData: RankType[] = [
    {
      rankType: 'TIER_RANKED_SOLO_5x5', // 랭킹 카테고리
      rankingNumber: 1, // 순위
      rankValue: 'RANKED_SOLO_5x5_GOLD_I_39', // 랭킹 값
      summonerResDto: {
        id: 'bca71793-ed25-49f5-b0dc-dec7699deb06',
        summonerApiId:
          '-YWoVxmeUI-MpR8YiM0UtRUcAwbYfG_ZwDjTrf5O1hR5re84DZ5u9uAxBA',
        accountId: 'eXGT3kV7bOxG3j0_kfl8WY7l9_sAJp18e-fe9ZzrsIFtcznkqeV9uiuv',
        puuid:
          'pX1roodpuAb1soUN394FlIpYxPmXJyrsdWUYhQEEpM9SjT5sW-pKWhVXW09_3BusJyxAUQy7Z2n7-A',
        name: 'Faker',
        profileIconId: 6,
        revisionDate: 1683082584000,
        summonerLevel: 45,
        isRegistered: true,
        userDto: {
          id: '1231eb33-964c-49a0-9141-e46aa0d2bec9',
          email: 'Dummy2',
          name: 'Dummy2',
          grade: 2,
          classNum: 2,
          num: 22,
          gender: 'Dummy2',
          profileUrl: 'Dummy2',
          gAuthRole: 'Dummy2',
          role: 'ROLE_USER',
        },
      },
    },
    {
      rankType: 'TIER_RANKED_SOLO_5x5',
      rankingNumber: 2,
      rankValue: 'RANKED_SOLO_5x5_GOLD_II_54',
      summonerResDto: {
        id: 'e31fc116-15da-49c9-a0ee-b7085f7f9145',
        summonerApiId: 'DIiLDPb8BjQewHIbqm1adVUIAObCRiA-wHgAU7mKaGjRNgI',
        accountId: 'Pkh25cyxBN_6RQF3qD9WZZ1azpFJj-cqWtsqpYEVe2zMz_g',
        puuid:
          'JRv9GZ1NllHPUY1DXqQZ66yWwbDNIdi8UDeOtW-4pFxPQMhr17Vc5x1yrhWFehSvyeP2sU3rWiSO2g',
        name: '메추리 알빠노',
        profileIconId: 5389,
        revisionDate: 1683041620434,
        summonerLevel: 2448,
        isRegistered: true,
        userDto: {
          id: '0823973e-1abc-4411-87a1-20bbec605086',
          email: 'Dummy1',
          name: '유시온',
          grade: 1,
          classNum: 1,
          num: 11,
          gender: 'Dummy1',
          profileUrl: 'Dummy1',
          gAuthRole: 'Dummy1',
          role: 'ROLE_USER',
        },
      },
    },
  ];
  console.log(category);
  return (
    <PageLayout>
      <TitleSection mode="rank" />
      <SelectCategory onChangeCategory={setCategory} />
      <Box overflow="scroll" height="80vh" position="relative">
        <RankHeader label={category.label} />
        <Box padding="0px 0 20vh">
          {testData.map(data => (
            <RankItem data={data} key={data.summonerResDto.accountId} />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Rank;
