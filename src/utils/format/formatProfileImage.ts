import { ImageURL } from 'shared/Image';

const formatProfileImage = (profileIconId?: number): string => {
  return `${ImageURL}/13.10.1/img/profileicon/${profileIconId}.png`;
};

export default formatProfileImage;
