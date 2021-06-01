<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">
        <span style="font-size: 2em; margin-left: 80px">
          <svg
            @mousemove="logo_mousemove()"
            @mouseout="logo_mouseout()"
            class="icon rotate"
            aria-hidden="true"
          >
            <use xlink:href="#icon-fengche1"></use>
          </svg>
          <svg
            ref="fengtong"
            class="icon"
            id="fengtong"
            style="font-size: 1em; display: none"
          >
            <use xlink:href="#icon-fengtong"></use>
          </svg>
        </span>
      </div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <svg class="icon rotate" aria-hidden="true" style="font-size: 26px">
            <use xlink:href="#icon-dengpaoB"></use>
          </svg>
          <svg class="icon" aria-hidden="true" style="font-size: 26px">
            <use xlink:href="#icon-wind"></use>
          </svg>

          <span class="nav-text">LED</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="height: 100vh">
        <a-card hoverable style="height: 100vh">
          <router-view />
        </a-card>
      </a-layout-content>
      <!--   <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };
    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };
    //获取吹风机的元素
    const fengtong = ref<HTMLElement>();
    return {
      selectedKeys: ref<string[]>(["4"]),
      onCollapse,
      onBreakpoint,
      fengtong,
    };
  },
  methods: {
    logo_mousemove() {
      this.fengtong?.style.setProperty("display", "inline-block");
    },
    logo_mouseout() {
      this.fengtong?.style.setProperty("display", "none");
    },
  },
});
</script>
<style>
.rotate:hover {
  transform: rotate(666turn);
  transition: all 59s cubic-bezier(0.34, 0, 0.84, 1);
}
</style>
