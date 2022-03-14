<template>
    <Layout>
        <Types class-prefix="type" v-model:value="type" />
        <ol>
            <li v-for="(group, index) in groupedList" :key="index" class="group">
                <h3 class="title">
                    {{beautify(group.title)}}
                    <span>${{group.total}}</span>
                </h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>${{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts" setup>
import Types from '@/components/Money/Types.vue'
import {clone} from '@/lib/clone'
import {useStore} from '@/store/record'
import dayjs from 'dayjs';


let store=useStore()
store.fetchRecords()

function groupedList(){
    const {recordList}=store.recordList    
    if(recordList.length===0){return [];}

    const newList =clone(recordList).sort((a,b)=>dayjs(b.createAt).valueOf() - dayjs(b.createAt).valueOf())

    type Result={
        title: string,
        total?: number,
        items: RecordItem[],
    }

    const result: Result[]=[{
        title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), 
        items:[newList[0]]
    }]

    for (let i=1;i<newList.length;i++){
        const current=newList[i]
        const last=result[result.length-1]

        if(dayjs(last.title).isSame(dayjs(current.createAt),'day')){
            last.items.push(current)
        }else{
            result.push({
                title: dayjs(current.createdAt).format('YYYY-MM-DD'),
                items:[current]
            })
        }

    }

    result.map(group=>{
        group
    })

    type
}


// fetch records
function tagString(tags: Tag[]){
    return tags.length===0? '无':tags.join(',')
}
let type='+'

function beautify(string: string){ 

}


</script>

<style lang="scss" scoped>
::v-deep{
    .type-tabs > li{
        background: #C4C4C4;
        &.selected{
            background:red;
            &::after{
                display: none;
            }
        }
        .interval-tabs-item{
            height: 48px;
        }
    }
}

.group{
    padding:8px 16px;
}

</style>