<template>
  <div class="bookContainer">
    <el-form label-width="80px">
      <el-form-item label="书名" prop="bookName">
        <el-input v-model="editForm.bookName"></el-input>
      </el-form-item>
      <el-form-item label="目录" prop="bookCatlog">
        <el-input v-model="editForm.bookCatlog"></el-input>
      </el-form-item>
      <el-form-item label="路径" prop="catPaths">
        <el-input v-model="editForm.catPaths"></el-input>
      </el-form-item>
      <el-form-item label="内容"" prop=" contentReg">
        <el-input v-model="editForm.contentReg"></el-input>
      </el-form-item>
      <el-form-item label="间隔" prop="interval">
        <el-input v-model="editForm.interval"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>提交</el-button>
        <el-button @click="handleDownload">下载</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>

</style>
<script type="text/babel">
  export default {
    name: "bookMaker",
    data() {
      return {
        editForm: {
          bookName: "",
          bookCatlog: "",
          catPaths: "",
          contentReg: "",
          interval: 200
        }
      }
    },
    methods:{
      handleDownload(){
        // this.$get()
      }
    }
  }
</script>