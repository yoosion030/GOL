import { Box } from '@chakra-ui/react';
import useMobileMediaQuery from 'hooks/useMobileMediaQuery';

const Slide = () => {
  const [isMobile] = useMobileMediaQuery();
  return (
    <Box
      width={isMobile ? '350px' : '100%'}
      backgroundColor="red"
      height={isMobile ? '430px' : '500px'}
      margin="0 auto"
      borderRadius="24px"
      boxShadow={'1px 2px 10px 1px rgba(0, 0, 0, 0.25)'}
      padding="48px 28px 20px"
    >
      asdf
    </Box>
  );
};

export default Slide;
