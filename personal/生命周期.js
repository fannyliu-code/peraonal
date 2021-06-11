// 生命周期三个阶段：初始化，更新，死亡
// 1，初始化显示
// beforeCreate()
// created()
// beforeMount()
// mounted()

// 2,更新状态
// beforeUpdate()
// updated()

// 3,销毁vue实例：vm.$destory()
// beforeDestory()
// destoryed()

// 2，常见的生命周期方法
// mounted():放松ajax请求，启动定时器等异步任务

// beforeDestory():做收尾工作，如：清除定时器

// mounted:挂载//初始化显示之后立即调用

// mounted(){
//     setInterval(()=>{
//         this.show =! this.show
//     })
// }