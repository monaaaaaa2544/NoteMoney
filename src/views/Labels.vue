<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <RightIcon class="icon">
                    <use xlink:href="#right" />
                </RightIcon>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Button from '@/components/Money/Button.vue'
import {useStore} from '@/store/record'

let store=useStore()

store.fetchTags()

let tags=reactive(store.tagList)

function createTag(){
    const name=window.prompt("请输入标签名")
    if(name){
        const message=store.createTag(name)
        if(message==='duplicated'){
            window.alert('标签名重复')
        }
    }
}


</script>

<style lang="scss" scoped>
.tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag{
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #E6E6E6;
        > svg {
            width: 18px; 
            height: 18px;
            color: #666;
            margin-right: 16px;
        }
    }
}
.createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
}

</style>