<template>
    <div>
        <AppHeader></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
    </div>
</template>
<script>
import AppHeader from './header/AppHeader.vue'
import { defineComponent } from 'vue'
import AppFooter from './footer/AppFooter.vue'
import AppMain from './main/AppMain.vue'

export default defineComponent({
    name:'AppHome',
    components:{
        AppHeader,
        AppFooter,
        AppMain
    },
    setup() {
        return{
        }
    },
})
</script>
<style scoped>

</style>