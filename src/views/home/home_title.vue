<template>
  <div class="home_title">
    <el-container>
      <el-header height="50" class="header_data">
        <div class="header_logo">
          <div class="header_logo_img">
            <img
              height="37"
              width="37"
              src="../../assets/home/logo.svg"
              alt=""
            />
          </div>
          <div class="header_logo_name">CRM系统管理中心</div>
        </div>

        <div class="header_info">
          <div class="header_info_db">待办</div>
          <div class="header_info_db">公告</div>
          <div class="header_info_db">站内信</div>
        </div>

        <div class="header_end">
          <div class="header_end_admin header_end_info">admin</div>
          <div class="header_end_setting header_end_info">[设置]</div>
          <div class="header_end_quest header_end_info">[退出]</div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="160">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "home_title",
  components: {},
  setup(props, context) {
    // 生命周期
    return {};
  },
});
</script>
<style lang="scss" scoped>
.header_logo {
  margin: auto 20px auto 20px;
  position: absolute;
  left: 0.6%;
  top: 6.5px;
}
.header_logo_img {
  // border-radius: 15px;
  // height: auto;
  display: inline-block;
  margin-right: 20px;
}
.header_logo_name {
  // margin: auto 0px auto 0px;
  display: inline-block;
  color: #ffffff;
  font-size: 16px;
}
.header_info {
  position: absolute;
  left: 60%;
}

.header_info_db {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
  color: #ffffff;
  font-size: 14px;
}
.header_end_info {
  display: inline-block;
  margin-top: 15px;
  margin-left: 10px;
  color: #ffffff;
  font-size: 14px;
}

.header_end {
  position: absolute;
  left: 80%;
}

// home抬头内容
.header_data {
  position: relative;
}
.el-header {
  background-color: #364f6b;
  color: #333;
  text-align: center;
  height: 50px;
  min-width: 1522px;
  width: auto;
}

// home侧边栏内容

.el-aside {
  background-color: #eceff4;
  color: #333;
  text-align: center;
  width: 160px;
  line-height: 2110px;
}

// home主要内容

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 1362px;
  width: 1281px;
}

// home架子其他内容

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

