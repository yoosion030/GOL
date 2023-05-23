import { Flex } from '@chakra-ui/react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Flex flexDir="column" padding="3.125rem 1.375rem 6.25rem" flex="1">
      {children}
    </Flex>
  );
};

export default PageLayout;
