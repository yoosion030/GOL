import { ImageURL } from "shared/Image";

const formatItemImage = (itemId: number): string => {
  return itemId === 0
    ? '/static/ItemNull.png'
    : `${ImageURL}/13.9.1/img/item/${itemId}.png`;
};

export default formatItemImage;
