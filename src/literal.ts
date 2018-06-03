let selectSize: (size: 'small' | 'medium' | 'large') => void;
let selectSizeNum: (sizeNum: 1 | 2| 3) => void;
let pizzaSize: string = 'small';

selectSize = (s) =>  pizzaSize = s;

console.log(`pizzaSize: ${pizzaSize}`);

selectSize('large');

console.log(`pizzaSize: ${pizzaSize}`);

let pizzaSizeNum: number = 1;

selectSizeNum = (sN) => pizzaSizeNum = sN;

console.log(`pizzaSizeNum: ${pizzaSizeNum}`);

selectSizeNum(2);

console.log(`pizzaSizeNum: ${pizzaSizeNum}`);