import numeral from 'numeral';

export const FORMAT_NUMBER = 'number';

const formatterNumber = (value: number) => {
  return `${numeral(value).format('0.00')}`.replace(/,/g, ' ');
};

const formatterMap = {
  [FORMAT_NUMBER]: formatterNumber,
};

export const formatter = (value: number, format: string) => formatterMap[format](value);
