import Image from 'next/image';
import { css } from '@emotion/react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { palette } from 'shared/styles/Palette';
import { SummonersInfo } from 'types/Info';
import { useRandomCharacter, useMobileMediaQuery } from 'hooks';
import styled from '@emotion/styled';
import { formatProfileImage } from 'utils';

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
        blurDataURL={`/Character/${image}.png`}
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
        height={isMobile ? '100%' : '280px'}
        position="absolute"
        z-index="2"
        width="100%"
        bottom="0"
        left="0"
      />

      <Flex
        position="relative"
        zIndex="5"
        padding="14vh 2.7vh 0"
        justifyContent="space-between"
      >
        <Image
          src={formatProfileImage(profileIconId)}
          alt=""
          width="80"
          height="80"
          css={css`
            border-radius: 10px;
          `}
        />
        <Flex flexDir="column" width="30vh" gap="10px">
          <Text
            fontSize={
              isMobile ? palette.fontSize.mobileTitle : palette.fontSize.title
            }
            color={palette.color.white}
            fontWeight="700"
          >
            {nickname}
          </Text>
          <Text fontSize={palette.fontSize.content} color={palette.color.white}>
            {name ?? '사용자 등록 필요'}
          </Text>
        </Flex>
      </Flex>
    </InfoBannerContainer>
  );
};

export const InfoBannerContainer = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  img {
    filter: brightness(80%);
  }
`;

export default InfoBanner;
