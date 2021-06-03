// 理解：
// Promise对象：代表了未来某个将要发生的事件（通常是一个异步操作）
// 有了Promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套得回调函数（俗称“回调地狱”）
// ES6的Promise是一个构造函数，用来生成Promise实例


// promise对象的3个状态
// pending:初始化状态
// fullfilled:成功状态
// rejected:失败状态


// 2，使用promise的基本步骤（2步）:
// 创建promise对象
// let promise = new Promise((resolve,reject) => {

// })


// 调用promise的then()