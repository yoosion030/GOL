import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Icon, Text } from '@chakra-ui/react';
import * as I from 'assets';
import { useMobileMediaQuery } from 'hooks';
import { palette } from 'shared/styles/Palette';
import { TabBarItemType } from 'types/TabBar';

const TabBar = () => {
  const router = useRouter();
  const [isMobile] = useMobileMediaQuery();
  const TabBarItem: TabBarItemType[] = [
    { icon: <I.SearchIcon />, link: '/info', desc: 'search' },
    { icon: <I.RankIcon />, link: '/rank', desc: 'ranking' },
    { icon: <I.AboutIcon />, link: '/about', desc: 'about' },
    { icon: <I.UserIcon />, link: '/user', desc: 'my' },
  ];

  return (
    <Flex
      width="100vw"
      maxWidth="500px"
      justifyContent="space-between"
      height="4.375rem"
      alignItems="center"
      padding="0 3.438rem"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(9px)"
      position="fixed"
      bottom="0"
      zIndex="10"
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
              width={isMobile ? '15px' : '20px'}
              height={isMobile ? '15px' : '20px'}
              fill={
                router.pathname.includes(item.link)
                  ? palette.color.main
                  : '#000000'
              }
            >
              {item.icon}
            </Icon>
          </Link>
          <Text
            fontSize={palette.fontSize.content}
            color={
              router.pathname.includes(item.link)
                ? palette.color.main
                : palette.color.gray
            }
          >
            {item.desc}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default TabBar;
