import { ImageURL } from 'shared/Image';

const formatSpellImage = (spellId: string): string => {
  const version = '11.14.1'; // Specify the desired Data Dragon version

  switch (spellId) {
    case '1':
      return `${ImageURL}/${version}/img/spell/SummonerBoost.png`;
    case '3':
      return `${ImageURL}/${version}/img/spell/SummonerExhaust.png`;
    case '4':
      return `${ImageURL}/${version}/img/spell/SummonerFlash.png`;
    case '6':
      return `${ImageURL}/${version}/img/spell/SummonerHaste.png`;
    case '7':
      return `${ImageURL}/${version}/img/spell/SummonerHeal.png`;
    case '11':
      return `${ImageURL}/${version}/img/spell/SummonerSmite.png`;
    case '12':
      return `${ImageURL}/${version}/img/spell/SummonerTeleport.png`;
    case '13':
      return `${ImageURL}/${version}/img/spell/SummonerMana.png`;
    case '14':
      return `${ImageURL}/${version}/img/spell/SummonerDot.png`;
    case '21':
      return `${ImageURL}/${version}/img/spell/SummonerBarrier.png`;
    default:
      return '';
  }
};

export default formatSpellImage;
