import { Flex } from '@chakra-ui/react';
import { TabBar } from 'components';
import { useRouter } from 'next/router';
import { palette } from 'shared/styles/Palette';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';
  return (
    <Flex
      flexDir="column"
      maxW="500px"
      minH="100vh"
      padding="0"
      backgroundColor={
        isLoginPage ? palette.color.main : palette.color.background
      }
      position="relative"
      margin="0 auto"
    >
      {children}
      {!isLoginPage && <TabBar />}
    </Flex>
  );
};

export default Layout;
