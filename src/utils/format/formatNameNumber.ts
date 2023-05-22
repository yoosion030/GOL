const formatNameNumber = (
  grade?: number,
  classNum?: number,
  num?: number,
  name?: string,
): string => {
  return [[grade, classNum, num].join(''), name].join(' ');
};

export default formatNameNumber;
