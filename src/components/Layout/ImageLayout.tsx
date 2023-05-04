import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Image from 'next/image';

const ImageLayout = ({ src }: { src: string }) => {
  return (
    <Box width="22px" height="22px">
      <img
        alt=""
        src={src}
        css={css`
          border-radius: 8px;
        `}
      />
    </Box>
  );
};

export default ImageLayout;
