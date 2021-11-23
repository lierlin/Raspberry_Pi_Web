<template>
  <a-row>
    <a-col> <Lamp :colorArray="color"></Lamp></a-col>
    <a-col>
      <a-row>
        <a-col>
          <a-card hoverable title="三色灯" size="small">
            <a-form
              :model="formState"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-item label="Gpio">
                <a-radio-group
                  v-model:value="formState.Gpio"
                  button-style="solid"
                >
                  <a-radio-button value="8">红灯灯~</a-radio-button>
                  <a-radio-button value="10">绿灯灯~</a-radio-button>
                  <a-radio-button value="12">蓝灯灯~</a-radio-button>
                </a-radio-group>
              </a-form-item>

              <a-form-item label="开关">
                <a-switch v-model:checked="formState.Is_High" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
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
        </a-col>
        <a-col>
          <a-card hoverable title="三色灯" size="small">
            <a-form
              :model="formState"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-item label="Gpio">
                <a-radio-group
                  v-model:value="formState.Gpio"
                  button-style="solid"
                >
                  <a-radio-button value="8">红灯灯~</a-radio-button>
                  <a-radio-button value="10">绿灯灯~</a-radio-button>
                  <a-radio-button value="12">蓝灯灯~</a-radio-button>
                </a-radio-group>
              </a-form-item>

              <a-form-item label="开关">
                <a-switch v-model:checked="formState.Is_High" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
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
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, reactive, UnwrapRef, toRaw } from "vue";
import { LedOption } from "@/api/apilist/TestApiList";
import Lamp from "./Lamp.vue";

interface FormState {
  Gpio: number | null;
  Is_High: boolean;
}
export default defineComponent({
  setup() {
    let color: Array<string> = reactive([]);
    const formState: UnwrapRef<FormState> = reactive({
      Gpio: null,
      Is_High: false,
    });
    const onSubmit = () => {
      let formState1 = toRaw(formState);
      LedOption(formState1).then((ref) => {
        debugger;
        if (!ref.data.requstResult) {
          GpioConvColor(formState);
          return;
        }
        GpioConvColor(formState);
      });
      const GpioConvColor = (formState: UnwrapRef<FormState>) => {
        if (formState.Gpio == 8) {
          if (formState.Is_High) {
            return color.includes("红色") == false ? color.push("红色") : null;
          }
          color.splice(
            color.findIndex((item) => item === "红色"),
            1
          );
        } else if (formState.Gpio == 10) {
          if (formState.Is_High) {
            return color.includes("绿色") == false ? color.push("绿色") : null;
          }
          color.splice(
            color.findIndex((item) => item === "绿色"),
            1
          );
        } else if (formState.Gpio == 12) {
          if (formState.Is_High) {
            return color.includes("蓝色") == false ? color.push("蓝色") : null;
          }
          color.splice(
            color.findIndex((item) => item === "蓝色"),
            1
          );
        }
      };
    };

    return {
      formState,
      onSubmit,
      color,
    };
  },
  components: {
    Lamp,
  },
});
</script>

