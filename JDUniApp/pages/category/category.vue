<template>
	<view class="content">
		<scrollbar :industryList='industryList' :curIndustryId='curIndustryId' @clickLeftNavItem='clickLeftNavItem'>
		</scrollbar>
		<view class="rightNav">
			<view v-if="moduleList.length == 0">
				暂无数据
			</view>
			<view v-else>
				<view v-for="(group,index) in moduleList" :key="index" class="rightNav__group">
					<view class="rightNav__group__nav_title">
						{{group.title}}
					</view>
					<view class="rightNav__group__content">
						<view v-for="(item,index) in group.items" :key="index" class="rightNav__group__content__item">
							<view class="rightNav__group__content__item__image">
								<image :src="item.pic"></image>
							</view>
							<text>{{item.show_name}}</text>
						</view>
					</view>
				</view>
			</view>

		</view>
		<jd-tabbar pagePath='pages/category/category' />
	</view>
</template>

<script>
	import {
		queryCategoryData
	} from '@/api/category.js';
	import scrollbar from "./components/scrollbar"
	export default {
		components: {
			scrollbar,
		},
		data() {
			return {
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
			// loadData(isRefresh = false) {
			// 	if (this.loadStatus == 'loadmore') {
			// 		this.loadStatus = 'loading';
			// 		console.log("loadData")
			// 		if (isRefresh) {
			// 			this.page = 1;
			// 		} else {
			// 			this.page++;
			// 		}
			// 		this.$http
			// 			.get(`${queryCategoryData}/result_${this.page}`, {})
			// 			.then(r => {
			// 				const recommondList = r.data.data.feeds.content;
			// 				if (this.page == 1) {
			// 					this.list = [...recommondList];
			// 				} else {
			// 					this.list = [...this.list, ...recommondList];
			// 				}
			// 				this.loadStatus = 'loadmore';
			// 			})
			// 			.catch((e) => {
			// 				console.log("error:" + e);
			// 				this.page--;
			// 				this.loadStatus = 'loadmore';
			// 			});
			// 	}
			// },
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		border: 1px solid black;
		overflow: hidden;
		height: 100%;
		padding: 0;
		margin-bottom: calc(70px + env(safe-area-inset-bottom));

		.rightNav {
			flex: 1;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			border: 1px solid red;
			margin-left: 10px;
			padding: 0;
			overflow: scroll;

			&__group {
				margin-bottom: 10px;
				display: flex;
				flex-direction: column;
				padding: 10px;
				background-color: #FFF;
				border-radius: 10px;

				&__nav_title {
					height: 30px;
					line-height: 30px;
				}

				&__content {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;

					&__item {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 33.3%;

						&__image {
							width: 50%;
							aspect-ratio: 1;
							background-color: #EEE;

							image {
								width: 100%;
								height: 100%;
							}
						}

						text {
							font-size: 12px;
						}
					}
				}
			}

		}

	}
</style>