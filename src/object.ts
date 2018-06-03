let objectPizza: {name: string, price: number, foo?: string, getName(): string } = {
  name: 'Plain Old Pepperoni',
  price: 20,
  foo: 'could be or not',
  getName() {
    return objectPizza.name;
   // return this.name; // is the same
  }
}

console.log('objectPizza: ', objectPizza.getName());