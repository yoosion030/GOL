import { ImageURL, ImageVersion } from 'shared/Image';

const formatItemImage = (itemId: number): string => {
  return itemId === 0
    ? '/static/ItemNull.png'
    : `${ImageURL}/${ImageVersion}/img/item/${itemId}.png`;
};

export default formatItemImage;
