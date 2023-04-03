import {createStore} from 'vuex'
export default createStore({
    state:{
        list:[
            {
            name:'睡觉',
            isFinish:false,
            },
            {
            name:'吃饭',
            isFinish:true
            }
        ]
    },
    // 定义方法 只有mutaion才能修改state  //同步修改
    mutations:{
        // state,第二个参数是传入的值
        deleteThings(state,value){
            alert(1)
            state.splice(value,1)
        }

    },
    action:{ 
        // store,第二个参数是要修改的值   //异步修改

    },
    // 制作模块化
    modules:{}
})