import { Input } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const SearchInput = () => {
  return (
    <Input
      placeholder="소환사 명을 입력해주세요."
      width="431px"
      height="50"
      fontSize={palette.fontSize.content}
      variant="unstyled"
      borderRadius="48px"
      background="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(4px)"
    />
  );
};

export default SearchInput;
