import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from 'components';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
