<template>
  <div>
    <todoList :title="title_yzl"></todoList>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, defineComponent } from "vue";
import todoList from "../../components/todo-list.vue";

export default defineComponent({
  components: {
    todoList,
  },
  setup(props) {
    const data = reactive({ conment: "欢迎来到御芝林", title_yzl: 0 }); 

    onMounted(() => {
    });
    return data;
  },
});
</script>