<template>
    <button class="button" >
        <slot />
    </button>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.button{
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    
}
</style>