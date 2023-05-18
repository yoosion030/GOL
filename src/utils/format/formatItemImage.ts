const formatItemImage = (itemId: number): string => {
  return itemId === 0
    ? '/static/ItemNull.png'
    : `https://ddragon.leagueoflegends.com/cdn/13.9.1/img/item/${itemId}.png`;
};

export default formatItemImage;
