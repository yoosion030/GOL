import { Flex, Icon, Text } from '@chakra-ui/react';
import * as I from 'assets';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { palette } from 'shared/styles/Palette';
import { TabBarItemType } from 'types/TabBar';

const TabBar = () => {
  const router = useRouter();

  const TabBarItem: TabBarItemType[] = [
    { icon: <I.SearchIcon />, link: '/', desc: '검색' },
    { icon: <I.RankIcon />, link: '/rank', desc: '랭킹' },
    { icon: <I.AboutIcon />, link: '/about', desc: '정보' },
  ];

  return (
    <Flex
      width="100vw"
      maxWidth="500px"
      justifyContent="space-between"
      height="72px"
      alignItems="center"
      padding="0 9vh"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(9px)"
      position="fixed"
      bottom="0"
    >
      {TabBarItem.map((item, index) => (
        <Flex
          key={index}
          width="24px"
          flexDir="column"
          alignItems="center"
          gap="4px"
        >
          <Link href={item.link}>
            <Icon
              viewBox="0 0 20 20"
              width="20px"
              height="20px"
              fill={router.asPath === item.link ? '#1461B8' : '#000000'}
            >
              {item.icon}
            </Icon>
          </Link>
          <Text
            fontSize={palette.fontSize.content}
            color={router.asPath === item.link ? '#1461B8' : palette.color.gray}
          >
            {item.desc}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default TabBar;
