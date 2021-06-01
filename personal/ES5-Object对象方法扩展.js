// ES5给object扩展了一些静态方法，常用的2个：
// 1，Object.create(prototype,[descriptors])
// 作用：以指定对象为原型创建新的对象
// 为新的对象指定新的属性，并对属性进行描述
// value:指定值
// writable:标识当前属性值是否是可以修改的，默认为false
// configurable：标识当前属性是否可以被删除，默认为false
// enumerable：标识当前属性是否能用for in 枚举  默认为false

// 2,Object.defineProperties(Object,descriptors)
// 作用：为指定对象定义扩展多个属性
// get:用来获取当前属性值得回调函数
// set:修改当前属性值得触发得回调函数，并且实参即为修改后的值
// 存取器属性：setter ，getter一个用来存值，一个用来取值

// 对象本身的两个方法
// get propertyName(){} 用来得到当前属性值的回调函数
// set propertyName(){} 用来监视当前属性值变化的回调函数



// Array.prototype.indexOf(value):得到值在数组中的第一个下标
// Array.prototype.lastIndexOf(value):得到值在数组中的最后一个下标
// Array.prototype.forEach(function(item,index){}):遍历数组
// Array.prototype.map(function(item,index){}):遍历数组返回一个新的数组，返回加工之后值
// Array.prototype.filter(function(item,index){}):遍历过滤出一个新的数组
