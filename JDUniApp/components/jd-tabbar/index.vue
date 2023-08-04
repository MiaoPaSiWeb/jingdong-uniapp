<template>
	<view>
		<view class="uni-tabbar">
			<view class="content">
				<!-- 遍历tabbar -->
				<view class="uni-tabbar__item" v-for="(item,index) in tabbarList" :key="index" @tap="switchTab(item)">
					<view class="uni-tabbar__icon">
						<!-- 判断tabbar点击过后的图片路径 -->
						<image v-if="item.pagePath == pagePath" class="icon-img" :src="item.selectedIcon"></image>
						<image v-else class="icon-img" :src="item.normalIcon"></image>
					</view>
				</view>
			</view>
			<jd-safearea />
		</view>

	</view>
</template>
<script>
	export default {
		props: {
			//从父级继承过来的属性 需要在父级中使用:pagePath='pagePath',
			pagePath: String
		},
		data() {
			return {
				//公共的tabbar
				bottomNavigationBar: {
					"backgroundColor": "#FFFFFF",
					"layoutSource": "dolphin",
					"navigationDatas": [{
							"pagePath": "pages/index/index",
							"normalTextColor": "#ffffff",
							"normalIcon": "http://img10.360buyimg.com/cms/jfs/t1/102943/8/27011/8247/6254f98bE497b5cd3/533bb1cd29a4653f.png",
							"darkSelectedIcon": "http://img10.360buyimg.com/cms/jfs/t1/202965/2/21562/13321/6254fa03E609f3697/daaceafd4462358c.png",
							"selectedIcon": "http://img14.360buyimg.com/cms/jfs/t1/91442/19/24842/9111/6254f99eE2e67c505/0a44c964f06edef1.png",
							"selectedTextColor": "#c1284c",
							"name": "首页",
							"width": "",
							"darkNormalIcon": "http://img10.360buyimg.com/cms/jfs/t1/131499/9/24046/8966/6254f9fcE31bfa152/d8ff0e6a24648fdb.png",
							"navPageId": "",
							"bottomNavId": "",
							"jump": {
								"des": "m",
								"params": {
									"activityId": "",
									"dolphinId": "",
									"url": "https://gmart.jd.com?hideFoot=1"
								}
							},
							"height": ""
						},
						{
							"pagePath": "pages/self-support/self-support",
							"normalTextColor": "#ffffff",
							"normalIcon": "http://img12.360buyimg.com/cms/jfs/t1/93883/13/34850/5824/641bc3c4Fd6e5589c/df4c1a725c2e2d40.jpg",
							"darkSelectedIcon": "http://img13.360buyimg.com/cms/jfs/t1/190567/8/34337/10129/641bc3d5Fe9b81908/39244341c27b6683.png",
							"selectedIcon": "http://img13.360buyimg.com/cms/jfs/t1/168440/38/30236/6441/641bc3caF68ebfd77/56805b3773567fb0.jpg",
							"selectedTextColor": "#c1284c",
							"name": "自营精选",
							"width": "",
							"darkNormalIcon": "http://img12.360buyimg.com/cms/jfs/t1/116254/30/37673/8047/641bc3d0Fc59c5d42/f75c6fca32de9aef.png",
							"navPageId": "",
							"bottomNavId": "",
							"jump": {
								"des": "babel",
								"params": {
									"activityId": "3BVpKwDf2kphtv3E66m7HZHjegFY",
									"url": "https://pro.m.jd.com/mall/active/3BVpKwDf2kphtv3E66m7HZHjegFY/index.html?hideFoot=1"
								}
							},
							"height": ""
						},
						{
							"pagePath": "pages/trend/trend",
							"normalTextColor": "#ffffff",
							"normalIcon": "http://img10.360buyimg.com/cms/jfs/t1/76485/4/18362/19452/6284caacE867e312e/0f678f2ab9f8befb.png",
							"darkSelectedIcon": "http://img13.360buyimg.com/cms/jfs/t1/178366/31/24383/19526/6284cabaEb9de69fa/bb68c48911f366c7.png",
							"selectedIcon": "http://img11.360buyimg.com/cms/jfs/t1/111448/20/25435/19103/6284cab1Ef9a98f96/7584b640feb33f55.png",
							"selectedTextColor": "#c1284c",
							"name": "趋势",
							"width": "64",
							"darkNormalIcon": "http://img11.360buyimg.com/cms/jfs/t1/58014/28/18231/19480/6284cab6Ec2e1b37f/da561e1c5ea0148c.png",
							"navPageId": "",
							"bottomNavId": "",
							"jump": {
								"des": "babel",
								"params": {
									"activityId": "2wWznPwPCABJp5iHvQdJCiL4S749",
									"url": "https://pro.m.jd.com/mall/active/2wWznPwPCABJp5iHvQdJCiL4S749/index.html?hideFoot=1"
								}
							},
							"height": "64"
						},
						{
							"pagePath": "pages/category/category",
							"normalTextColor": "#ffffff",
							"normalIcon": "http://img10.360buyimg.com/cms/jfs/t1/146453/35/25546/5558/6254fa55E89c47e85/ca6ce9f85695fd4e.png",
							"darkSelectedIcon": "http://img14.360buyimg.com/cms/jfs/t1/121021/31/26872/1647/6254fa62Ef5812a8d/5cd44251eec7fad9.png",
							"selectedIcon": "http://img10.360buyimg.com/cms/jfs/t1/106850/2/27144/6360/6254fa59E5590b0e3/6b93486b0aecba61.png",
							"selectedTextColor": "#c1284c",
							"name": "分类",
							"width": "",
							"darkNormalIcon": "http://img10.360buyimg.com/cms/jfs/t1/127216/21/27421/6498/6254fa5dE89df48f8/27732e2fcdfdb4be.png",
							"navPageId": "",
							"bottomNavId": "",
							"jump": {
								"des": "babel",
								"params": {
									"activityId": "2FNxxR8EwNffiwLiBNxpanmw36uw",
									"url": "https://pro.m.jd.com/mall/active/2FNxxR8EwNffiwLiBNxpanmw36uw/index.html?hideFoot=1"
								}
							},
							"height": ""
						},
						{
							"pagePath": "pages/national-pavilion/national-pavilion",
							"normalTextColor": "#ffffff",
							"normalIcon": "http://img14.360buyimg.com/cms/jfs/t1/195627/30/23223/7401/6254fa71E97029a89/1508388d88d23af2.png",
							"darkSelectedIcon": "http://img10.360buyimg.com/cms/jfs/t1/124113/5/25029/11313/6254fa87E5571660e/c3d41f893471ae2a.png",
							"selectedIcon": "http://img11.360buyimg.com/cms/jfs/t1/199210/4/22127/8075/6254fa78Ee6ed6b4e/0b66afde8f749846.png",
							"selectedTextColor": "#c1284c",
							"name": "国家馆",
							"width": "",
							"darkNormalIcon": "http://img11.360buyimg.com/cms/jfs/t1/86365/8/26048/8184/6254fa7fE5fa6b522/3c8bfbafce424efb.png",
							"navPageId": "",
							"bottomNavId": "",
							"jump": {
								"des": "babel",
								"params": {
									"activityId": "P6Jkwshcjt5NAxbwGJZ7GxdcuML",
									"url": "https://pro.m.jd.com/mall/active/P6Jkwshcjt5NAxbwGJZ7GxdcuML/index.html?hideFoot=1"
								}
							},
							"height": ""
						}
					],
					"middleOut": "1",
					"height": 50
				}
			};
		},
		watch: {
			pagePath: {
				handler(pagePath) {
					console.log('pagePath监听===val', pagePath)
				},
				immediate: true
			}
		},
		mounted() {
			// 根据自己的业务需求判断条件为true，替换即可,根据权限设置的tabbar	
			//第三个参数为插入项,第一个参数为第一项位置，第二个参数为要删除几个。
			// if (true) {
			// 	this.tabbar.splice(3, 0, {
			// 		"pagePath": "pages/wareHouse/wareHouse",
			// 		"iconPath": "/static/cart.png",
			// 		"selectedIconPath": "/static/cartSelected.png",
			// 		"text": "出入库"
			// 	})
			// }
		},
		methods: {
			switchTab(item) {
				this.page = item.pagePath;
				/*
				首次会闪烁的原因是dom切换，还没编译生成dom树，到渲染完成过程，才算是一个页面的构建完成。
				所以我们可以把自定义tabbar当成主页面 其他的东西当成组件引进来 这样子也可以解决善烁。(没有实际试过，感觉可行)，
				*/
				uni.switchTab({url: '/' + this.page});
			},
		},
		computed: {
			tabbarList() {
				return this.bottomNavigationBar.navigationDatas
			}
		},
	}
</script>
<style lang="less">
	@tabbar-content-h: 70px; //内容高度（不包含底部安全区域）
	@tabbar-item-h: 50px; //普通按钮高度
	@tabbar-mid-item-w: 70px; //中间按钮宽度
	@tabbar-mid-item-h: 70px; //中间按钮高度

	.uni-tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 0px 17rpx 1rpx rgba(206, 206, 206, 0.32);

		.content {
			display: flex;
			align-items: flex-end;
			box-sizing: border-box;
			height: @tabbar-content-h;

			.uni-tabbar__item {
				display: flex;
				justify-content: center;
				width: calc((100% - @tabbar-mid-item-w)/4);
				height: @tabbar-item-h;

				.uni-tabbar__icon {
					width: @tabbar-item-h;
					height: 100%;

					.icon-img {
						width: 100%;
						height: 100%;
					}
				}

				&:nth-child(3) {
					width: @tabbar-mid-item-w;
					height: @tabbar-mid-item-h;

					.uni-tabbar__icon {
						width: @tabbar-mid-item-w;
						height: 100%;

					}
				}
			}
		}
	}
</style>