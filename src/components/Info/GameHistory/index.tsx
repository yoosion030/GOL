import { GameHistoryItem, NonData, PageLayout } from 'components';
import { Box, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getGameHistory } from 'utils/match';

interface GameHistoryProps {
  id: string;
}

const GameHistory = ({ id }: GameHistoryProps) => {
  const { data } = useQuery('getGameHistory', () => getGameHistory(id));

  return (
    <>
      <Box padding="60px 0">
        {data?.data.content.length === 0 ? (
          <NonData title="플레이 전적이 없습니다." />
        ) : (
          data?.data.content.map(v => (
            <GameHistoryItem key={v.matchId} data={v} />
          ))
        )}
      </Box>
    </>
  );
};

export default GameHistory;
