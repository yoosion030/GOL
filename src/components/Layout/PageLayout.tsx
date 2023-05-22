import { Flex } from '@chakra-ui/react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir="column" padding="50px 1.375rem 100px" flex="1">
      {children}
    </Flex>
  );
};

export default PageLayout;
