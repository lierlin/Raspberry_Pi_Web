<template>
  <svg class="icon" aria-hidden="true" style="font-size: 500px" :color="rgb">
    <use xlink:href="#icon-dengpaotishi"></use>
  </svg>
  <h2>{{ colorArray }}</h2>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { setup } from "vue-class-component";

export default defineComponent({
  props: {
    colorArray: { type: Array, required: true },
  },
  setup(props) {
    const { colorArray } = props;
    const rgb = computed(() => {
      debugger;
      if (colorArray?.length == 1) {
        if (colorArray.includes("红色")) {
          return "rgb(255,0,0)";
        } else if (colorArray.includes("绿色")) {
          return "rgb(0,255,0)";
        } else if (colorArray.includes("蓝色")) {
          return "rgb(0,0,255)";
        } else {
          return "rgb(255,255,255)";
        }
      }
      if (colorArray?.length == 3) {
        return "rgb(200,200,200)";
      }
      if (colorArray.includes("红色") && colorArray.includes("绿色")) {
        //橙色
        return "rgb(255,255,0)";
      } else if (colorArray.includes("红色") && colorArray.includes("蓝色")) {
        // 紫色
        return "rgb(255,0,255)";
      } else if (colorArray.includes("绿色") && colorArray.includes("蓝色")) {
        //青色
        return "rgb(0,255,255)";
      } else {
        //黑色
        return "rgb(0,0,0)";
      }
    });
    return { rgb };
  },
});
</script>





var s1 ={a,b,c}
