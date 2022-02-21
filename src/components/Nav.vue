<template>
    <nav class="nav">
        <router-link to="/money" class="item" active-class="selected">
            <MoneyIcon class="icon">
                <use xlink:href="#money" />
            </MoneyIcon>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
             <LabelsIcon class="icon">
                <use xlink:href="#labels" />
            </LabelsIcon>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
             <StatisticsIcon class="icon">
                <use xlink:href="#statistics" />
            </StatisticsIcon>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
nav {
    display: flex;
    box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.25);
    flex-direction:row;

    > .item{
        padding: 2px 0;
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > .icon {
            width: 32px; //em代表跟文字大小有关
            height: 32px;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
    }
    > .item.selected{
        color: blue;
    }
}

</style>