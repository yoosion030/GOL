import type { NextPage } from 'next';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      hello
    </div>
  );
};

export default Home;
