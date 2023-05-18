import { css } from '@emotion/react';
import Image from 'next/image';

const ItemImage = ({ src }: { src: string }) => {
  return (
    <Image
      alt=""
      src={src}
      css={css`
        border-radius: 8px;
        background-color: black;
        object-fit: none;
      `}
      width="22"
      height="22"
    />
  );
};

export default ItemImage;
