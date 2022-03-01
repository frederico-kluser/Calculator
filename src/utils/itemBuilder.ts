import { itemType, itemValue, characterType, initialStateType } from '../types/item';

export const item = (type: itemType, value: itemValue): characterType => ({
  type,
  value,
});

export const convertToText = (value: initialStateType[]): string => {
  const operations: any = {
    'adition': '+',
    'subtraction': '-',
    'multiplication': '*',
    'division': '/',
  };

  return value.reduce( (previousValue: any, currentValue: any) => {
    switch (currentValue.type) {
      case 'operation':
        return previousValue + operations[currentValue.value];
      case 'number':
      case 'variable':
        return previousValue + currentValue.value;
      case 'power':
        return previousValue + `^${currentValue.value}`;
      case 'absolute':
        return previousValue + `|${convertToText(currentValue.value)}|`;
      default:
        return previousValue;
    }
  }, '');
};
