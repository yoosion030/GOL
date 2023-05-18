import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GameHistoryItem } from 'components';
import { Box } from '@chakra-ui/react';
import { MatchType } from 'types/Match';

const GameHistory = () => {
  const router = useRouter();
  const { nickname } = router.query;
  const testData: MatchType = {
    content: [
      {
        matchId: 'KR_6488114723',
        gameMode: 'CLASSIC',
        gameCreation: 1683634155592,
        gameDuration: 1659,
        gameEndTimestamp: 1683635854553,
        gameType: 'MATCHED_GAME',
        mapId: 11,
        win: true,
        champLevel: 16,
        championId: 11,
        championName: 'MasterYi',
        championProfileUri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/MasterYi.png',
        deaths: 3,
        kills: 7,
        assists: 7,
        summoner1Id: 6,
        summoner2Id: 11,
        primaryStyle: 8000,
        subStyle: 8200,
        item0: 6672,
        item1: 3133,
        item2: 3111,
        item3: 1037,
        item4: 3153,
        item5: 3124,
        item6: 3364,
        item0Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6672.png',
        item1Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3133.png',
        item2Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3111.png',
        item3Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/1037.png',
        item4Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3153.png',
        item5Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3124.png',
        item6Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3364.png',
      },
      {
        matchId: 'KR_6488114723',
        gameMode: 'CLASSIC',
        gameCreation: 1683634155592,
        gameDuration: 1659,
        gameEndTimestamp: 1683635854553,
        gameType: 'MATCHED_GAME',
        mapId: 11,
        win: false,
        champLevel: 16,
        championId: 11,
        championName: 'MasterYi',
        championProfileUri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/MasterYi.png',
        deaths: 3,
        kills: 7,
        assists: 7,
        summoner1Id: 6,
        summoner2Id: 11,
        primaryStyle: 8100,
        subStyle: 8300,
        item0: 0,
        item1: 3133,
        item2: 3111,
        item3: 1037,
        item4: 3153,
        item5: 3124,
        item6: 3364,
        item0Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/6672.png',
        item1Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3133.png',
        item2Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3111.png',
        item3Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/1037.png',
        item4Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3153.png',
        item5Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3124.png',
        item6Uri:
          'https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/3364.png',
      },
    ],
    pageable: {
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 2,
      paged: true,
      unpaged: false,
    },
    last: false,
    totalPages: 7,
    totalElements: 13,
    first: true,
    size: 2,
    number: 0,
    sort: {
      empty: false,
      unsorted: false,
      sorted: true,
    },
    numberOfElements: 2,
    empty: false,
  };

  useEffect(() => {
    console.log(`${nickname}으로 데이터 요청`);
  }, []);

  return (
    <>
      <Box padding="60px 0">
        {testData.content.map(v => (
          <GameHistoryItem key={v.matchId} data={v} />
        ))}
      </Box>
    </>
  );
};

export default GameHistory;
