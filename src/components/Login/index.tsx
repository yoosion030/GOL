import { Button, Flex, Text } from '@chakra-ui/react';
import * as I from 'assets';
import Link from 'next/link';
import { palette } from 'shared/styles/Palette';

const Login = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      color={palette.color.white}
      width="80%"
      justifyContent="center"
      height="70vh"
      margin="0 auto"
    >
      <I.Logo />
      <Text
        fontSize={palette.fontSize.medium}
        fontWeight="700"
        marginBottom="20px"
      >
        랭킹의 모든 것, 지오엘
      </Text>
      <Text align="center" lineHeight="25px" marginBottom="100px">
        GSM의 리그오브레전드 <br />
        랭킹 서비스
      </Text>
      <Button
        boxShadow="1px 2px 10px 1px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        width="100%"
        height="60px"
        color={palette.color.main}
      >
        <Link href="https://gauth.co.kr/login?client_id=e5502aa30a504963a3327e84b916e1bff3eafe1987834bfd9806a01bf8c2a8cd&redirect_uri=http://localhost:3000/gauth/code">
          Sign in with GAuth
        </Link>
      </Button>
    </Flex>
  );
};

export default Login;
