import base from "./base"; // 导入接口域名列表
import axios from "../assets/utils/http"; // 导入http中创建的axios实例
// import qs from "qs"; // 根据需求是否导入qs模块

const column = {
  columnList(params) {
    return axios.post(`${base.column}`, params);
  },
  ShelveData(params) {
    return axios.post(`${base.ShelveData}`, params);
  },
  startPlayVOD(params) {
    return axios.post(`${base.startPlayVOD}`, params);
  },
  getSlbInfo(params) {
    return axios.post(`${base.getSlbInfo}`, params);
  },
  getSlbFreeInfo(params) {
    return axios.post(`${base.getSlbFreeInfo}`, params);
  },
  // v3获取栏目上架频道信息接口（ 直播栏目用）
  getLiveData(params) {
    return axios.post(`${base.getLiveData}`, params);
  },
  getBTVProgramGuides(params) {
    return axios.post(`${base.getBTVProgramGuides}`, params);
  },
  startPlayBTV(params) {
    return axios.post(`${base.startPlayBTV}`, params);
  },
  startPlayLive(params) {
    return axios.post(`${base.startPlayLive}`, params);
  },
  login(params) {
    return axios.post(`${base.login}`, params);
  },
  liveSearchByName(params) {
    return axios.post(`${base.liveSearchByName}`, params);
  }

};
export default column;
