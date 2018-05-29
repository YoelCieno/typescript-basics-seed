let selectedNewTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedNewTopping = topping;
}

selectTopping('bacon');

console.log('selectedNewTopping: ', selectedNewTopping);