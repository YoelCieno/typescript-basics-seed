const newPizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

function order({name: pizzaName, toppings:pizzaToppings} : {name: string, toppings: string[]}) {
  console.log(pizzaName, pizzaToppings);
}

// order(newPizza);

 