/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//  var myPow = function(x, n) {
//   if( n === 0){
//     return 1;
//   }
//   x = parseFloat(x);
//   if (n < 0) {
//     x = parseFloat(1 / x);
//     n = -n
//   }
//   var tmp = x;
//   for (let i = 0; i < n - 1; i++) {
//     x *= tmp
//   }
//   return x
// };

// 分治
// var myPow = function(x, n) {
//   x = parseFloat(x);
//   if (n < 0) {
//     x = parseFloat(1 / x);
//     n = -n
//   }
//   return divide(x, n);
// };

// function divide(x, n) {
//   if(n == 0){
//     return 1;
//   }
//   var sub = divide(x, parseInt(n / 2))
//   if (n % 2) {
//     return sub * sub * x
//   } else {
//     return sub * sub
//   }
// }

var myPow = function(x, n) {
  x = parseFloat(x);
  if ( n < 0) {
    x = parseFloat(1 / x);
    n = -n;
  }
  return divide(x, n);
};

const divide = (x, n) => {
  if (n === 0) {
    return 1;
  }
  var sub = divide(x, parseInt(n / 2));
  if (n % 2) {
    return sub * sub * x;
  } else {
    return sub * sub;
  }
}

console.log(myPow(2.00000, 10))
