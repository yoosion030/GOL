import { Container } from '@chakra-ui/react';
import { TabBar } from 'components';
import { palette } from 'shared/styles/Palette';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxW="500px"
      minH="100vh"
      padding="0"
      backgroundColor={palette.color.background}
      position="relative"
    >
      {children}
      <TabBar />
    </Container>
  );
};

export default Layout;
