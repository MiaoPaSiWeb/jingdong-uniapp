<script>
	// import Vconsole from 'vconsole';
	export default {
		created() {
			// let vConsole = new Vconsole();
		},
		data() {
			return {
				globalData:{
					screenHeight:'',
					primaryTabHeight:'',
					tabBarHeight:'',
				}
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: (res) => {
					console.log("getSystemInfo："+JSON.stringify(res))
					// this.globalData.tabBarHeight = 70 + res.safeAreaInsets.bottom;
					
					// let tops = e.statusBarHeight;
					// 			let custom = uni.getMenuButtonBoundingClientRect();
					// 			let  height = custom.height + (custom.top - e.statusBarHeight) * 2;
					
					
					
					
					// this.globalData.screenHeight = res.screenHeight;
					// this.globalData.primaryTabHeight = res.screenHeight - this.globalData.tabBarHeight - height;
					// console.log('globalData：',JSON.stringify(this.globalData))
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";

	/*每个页面公共css */
	uni-page-body,page {
		display: flex;
		flex-direction: column;
		background-color: #EEE;
	}
</style>