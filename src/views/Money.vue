<template>
       <Layout content-prefix="layout">
           <NumberPad v-model:amount="record.amount" @submit="saveRecord(record)" />
           <Types v-model:value="record.type" />
           <FormItem v-model:notes="record.notes"  field-name="备注" placeholder="请输入备注"/>
           <Tags :tags="record.tags" v-model:selectTagsName="selectTagsName" />
       </Layout>
</template>

<script lang="ts" setup>
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import { ref, reactive, watch, computed } from 'vue';
import {useStore} from '@/store/record'
import { useRouter } from 'vue-router';


let store=useStore()
store.fetchRecords()
store.fetchTags()
const router=useRouter()


let recordList = reactive<RecordItem[]>(store.recordList)
let record = reactive<RecordItem>({
    tags: store.tagList, //其实是selectTags
    notes: '', 
    type: '+',
    amount: "0",
    createAt: new Date().toISOString(),
});
let selectTagsName=reactive([])

function saveRecord(record: RecordItem): void {
    if(!record.tags || record.tags.length===0){
        return window.alert('请至少选择一个标签')
    }
    store.createRecord({
        tags: record.tags.filter(item=> selectTagsName.indexOf(item.name)>=0),
        notes: record.notes,
        type: record.type,
        amount: record.amount,
        createAt: record.createAt,
    })
    if(store.createRecordError===null){
        window.alert('已保存')
        record.tags=[
            {id:0, name:'衣'},
            {id:1, name:'食'},
            {id:2,name:'住'},
            {id:3, name:'行'}]
        selectTagsName=[]
        record.notes=''
    }
}

watch(record, (newValue, oldValue): void =>{
    store.saveRecords()
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