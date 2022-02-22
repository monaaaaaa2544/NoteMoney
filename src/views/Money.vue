<template>
       <Layout content-prefix="layout">
           <NumberPad @submit="saveRecord" />
           <Types :value.sync="record.type" />
           <Notes />
           <Tags  />
           <!-- @update:value -->
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
    amount: 0
}) 

function saveRecord(){}


</script>



<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>


<style lang="scss" scoped>

</style>