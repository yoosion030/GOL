import { Flex } from '@chakra-ui/react';
import { TabBar } from 'components';
import { palette } from 'shared/styles/Palette';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      flexDir="column"
      maxW="500px"
      minH="100vh"
      padding="0"
      backgroundColor={palette.color.background}
      position="relative"
      margin="0 auto"
    >
      {children}
      <TabBar />
    </Flex>
  );
};

export default Layout;
