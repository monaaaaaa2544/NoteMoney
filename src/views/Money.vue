<template>
       <Layout content-prefix="layout">
           <NumberPad v-model:amount="record.amount" @submit="saveRecord(record)" />
           <Types v-model:type="record.type" />
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
    tags: [
        {id: 0, name: '衣'},
        {id: 1, name: '食'},
        {id: 2, name: '住'},
        {id: 3, name: '行'},
        {id: 4, name: 'wow'},
        {id: 5, name: 'yes'},
    ],
    notes: '', 
    type: '+',
    amount: "9",
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