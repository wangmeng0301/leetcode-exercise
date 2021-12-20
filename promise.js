// https://juejin.cn/post/6952083081519955998
class Promise {
  constructor(executor) {
    // 初始化 未完成状态
    this.state = 'pending'
    // 成功的值
    this.value = null
    // 失败的原因
    this.relase = null

    // .then 立即执行后 state为pengding  把.then保存起来
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

     // 把异步任务 把结果交给 resolve
    let reslove = (value) => {
      console.log(value);
      if (this.state === 'pending') {
        console.log('fulfilled 状态被执行');
        this.state = 'fulfilled'
        this.value = value
         // onFulfilled 要执行一次
         this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = (relase) => {
      console.log(relase);
      if (this.state === 'pending') {
        console.log('rejected 状态被执行');
        this.state = 'rejected'
        this.relase = relase
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    // 一个promise解决了后（完成状态转移，把控制权交出来）
    this.then = function(onFulfilled, onRejected) {
      if (this.state === 'pending') {
        this.onResolvedCallbacks.push(() => {
          onFulfilled(this.value)
        })
        this.onRejectedCallbacks.push(() => {
          onRejected(this.relase)
        })
      }
      // 状态为fulfilled  执行成功  传入成功后的回调  把执行权转移
      if (this.state === 'fulfilled') {
        onFulfilled(this.value)
      }
        // 状态为rejected 执行失败  传入失败后的回调  把执行权转移
      if (this.state === 'reject') {
        onRejected(this.relase)
      }
    }

    try {
      executor(reslove, reject)
    } catch(err) {
      console.log('22222222222222')
      reject(err)
    }
  }
}
let p1 = new Promise((resolve, reject) => {
  console.log(0);
  setTimeout(() => {      
      // resolve(10)
      reject('JS我不爱你了')
      console.log('setTimeout');    
  }, 1000)
}).then(null,(data) => {
  console.log(data, '++++++++++');
})
