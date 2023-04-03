<template>
    <div>
        <input type="text" v-model="things" @keydown.enter="addThings(things)">
    </div>
</template>
<script>
import { defineComponent , ref} from 'vue'

export default defineComponent({
    name:'AppHeader',
    setup() {
        let things = ref('')
        let addThings = (things) =>{
            alert(things)
        }
        return {
            things,
            addThings
        }
    },
})
</script>
