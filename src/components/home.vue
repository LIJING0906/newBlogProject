<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="keyPath" default-active="$route.path" router active-text-color="#66CCFF"
          @open="handleOpen" @close="handleClose" @select="handleSelect" :unique-opened="true">
          <el-submenu :index="item.firstIndex" v-for="(item, ind) in RoutesInfos" :key="ind">
            <template slot="title"><i class="el-icon-menu"></i>{{item.firstIndex}}</template>
            <!-- <el-menu-item-group :title="ite.title" v-for="(ite, i) in item.routesInfo" :key="i"> -->
            <el-menu-item-group v-for="(ite, i) in item.routesInfo" :key="i">
              <el-menu-item :index="ite.index">{{ite.displayName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <top-title :title-text="titleText" v-if="titleText&&keyPath.length!=0&&$route.path!='/'"></top-title>
        <h3 v-if="$route.path=='/'">
          这个项目是平时工作中遇到的小问题。<br><br>
          把它们都写下来，以免以后换公司不记得曾经写过的代码。<br><br>
          同时，也是让自己学会用脚手架vue-cli搭建一个项目。
        </h3>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import topTitle from './subComponents/topTitle.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCollapse: true,
      titleText: '', //默认进来重定向到is特性
      keyPath: [], //打开的导航
      RoutesInfos:[
        {
          firstIndex: 'VUE', 
          routesInfo: [
            {title: 'vue.js', index: '/testvueis', displayName: 'is特性'},
            // {title: 'vuex', index: 'vuex', displayName: 'vuex'},
            // {title: 'vueRouter', index: 'vueRouter', displayName: 'vueRouter'},
          ]
        },
        {
          firstIndex: 'elementUI',
          routesInfo: [
            {title: 'renderHeader', index: '/elerenderheader', displayName: '渲染个性化表头'},
          ]
        },
        {
          firstIndex: 'CSS',
          routesInfo: [
            {title: 'CSS3ani&tran', index: '/css3aimation&transition', displayName: 'css3过渡和动画'},
          ]
        },
        {
          firstIndex: 'ECharts',
          routesInfo: [
            {title: 'ECharts', index: '/tuopuecharts', displayName: 'EChartsTuopu'},
          ]
        },
      ],
    }
  },
  components: {
    topTitle
  },
  methods: {
    handleOpen(key, keyPath) {
      this.keyPath = keyPath
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath){
      for (let i of this.RoutesInfos) {
        for (let j of i.routesInfo) {
          if (j.index==key) {
            this.titleText = `${keyPath[0]} > ${j.displayName}`
            return
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
#home{
  .el-aside{
    width: 202px !important;
    height: 934px;
    border-right: 1px solid $line_gray_color;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 240px;
      min-height: 400px;
    }
    .el-menu{
      background-color: transparent;
      border-right: 0;
      .el-submenu{
        .el-menu-item *{
          color: $text_black_color;
          text-decoration: none;
        }
      }
      .el-menu-item{
        color: $text_black_color;
        font-family: 'Microsoft YaHei';
        font-size: 12px;
      }
      .el-submenu__title{
        color: $text_black_color;
      }
    }
  }
}
</style>
