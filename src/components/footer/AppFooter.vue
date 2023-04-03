<template>
    <div>
        <button v-show="num > 0" @click="clear">清除全部已完成</button>
        一共{{num}}个任务//已完成{{finishNum}}个任务
    </div>
</template>
<script>
import { defineComponent , ref} from 'vue'

export default defineComponent({
    name:'AppFooter',
    setup() {
        let num = ref(1)
        let finishNum = ref(3)
        let clear = () =>{

        }
        return {
            num,
            finishNum,
            clear
        }
    },
})
</script>
