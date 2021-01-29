//通过base.js来管理我们的接口域名
// import axios from "axios";
// if (process.env.NODE_ENV == "development") {
//   axios.defaults.baseURL = "http://192.168.10.128:8088/";
// } else if (process.env.NODE_ENV == "debug") {
//   axios.defaults.baseURL = "http://192.168.10.202:8088/";
// } else if (process.env.NODE_ENV == "production") {
// axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
// axios.defaults.baseURL = "";
const base = {
  reg: "/api/portalCore/register", //注册地址
  sn: "/api/portalCore/snToken", //获取sn
  active: "/api/portalCore/v3/active", //激活接口
  login: "/api/portalCore/v3/login",
  column: "/api/portalCore/v3/getColumnContents", //获取节目单
  ShelveData: "/api/portalCore/v3/getShelveData", //获取栏目上架数据接口（点播、回看栏目用）
  encrypt: "/api/aaa/encryptThreeDESECB", //加密的接口
  decrypt: "/api/aaa/decryptThreeDESECB", //解密接口
  getSlbInfo: "/api/portalCore/v4/getSlbInfo", //获取播放slb信息接口 非免费
  getSlbFreeInfo: "/api/portalCore/v5/getSlbInfo", //获取播放slb信息接口 免费专区
  getLiveData: "/api/portalCore/v3/getLiveData", //获取栏目上架频道信息接口（直播栏目用）v3
  getBTVProgramGuides: "/api/portalCore/v3/getBTVProgramGuides", //获取频道回看节目单接口
  startPlayBTV: "/api/portalCore/v3/startPlayBTV", //回看鉴权接口v3
  startPlayVOD: "/api/portalCore/v4/startPlayVOD", //点播鉴权接口v4
  startPlayLive: "/api/portalCore/v2/startPlayLive", //直播鉴权接口v2
  liveSearchByName: "/api/portalCore/liveSearchByName", //直播搜索
  // 心跳接口
  heartbeat: "/api/portalCore/v3/heartbeat",
  //反馈接口
  userFeedBack: "/api/dc/v2/userFeedBack",
  // // 上传图片
  uploadImage: "/api/dc/fileUpload",
  // slbv7 cnd请求
  slbLive: "/slb/v7/live",
  adserver: "/api/adserver/v2/get_content",
  information: "/tdc/v2/report"
};

export default base;
