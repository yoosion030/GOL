const formatRuneImage = (runeId: number): string => {
  switch (runeId) {
    case 8000:
      return 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png';
    case 8100:
      return 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png';
    case 8200:
      return 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png';
    case 8300:
      return 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png';
    case 8400:
      return 'https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png';
    default:
      return '';
  }
};

export default formatRuneImage;
