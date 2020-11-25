<template>
    <div class="home">
        <!-- <div class="title">12456796</div> -->
        <homeTitle></homeTitle>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import homeTitle from './home_title.vue';
export default defineComponent({
    name: 'home',
    components: { homeTitle },
    setup(props, context) {
        // 生命周期
        return {};
    },
});
</script>
<style scoped>
.title {
  height: 50px;
  width: 1522px;
  background-color: #364F6B;
}
</style> scoped>

