let sumArgOrder: (price: number, quantity?: number) => number;

sumArgOrder = (x, y) => {
  if(y) {
   return x * y;
  }
  return x;
};

const newArgSum = sumArgOrder(25);

console.log(`Total newArgSum: ${newArgSum}`);