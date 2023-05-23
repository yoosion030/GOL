import { Flex } from '@chakra-ui/react';
import { TabBar } from 'components';
import { useRouter } from 'next/router';
import { palette } from 'shared/styles/Palette';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isTabBarNeeded = ['/gauth', '/gauth/code'].includes(router.pathname);
  const isReverseBackgroundColor = ['/gauth', '/404'].includes(router.pathname);

  return (
    <Flex
      flexDir="column"
      maxW="500px"
      height="100vh"
      padding="0"
      backgroundColor={
        isReverseBackgroundColor ? palette.color.main : palette.color.background
      }
      overflow="hidden"
      position="relative"
      margin="0 auto"
    >
      {children}
      {!isTabBarNeeded && <TabBar />}
    </Flex>
  );
};

export default Layout;
