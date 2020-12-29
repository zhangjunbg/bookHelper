<template>
  <div class="pageWrapper">
    <div class="topBtn">
      <el-button @click="addNewLine" type="primary" size="small">新增数据</el-button>
    </div>
    <div class="searchWrapper" v-loading="searchLoading">
      <div class="searchFormWrapper">
        <el-form :model="params" label-width="100px" :inline="true" size="small">
          <el-form-item label="年级">
            <el-select v-model="params.level" placeholder="请选择年级">
              <el-option label="1" :value="1"></el-option>
              <el-option label="2" :value="2"></el-option>
              <el-option label="3" :value="3"></el-option>
              <el-option label="4" :value="4"></el-option>
              <el-option label="5" :value="5"></el-option>
              <el-option label="6" :value="6"></el-option>
              <el-option label="7" :value="7"></el-option>
              <el-option label="8" :value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否学习过">
            <el-select v-model="params.level" placeholder="请选择年级">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btnItem right">
            <el-button size="mini" type="primary" @click="onSearch">搜索</el-button>
            <el-button size="mini" @click="resetSearch">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="searchListWrapper" style="margin-top:0;padding-top:0;">
        <el-table class="mainTable" :data="mainList" size="mini" style="width: 100%" v-loading="loading">
          <el-table-column prop="content" label="内容" align="center" width="60"></el-table-column>
          <el-table-column prop="level" label="年级" align="center" width="60"></el-table-column>
          <el-table-column prop="studied" label="是否学习过" align="center"></el-table-column>
          <el-table-column prop="learnTimes" label="已学习次数" align="center"></el-table-column>
          <el-table-column prop="errorTimes" label="答错次数" align="center"></el-table-column>
          <el-table-column prop="successTimes" label="答对次数" align="center"></el-table-column>
          <el-table-column prop="lastLearnTime" label="上次学习时间" align="center"></el-table-column>
          <el-table-column align="center" label="操作" width="60">
            <template slot-scope="scope">
              <el-button @click="handleDel(scope.row)" type="text" :disabled="scope.row.isLock">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="searchPaginationWrapper" v-if="total">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="params.pageNo" :page-sizes="[10, 20, 30, 40, 50]" :page-size="params.pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  const limit100 = /[0-9]{1,3}/
  const limit100dot = /[0-9]{1,2}.[\d]{0,3}/
  export default {
    data() {
      return {
        searchLoading: false,
        loading: false,
        isManager: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        // 查询参数
        params: {
          level: "",
          pageNo: 1,
          pageSize: 20
        },
        total: 0,
        mainList: [],
      };
    },
    methods: {
      // 获取信用列表数据
      getMainList() {
        this.loading = true;
        let newParams = {};
        this.$post("wordList", this.params, data => {
          this.mainList = data.rows || [];
          this.total = data.total || 0;
          this.loading = false;
        }, err => {
          this.loading = false;
        });
      },
      // 分页相关
      handleSizeChange(val) {
        this.params.pageSize = val;
        this.params.pageNo = 1;
        this.getMainList();
      },
      handleCurrentChange(val) {
        this.params.pageNo = val;
        this.getMainList();
      },
      // 重置查询表单
      resetSearch() {
        this.params = {
          level: "",
          pageNo: 1,
          pageSize: 20
        };
      },
      // 根据条件进行搜索
      onSearch() {
        this.params.pageNo = 1;
        this.getMainList();
      },
      // 删除
      handleDel(item) {
        //新增失败删除
        this.$confirm2("确认删除？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "waring",
        }).then(() => {
          this.loading = true;
          this.$postF(
            `/report/hxscore/remove`,
            { reportCode: item.reportCode }, data => {
              this.loading = false;
              this.$message.success("删除成功");
              this.getMainList();
            }, err => {
              this.loading = false;
            });
        }).catch(() => { });
      },
      // 新增录入数据
      addNewLine() {
        this.goto(this, "/chemmarket/creditdetailadd",
          {
            isM: this.isManager ? '1' : '0'
          });
      }
    },
    mounted() {
      // 是否是审核人员
      this.isManager = this.$route.path.indexOf('/clist') != -1 ? true : false;
      this.getMainList();
    },
  };
</script>
<style lang="scss">
  .search-form {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 20px 20px 0;
    margin-top: 20px;

    .el-select,
    .el-input {
      width: 180px;
    }
  }

  .downloadWrapper {
    display: flex;
    justify-content: flex-end;
    background: #fff;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .mainTable {
    .cell {
      font-size: 14px;
    }
  }
</style>