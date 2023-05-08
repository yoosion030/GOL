import * as I from 'assets';
import { Container, Text } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const NotFound = () => {
  return (
    <Container paddingTop="250px" paddingLeft="3.4vw">
      <I.Logo />
      <Text color={palette.color.white} lineHeight="25px">
        요청하신 페이지를 찾을수 없습니다. <br />
        입력한 주소가 맞는지 다시 한번 확인해 주시기를 바랍니다.
      </Text>
    </Container>
  );
};

export default NotFound;
