<template>
    <div>
        <div v-for="(item,index) in list" :key="index"><input type="checkbox" v-model="item.isFinsh"/>{{item.name}} <button @click="index">删除</button></div>
    </div>
</template>
<script>
import {defineComponent,ref , computed} from 'vue'
import {useStore} from 'vuex'
// hhh
export default defineComponent({
    name:'AppMain',
    setup(){
        const store = useStore()
        const list = computed(()=>{
            return store.state.list
        })
        console.log(1,list)
        let thingsArr = ref()
        let deleteThings = (index) =>{
            store.commit('deleteThings',index)
        }
        return {
            thingsArr,
            deleteThings,
            list
        }
    }
})
</script>
<style scoped>


</style>