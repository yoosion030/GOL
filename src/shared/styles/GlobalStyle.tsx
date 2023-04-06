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

        a {
          text-decoration: none;
        }

        body::-webkit-scrollbar {
          width: 12px;
        }

        body::-webkit-scrollbar-thumb {
          background-color: ${palette.color.gray};
          border-radius: 10px;
          height: 56px;
          background-clip: content-box;
        }

        body::-webkit-scrollbar-thumb:hover {
          background-color: #cbcbcb;
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
