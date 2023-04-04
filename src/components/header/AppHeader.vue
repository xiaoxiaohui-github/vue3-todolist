<template>
    <div>
        <input type="text" v-model="things" @keydown.enter="addThings()">
    </div>
</template>
<script>
import { defineComponent , ref} from 'vue'

export default defineComponent({
    name:'AppHeader',
    setup(props,ctx) {
        let things = ref('')
        let addThings = () =>{
            ctx.emit('sendData',things.value)
            things.value = ''
        }
        return {
            things,
            addThings
        }
    },
})
</script>
