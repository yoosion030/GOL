import { Flex } from '@chakra-ui/react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir="column" padding="50px 35px 0" minHeight="100vh">
      {children}
    </Flex>
  );
};

export default PageLayout;
