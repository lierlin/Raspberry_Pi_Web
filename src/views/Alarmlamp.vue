<template>
  <div class="Alarmlamp">
    <a-card hoverable title="警灯">
      <a-icon type="step-forward" />
      <a-icon type="sync" />
      <a-button type="primary"> 🔌 </a-button>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, UnwrapRef, toRaw } from "vue";
import "./Lamp";
import { LedOption } from "@/api/apilist/TestApiList";
interface FormState {
  Gpio: number | null;
  Is_High: boolean;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      Gpio: null,
      Is_High: false,
    });
    const onSubmit = () => {
      let formState1 = toRaw(formState);
      LedOption(formState1).then((ref) => {
        debugger;
      });
    };
    return {
      formState,
      onSubmit,
    };
  },
});
</script>

