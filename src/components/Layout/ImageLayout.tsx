import { css } from '@emotion/react';
import Image from 'next/image';

const ImageLayout = ({ src }: { src: string }) => {
  return (
    <Image
      alt=""
      src={src}
      css={css`
        border-radius: 8px;
      `}
      width="22"
      height="22"
    />
  );
};

export default ImageLayout;
