import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GameHistoryItem from './GameHistoryItem';
import { Box } from '@chakra-ui/react';

const GameHistory = () => {
  const router = useRouter();
  const { nickname } = router.query;

  useEffect(() => {
    console.log(`${nickname}으로 데이터 요청`);
  }, []);

  return (
    <Box padding="60px 0">
      <GameHistoryItem />
    </Box>
  );
};

export default GameHistory;
