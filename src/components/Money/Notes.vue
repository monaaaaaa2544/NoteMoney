<template>
    <div class="note">
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" v-model="value" @input="InputNotes" placeholder="在这里输入备注"/>
        </label>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let value=ref<string>(props.notes)

const props = defineProps({
    notes: String
})

const emit = defineEmits<{
    (e: 'update:notes', value: string): void
}>()

function InputNotes(){
    emit('update:notes', value.value);
}
</script>

<style lang="scss" scoped>

.notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    > .name {
        padding-right: 16px;
    }
    > input {
        height: 64px;
        flex-grow: 1;
        background: transparent;
        border: none;
    }
}

</style>