const env = {
  dev: {
    // 测试
    baseURL: '//www.baidu.com',
  },
  test: {
    // 测试
    baseURL: '//www.baidu.com:5245',
  },
};
const { VITE_APP_ENV } = import.meta.env;
const sysConfig = {
  base_url: env[VITE_APP_ENV].baseURL, // vue.config.js配置代理地址使用
  baseUrl: env[VITE_APP_ENV].baseUrl, // vue.config.js配置代理地址使用
  baseURl: env[VITE_APP_ENV].baseURl, // vue.config.js配置代理地址使用
  baseURL:
    process.env.NODE_ENV == 'development'
      ? `/${VITE_APP_ENV}`
      : env[VITE_APP_ENV].baseURL, //接口请求的域名, //接口请求的域名接口请求的域名, //接口请求的域名
  clientId: 'global_pc',
  clientSecret: '123456',
  clientType: 'PC',
  cookieKeys: {
    TokenKey: 'token',
    UserNameKey: 'UserName',
  }, //缓存在 Cookies 的 key
  adminList: [1, 10],
  superAdmin: 1, //超级管理员
};

export { sysConfig };
