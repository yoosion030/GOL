import { Box } from '@chakra-ui/react';
import { useMobileMediaQuery } from 'hooks';

const Slide = () => {
  const [isMobile] = useMobileMediaQuery();
  return (
    <Box
      width={isMobile ? '350px' : '100%'}
      backgroundColor="red"
      height={isMobile ? '430px' : '500px'}
      margin="0 auto"
      borderRadius="1.5rem"
      boxShadow={'1px 2px 10px 1px rgba(0, 0, 0, 0.25)'}
      padding="3rem 1.75rem 1.25rem"
    >
      asdf
    </Box>
  );
};

export default Slide;
