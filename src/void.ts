let selectTopping: (toppings: string) => void;

let selectedNewTopping: string = 'pepperoni';

selectTopping = (x) => selectedNewTopping = x;

selectTopping('bacon');

console.log('selectedNewTopping: ', selectedNewTopping);