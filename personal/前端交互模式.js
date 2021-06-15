目标：
能够说出什么是前后端交互模式
能够说出Promise的相关概念和用法
能够使用fetch进行接口调用
能够使用axios进行接口调用
能够使用async/await方式调用接口
能够基于后台接口实现案例

目录：
前后端交互模式
promise用法
接口调用-fetch用法
接口调用-axios用法
接口调用-async/await用法
基于接口的案例


前后端交互模式
1.1接口调用方式
1）原生ajax
2）基于jQuery的Ajax
3）fetch
4）axios

1.2URL地址格式
2.Restful形式的URL
http请求方式
GET 查询
POST 添加
PUT 修改
DELETE 删除



2.1Promise用法
2.1异步调用
1.异步效果分析
1）定时任务
2）Ajax
3)事件函数

var ret = '-----'
$.ajax({
    url:'http://localhost:3000/data',
    success:function(data){
        console.log(data)
        ret = data;
    }
});
console.log(ret)

2.多次进行异步调用的依赖分析
1）多次异步调用的结果顺序不确定
2）异步调用结果如果存在依赖需要嵌套


1）$.ajax({
    url:'http://localhost:3000/data',
    success:function(data){
        console.log(data)
        
    }
});
$.ajax({
    url:'http://localhost:3000/data1',
    success:function(data){
        console.log(data)
        
    }
});
$.ajax({
    url:'http://localhost:3000/data2',
    success:function(data){
        console.log(data)
        
    }
});
2）$.ajax({
    url:'http://localhost:3000/data',
    success:function(data){
        console.log(data)
        $.ajax({
            url:'http://localhost:3000/data1',
            success:function(data){
                console.log(data)
                
            }
        });
        $.ajax({
            url:'http://localhost:3000/data2',
            success:function(data){
                console.log(data)
                
            }
        }); 
    }
});

2.2Promise概述
Promise是异步编程的一种解决方案，从语法上讲，Promise是一个对象，从它可以获取异步操作的消息、

好处：
可以避免多层异步调用嵌套问题（回调地狱）
Promise对象提供了简洁的API，使得控制异步操作更加容易

2.3Promise基本用法
resolve和reject两个参数处理成功和失败两种情况，并通过p.then获取处理结果

var p = new Promise(function(resolve,reject){
    //成功时调用resolve
    //失败时调用reject()
});
p.then(function(ret){
    //从resolve得到正常结果
},function(ret){
    //从reject得到错误信息
})



var p = new Promise(function(resolve,reject){
    //这里用于实现异步任务
    setTimeout(function(){
        var flag = true;
        if(flag){
            //正常情况
            resolve('hello');
        }else{
            //异常情况
            reject('出错了');
        }
    },1000);
});
p.then(function(data){
    console.log(data)
},function(info){
    console.log(info)
})

2.4基于Promise处理Ajax请求
1，处理原生Ajax
function queryData(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState !=4) return;
            if(xhr.status === 200){
                resolve(xhr.responseText)
            }else{
                reject('出错了')
            }
        }
        xhr.open('get','/data');
        xhr.send(null)
    })
}


function queryData(url){
    var p = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState !=4 )return;
            if(xhr.readyState ==4 && xhr.status == 200){
                //处理正常的情况
                resolve(xhr.responseText);
            }else{
                reject('服务器错误')
            }
        };
        xhr.open('get',url);
        xhr.send(null);
    });
 
}
// queryData('http://localhost:3000/data')
// .then(function(data){
//     console.log(data);
// },function(info){
//     console.log(info)
// });

//-------------------

//发送多个ajax请求并且保证顺序
queryData('http://localhost:3000/data')
.then(function(data){
    console.log(data)
    queryData('http://localhost:3000/data1')
})
.then(function(data){
    console.log(data)
    queryData('http://localhost:3000/data2')
})
.then(function(data){
    console.log(data)
    queryData('http://localhost:3000/data2')
});





2.发送多次ajax请求
queryData()
.then(function(data){
    return queryData(dat);
})
.then(function(data){
    return queryData(dat);
})
.then(function(data){
    return queryData(dat);
})



2.5then参数中的函数返回值
1，返回Promise实例对象
1）返回的该实例对象会调用下一个then

2，返回普通值
2）返回的普通值会直接传递给下一个then,通过then参数中函数的参数接受该值


1) function queryData(url){
    return p = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState !=4 )return;
            if(xhr.readyState ==4 && xhr.status == 200){
                //处理正常的情况
                resolve(xhr.responseText);
            }else{
                reject('服务器错误')
            }
        };
        xhr.open('get',url);
        xhr.send(null);
    });
 
}
queryData('http://localhost:3000/data')
.then(function(data){
   
   return queryData('http://localhost:3000/data1')
})
.then(function(data){
   
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(123)
        },2000)
    });
 })
 .then(function(data){
   
    console.log(data)
 });

 2) function queryData(url){
    return p = new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState !=4 )return;
            if(xhr.readyState ==4 && xhr.status == 200){
                //处理正常的情况
                resolve(xhr.responseText);
            }else{
                reject('服务器错误')
            }
        };
        xhr.open('get',url);
        xhr.send(null);
    });
 
}
queryData('http://localhost:3000/data')
.then(function(data){
   
   return queryData('http://localhost:3000/data1')
})
.then(function(data){
   
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(123)
        },2000)
    });
 })
 .then(function(data){
   
    return 'hello';
 })
 .then(function(data){
   
    console.log(data)
 });


 2.6Promise常用的API
 1.实例方法
 1）p.then()得到异步任务的正确结果
 2）p.catch()获取异常信息
 3）p.finally()成功与否都会执行（尚且不是正式标准

 queryData()
 .then(function(data){
     console.log(data);
 })
 .catch(function(data){
     console.log(data)
 })
 .finally(function(data){
     console.log('finished')
 });




 function foo(){
     return new Promise(function(resolve,reject){
         setTimeout(function(){
            //  resolve(123)
             reject('error')
         },1000)
     })
 }
