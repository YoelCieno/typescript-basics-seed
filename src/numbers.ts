const pizzaCost: number = 10;
const pizzaToppings: number = 5;
let calculatePrice: (cost: number, toppings: number) => number;

calculatePrice = (x, y) => x + 1.5 * y;

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log(`Pizza costs: ${cost}`); 