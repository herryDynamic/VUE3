<template>
  <div>
    <todoList :title="title_yzl"></todoList>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, defineComponent } from "vue";
import todoList from "../../components/todo-list.vue";

import { GETTREEDATA, three } from "../../api/nav";

export default defineComponent({
  components: {
    todoList,
  },
  setup(props) {
    const data = reactive({
      conment: "欢迎来到御芝林",
      title_yzl: 0,
    });

    onMounted(() => {
      console.log(import.meta.env.VITE_APP_AGE);

      console.log(import.meta);

      // GETTREEDATA(123).then((res) => {
      //   console.log(res);
      // });
      // three("123").then((res) => {
      //   console.log(res);
      // });
    });
    return data;
  },
});
</script>