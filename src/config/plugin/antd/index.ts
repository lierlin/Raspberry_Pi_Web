import "ant-design-vue/dist/antd.css";
import { createFromIconfontCN } from "@ant-design/icons-vue";
import {
  Button,
  Layout,
  Menu,
  Card,
  Input,
  Row,
  Col,
  Form,
  Switch,
  Radio
} from "ant-design-vue";
export default (app: any) => {
  //全局组件iocn
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2562646_s9rayb1nidf.js",
  });
  app.component("IconFont", IconFont);
  app.use(Button);
  app.use(Layout);
  app.use(Menu);
  app.use(Card);
  app.use(Input);
  app.use(Row);
  app.use(Col);
  app.use(Form);
  app.use(Switch);
  app.use(Radio);
  
};
