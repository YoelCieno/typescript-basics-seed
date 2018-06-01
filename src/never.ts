let orderError = (error: string): void => {
  new Error(error);
  // never going to return a value!  
}

// If you want a break error:

/* let orderError = (error: string): never => {
  throw new Error(error);
  // never going to return a value!  
} */

orderError('Ohhh! Something went wrong');