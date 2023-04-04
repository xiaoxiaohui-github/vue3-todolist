<template>
    <div>
        <button v-show="data.length > 0" @click="clear">清除全部已完成</button>
        一共{{data.length}}个任务//已完成{{finished}}个任务
    </div>
</template>
<script>
import { defineComponent ,computed} from 'vue'

export default defineComponent({
    name:'AppFooter',
    props:{
       data:{
        type:Array,
        required:true
       } 
    },
    setup(props,ctx) {
        let finished = computed(() =>{
        let arr = props.data.filter(item =>{
            return item.isFinish
        }) 
        return arr.length
        })
        props.data.forEach(item =>{   
            if(item.isFinish) {
                finished.value++
            }
          })
          let clear = () =>{
            ctx.emit('deleteAll','')
          }
        return {
            finished,
            clear
        }
    },
})
</script>
