<template>
    <div class="nav">
        <router-link to="/money">
            <MoneyIcon class="icon">
                <use xlink:href="#money" />
            </MoneyIcon>
            记账
        </router-link>
        <router-link to="/labels">
             <LabelsIcon class="icon">
                <use xlink:href="#labels" />
            </LabelsIcon>
            标签
        </router-link>
        <router-link to="/statistics">
             <StatisticsIcon class="icon">
                <use xlink:href="#statistics" />
            </StatisticsIcon>
            统计
        </router-link>
        <div ></div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.icon {
    width: 1em; //em代表跟文字大小有关
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

</style>