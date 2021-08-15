// 1. 最小堆

var nthUglyNumber = (n) => {
  const heap = new Heap(n, (x, y) => x < y);
  let res = new Array(n);
  let map = {};
  let primes = [2, 3, 5];

  heap.insert(1);
  map[1] = true;

  for (let i = 0; i < n; ++i) {
    res[i] = heap.extract();

    for (const prime of primes) {
        let tmp = res[i] * prime;
        if (!map[tmp]) {
            heap.insert(tmp);
            map[tmp] = true;
        }
    }
}
  return res[n - 1];
}

var swap = (arr, i, j) => {
  return [arr[i], arr[j]] = [arr[j], arr[i]];
}

class Heap {
  constructor(arr = [], cmp = (a, b) => x > y) {
    this.container = [];
    this.cmp = cmp;
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this));
    }
  }

  insert(data) {
    const { container, cmp } = this;
    
    container.push(data);
    let index = container.length - 1;
    while(index) {
      let parent = Math.floor((index - 1 ) / 2);
      if (cmp(container[parent], container[index])) {
        break;
      }
      swap(container, parent, index);
      index = parent;
    }
  }

  extract() {
    const { container, cmp } = this;
    if (!container.length) {
      return null
    }

    swap(container, 0, container.length - 1);

    let res = container.pop();
    const length = container.length;
    let index = 0, exchange = index * 2 + 1;
    while(exchange < length) {
      let right = index * 2 + 2;
      if (right < length && container[right] < container[exchange]) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, index, exchange);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return res;
  }

  top() {
    return this.container.length ? this.container[0] : null
  }
}

// 2. 动态规划
var nthUglyNumber = (n) => {
  var dp = new Array(n).fill(0);
  dp[1] = 1;
  let p2 = 1, p3 = 1, p5 = 1;
  for (let i = 2; i <= n ;i++) {
    let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] *5;
    dp[i] = Math.min(Math.min(num2, num3), num5);
    if (dp[i] === num2) {
      p2++;
    }
    if (dp[i] === num3) {
      p3++;
    }
    if (dp[i] === num5) {
      p5++;
    }
  }
  return dp[n];
}
console.log(nthUglyNumber(10));
