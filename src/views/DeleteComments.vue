<template lang="">
    <button @click="cmDelete">삭제</button>
</template>
<script>
import axios from 'axios';
export default {
    methods:{
        cmDelete() {
            axios.delete(`http://localhost:3050/api/delete`)
        }
    }
    
}
</script>
<style lang="">
    
</style>