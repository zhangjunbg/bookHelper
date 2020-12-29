<template>
  <div class="floatBtn">
    <el-popover placement="bottom" title="配置" width="400" trigger="manual" v-model="visible">
      <el-form label-width="80px">
        <el-form-item label="字体大小">
          <el-input-number v-model="form.fontSize" @change="setFontSize" :min="16" :max="50" label="字体大小"></el-input-number>
        </el-form-item>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="form.bgColor" @change="setBgColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker v-model="form.color" @change="setColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="学习程度">
          <el-radio v-model="form.studied" label="">全部</el-radio>
          <el-radio v-model="form.studied" label="1">已识</el-radio>
          <el-radio v-model="form.studied" label="2">未识</el-radio>
        </el-form-item>
        <el-form-item label="自动播放">
          <el-switch v-model="form.autoplay"></el-switch>
        </el-form-item>
        <el-form-item label="是否轮播">
          <el-switch v-model="form.loop"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="initConfig">初始化</el-button>
          <el-button type="primary" size="mini" @click="updateConfig">保存</el-button>
        </el-form-item>
      </el-form>
      <span class="el-icon-setting" slot="reference" @click="visible = !visible"></span>
    </el-popover>
  </div>
</template>
<script>
  import "./header.css";
  import { mapGetters } from 'vuex'
  export default {
    name: "systemTool",
    data() {
      return {
        visible: false,
        form: {
          level: "1",
          studied: "",
          bgColor: "#ddd",
          fontSize: "30",
          color: "#333",
          autoplay: '0',
          loop: '0'
        }
      }
    },
    computed: {
      ...mapGetters([
        'configId',
        'level',
        'studied',
        'bgColor',
        'fontSize',
        'color',
        'autoplay',
        'loop'
      ])
    },
    mounted() {
      this.form = {
        level: this.level,
        studied: this.studied,
        bgColor: this.bgColor,
        fontSize: this.fontSize,
        color: this.color,
        autoplay: this.autoplay,
        loop: this.loop
      }
    },
    methods: {
      // 设置字体大小
      setFontSize(val) {
        this.$store.commit('SET_FONT_SIZE', val);

      },
      // 设置背景颜色
      setBgColor(val) {
        this.$store.commit('SET_BG_COLOR', val);
      },
      // 设置字体颜色
      setColor(val) {
        this.$store.commit('SET_COLOR', val);
      },
      // 设置学习度
      setStudied(val) {
        this.$store.commit('SET_STUDIED', val);
      },
      // 设置自动播放
      setAutoplay(val) {
        this.$store.commit('SET_AUTOPLAY', val);
      },
      // 设置是否轮播
      setLoop(val) {
        this.$store.commit('SET_LOOP', val);
      },
      initConfig() {
        this.$post('userConfigAdd', {
          userId: 'yangyang',
          level: "1",
          studied: "",
          bgColor: "#ddd",
          fontSize: "30",
          color: "#333",
          autoplay: '0',
          loop: '0'
        }, data => {

        }, err => {

        })
      },
      updateConfig() {
        this.$post('userConfigUpdate', {id:this.configId, ...this.form}, data => {

        }, err => {

        })
      }
    },
  };
</script>
<style lang="scss" scoped>
  .floatBtn {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    z-index: 2;
  }
</style>