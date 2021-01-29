const adParams = function () {
  return {
    apk_versioncode: 10101,
    ad_type: "app_screen",
    osd_language: "pt",
    pkg: "com.global.brasiltvweb"
  };
};
// const adParams = function () {
//   return {
//     apk_versioncode: 10101,
//     ad_type: "app_screen",
//     osd_language: "pt",
//     pkg: "com.global.brasiltvweb"
//   };
// };
const commonParams = function () {
  return {
    appVer: "10101",
    apkVersion: "10101",
    appId: "com.global.brasiltvweb",
    // apkVersion: "55555",
    // appId: "com.mobile.brasiltvmobile",
    // appVer: "55555",
    sysVersion: "10",
    hardwareInfo: "qcom",
    model: "MI 8",
    product: "dipper",
    loginType: "3",
    cpu: "armeabi-v7a",
    authCode: "unknown",
    authVersion: "v3",
    appLanguage: "pt",
    lang: "pt",
  }
}
const snParams = function () {
  return {
    loginType: "1",
    appLanguage: "pt",
    // apkVersion: "55555",
    // appId: "com.mobile.brasiltvmobile",
    apkVersion: "10101",
    appId: "com.global.brasiltvweb",
    sysVersion: "10",
    hardwareInfo: "qcom",
    model: "MI 8",
    product: "dipper",
    cpu: "armeabi-v7a",
  };
};
const activeParams = function () {
  // 激活接口参数
  return {
    authCode: "unknown",
    authVersion: "v3",
    macAddr: "00:E2:47:2F:B7:00",
    reserve1: "00E2472FB700",
  };
};
const columnParams = function (
  //获取栏目信息
  pageNum,
  pageSize,
  specialFlag,
  // columnId,
  numDisplay
) {
  return {
    pageNum: pageNum || 1,
    pageSize: pageSize || 1000,
    specialFlag: specialFlag || "",
    numDisplay: numDisplay || ""
  };
};
const ShelveDataParams = function (
  //获取栏目上架数据接口（点播、回看栏目用）
  userToken,
  userId,
  portalCode,
  columnId,
  columnType,
  // pageSize,
  // pageNum
) {
  return {
    userToken: userToken,
    userId: userId,
    portalCode: portalCode,
    columnId: columnId,
    columnType: columnType,
    // pageSize: pageSize || 20,
    // pageNum: pageNum || 2,
  };
};

const startPlayVODParams = function (
  userToken,
  userId,
  portalCode,
  type,
  columnId,
  contentId,
  url
) {
  return {
    userToken: userToken,
    userId: userId,
    portalCode: portalCode,
    type: type,
    columnId: columnId,
    contentId: contentId,
    playType: "0",
    startTime: 0,
    trySee: 0,
    url: url,
  };
};
const getSlbInfoParams = function () {
  //获取播放slb信息接口
  return {

    type: "live",

  };
};

const getSlbFreeInfoParams = function () {
  //获取播放slb信息接口免费专区
  return {
    type: "live",
  };
};
// v3获取栏目上架频道信息接口（ 直播栏目用）
const getLiveDataParams = function (
  pageNum,
  pageSize
) {
  return {
    // dataVersion: "",
    pageNum: pageNum || 1,
    pageSize: pageSize || 1000,
  };
};
const getBTVProgramGuidesParams = function (
  userToken,
  userId,
  portalCode,
  channelCode
) {
  return {
    userToken: userToken,
    userId: userId,
    portalCode: portalCode,
    channelCode: channelCode,
    loginType: "3",
    appLanguage: "pt",
    apkVersion: "55555",
    appId: "com.mobile.brasiltvmobile",
    sysVersion: "5.1.1",
    hardwareInfo: "amlogic",
    model: "Hbox-sea",
    product: "sw01",
    cpu: "armeabi-v7a"
  };
};
const startPlayBTVParams = function (
  userToken,
  userId,
  portalCode,
  columnId,
  type,
  channelCode,
  contentId,
  url
) {
  return {
    userToken: userToken,
    userId: userId,
    portalCode: portalCode,
    columnId,
    type: type || 0,
    channelCode: channelCode,
    contentId: contentId,
    url: url,
    loginType: "3",
    appLanguage: "pt",
    apkVersion: "55555",
    sysVersion: "5.1.1",
    appId: "com.mobile.brasiltvmobile",
    hardwareInfo: "amlogic",
    model: "Hbox-sea",
    product: "sw01",
    cpu: "armeabi-v7a"
  };
};
const startPlayLive = function () {
  return {
    type: 0, //请求播放类型 0：栏目下播放 非0：非栏目下播放（为0时，以请求参数中的columnId的一级栏目关联的产品进行鉴权，非0时，根据门户的第一个一级栏目关联的产品鉴权）
  };
};

const loginParams = function (
  accountType,
  userName,
  password,
  sn
) {
  return {
    accountType: accountType,
    userName: userName,
    password: password,
    sn: sn,
    loginType: "3",
    appLanguage: "pt",
    apkVersion: "55555",
    sysVersion: "5.1.1",
    appId: "com.mobile.brasiltvmobile",
    hardwareInfo: "amlogic",
    model: "Hbox-sea",
    product: "sw01",
    cpu: "armeabi-v7a",
    macAddr: "08:00:20:0A:8C:6D" //随便写的
  };
};

//liveSearchByName

const liveSearchByNameParams = function (
  value,
  portalCode,
  sn,
  userToken,
  userId
) {
  return {
    userToken: userToken,
    userId: userId,
    sn: sn,
    portalCode: portalCode,
    value: value,
    // pageSize:10 //非必填
    // pageNum:1 //非必填
    loginType: "3",
    appLanguage: "pt",
    apkVersion: "55555",
    sysVersion: "5.1.1",
    appId: "com.mobile.brasiltvmobile",
    hardwareInfo: "amlogic",
    model: "Hbox-sea",
    product: "sw01",
    cpu: "armeabi-v7a",
  };
};


export default {
  commonParams,
  snParams,
  activeParams,
  columnParams,
  ShelveDataParams,
  startPlayVODParams,
  getSlbInfoParams,
  getSlbFreeInfoParams,
  getLiveDataParams,
  getBTVProgramGuidesParams,
  startPlayBTVParams,
  startPlayLive,
  loginParams,
  liveSearchByNameParams,
  adParams
};
