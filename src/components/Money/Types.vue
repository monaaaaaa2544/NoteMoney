<template>
    <div class="type">
        <ul class="types" :class="{[props.classPrefix+'-tabs']: props.classPrefix}">
            <li :class="props.value==='-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="props.value==='+' && 'selected'" @click="selectType('+')" >收入</li>
        </ul>
            {{props.classPrefix}}
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const props=defineProps({
    value: String,
    classPrefix: String
})

let currentType=reactive<any>(props.value)

const emit=defineEmits<{
    (event: 'update:value', type: string): void
}>()

function selectType(type:string) {
    if (type !== '-' && type !== '+') {
        throw new Error('type is unknow')
    }
    currentType=type
    emit('update:value', currentType)
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