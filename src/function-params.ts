function multiply(a:number, b:number = 25) {
/*
 b:number = 25 works like this:
 if (!b) {
    b = 25;
  }
*/
 return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));