// el:挂载点
// vue实例的作用范围是什么？
// vue会管理el选项命中的元素及其内部的后代元素

// 是否可以使用其他的选择器
// 可以使用其他的选择器，但是建议使用id选择器

// 是否可以设置其他的dom元素
// 可以使用其他的双标签，不能使用HTML和body


// data：数据对象

// <div id="#app">
//     {{message}}
// <p>{{school.name}} {{school.mobile}}</p>
// <ul>
// <li>{{campus[0]}}</li>
// </ul>
// </div>

// var app = new Vue({
//     el:'#app',
//     data:{
//         message:"你好 小黑",
//         school:{
//             name:"黑马程序员",
//             mobile:"40-400-4000"
//         },
//         campus:["北京校区","上海小区"]
//     }
// })


// data:数据对象 
// vue中用到的数据定义为data中
// data中可以鞋复杂类型的数据
// 渲染复杂类型数据时，遵守js的语法即可


// 本地应用
// 1，内容绑定，事件绑定
// v-Text：设置标签的文本值（textContent）
// <h2 v-text="message"></h2>
// v-text指令的作用：设置标签的内容
// 默认写法会替换全部内容，使用差值表达式{{}}可以替换指定内容
// 内部支持鞋表达式

// v-html
// v-html指令的作用是：设置元素的innerHtml
// 内容中有HTML结构会被解析为标签
// v-text指令无论内容是什么，只会解析为文本
// 解析文本使用v-text  ,需要解析html结构使用v-html

// v-on基础
// 为元素绑定事件
// <div id="app">
//     <input value="v-on指令" v-on:click="doit">‘
//     <input value="v-on简写" @click="doit">
//     <input value="双击事件" @
//     dblclick="doit">
//     </input>
// </div>

// v-on指令的作用是：为元素绑定事件
// 事件名不需要写on
// 指令可以简写为@
// 绑定的方法定义在methods属性中
// 方法内部通过this关键字可以访问定义在data中数据



// 2.显示切换，属性绑定
// v-show
// v-if
// v-bind


// 3,列表循环，表单元素绑定
// v-for 
// v-on
// v-model