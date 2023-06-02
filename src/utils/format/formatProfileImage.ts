import { ImageURL, ImageVersion } from 'shared/Image';

const formatProfileImage = (profileIconId?: number): string => {
  return `${ImageURL}/${ImageVersion}/img/profileicon/${profileIconId}.png`;
};

export default formatProfileImage;
