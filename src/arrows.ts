const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map(newPizza => newPizza.name.toUpperCase());

console.log(mappedPizzas);

const anotherPizza = {
  name: 'Blazing Inferno',
  getName: () => anotherPizza.name
};

console.log(anotherPizza.getName());