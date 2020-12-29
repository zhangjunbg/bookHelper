<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="级别" prop="level">
            <el-select v-model="ruleForm.level" placeholder="请选择年级">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
                <el-option label="5" value="5"></el-option>
                <el-option label="6" value="6"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="字内容" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: "word",
        data() {
            return {
                ruleForm: {
                    level: '',
                    content: ''
                },
                rules: {
                    level: [
                        { required: true, message: '请选择级别', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '字中间请用\',、\'分隔', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$post('wordMultiAdd', this.ruleForm, data => {

                        }, err => {

                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    };
</script>