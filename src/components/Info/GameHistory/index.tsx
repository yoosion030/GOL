import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';
import { GameHistoryItem, NonData, Loading } from 'components';
import { getGameHistory } from 'utils/match';

interface GameHistoryProps {
  id: string;
}

const GameHistory = ({ id }: GameHistoryProps) => {
  const { data, isLoading } = useQuery('getGameHistory', () =>
    getGameHistory(id),
  );

  return (
    <>
      <Box padding="3.75rem 0">
        {data?.content.length === 0 ? (
          <NonData title="플레이 전적이 없습니다." />
        ) : (
          data?.content.map(gameHistory => (
            <GameHistoryItem key={gameHistory.matchId} data={gameHistory} />
          ))
        )}

        {isLoading && <Loading />}
      </Box>
    </>
  );
};

export default GameHistory;
