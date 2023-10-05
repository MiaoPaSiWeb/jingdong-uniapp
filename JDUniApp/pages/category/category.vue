<template>
	<view>
		<view class="page">
			<view class="content" :style="{height:contentStyle.height}">
				<Scrollbar class="leftNav" :industryList='industryList' :curIndustryId='curIndustryId'
					@clickLeftNavItem='clickLeftNavItem' />
				<CategoryContent class="rightNav" :moduleList='moduleList' />
			</view>
			<jd-mainpage-bottom />
			<jd-tabbar pagePath='pages/category/category' />
		</view>
	</view>
</template>

<script>
	import {
		queryCategoryData
	} from '@/api/category.js';
	import Scrollbar from "./components/scrollbar"
	import CategoryContent from "./components/category-content"


	export default {
		components: {
			Scrollbar,
			CategoryContent
		},
		data() {
			return {
				contentStyle: {
					height: ''
				},
				curIndustryId: "",
				industryList: [],
				moduleList: [],
				rightInfoMap: {},
			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif

			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.content').boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面顶部的距离为" + data.top);
					this.contentStyle.height = data.height + 'px'
				}).exec();
			})
		},
		onHide() {

		},
		onLoad() {
			this.queryLeftData()
		},
		methods: {
			checked(item) {
				this.curIndustryId = item.industryId
				this.queryRightData(item.industryId);
			},
			queryLeftData() {
				const industryId = '4'
				this.$http
					.get(`${queryCategoryData}/${industryId}`, {})
					.then(r => {
						const data = r.data;
						const result = data.data.result;
						for (let i = 0; i < result.length; i++) {
							const item = result[i]
							if (item.industryId == industryId) {
								this.curIndustryId = item.industryId;
								this.industryList = item.industryList;
								this.moduleList = item.moduleList;
								this.rightInfoMap[industryId] = item.moduleList;
							}
						}
					})
					.catch((e) => {
						console.log("error:" + e);
					});
			},
			queryRightData(industryId) {
				const moduleList = this.rightInfoMap[industryId];
				if (moduleList != undefined) {
					this.moduleList = moduleList;
				} else {
					this.$http
						.get(`${queryCategoryData}/${industryId}`, {})
						.then(r => {
							const data = r.data;
							const result = data.data.result;
							for (let i = 0; i < result.length; i++) {
								const item = result[i]
								if (item.industryId == industryId) {
									this.curIndustryId = item.industryId;
									this.moduleList = item.moduleList;
									this.rightInfoMap[industryId] = item.moduleList;
								}
							}
						})
						.catch((e) => {
							console.log("error:" + e);
							this.moduleList = [];
						});
				}

			},
			clickLeftNavItem(item) {
				console.log("clickLeftNavItem：" + item)
				this.curIndustryId = item.industryId
				this.queryRightData(item.industryId);
			},

		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0rpx;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: row;
		margin-top: var(--window-top);
		overflow: hidden;
	}

	//////////////
	//////////////
	//////////////
	.leftNav {
		width: 100px;
		height: 100%;
	}

	.rightNav {
		flex: 1;
	}
</style>