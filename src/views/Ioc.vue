<template>
  <div class="icons-list">
    <!--  <icon-font type="icon-tuichu" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" /> -->
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-030-owl"></use>
    </svg>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>