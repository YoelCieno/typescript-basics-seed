let sumParamsOrder: (price: number, quantity?: number) => number;

sumParamsOrder = (x, y = 1) => x * y;

const newParamsSum = sumParamsOrder(25);

console.log(`Total newParamsSum: ${newParamsSum}`);