const coupon: string = 'pizza25';
let normalizaCoupon: (code: string) => string;

normalizaCoupon = (x) => x.toUpperCase();

const couponMessage: string = `Final coupon is ${normalizaCoupon(coupon)}`;

console.log('couponMessage: ', couponMessage);

