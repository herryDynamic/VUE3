<!--
*@描述:websocket 本地
*@版本:V1.0
*@作者:白爱民
*@Date:2020年1月22日11:00:06
*@最后修改人:herry
*@LastEditTime:2020年1月22日11:00:12
*@说明：本地测试和nodejs打通双websocket-->

<template>
  <div>
    <input type="text" id="input" />
    <div id="inner"></div>

    <!-- <div id="container">

    </div> -->
    <div v-if="websocketson1IsShow">
      <keep-alive>
        <container :txtDataP="txtDataSon1"></container>
      </keep-alive>
    </div>

    <div v-if="websocketson2IsShow">
      <keep-alive>
        <container :txtDataP="txtDataSon2"></container>
      </keep-alive>
    </div>
  </div>
</template>   

<style lang="stylus" scoped></style>

<script>
import container from "../yzl_com/websocket_son1.vue";
import { defineComponent, onMounted, reactive } from "vue";
export default defineComponent({
  components: { container },

  setup() {
    const data = reactive({
      ws: "",
      websocketson1IsShow: false,
      websocketson2IsShow: false,
      txtDataSon1: "",
      txtDataSon2: "",
    });

    onMounted(() => {
      start();
      main();
    });

    function start() {
      // 判断是开启websocket
      if (window.WebSocket) {
        data.ws = new WebSocket("ws://127.0.0.1:4200");

        data.ws.onopen = function () {
          // 开启
          console.log("websocket starting ");
          document.getElementById("inner").innerHTML = "starting";
        };

        debugger;

        data.ws.onclose = function () {
          // 关闭
          console.log("webscoket close");
        };

        data.ws.onmessage = function (e) {
          // 服务器返回
          document.getElementById("inner").innerHTML = e.data;
        };
      }
    }
    function main() {
      const input = document.getElementById("input");
      const debounceAxios = debounce(axios, 500);
      input.addEventListener("input", function (e) {
        debounceAxios(e.target.value);
      });
    }

    function indexOf(content, any) {
      const a = content.indexOf(any) != -1;
      console.log(a);
      if (a == true) {
        data.txtData = any;
        data.websocketson1IsShow = true;
      }
    }

    function indexOf2(content, any) {
      const a = content.indexOf(any) != -1;
      console.log(a);
      if (a == true) {
        data.txtData = any;
        data.websocketson2IsShow = true;
      }
    }

    // 发送请求，websocket
    function axios(content) {
      // var txt = document.getElementById("input").value;
      data.ws.send(content);

      indexOf(content, "123");
      indexOf2(content, "456");

      if (content == "") {
        data.websocketson2IsShow = false;
        // this.removeChild();
      }
    }

    // 防抖
    function debounce(fun, delay) {
      return function (args) {
        const _this = this;
        const _arg = args;
        clearTimeout(fun.id);
        fun.id = setTimeout(function () {
          fun.call(_this, _arg);
        }, delay);
      };
    }

    return {
      data,
    };
  },
});
</script>