import styled from '@emotion/styled';
import { palette } from 'shared/styles/Palette';

const SelectCategory = () => {
  return (
    <Select>
      <option>연승</option>
      <option>연패</option>
      <option>솔로랭크</option>
      <option>자유랭크</option>
      <option>레벨</option>
      <option>플레이횟수</option>
    </Select>
  );
};

export default SelectCategory;

const Select = styled.select`
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
