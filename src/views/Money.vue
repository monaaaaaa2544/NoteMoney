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
import { ref, reactive, watch } from 'vue';
import model from '@/model';


let recordList = reactive<RecordItem[]>(model.fetch())
let record = reactive({
    tags: [
        {id: 0, name: '衣'},
        {id: 1, name: '食'},
    ],
    notes: '', 
    type: '+',
    amount: "0"
});


function saveRecord(record: any) {
    let copy_record: RecordItem = model.clone(record);
    record.createAt=new Date()
    recordList.push(copy_record)
}

watch(record, (newValue, oldValue)=>{
    model.save(recordList)
})

</script>



<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>


<style lang="scss" scoped>

</style>