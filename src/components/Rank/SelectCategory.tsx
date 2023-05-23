import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { palette } from 'shared/styles/Palette';
import { CategoryType, labelType, RankCategoryType } from 'types/Rank';

const SelectCategory = ({
  onChangeCategory,
}: {
  onChangeCategory: Dispatch<SetStateAction<RankCategoryType>>;
}) => {
  return (
    <Select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value as CategoryType;

        const label = e.target.options[e.target.selectedIndex]
          .text as labelType;

        onChangeCategory({
          category,
          label,
        });
      }}
    >
      <option value="TIER_RANKED_SOLO_5x5">솔로랭크</option>
      <option value="TIER_RANKED_FLEX_SR">자유랭크</option>
      <option value="CUR_LOSE_STREAK">연패</option>
      <option value="CUR_WIN_STREAK">연승</option>
      <option value="MATCH_COUNT">플레이횟수</option>
      <option value="SUMMONER_LEVEL">레벨</option>
    </Select>
  );
};

export default SelectCategory;

const Select = styled.select`
  height: 2.5rem;
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
  font-size: 0.75rem;
  line-height: 15px;
  width: 4.375rem;
  margin-bottom: 1.25rem;
  text-align: center;
`;
