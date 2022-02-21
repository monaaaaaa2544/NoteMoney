<template>
    <div class="nav">
        <router-link to="/money">
            <MoneyIcon>
                <use xlink:href="#money" />
            </MoneyIcon>
            记账
        </router-link>
        <router-link to="/labels">
             <LabelsIcon>
                <use xlink:href="#labels" />
            </LabelsIcon>
            标签
        </router-link>
        <router-link to="/statistics">
             <StatisticsIcon>
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
.nav {
    border: 1px solid rgba(0,0,1)
    }
</style>