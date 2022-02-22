<template>
            <div class="numberPad">
                <div class="output">{{output}}</div>
                <div class="buttons">
                    <button @click="inputContent">1</button>
                    <button @click="inputContent">2</button>
                    <button @click="inputContent">3</button>
                    <button @click="remove" class="remove">删除</button>
                    <button @click="inputContent">4</button>
                    <button @click="inputContent">5</button>
                    <button @click="inputContent">6</button>
                    <button @click="clear" class="clear">清空</button>
                    <button @click="inputContent">7</button>
                    <button @click="inputContent">8</button>
                    <button @click="inputContent">9</button>
                    <button @click="ok" class="ok">ok</button>
                    <button @click="inputContent" class="zero">0</button>
                    <button @click="inputContent">.</button>
                </div>
            </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let output:any=ref<any>('0')
let input:any=''

const emit = defineEmits<{
    (e: 'update:value', number:number): void
    (e: 'submit', number:number): void
}>()

function inputContent(evt: MouseEvent){
    input = evt.target.innerHTML;

    if(output.value.length===16){return;}
    if(output.value==='0' && input==='.') {
        output.value += input
        return;
    } else if (output.value==='0' && input!=='.') {
        output.value=input
        return;
    }
    if(output.value.indexOf('.')>=0 && input==='.') {return;} //保证没有两个小数点
    output.value+=input
}

function remove(){
    if(output.value.length===1){
        output.value='0'
    } else {
        output.value=output.value.slice(0,-1)
    }
}

function clear(){
    output.value='0'
}

function ok(){
    const number:number=parseFloat(output.value)
    emit('update:value', number)
    emit('submit', number)
    output.value='0'

}
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";


.numberPad {
    > .output {
        @extend %clearFix;
        @extend %innerShadow;
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 9px 16px;
        text-align: right;
        height: 72px;
    }
    > .buttons {
        @extend %clearFix;
        > button {
            width: 25%;
            height: 64px;
            float: left;
            background: transparent;
            border: none;
            &.ok {
                height: (64*2px);
                float: right;
            }
            &.zero {
                width: 25*2%;
            }
            $bg: #f2f2f2;
            &:nth-child(1) {
                background: $bg;
            }
            &:nth-child(2), &:nth-child(5) {
            background: darken($bg, 4%);
            }
            &:nth-child(3), &:nth-child(6), &:nth-child(9) {
            background: darken($bg, 4*2%);
            }
            &:nth-child(4), &:nth-child(7), &:nth-child(10) {
            background: darken($bg, 4*3%);
            }
            &:nth-child(8), &:nth-child(11), &:nth-child(13) {
            background: darken($bg, 4*4%);
            }
            &:nth-child(14) {
            background: darken($bg, 4*5%);
            }
            &:nth-child(12) {
            background: darken($bg, 4*6%);
            }
        }
    }
}

</style>