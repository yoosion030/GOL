import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { useMobileMediaQuery } from 'hooks';

export function GlobalStyle() {
  const [isMobile] = useMobileMediaQuery();
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          font-size: ${isMobile ? '12px' : '16px'};
        }

        body {
          font-family: 'Noto Sans KR', sans-serif;
        }

        *::-webkit-scrollbar {
          -ms-overflow-style: none;
          display: none;
          scrollbar-width: none; /* Firefox */
        }

        a {
          text-decoration: none;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        button,
        input {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