//  foo()
//  .then(function(data){
//      console.log(data)
//  })
//  .catch(function(data){
//     console.log(data)
// })
//  .finally(function(data){
//     console.log('finished')
// })


foo()
.then(function(data){
    console.log(data)
},function(data){
    console.log(data)
})
.finally(function(){
    console.log('finished')
})


2.promise用法
2.6Promise常用的API
2.对象方法
2）Promise.all()并发处理多个异步任务，所有任务都执行完成才能得到结果
2）Promise.race()并发处理多个异步任务，只要有一个任务完成就能得到结果

Promise.all([p1,p2,p3]).then((result) => {
    console.log(result)
})

Promise.race([p1,p2,p3]).then((result) => {
    console.log(result)
})




接口调用-fetch用法
1.基本特性
1）更加简单的数据获取方式，功能更像大，更灵活，可以看做时xhr的升级版
2）基于Promise实现

2.语法结构
fetch(url).then(fn2)
          .then(fn3)
          ...
          .catch(fn)


fetch('/data').then(data => {
    return data.text();
}).then(ret => {
    // 这里得到的才是最终的数据
    console.log(ret);
});



3.3fetch请求参数
1，常用配置选项
1）method(String):HTTP请求，默认是GET
2)body(String):HTTP的请求参数
3）headers(Object):HTTP的请求头，默认为{}

fetch('/data',{
    method:'get'
}).then(data => {
    return data.text();
}).then(ret => {
    // 这里得到的才是最终的数据
    console.log(ret)
})
//  -----
fetch('/data/123',{
    method:'get'
}).then(data => {
    return data.text();
}).then(ret => {
    // 这里得到的才是最终的数据
    console.log(ret)
})

3.3fetch请求参数
4.POST请求方式的参数传递

fetch('/data',{
    method:'post',
    body:'uname = lisi&pwd=123',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
    }
}).then(data => {
    return data.text()
}).then(ret => {
    console.log(ret);
})



3.4fetch响应结果

响应数据格式
1）text():将返回体处理成字符串类型
2）json():返回结果和JSON.parse(responseText)一样 

fetch('/data').then(data => {
    // return data.json();
    return data.text();//这种结果也可以，不过这种方式是字符串了，而不是对象

}).then(data => {
    // console.log(data);
    var ovj =JSON.parse(data);//另一种转换json方法
    console.log(ovj.uname,ovj.age,ovj.gender)
})

接口调用-axios用法//兼容的第三方的
是一个基于promise用于浏览器和node.js的HTTP客户端
特征:
支持浏览器和node.js
支持promise
能拦截请求和响应
自动转换JSON数据

axios.get('/data')
.then(ret => {
    //data属性名称是固定的用法，用于获取后台的实际数据
    console.log(ret.data)
})

4.3axios的常用API
get:查询数据
1）通过URL传递参数，
1）通过params选项传递参数

axios.get('/data?id=123').then(data => {
    console.log(data.data)
})

axios.get('heep://localhost:3000/axios',{
    params:{
        id:123
    }
})
.then(data => {
    console.log(data.data)
})



post:添加数据
2)post传递参数
2）通过选项传递参数（默认传递的是json格式的数据）
axios.post('/data',{
    uname:'tom',
    pwd:123
}).then(data =>{
    console.log(data.data)
})

put:修改数据
参数传递方式与post类似
axios.post('/data',{
    uname:'tom',
    pwd:123
}).then(data =>{
    console.log(data.data)
})

delete:删除数据


4.5axios的响应结果
响应结果的主要属性
1)data:实际想赢回来的数据
2）headers：响应头信息
3）status：响应状态码
4）statusText:响应状态信息

4.6axios的全局配置

4.6axios拦截器
2.响应拦截器
在获取数据之前对数据做一些加工处理

//添加一个相应拦截器
axios.interceptors.reponse.use(function(res){
    //在这里对返回的数据进行处理
    return res;
},function(err){
    //处理响应的错误信息
})




接口调用-async/await用法
async/await是ES7引入的新语法，可以更加方便的进行异步操作
async关键字用于函数上（async函数的返回值是Promise实例对象）
await关键字用于async函数当中（await可以得到异步的结果）

async function queryData(id){
    const ret = await axios.get('/data');
    
    return ret;
}

queryData.then(ret => {
    console.log(ret)
})

//多个异步请求的场景
axios.defaults.baseURL = 'http://localhost:3000'

async function queryData(){
    var info = await axios.get('async1');
    var ret = await axios.get('async2?info=' + info.data);
    return ret.data;
}

queryData().then(ret => {
    console.log(ret)
})