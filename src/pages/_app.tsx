import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from 'components';
import { GlobalStyle } from 'shared/styles/GlobalStyle';

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
