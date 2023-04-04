<template>
    <div>我是子组件：：{{num}}
        <button @click="emitvalue">传值给父组件</button>
    </div>
</template>
<script>
import { defineComponent ,ref} from 'vue'

export default defineComponent({
    name:'PageTwo',
    props:{
        num:{
            type:String
        }
    },
    setup(props,ctx) {
        let value = ref('zhangjiahui')
        let emitvalue = () =>{
            ctx.emit('emit',value)
        }
        return {
            emitvalue,
            value
        }
    },
})
</script>
