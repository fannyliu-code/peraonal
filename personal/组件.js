组件目标：
能够知道组件化开发思想
能够知道组建的注册方式
能够说出组件间的数据交互方式
能够说出组件插槽的用法
能够说出Vue调试工具的用法
能够基于组建的方式实现业务功能



目录：
组件化开发思想
组件注册
Vue调试工具用法
组件间的数据交互
组件插槽
基于组件的案例


组件化开发思想
1.1现实中的组件化思想体现
1）标准
2）分治
3）重用
4）组合

1.2编程中的组件化思想体现


1.3组件化规范：web components
我们希望尽可能多的重用代码
自定义组建的方式不太容易（html,css,js）
多次使用组件可能导致冲突

web Components通过创建好封装好功能的定制元素解决上述问题

https://developer.mozilla.org/zh-CN/docs/Web/Web_Components


2.1组件注册
语法
Vue.componet(组件名称,{
    data:组件数据,
    template:组件模板内容
})

//定义一个名为button-counter的新组件
Vue.component('button-counter',{
    data:function(){
        return{
            count:0,
            

        }
    },
    template:'<button @click="count++" >点击了{{count}}次'
})


2.3注册注意事项
1.data必须是一个函数

2.组件模板内容必须是单个跟元素

3.组件模板内容可以是模板字符串




2.4局部组件注册
var ComponentA = {/*...*/}
var ComponentB = {/*...*/}
var ComponentC = {/*...*/}
new Vue({
    el:'#app'
    compoents:{
        'componet-a':ComponentA,
        'componet-b':ComponentB,
        'componet-c':ComponentC,
    }
})




3.1Vue调试工具用法

调试工具安装

1）克隆仓库
2）安装依赖包
3）构建
4）打开Chrome使用依赖包
5）选中开发者模式
6）加载已解压的扩展，选择shells/chrome



4.1组件间数据交互
1.父组件向子组件传值
1）组件内部通过props接收传递过来的值

Vue.component('menu-item',{
    props:['title'],
    template:'<div>{{title}}</div>'
})

2.父组件通过属性将值传递给子组件
<menu-item title="来自父组件的数据"></menu-item>
<menu-item :title="title"></menu-item>


3.props属性名规则
再props中使用驼峰形式，模板中需要使用短横线的形式



4.2子组件向父组件传值
props传递数据原则：单向数据流

1.子组件通过自定义事件向父组件传递信息
<button @click='$emit("enlarge-text")'>扩大字体</button>

2.父组件监听子组件的事件
<menu-item v-on:enlarge-text="fontsize +=0.1"></menu-item>


4.3非父子组件间传值
1.单独的事件中心管理组件间的通信
var eventHub = new Vue()


2.监听事件与销毁事件
eventHub.$on('add-todo',addTodo)
eventHub.$off('add-todo')


3.触发事件
eventHub.$emit('add-todo',id)