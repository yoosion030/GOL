import * as I from 'assets';
import { Container, Text } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';

const NotFound = () => {
  return (
    <Container paddingTop="15.625rem" paddingLeft="3.4vw">
      <I.Logo />
      <Text color={palette.color.white} lineHeight="1.563rem">
        요청하신 페이지를 찾을수 없습니다. <br />
        입력한 주소가 맞는지 다시 한번 확인해 주시기를 바랍니다.
      </Text>
    </Container>
  );
};

export default NotFound;
