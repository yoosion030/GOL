const formatGameMode = (queueId: number): string => {
  switch (queueId) {
    case 400:
    case 430:
      return '일반';
    case 420:
      return '솔랭';
    case 440:
      return '자랭';
    case 450:
      return '칼바람 나락';
    case 700:
      return '격전';
    case 830:
    case 840:
    case 850:
      return '입문';
    case 900:
      return '우르프';
    case 2000:
      return '튜토리얼';
    default:
      return '기타';
  }
};

export default formatGameMode;
