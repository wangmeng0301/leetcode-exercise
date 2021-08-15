// var addDigits = function(num) {
//   if(num < 10) {
//     return num;
//   }
//   let sum = num;
//   while(sum >= 10) {
//     sum = String(sum).split('').reduce((pre, cur) => Number(pre) + Number(cur), 0)
//   }
//   return sum
// };

var addDigits = function(num) {
  if(num < 10) {
    return num;
  }
  return num % 9 || 9
};


console.log(addDigits(10)) // 