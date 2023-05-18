const formatSpellImage = (spellId: string): string => {
  const version = '11.14.1'; // Specify the desired Data Dragon version

  switch (spellId) {
    case '1':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerBoost.png`;
    case '3':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerExhaust.png`;
    case '4':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerFlash.png`;
    case '6':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHaste.png`;
    case '7':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHeal.png`;
    case '11':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerSmite.png`;
    case '12':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerTeleport.png`;
    case '13':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerMana.png`;
    case '14':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerDot.png`;
    case '21':
      return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerBarrier.png`;
    default:
      return '';
  }
};

export default formatSpellImage;
