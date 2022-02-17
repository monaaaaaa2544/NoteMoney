<template>
    <div>
        <router-link to="/money">money</router-link>
        <router-link to="/labels">labels</router-link>
        <router-link to="/statistics">statistics</router-link>
    </div>
</template>

<script lang="ts">

type Todo={
    id:number;
}


export default {
    setup () {
        
        const data=reactive({
            
        })

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>