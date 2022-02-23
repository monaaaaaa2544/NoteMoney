<template>
       <Layout content-prefix="layout">
           <NumberPad v-model:amount="record.amount" @submit="saveRecord(record)" />
           <Types v-model:types="record.type" />
           <Notes v-model:notes="record.notes" />
           <Tags v-model:tags="record.tags" />
       </Layout>
</template>

<script lang="ts" setup>
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import { ref, reactive } from 'vue';

let record = reactive({
    tags: [],
    notes: '', 
    type: '-',
    amount: 0,
});

function saveRecord(record: any) {

}

</script>



<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>


<style lang="scss" scoped>

</style>