<template>
  <div class="headerWrapper">
    <div></div>
    <div class="rightHeader">
      <span class="fullScreen li-icon li-icon3_6" @click="fullScreen"></span>
      <el-popover
        title="配置"
        popper-class="systemConfig"
        placement="bottom-end"
      >
        <el-form label-width="80px" size="mini">
          <el-row>
            <el-col :span="12">
              <el-form-item label="字体大小">
                <el-input-number
                  v-model="form.fontSize"
                  @change="setFontSize"
                  :min="16"
                  :max="50"
                  label="字体大小"
                >
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年级">
                <el-select v-model="form.level" placeholder="年级">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                  <el-option label="3" value="3"></el-option>
                  <el-option label="4" value="4"></el-option>
                  <el-option label="5" value="5"></el-option>
                  <el-option label="6" value="6"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="背景颜色">
                <el-color-picker
                  v-model="form.bgColor"
                  @change="setBgColor"
                ></el-color-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="字体颜色">
                <el-color-picker
                  v-model="form.color"
                  @change="setColor"
                ></el-color-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="汉字数量">
                <el-input
                  v-model="form.wordNum"
                  @change="setWordNum"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="词语数量">
                <el-input
                  v-model="form.termNum"
                  @change="setTermNum"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="成语数量">
                <el-input
                  v-model="form.idiomNum"
                  @change="setIdiomNum"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="古诗数量">
                <el-input
                  v-model="form.storyNum"
                  @change="setStoryNum"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="英语词数">
                <el-input
                  v-model="form.eImgNum"
                  @change="setEImgNum"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="学习程度">
                <el-radio v-model="form.studied" label="">全部</el-radio>
                <el-radio v-model="form.studied" label="1">已识</el-radio>
                <el-radio v-model="form.studied" label="0">未识</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="自动播放">
                <el-switch v-model="autoplay2"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否轮播">
                <el-switch v-model="loop2"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label-width="0">
            <el-button type="primary" size="mini" @click="initConfig"
              >初始化</el-button
            >
            <el-button type="primary" size="mini" @click="updateConfig"
              >保存</el-button
            >
            <el-button type="primary" size="mini" @click="cleanStudyStatus"
              >重置学习状态</el-button
            >
          </el-form-item>
        </el-form>
        <span
          class="li-icon li-icon4_1"
          slot="reference"
          @click="visible = !visible"
        ></span>
      </el-popover>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
export default {
  name: "systemTool",
  data() {
    return {
      visible: false,
      autoplay2: false,
      loop2: false,
      form: {
        level: "1",
        studied: "",
        bgColor: "#ddd",
        fontSize: "30",
        color: "#333",
        autoplay: "0",
        loop: "0",
      },
    };
  },
  computed: {
    ...mapGetters([
      "wordNum",
      "termNum",
      "idiomNum",
      "storyNum",
      "eImgNum",
      "configId",
      "level",
      "studied",
      "bgColor",
      "fontSize",
      "color",
      "autoplay",
      "loop",
    ]),
  },
  mounted() {
    this.form = {
      wordNum: this.wordNum,
      termNum: this.termNum,
      idiomNum: this.idiomNum,
      storyNum: this.storyNum,
      eImgNum: this.eImgNum,
      level: this.level,
      studied: this.studied,
      bgColor: this.bgColor,
      fontSize: this.fontSize,
      color: this.color,
      autoplay: this.autoplay,
      loop: this.loop,
    };
    this.autoplay2 = this.autoplay == "1" ? true : false;
    this.loop2 = this.loop == "1" ? true : false;
  },
  watch: {
    autoplay2(val) {
      if (val) this.form.autoplay = "1";
      else this.form.autoplay = "0";
    },
    loop2(val) {
      if (val) this.form.loop = "1";
      else this.form.loop = "0";
    },
  },
  methods: {
    // 设置单次学习数量
    setWordNum(val) {
      this.$store.commit("SET_WORD_NUM", val);
    },
    // 设置单次学习数量
    setTermNum(val) {
      this.$store.commit("SET_TERM_NUM", val);
    },
    // 设置单次学习数量
    setIdiomNum(val) {
      this.$store.commit("SET_IDIOM_NUM", val);
    },
    // 设置单次学习数量
    setStoryNum(val) {
      this.$store.commit("SET_STORY_NUM", val);
    },
    // 设置单次学习数量
    setEImgNum(val) {
      this.$store.commit("SET_EIMG_NUM", val);
    },
    // 设置字体大小
    setFontSize(val) {
      this.$store.commit("SET_FONT_SIZE", val);
    },
    // 设置背景颜色
    setBgColor(val) {
      this.$store.commit("SET_BG_COLOR", val);
    },
    // 设置字体颜色
    setColor(val) {
      this.$store.commit("SET_COLOR", val);
    },
    // 设置学习度
    setStudied(val) {
      this.$store.commit("SET_STUDIED", val);
    },
    // 设置自动播放
    setAutoplay(val) {
      this.$store.commit("SET_AUTOPLAY", val);
    },
    // 设置是否轮播
    setLoop(val) {
      this.$store.commit("SET_LOOP", val);
    },
    initConfig() {
      this.$post(
        "userConfigAdd",
        {
          userId: "yangyang",
          level: "1",
          studied: "",
          bgColor: "#ddd",
          fontSize: "30",
          color: "#333",
          autoplay: "0",
          loop: "0",
        },
        (data) => {},
        (err) => {}
      );
    },
    updateConfig() {
      this.$post(
        "userConfigUpdate",
        { id: this.configId, ...this.form },
        (data) => {},
        (err) => {}
      );
    },
    cleanStudyStatus() {
      this.$post(
        "cleanStudyStatus",
        {},
        (data) => {},
        (err) => {}
      );
    },
    fullScreen(e) {
      this.$store.commit("SET_IS_FULL", !screenfull.isFullscreen);
      screenfull.toggle();
    },
  },
};
</script>
<style lang="scss">
.systemConfig {
  max-height: 100%;
  overflow: auto;
  max-width: 40rem;
}
</style>
<style lang="scss" scoped>
.headerWrapper {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: .6rem;
  padding-left: 1rem;
  border-bottom: solid 1px green;
  color: green;
  .fullScreen {
    margin-right: 1rem;
  }
  .rightHeader {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1rem;
  }
}

.floatBtn {
  background: lightcyan;
  height: 2.5rem;
  display: flex;
  justify-content: flex-end;
}
</style>
