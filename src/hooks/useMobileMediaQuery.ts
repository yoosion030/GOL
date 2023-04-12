import { useMediaQuery } from '@chakra-ui/react';

const useMobileMediaQuery = () => {
  return useMediaQuery('(max-width: 500px)');
};

export default useMobileMediaQuery;
