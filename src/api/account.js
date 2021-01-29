import base from "./base"; // 导入接口域名列表
// import axios from "../assets/utils/"; // 导入http中创建的axios实例
import axios from "../assets/utils/http"; // 导入http中创建的axios实例

// import qs from "qs"; // 根据需求是否导入qs模块

//请求头已经在http.js 中统一设置
const account = {
  //注册
  register(params) {
    return axios.post(`${base.reg}`, params);
  },
  /**
   * 获取后台返回的激活token接口
   * @param { string } params 加密code
   */
  getSN(params) {
    return axios.post(`${base.sn}`, params);
  },
  active(params) {
    return axios.post(`${base.active}`, params);
  },
  // 登录
  login(params) {
    return axios.post(`${base.login}`, params);
  },
  //加密
  encrypt(params, key) {
    return axios.post(`${base.encrypt}?key=${key}`, params);
  },
  //解密
  decrypt(params, key) {
    return axios.post(`${base.decrypt}?key=${key}`, params);
  },
  //反馈接口
  userFeedBack() {
    return axios.post(`${base.userFeedBack}`);
  },
  // 上传图片
  uploadImage() {
    return axios.post(`${base.uploadImage}`);
  },
  // /slb/v7/live
  slbLive(params) {
    return axios.post(`${base.slbLive}`, params);
  },
  // /ad
  adserver(params) {
    return axios.post(`${base.adserver}`, params);
  },
  // 信息上报
  information(params) {
    return axios.post(`${base.information}`, params);
  },
  // 心跳接口
  heartbeat(params) {
    return axios.post(`${base.heartbeat}`, params);
  }
};
export default account;
