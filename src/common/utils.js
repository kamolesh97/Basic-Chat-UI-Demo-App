import EStyleSheet from 'react-native-extended-stylesheet';

export const scaledValue = (val) => EStyleSheet.value(`${val}rem`);

export const scaledValues = (values = [0, 0, 0, 0]) => values.map((value) => `${scaledValue(value)}px`).join(' ');
