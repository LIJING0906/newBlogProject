<template>
    <div class="sticky-bottom">
        <div class="header">这是头部</div>
        <div class="content">
            这是内容
        </div>
        <div class="footer">
            这是底部
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.sticky-bottom{
    .header{
        height: 50px;
        line-height: 50px;
        box-shadow: 0 2px 6px 0 #ddd;
        text-align: left;
        padding: 0 20px;
        background: #fff;
    }
    .footer{
        
    }
}
</style>
