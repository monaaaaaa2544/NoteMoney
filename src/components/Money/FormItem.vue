<template>
    <div class="note">
        <label class="notes">
            <span class="name">{{props.fieldName}}</span>
            <input type="text" :value="props.notes" @input="handleInput" :placeholder="props.placeholder"/>
        </label>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    notes: String,
    fieldName: String,
    placeholder: String,
})


const emit = defineEmits<{
    (e: 'update:notes', value: string): void
}>()

function handleInput(event: Event){
    emit('update:notes', (event.target as HTMLInputElement).value || '');
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