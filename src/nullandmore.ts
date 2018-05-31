let newCoupon: string | null = 'pizza25';

function removeCoupon(): void {
  newCoupon =  null;
}

console.log('newCoupon: ', newCoupon);

removeCoupon();

console.log('newCoupon: ', newCoupon);