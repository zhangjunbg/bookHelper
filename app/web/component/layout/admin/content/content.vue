<template>
  <div>
    <el-popover placement="bottom" title="标题" width="200" trigger="manual" v-model="visible">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button class="floatBtn" size="mini" slot="reference" @click="visible = !visible">设置</el-button>
    </el-popover>
    <router-view></router-view>
  </div>
</template>
<style>
</style>
<script>
  export default {
    name: 'v-content',
    data() {
      return {
        visible: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    components: {},
    mounted() {

    }
  };
</script>
<style lang="scss">
  .floatBtn {
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
  }
</style>