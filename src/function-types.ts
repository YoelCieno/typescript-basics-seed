// let sumOrder: Function;

let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) =>  x * y;

const newSum = sumOrder(25, 2);

console.log(`Total newSum: ${newSum}`);
