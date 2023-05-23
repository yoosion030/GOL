import { Flex } from '@chakra-ui/react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir="column" padding="3.125rem 1.375rem 6.25rem" flex="1">
      {children}
    </Flex>
  );
};

export default PageLayout;
