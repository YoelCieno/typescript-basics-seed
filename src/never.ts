function orderError(error: string): never {
  throw new Error(error);
  // never going to return a value!  
}

orderError('Ohhh! Something went wrong');