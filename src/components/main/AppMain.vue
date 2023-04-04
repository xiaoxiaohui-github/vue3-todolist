<template>
    <div>
        <div v-if="data.length">
            <div class="items" v-for="(item,index) in data" :key="index"><input type="checkbox" @click="change(this)" v-model="item.isFinish"/>{{item.name}} <button class="deleteBtn" @click="deleteThings(index)">删除</button></div>
        </div>
        <div v-else>
            当前无任务
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
    props:{
        data:{
            type:Array,
            required:true
        }
    },
    name:'AppMain',
    setup(){
        let store = useStore()
        let deleteThings = (val) =>{
            store.commit('deleteThings',val)
        }
        let change = (val) =>{
            console.log(val.checked);
        }
        return {
        deleteThings,
        change
        }
    }
})
</script>
<style scoped>
.items{
    width:200px;
    height:30px;
}
.items:hover{
background-color:grey;
}
.deleteBtn{
    float:right;
}

</style>