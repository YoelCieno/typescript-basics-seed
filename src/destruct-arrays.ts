const newPizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};
let order: ({name: pizzaName, toppings:pizzaToppings} : {name: string, toppings: string[]}) => void;

order = ({name:pizzaName, toppings:pizzaToppings}) => console.log(pizzaName, pizzaToppings);

order(newPizza);

 