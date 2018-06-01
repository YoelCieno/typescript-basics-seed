const numPizzas: number = 3;

let offerDiscount: (orders: number) => boolean;

offerDiscount = (x) =>  x >= 3;

if (offerDiscount(numPizzas)) {
  console.log(`Yo're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}