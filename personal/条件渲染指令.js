// 1,条件渲染指令
// v-if
// v-else
// v-show

// 2,比较v-if与v-show
// 如果需要频繁切换v-show较好

// <div #id="demo">
// <p v-if="ok">成功了</p>
// <p v-else>失败了了</p>

// <button @click="ok=!ok">切换</button>

// </div>

// new VTTCue({
//     el:"#demo",
//     data:{
//         ok:false

//     }
// })