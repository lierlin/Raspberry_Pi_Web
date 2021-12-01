<template>
  <a-row>
    <a-col :span="10" center> <Lamp :colorArray="color"></Lamp></a-col>
    <a-col :span="14">
      <a-collapse accordion>
        <a-collapse-panel key="1" header="三色灯">
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
                <a-radio-button value="8">红灯灯</a-radio-button>
                <a-radio-button value="10">绿灯灯</a-radio-button>
                <a-radio-button value="12">蓝灯灯</a-radio-button>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="开关">
              <a-switch v-model:checked="formState.Is_High" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
              <a-button @click="onSubmit" type="primary"> 🔌 </a-button>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="警灯" :disabled="false">
          <a-form :model="alarmlampformState">
            <a-form-item label="开关">
              <a-switch v-model:checked="alarmlampformState.Is_High" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
              <a-button @click="onAlarmlampSubmit" type="primary">
                🔌
              </a-button>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="文本输入转摩斯电码" :disabled="false">
          <a-form :model="Morseform">
            <a-form-item label="明文">
              <a-input v-model:value="Morseform.morseMsg" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
              <a-button @click="onMorseCodeSubmit" type="primary">
                🔌
              </a-button>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
        <a-collapse-panel key="4" header="风扇控制" :disabled="false">
          <a-form :model="fanformState">
            <a-form-item label="开关">
              <a-switch v-model:checked="fanformState.Is_High" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 4 }">
              <a-button @click="onFanSubmit" type="primary"> 🔌 </a-button>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
      </a-collapse>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, reactive, UnwrapRef, toRaw, ref, unref } from "vue";
import { LedOption, MorseCode } from "@/api/apilist/TestApiList";
import Lamp from "./Lamp.vue";

interface FormState {
  Gpio: number | null;
  Is_High: boolean;
}
export default defineComponent({
  setup() {
    let color: Array<string> = reactive([]);

    //#region 三色灯
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
    //#endregion
    //#region 警灯
    const alarmlampformState: UnwrapRef<FormState> = reactive({
      Gpio: null,
      Is_High: false,
    });

    function invoke(
      params: { Gpio: number; Is_High: boolean },
      duration: number
    ) {
      return new Promise(async (resolve, reject) => {
        try {
          const ref = await LedOption(params);
          setTimeout(() => {
            if (params.Gpio == 8 && params.Is_High) {
              color.includes("红色") == false ? color.push("红色") : null;
            } else if (params.Gpio == 8 && !params.Is_High) {
              color.splice(
                color.findIndex((item) => item === "红色"),
                1
              );
            } else if (params.Gpio == 12 && params.Is_High) {
              color.includes("蓝色") == false ? color.push("蓝色") : null;
            } else if (params.Gpio == 12 && !params.Is_High) {
              color.splice(
                color.findIndex((item) => item === "蓝色"),
                1
              );
            }
            resolve(ref);
          }, duration);
        } catch (error) {}
      });
    }

    const onAlarmlampSubmit = async () => {
      let alarmlampform = toRaw(alarmlampformState);
      let paramsArr = [
        {
          Gpio: 8,
          Is_High: true,
        },
        {
          Gpio: 8,
          Is_High: false,
        },
        {
          Gpio: 12,
          Is_High: true,
        },
        {
          Gpio: 12,
          Is_High: false,
        },
      ];

      while (alarmlampform.Is_High) {
        for (const params of paramsArr) {
          console.log(1);

          const res = await invoke(params, 100);
          // res 接口返回值
        }
      }
    };
    //#endregion
    //#region 摩斯电码

    let Morseform = reactive({ morseMsg: "" });
    let onMorseCodeSubmit = () => {
      MorseCode(Morseform).then((ref) => {
        debugger;
      });
    };
    //#endregion

    //#region 风扇
    const fanformState: UnwrapRef<FormState> = reactive({
      Gpio: null,
      Is_High: false,
    });
    const onFanSubmit = () => {
      let fanformState1 = toRaw(fanformState);
      fanformState1.Gpio = 22;
      LedOption(fanformState1).then((ref) => {
        debugger;
        if (!ref.data.requstResult) {
          return;
        }
      });
    };
    //#endregion

    return {
      formState,
      onSubmit,
      color,
      alarmlampformState,
      onAlarmlampSubmit,
      Morseform,
      onMorseCodeSubmit,
      onFanSubmit,
      fanformState,
    };
  },
  components: {
    Lamp,
  },
});
</script>
<style lang="less" scoped>
#card {
  width: 100%;
}
</style>

