<template>
	<view>
		<view class="page">
			<view class="content" :style="{height:contentStyle.height}">
				<view class="leftNav" :style="{height:'100%'}">
					<scrollbar :industryList='industryList' :curIndustryId='curIndustryId'
						@clickLeftNavItem='clickLeftNavItem' />
				</view>
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
								<view v-for="(item,index) in group.items" :key="index"
									class="rightNav__group__content__item">
									<view class="rightNav__group__content__item__image">
										<image :src="item.pic"></image>
									</view>
									<text>{{item.show_name}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tabBar-placeholder"></view>
			<jd-tabbar pagePath='pages/category/category' />
		</view>
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

	.tabBar-placeholder {
		height: calc(70px + env(safe-area-inset-bottom));
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
		overflow: scroll;
	}

	.rightNav {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: 4rpx;
		padding: 12rpx;
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
</style>