<template>
    <Layout>
        <div class="navBar">
            <BackIcon class="icon" @click="goBack">
                <use xlink:href="#back" />
            </BackIcon>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem :notes="currentTag && currentTag.name" 
            @update:notes="handleUpdate"
            field-name="标签名" placeholder="请输入标签名" />
        </div>
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import FormItem from '@/components/Money/FormItem.vue'
import Button from '@/components/Money/Button.vue'
import { useStore } from '@/store/record'
import { computed } from 'vue';

const store=useStore()
const route=useRoute() 
const router=useRouter()

// 数据加载
const id=route.params.id
store.fetchTags()
store.setCurrentTag(id)

const tags=store.tagList
const tag=tags.filter(t=>t.id===id)[0]

const currentTag = computed(() => (store.currentTag));


if(!currentTag){
    router.replace('/404')
}

function handleUpdate(value: string){
    if(currentTag.value){
        store.updateTag({id: currentTag.value.id, name: value })
    }
}

function remove(){
    if(store.currentTag){
        if(store.removeTag(store.currentTag.id)){
            window.alert('删除成功')
            router.back()
        }else{
            window.alert('删除失败')
        }
    }
}


function goBack(){
    router.back()
}




</script>

<style lang="scss" scoped>
.navBar{
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content:space-between;
    > .icon{
        width:24px;
        height: 24px;
    }
    > .title{
    }
}
.form-wrapper{
    background: white;
    margin-top: 8px;
}

.button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 49-16px;
}

</style>