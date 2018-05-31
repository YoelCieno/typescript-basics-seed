let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('large');

console.log(`pizzaSize: ${pizzaSize}`);

let pizzaSizeNum: number = 1;

function selectSizeNum(sizeNum: 1 | 2 | 3): void {
  pizzaSizeNum = sizeNum;
}

selectSizeNum(2);

console.log(`pizzaSizeNum: ${pizzaSizeNum}`);