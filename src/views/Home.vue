<template>
  <a-card hoverable>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Gpio">
        <a-radio-group v-model:value="formState.Gpio" button-style="solid">
          <a-radio-button value=8>红灯灯~</a-radio-button>
          <a-radio-button value=10>绿灯灯~</a-radio-button>
          <a-radio-button value=12>蓝灯灯~</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="开关">
        <a-switch v-model:checked="formState.Is_High" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button @click="onSubmit" type="primary"> 🔌 </a-button>
      </a-form-item>
    </a-form>

    <!--  <a-row>
      <a-col :span="12">
        <a-input v-model:value="value" placeholder="Basic usage"
      /></a-col>
      <a-col :offset="4" :span="8"
        ><a-button type="primary"> 🔌 </a-button></a-col
      >
    </a-row> -->
  </a-card>
</template>
<script lang="ts">
import { defineComponent, reactive, UnwrapRef, toRaw } from "vue";
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

