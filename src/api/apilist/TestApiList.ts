import { service } from "@/api/config/WebApi";

export function LedOption(parameter: {
  Gpio: number | null;
  Is_High: boolean;
}) {
  return service({
    method: "post",
    params: parameter,
    url: `Led/LedOption`,
  });
}

/* //TODO 登陆接口
export function Login(parameter) {
  return service({
    method: "post",
    data: parameter,
    url: `Login`,
  });
}
//TODO 获取系统菜单
export function Getsysmenu(parameter) {
  return service({
    method: "post",
    params: parameter,
    url: `Getsysmenu`,
  });
} */
