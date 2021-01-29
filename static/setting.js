const bookmarkType = [
  {
    // 类型名称
    name: "公司",
    // 背景颜色
    background: "#3cd978",
    // 字体颜色
    color: "",
    // 字体图标名 https://element.eleme.cn/#/zh-CN/component/icon
    icon: "el-icon-office-building",
    // 关联类型下的书签
    typeKey: "company"
  },
  {
    name: "个人",
    background: "green",
    color: "",
    icon: "el-icon-star-off",
    typeKey: "work"
  }
];

// node图片部署的地址
const serverUrl = "http://192.168.3.224:3000/uploads/";
/**
 * 对应bookmarkType的typeKey
 */
const bookmarkList = {
  company: [
    {
      // 链接地址
      url: "https://www.baidu.com/",
      // 名称
      name: "百度搜索",
      // 字体颜色
      nameColor: "",
      // 图片地址。serverUrl为自己搭建的中台 !!!如需添加请填写完整的URL
      imageUrl: `${serverUrl}baidu.jpg`,
      icon: "el-icon-s-help",
      // 字体图标颜色
      color: "black",
      // 打开方式 _bank:空标签，_parent: 自身
      target: "_bank",
      // 详情
      detail: "全球最大的中文搜索引擎"
    },
    {
      url: "http://www.google.cn/",
      name: "谷歌搜索",
      nameColor: "",
      imageUrl: `${serverUrl}google.jpg`,
      icon: "el-icon-s-help",
      color: "black",
      detail: "世界上最大的搜索引擎之一"
    },
    {
      url: "https://cn.bing.com/",
      name: "必应搜索",
      nameColor: "",
      imageUrl: `${serverUrl}bing.jpg`,
      icon: "el-icon-s-help",
      color: "black",
      detail: "微软Bing搜索是国际领先的搜索引擎"
    },
    {
      url: "http://192.168.1.6:8000",
      name: "GitLab",
      nameColor: "",
      imageUrl: `${serverUrl}GitLab.jpg`,
      icon: "el-icon-s-management",
      color: "green",
      detail: "内网自建代码托管平台"
    },
    {
      url: "http://192.168.1.10:8080",
      name: "Jenkins(1.10)",
      nameColor: "",
      imageUrl: `${serverUrl}Jenkins.jpg`,
      icon: "el-icon-s-order",
      color: "green",
      detail: "持续集成工具，用于程序的自动化构建、自动化测试、自动化部署等"
    },
    {
      url: "http://192.168.1.100:8080",
      name: "Jenkins(1.100)",
      nameColor: "",
      imageUrl: `${serverUrl}Jenkins.jpg`,
      icon: "el-icon-s-order",
      color: "black",
      detail: "持续集成工具，用于程序的自动化构建、自动化测试、自动化部署等"
    },
    {
      url: "https://www.toolfk.com/",
      name: "ToolFK",
      nameColor: "",
      unusual: true,
      imageUrl: `https://toolfk.xiuxiandou.com/tools/images/logo_4.png`,
      icon: "el-icon-s-order",
      color: "black",
      detail:
        "在线工具箱，提供进制转换工具、时间戳转换工具、短链接生成、JS/PHP混淆加密工具,HTML/CSS/JSON格式化等各种工具集合"
    },
    {
      url: "http://192.168.1.115:5601/app/kibana#/discover",
      name: "kibana",
      nameColor: "",
      icon: "el-icon-s-order",
      color: "black",
      detail: "BigBee内网数据可视化工具"
    },
    {
      url: "http://192.168.1.147:4999/web/#/item/index",
      name: "ShowDoc",
      nameColor: "",
      imageUrl: `http://192.168.1.147:4999/web/static/logo/b_64.png`,
      icon: "el-icon-s-order",
      color: "black",
      detail: "ShowDoc上存放了在线API文档、技术文档、研发资料等"
    },
    {
      url: "http://192.168.1.130:8089/#/login",
      name: "统一管理平台(开发)",
      nameColor: "",
      icon: "el-icon-s-order",
      color: "black",
      imageUrl: `${serverUrl}统一管理平台.jpg`,
      detail: "小溪流科技后台管理页面统一管理平台"
    },
    {
      url: "http://192.168.1.123:8089/#/login",
      name: "统一管理平台(测试)",
      nameColor: "",
      icon: "el-icon-s-order",
      color: "black",
      imageUrl: `${serverUrl}统一管理平台.jpg`,
      detail: "小溪流科技后台管理页面统一管理平台"
    },
    {
      url: "http://192.168.1.45/",
      name: "产品文档",
      nameColor: "",
      imageUrl: `${serverUrl}产品文档.jpg`,
      icon: "el-icon-s-order",
      color: "black",
      detail: "产品项目迭代相关文档访问地址"
    },
    {
      url: "http://192.168.1.6:9000/zentao/my/",
      name: "禅道",
      nameColor: "",
      icon: "el-icon-s-order",
      color: "black",
      imageUrl: `http://192.168.1.6:9000/zentao/favicon.ico`,
      detail:
        "项目管理工具，将软件研发中的需求、任务、bug、用例、计划、发布等要素有序的跟踪管理起来，完整地覆盖了项目管理的核心流程"
    }
  ],
  API: [
    {
      url: "https://element.eleme.cn/#/zh-CN/component/icon",
      name: "字体图标",
      icon: "el-icon-s-custom",
      detail: "人"
    }
  ],
  work: [
    {
      url: "https://element.eleme.cn/#/zh-CN/component/icon",
      name: "字体图标",
      icon: "el-icon-s-data",
      detail: "工具"
    }
  ]
};
