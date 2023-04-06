import { Box, Flex, Input } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import { useForm } from 'react-hook-form';
import * as I from 'assets';
import { useRouter } from 'next/router';

interface SearchType {
  nickname: string;
}

const SearchInput = () => {
  const { register, handleSubmit } = useForm<SearchType>();
  const { push } = useRouter();

  const handleSearch = ({ nickname }: SearchType) => {
    push(`summoners/${nickname}`);
  };

  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      width="100%"
      position="absolute"
      top="180px"
      padding="0 35px"
      as="form"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Input
        placeholder="소환사 명을 입력해주세요."
        width="431px"
        height="50px"
        fontSize={palette.fontSize.content}
        variant="unstyled"
        borderRadius="48px"
        background="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(4px)"
        padding="0 26px"
        color="#000000"
        _placeholder={{ color: 'rgba(0, 0, 0, 0.5)' }}
        {...register('nickname', {
          required: true,
          maxLength: 16,
          minLength: 3,
        })}
        maxLength={16}
        _focus={{ background: 'rgba(255, 255, 255, 0.7)' }}
      />
      <Box
        position="absolute"
        fill="rgba(255, 255, 255, 0.6)"
        zIndex="5"
        marginRight="26px"
        cursor="pointer"
        as="button"
      >
        <I.SearchIcon />
      </Box>
    </Flex>
  );
};

export default SearchInput;
