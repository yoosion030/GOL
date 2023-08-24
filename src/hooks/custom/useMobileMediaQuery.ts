import { useMediaQuery } from '@chakra-ui/react';

export const useMobileMediaQuery = () => {
  return useMediaQuery('(max-width: 500px)');
};
