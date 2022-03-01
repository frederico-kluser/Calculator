export type variables = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
export type operations = 'adition' | 'subtraction' | 'multiplication' | 'division';
export type itemType = 'group' | 'number' | 'operation' | 'variable' | 'root' | 'power' | 'function' | 'absolute';
export type itemValue = variables | operations | number | characterType | characterType[];

export interface characterType {
  type: itemType;
  value: itemValue;
}

export interface initialStateType {
  layers: characterType[];
  nextValue: 'number' | 'item';
}