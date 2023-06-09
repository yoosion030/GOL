import Image from 'next/image';
import { css } from '@emotion/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import { SummonersInfo } from 'types/Info';
import { useRandomCharacter, useMobileMediaQuery } from 'hooks';
import styled from '@emotion/styled';
import { formatProfileImage } from 'utils/format';

const InfoBanner = ({ profileIconId, nickname, name }: SummonersInfo) => {
  const image = useRandomCharacter();
  const [isMobile] = useMobileMediaQuery();

  return (
    <InfoBannerContainer>
      <Image
        src={`/Character/${image}.png`}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL="/static/BannerBlur.png"
      />

      <Box
        css={css`
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.17) 0%,
            rgba(0, 0, 0, 0.48) 64.58%,
            #000000 100%,
            rgba(0, 0, 0, 0.58) 100%
          );
        `}
        height={isMobile ? '100%' : '17.5rem'}
        position="absolute"
        z-index="2"
        width="100%"
        bottom="0"
        left="0"
      />

      <Flex
        position="relative"
        zIndex="5"
        padding={isMobile ? '9rem 1.875rem 8rem' : '10rem 1.875rem 10rem'}
        justifyContent="space-between"
      >
        <Image
          src={formatProfileImage(profileIconId)}
          alt=""
          width={isMobile ? '60' : '80'}
          height={isMobile ? '60' : '80'}
          css={css`
            border-radius: 10px;
          `}
          placeholder="blur"
          blurDataURL="/static/ProfileBlur.png"
        />
        <Flex flexDir="column" width="75%" gap="10px">
          <Text
            fontSize={palette.fontSize.title}
            color={palette.color.white}
            fontWeight="700"
          >
            {nickname}
          </Text>
          <Text fontSize={palette.fontSize.content} color={palette.color.white}>
            {name}
          </Text>
        </Flex>
      </Flex>
    </InfoBannerContainer>
  );
};

export const InfoBannerContainer = styled.div`
  width: 100%;
  height: 17.5rem;
  position: relative;
  img {
    filter: brightness(80%);
  }
`;

export default InfoBanner;
