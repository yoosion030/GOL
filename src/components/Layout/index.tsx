import { Container } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxW="500px"
      minH="100vh"
      padding="0"
      backgroundColor={palette.color.background}
    >
      {children}
    </Container>
  );
};

export default Layout;
