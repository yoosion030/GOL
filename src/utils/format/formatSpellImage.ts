import { ImageURL, ImageVersion } from 'shared/Image';

const formatSpellImage = (spellId: string): string => {
  switch (spellId) {
    case '1':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerBoost.png`;
    case '3':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerExhaust.png`;
    case '4':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerFlash.png`;
    case '6':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerHaste.png`;
    case '7':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerHeal.png`;
    case '11':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerSmite.png`;
    case '12':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerTeleport.png`;
    case '13':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerMana.png`;
    case '14':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerDot.png`;
    case '21':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerBarrier.png`;
    case '32':
      return `${ImageURL}/${ImageVersion}/img/spell/SummonerSnowball.png`;
    default:
      return '';
  }
};

export default formatSpellImage;
