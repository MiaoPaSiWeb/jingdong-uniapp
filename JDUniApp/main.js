import Vue from 'vue'
import App from './App'
// 引入全局存储

// 引入全局配置

// 引入全局方法]

// 全局组件
import jdTabbar from '@/components/jd-tabbar';
import jdSafearea from '@/components/jd-safearea';

// 引入国际化语言包

// 挂载全局自定义方法
Vue.component('jd-tabbar', jdTabbar);
Vue.component('jd-safearea', jdSafearea);

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
