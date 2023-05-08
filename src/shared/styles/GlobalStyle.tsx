import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { palette } from './Palette';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          font-family: 'Noto Sans KR', sans-serif;
        }

        body::-webkit-scrollbar {
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
