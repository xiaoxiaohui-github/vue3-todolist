<template>
    <div>
        <h1>我是父组件 子组件传的值：{{aa}}       </h1>
        <PageTwo :num="num" @emit="getvalue"></PageTwo>
    </div>
</template>
<script>
import { defineComponent ,ref} from 'vue'
import PageTwo from "@/components/pages/PageTwo.vue"
export default defineComponent({
    name:'PageOne',
    components:{
        PageTwo
    },
    setup() {
        let num = ref('我是父组件数据')
        let aa = ref()
        let getvalue = (val) =>{
            aa.value = val
            console.log(val)
        }
        return{
            num,
            aa,
            getvalue
        }
    },
})
</script>
<style scoped>

</style>