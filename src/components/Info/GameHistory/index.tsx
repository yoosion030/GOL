import { GameHistoryItem, PageLayout } from 'components';
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
          <PageLayout>
            <Text fontWeight="700">플레이한 게임이 없습니다.</Text>
          </PageLayout>
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
