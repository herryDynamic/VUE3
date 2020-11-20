<template>
  <div>
    <todoList :title="title_yzl"></todoList>
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
    const data = reactive({ conment: "欢迎来到御芝林", title_yzl: 0 });

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