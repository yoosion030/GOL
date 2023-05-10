import { Flex } from '@chakra-ui/react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      flexDir="column"
      padding="50px 2vh 100px"
      flex="1"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
};

export default PageLayout;
