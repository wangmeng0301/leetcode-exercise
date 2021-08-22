/**
 * @param {string}
 * @return {boolean}
 */

// 1
var isValid = function(s) {
  let stack = [], length = s.length;
  if(length % 2) return false;
  for(let item of s){
    switch(item){
      case "{":
      case "[":
      case "(":
        stack.push(item);
        break;
      case "}":
        if(stack.pop() !== "{") return false;
        break;
      case "]":
        if(stack.pop() !== "[") return false;
        break;
      case ")":
        if(stack.pop() !== "(") return false;
        break;
      }
  }
  return !stack.length;
};

//2 用map来存 然后用栈来推出
var isValid = function(s) {
  let stack = [], length = s.length;
  if(length % 2) return false;
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (const i of s) {
    if (map[i]) {
      if (stack.pop() !== map[i]) return false;
    } else {
      stack.push(i)
    }
  }
  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid('([{}])'));
console.log(isValid('([]})'));
console.log(isValid('([])'));
console.log(isValid('{()}'));