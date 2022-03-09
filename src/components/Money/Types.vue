<template>
    <div class="type">
        <ul class="types">
            <li :class="currentType==='-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="currentType==='+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let currentType = ref<string>(props.type)

const props=defineProps({
    type: String
})

const emit=defineEmits<{
    (event: 'update:type', types: string): void
}>()

function selectType(type:string) {
    if (type !== '-' && type !== '+') {
        throw new Error('type is unknow')
    }
    currentType.value=type
    emit('update:type', currentType.value)
}


</script>

<style lang="scss" scoped>
.types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
        width: 50%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
        }
    }
}
</style>