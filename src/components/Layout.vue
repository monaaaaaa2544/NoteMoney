<template>
    <div class="layout-wrapper">
        <div class="content" :class="`${contentPrefix}-content`">
            <slot />
        </div>
        <Nav />
    </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  contentPrefix?: string
}>(), {
    contentPrefix: '',
});



</script>

<style lang="scss" scoped>
.layout-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .content{
        overflow: auto;
        flex-grow: 1;
    }
}

</style>