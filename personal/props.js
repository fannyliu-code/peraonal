// 使用组件标签时
// <my-component name='tom' :age='3' :set-name='setName'></my-component>

// 定义myCompoent时
// 1)在组件内声明所有的props
// 2)方式一：只指定名称
// porps:['name','age','setName']

// 3)方式二：指定名称和类型
// props:{
//     name:String,
//     age:Number,
//     setName:String
// }