import router from "@/config/plugin/router";
import store from "@/config/plugin/store";
import vant from "@/config/plugin/vant";
import antd from "@/config/plugin/antd";
export default (app: any) => {
  app.use(router);
  app.use(store);
  app.use(vant);
  app.use(antd);

  // 全局混入
  app.mixin({
    beforeCreate() {
      console.log("我是全局mixin");
    },
    methods() {
      /*   test(str:String){
       alert(str);
      } */
    },
  });

  // 假设 test 是外部引入的方法
  /*  const test = (scriptUrl: String) => {
    interface iconsvue {
      scriptUrl: String;
    }
    let obj: iconsvue = {
      scriptUrl: scriptUrl,
    };
    
    return createFromIconfontCN(obj);
  }; */
  // 使用 symbol 方式
  /*   app.provide(TEST_SYMBOL, test); */
  // 使用自定义字符串方式
  // app.provide("$test", test);
};
