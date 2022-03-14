<template>
            <div class="tags">
                <div class="new-tag">
                    <button @click="createTag">新增标签</button>
                </div>
                 <ul class="current">
                     <li v-for="tag in props.tags" :key="tag.id"
                            :class="{selected: props.selectTagsName.indexOf(tag.name)>=0}"
                            @click="toggle">
                        {{tag.name}}
                     </li>
                </ul>
            </div>    
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'



const props = defineProps({
    tags: Array,
    selectTagsName: Array
})

// store 中拿数据
// const selectedTagsName=reactive<string[]>([])

const emit = defineEmits<{
    (event: 'update:tags', tags: Tag[]): void
}>()


function toggle(evt: MouseEvent) {
    let selectTagName= evt.target.innerHTML
    const index = props.selectTagsName.indexOf(selectTagName)

    if(index>=0) {
       props.selectTagsName.splice(index, 1) //取消选中
    }else {
        props.selectTagsName.push(selectTagName)// 选中
    }
    // emit('update:tags', selectedTagsName)

}

function createTag() {
    const name=window.prompt('请输入标签名')
    if(name===''){
        window.alert('标签名不能为空')
    }else{//push to tag list
        if(props.tags){
            props.tags.push({
                id: props.tags.length,
                name: name
            }) 
        }
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
            border-radius: calc($h/2);
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