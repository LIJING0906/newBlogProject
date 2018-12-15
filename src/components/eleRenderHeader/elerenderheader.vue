<template>
    <div id="elerenderheader" v-loading="loading">
      <el-table :data="tableData.tableBody" style="width: 100%;height:100%;">
          <el-table-column v-for="(item, index) in tableData.tableHeader" :key="index" 
            :prop="item.prop" 
            :label="item.prop=='name'?item.value+'(全部)':item.value"
            :min-width="index==0?2:8" 
            :render-header="index==1?renderHeader2:null" 
            :filterPlacement="item.value" 
            :filteredValue='item.filtrateValues'
            :show-overflow-tooltip = true>
          </el-table-column>
      </el-table>
      <el-upload class="upload-demo" :action="action" :before-upload="beforeAvatarUpload" :on-success="successAvatarUpload" :on-error="errorAvatarUpload" :multiple="false" :show-file-list="false">
        <el-button type="primary" icon="el-icon-upload2" size="small" @click="upload" ref="upload">导入</el-button>
      </el-upload>
      <el-button type="info" size="small" icon="el-icon-download" @click="download">导出</el-button>
    </div>
</template>
<script>
export default {
  name: 'elerenderheader',
  data(){
      return {
        loading: false,
        tableData: {
          tableHeader: [
            {prop: 'date', value: '时间'},
            {prop: 'name', value: '姓名', filtrateValues: [{value: '王小虎',label: '王小虎'}, {value: '李小虎',label: '李小虎'}]},
            {prop: 'address', value: '地址'}
          ],
          tableBody: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-04',
            name: '李小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '张小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '赵小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        },
        action: '',
      }
  },
  methods: { 
    //渲染表头
    renderHeader2(h, {column, $index}) {
      let filters = [{value:"", label:'全部'}];
      for(let item in column.filteredValue){
        filters.push(column.filteredValue[item])
      }
      return h('div',{
        style: {
          height: '30px'
        },
      },
      [
        h(
          "el-select",
          {
            props: {
                placeholder: '',
                value: column.label,  //‘姓名’
                clearable: false,
                popperClass:'popperClassResOut',
            },
            class: 'filtersSelect', //下拉选择框的类名，方便调整样式
            on: {
                input: value => {
                    if(value != ''){
                        column.label = column.filterPlacement+'('+value+')'
                    }else{
                        column.label = column.filterPlacement+'(全部)'
                    }
                    // this.callback && this.callback();
                }
            } //下拉选择触发的事件
          },
          [
            filters.map(item => {
              return h("el-option", {
                props: {
                    value: item.value,
                    label: item.label
                }
              });
            })
          ] //下拉选项
        )
      ])
    },
    renderHeader(h, {column, $index}){
      return h(
        "el-popover",
        {
          props: {
            placement: "right",
            trigger: "hover",
            popperClass : "popperClassResOut"
          }
        },
        [
          // h(
          //     "div",
          //     [`解释1：即巴拉巴拉爸爸不啦啦啦。`]
          // ),
          // h(
          //     "div",
          //     [`解释2：即哈哈化歘持续哈哈航爱占计划。`]
          // ),
          // h(
          //     "div",
          //     [`解释1及解释2的反鸟返很久烦烦烦烦分行恒`]
          // ),
          h(
              "div",
              [`解释1：即巴拉巴拉爸爸不啦啦啦1。`, h('br'), `解释2：即哈哈化歘持续哈哈航爱占计划1。`, h('br'), '解释1及解释2的反鸟返很久烦烦烦烦分行恒1']
          ),
          h(
            "span",
            {
              slot: "reference"
            },
            [
              column.label,
              h("i", {
                class: "el-icon-question",
                style: {
                  marginLeft: "4px",
                  cursor: "pointer",
                  color: "#ea9518",
                }
              })
            ]
          )
        ]
      )
    },
    // 上传文件前
    beforeAvatarUpload(file) {
      this.loading = true  
    },
    // 上传成功的回调
    successAvatarUpload(response, file, fileList) {
      this.loading = false
      if (file.status) {
        this.$message.success('上传成功！');
      }
    },
    //上传失败的回调
    errorAvatarUpload(err, file, fileList) {
      this.loading = false
      let message = JSON.parse(err.message).data
      this.$message.error(message);
    },
    //导入
    upload(){
      this.action = `requestURL`
    },
    //导出
    download(){
      let a=document.createElement('a');
      a.setAttribute("href",`${this.$store.state.baseURL}rest/capacity/threshold/${this.$store.state.tableParams.CIModel}/${this.$store.state.tableParams.CIName}/export`);
      a.click();
    }
  }
}
</script>
<style>
  #elerenderheader .filtersSelect{
      vertical-align: middle;
      padding: 0px;
      margin: 0px;
  }
  #elerenderheader .filtersSelect div{
      white-space: normal;
      padding: 0px;
      margin: 0px;
  }
  #elerenderheader .filtersSelect .el-input input{
      background-color: transparent;
      border: none;
      width: 110px;
      padding: 0 5px;
      font-size: bold;
  }
  #elerenderheader .filtersSelect .el-input__icon{
      width: 16px;
      height: 16px;
      background-image: url("../../assets/images/ic_filter.png");
      background-size:16px 16px;
      background-repeat:no-repeat;
      vertical-align: middle;
  }
  #elerenderheader .filtersSelect .el-input__icon:before{
      content: '';
  }
  #elerenderheader .filtersSelect .el-select__caret{
      transform: none;
      -webkit-transform:none;
  }
  #elerenderheader .upload-demo{
    width: 80px;
    display: inline-block;
    margin-top: 20px;
  }
</style>