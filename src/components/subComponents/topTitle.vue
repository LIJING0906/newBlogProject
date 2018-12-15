<template>
    <div class="topTitle">
        <div class="circle"><span></span></div>
        <span class="title">{{titleText}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props: ['titleText']
}
</script>

<style lang="scss">
  .topTitle{
    text-align: left;
    height: 26px;
    border-bottom: 2px solid $line_gray_color;
    margin-bottom: 20px;
    .circle {
      display: inline-block;
      vertical-align: sub;
      width: 12px;
      height: 12px;
      border: 1px solid $text_icon_blue_color;
      border-radius: 50%;
      line-height: 10px;
      text-align: center;
      padding: 1px;
      overflow: hidden;
      margin-right: 4px;
      margin-bottom: 2px;
    }
    .circle > span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: $text_icon_blue_color;
      border-radius: 50%;
    }
    .title{
      margin-top: 6px;
      font-weight: bold;
    }
  }
</style>