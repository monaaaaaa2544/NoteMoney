<template>
            <div class="tags">
                <div class="new-tag">
                    <button>新增标签</button>
                </div>
                 <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li> 
                    <li>行</li>
                </ul>
            </div>    
</template>

<script>

</script>

<style lang="scss" scoped>

.tags {
    font-size: 14px;
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    > .current {
        display: flex;
        flex-wrap: wrap;
        $h: 24px;
        > li {
            background: #d9d9d9;
            height: $h;
            line-height: $h;
            border-radius: calc($h/2);    
            padding: 0 16px;
            margin-right: 12px;
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