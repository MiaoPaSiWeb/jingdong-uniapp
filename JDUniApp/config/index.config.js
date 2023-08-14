const CONFIG = {
    // 开发环境配置
    development: {
        assetsPath: '/static', // 静态资源路径
		baseUrl: 'http://demo.rageframe.com/api', // 后台接口请求地址
		hostUrl: 'http://h5.tinyshop.rageframe.com', // H5地址(前端运行地址)
        websocketUrl: '', // websocket服务端地址
        weixinAppId: '' ,// 微信公众号appid
		assetsRemotePath: "https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-uniapp/main/JDUniApp/static/",
		
    },
    // 生产环境配置
    production: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'http://demo.rageframe.com/api', // 后台接口请求地址
        hostUrl: 'http://h5.tinyshop.rageframe.com', // H5地址(前端运行地址)
        websocketUrl: '', // websocket服务端地址
        weixinAppId: '' ,// 微信公众号appid
		assetsRemotePath: "https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-uniapp/main/JDUniApp/static/",
    }

};
export default CONFIG[process.env.NODE_ENV];
