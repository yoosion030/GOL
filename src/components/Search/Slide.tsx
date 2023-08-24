import { Box, Flex, Text } from '@chakra-ui/react';
import {
  useGetRankByCategory,
  useMobileMediaQuery,
  useRandomFeeling,
} from 'hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { palette } from 'shared/styles/Palette';
import { CategoryType, RankType } from 'types/Rank';
import { formatRank } from 'utils/format';

const Slide = () => {
  const [isMobile] = useMobileMediaQuery();
  const dots: CategoryType[] = [
    'SUMMONER_LEVEL',
    'MATCH_COUNT',
    'TIER_RANKED_SOLO_5x5',
    'CUR_LOSE_STREAK',
    'CUR_WIN_STREAK',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % dots.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const { data } = useGetRankByCategory(dots[currentSlide]);

  const slideData: RankType | undefined = data && data[2];

  const image = useRandomFeeling();

  return (
    <Flex
      width={isMobile ? '350px' : '90%'}
      height={isMobile ? '430px' : '80%'}
      margin="0 auto"
      borderRadius="1.5rem"
      boxShadow={'1px 2px 10px 1px rgba(0, 0, 0, 0.25)'}
      padding="3rem 1.75rem 1.25rem"
      lineHeight="1.4"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <>
        <Box width="100%">
          <Text fontSize={palette.fontSize.mobileTitle} fontWeight="700">
            {slideData?.summonerResDto.name}님이
          </Text>
          <Text
            fontSize={palette.fontSize.mobileTitle}
            color={palette.color.main}
            display="inline"
            fontWeight="700"
          >
            {slideData && formatRank(slideData?.rankType, slideData?.rankValue)}
          </Text>{' '}
          <Text
            fontSize={palette.fontSize.mobileTitle}
            fontWeight="700"
            display="inline"
          >
            달성!
          </Text>
        </Box>
        <Image
          src={`/Feeling/${image}.png`}
          alt=""
          placeholder="blur"
          blurDataURL={`/Feeling/${image}.png`}
          width="250"
          height="250"
          quality="100"
        />
        <Flex gap="0.5rem">
          {dots.map((v, i) => (
            <Box
              width="0.625rem"
              height="0.625rem"
              borderRadius="50%"
              backgroundColor={
                currentSlide === i ? palette.color.main : palette.color.gray
              }
              key={v}
            />
          ))}
        </Flex>
      </>
    </Flex>
  );
};

export default Slide;
