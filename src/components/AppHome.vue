<template>
    <div>
        <AppHeader @sendData="sendData"></AppHeader>
        <AppMain :data="list"></AppMain>
        <AppFooter :data="list" @deleteAll="deleteAll"></AppFooter>
    </div>
</template>
<script>
import AppHeader from './header/AppHeader.vue'
import { defineComponent , ref,computed} from 'vue'
import AppFooter from './footer/AppFooter.vue'
import AppMain from './main/AppMain.vue'
import {useStore} from 'vuex'

export default defineComponent({
    name:'AppHome',
    components:{
        AppHeader,
        AppFooter,
        AppMain
    },
    setup() {
        let data = ref('')
        const store = useStore()
        let  list  = computed(() =>{
            return store.state.list
        })
        let sendData = (val) =>{
            console.log(list.value)
            var flag = true
            list.value.map(item =>{
            if(item.name === val){
                flag = false
                alert('任务已存在')
            }
            })
            if(flag) {
                store.commit('addThings',val)
            }
        }
        let deleteAll = () =>{
                store.commit("deleteAll")
        }
        return{
            sendData,
            data,
            list,
            deleteAll
        }
    },
})
</script>
<style scoped>

</style>