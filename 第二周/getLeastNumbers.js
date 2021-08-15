/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */

// 1 排序
var getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 2. 最小堆
var getLeastNumbers = function(arr, k) {
  const length = arr.length;
  if (k >= length) {
    return arr;
  }
  const heap = new MaxHeap(arr.slice(0, k));
  for (let i = k; i < arr.length;i++) {
    if (heap.top() > arr[i]) {
      heap.extract()
      heap.insert(arr[i]);
    }
  }
  return heap.container;
};

class MaxHeap{
  constructor(arr = []) {
    this.container = [];
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this));
    }
  }

  insert(data) {
    const { container } = this;
    // 数据推到 container 中
    container.push(data);
    // 获取到最后一个节点的下标
    let index = container.length - 1;
    // 下标不为0的时候循环
    while(index) {
      // 找到该节点的父节点 公式 Math.floor((index - 1) / 2)
      let parent = Math.floor((index - 1) / 2);
      // 当前节点小于等于父节点的时候不需要进行交换
      if (container[parent] >= container[index]) {
        break;
      }
      // 交换
      swap(container, index, parent);
      // 父节点的下标复制到当前节点
      index = parent;
    } 
  }

  extract() {
    const { container } = this;
    if (!container.length) {
      return null;
    }
    // 将最后一个节点跟第一个节点进行交换
    swap(container, 0, container.length - 1);
    // 将最后一个节点推出
    let res = container.pop();
    const length = container.length;
    let index = 0, exchange = index * 2 + 1;
    while(exchange < length) {
      let right = index * 2 + 2;
      if (right < length && container[right] > container[exchange]) {
        exchange = right;
      }

      if (container[exchange] <= container[index]) {
        break;
      }

      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return res;
  }

  top() {
    return this.container.length ? this.container[0] : null;
  }
}

var swap = (arr, i,j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 3. 快排
var getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};