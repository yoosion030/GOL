import Image from 'next/image';
import { css } from '@emotion/react';
import { useMobileMediaQuery } from 'hooks';

interface ItemImageProps {
  src: string;
}

const ItemImage = ({ src }: ItemImageProps) => {
  const [isMobile] = useMobileMediaQuery();

  return (
    <Image
      alt=""
      src={src}
      css={css`
        border-radius: 0.5rem;
        background-color: black;
        object-fit: none;
      `}
      width={isMobile ? '16' : '22'}
      height={isMobile ? '16' : '22'}
      placeholder="blur"
      blurDataURL="/static/ProfileBlur.png"
    />
  );
};

export default ItemImage;
