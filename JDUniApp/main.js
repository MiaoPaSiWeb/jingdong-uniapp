import Vue from 'vue'
import App from './App'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// 引入全局存储

// 引入全局配置
import $mConfig from '@/config/index.config.js';
import $mAssetsPath from '@/config/assets.config.js';

// 引入全局方法
import { http } from '@/utils/request';
import $mHelper from '@/utils/helper';
// 全局组件
import jdTabbar from '@/components/jd-tabbar/jd-tabbar';
import jdSafearea from '@/components/jd-safearea/jd-safearea';
import jdImage from '@/components/jd-image/jd-image';

// 引入国际化语言包

// 挂载全局自定义方法
Vue.prototype.$http = http;
Vue.prototype.$mConfig = $mConfig;
Vue.prototype.$mAssetsPath = $mAssetsPath;
Vue.prototype.$mHelper = $mHelper;

Vue.component('jd-tabbar', jdTabbar);
Vue.component('jd-safearea', jdSafearea);
Vue.component('jd-image', jdImage);

if (process.env.NODE_ENV === 'production') {
	Vue.config.productionTip = false;
}

// 路由导航
App.mpType = 'app'

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  ...App
})
app.$mount()
