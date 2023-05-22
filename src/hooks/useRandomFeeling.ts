import { useEffect, useState } from 'react';
import { Feeling } from 'shared/Character';

const useRandomFeeling = () => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Feeling.length);
    setImage(Feeling[randomIndex]);
  }, []);

  return image;
};

export default useRandomFeeling;
