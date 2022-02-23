<template>
            <div class="tags">
                <div class="new-tag">
                    <button @click="createTag">新增标签</button>
                </div>
                 <ul class="current">
                     <li v-for="tag in tagList" :key="tag.id"
                            :class="{selected: selectedTags.indexOf(tag)>=0}"
                            @click="toggle(tag)">
                        {{tag.name}}
                     </li>
                </ul>
            </div>    
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'

// store 中拿数据
let tagList=reactive<any>([
    {id: 0, name: '衣'},
    {id: 1, name: '食'},
    {id: 2, name: '住'},
    {id: 3, name: '行'},
    {id: 4, name: 'wow'},
    {id: 5, name: 'yes'},
]) 
let selectedTags=reactive([])

const emit = defineEmits<{
    (event: 'update:tags', tags: any): void
}>()


function toggle(tag: any) {
    const index = selectedTags.indexOf(tag)

    if(index>=0) {
        selectedTags.splice(index, 1) //取消选中
    }else {
        selectedTags.push(tag)// 选中
    }
    emit('update:tags', selectedTags)
}

function createTag() {
    const name=window.prompt('请输入标签名')
    if(name===''){
        window.alert('标签名不能为空')
    }else{//push to tag list
        tagList.push({
            id: tagList.length,
            name: name
        }) 
    }
}


</script>

<style lang="scss" scoped>

.tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;
    > .current {
        display: flex;
        flex-wrap: wrap;
        $h: 24px;
        > li {
            $bg: #D9D9D9;
            background: $bg;
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 16px;
            margin-right: 12px;
            margin-top: 4px;
            &.selected {
            background: darken($bg, 50%);
            color: white;
            }
        }
    }
    > .new-tag {
        padding: 16px 0;
        button {
            background: transparent;
            border: none;
            color: #999;
            border-bottom: 1px solid;
            padding: 0 4px;
        }
    }
}

</style>