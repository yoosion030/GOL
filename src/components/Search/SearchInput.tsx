import { Box, Flex, Input } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import { useForm } from 'react-hook-form';
import * as I from 'assets';
import { useRouter } from 'next/router';
import { useMobileMediaQuery } from 'hooks';

interface SearchType {
  nickname: string;
}

const SearchInput = () => {
  const [isMobile] = useMobileMediaQuery();
  const { register, handleSubmit } = useForm<SearchType>();
  const { push } = useRouter();

  const handleSearch = ({ nickname }: SearchType) => {
    push(`info/${nickname}`);
  };

  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      width="100%"
      position="absolute"
      top="70%"
      padding="0 2.188rem"
      as="form"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Input
        margin="0 auto"
        placeholder="소환사 명을 입력해주세요."
        width="26.938rem"
        height={isMobile ? '3.5rem' : '3.125rem'}
        fontSize={palette.fontSize.content}
        variant="unstyled"
        borderRadius="3rem"
        background="rgba(255, 255, 255, 0.5)"
        backdropFilter="blur(4px)"
        padding="0 2.625rem"
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
        right="15%"
        cursor="pointer"
        as="button"
      >
        <I.SearchIcon />
      </Box>
    </Flex>
  );
};

export default SearchInput;
