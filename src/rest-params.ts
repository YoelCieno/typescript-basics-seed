function sumAll(message: string, ...arr: number[]) {
  console.log('message: ', message);
  console.log(arguments);
  return arr.reduce((prev: any, next: any) => prev + next);
}

const sum = sumAll('Hii! ',1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);