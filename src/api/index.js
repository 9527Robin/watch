// 其他模块的接口……
import account from "./account.js";
import column from './column.js'

// 导出接口

export default {
  account,
  column,
  //反馈接口
  userFeedBack: () => `/api/dc/v2/userFeedBack`,
  // 上传图片
  uploadImage: () => '/api/dc/fileUpload',
  // ad
  adserver: () => ' /api/adserver/v2/get_content',
  // livea: () => '/live'
  // // 查询信用卡分期----测试
  // getInstallments: () => '/api/portalCore/package/getInstallments',

  // // 获取sntk接口 /api/portalCore / snToken
  // snToken: () => '/api/portalCore/snToken',
  // // 获取栏目上架频道信息接口（ 直播栏目用）
  // getLiveData: () => '/api/portalCore/v3/getLiveData',
  // // v3获取栏目信息接口
  // getColumnContents: () => '/api/portalCore/v3/getColumnContents',
  // // v4获取slbInfo信息接口
  // getInstallments: () => '/api/portalCore/v4/getSlbInfo',
  // // WEB端 - 获取用户开通权益接口
  // getPlans: () => '/api/portalCore/getPlans',
};
