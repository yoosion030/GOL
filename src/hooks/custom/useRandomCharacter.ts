import { useEffect, useState } from 'react';
import { Character } from 'shared/Character';

export const useRandomCharacter = () => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Character.length);
    setImage(Character[randomIndex]);
  }, []);

  return image;
};
