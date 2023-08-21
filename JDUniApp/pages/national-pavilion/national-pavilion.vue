<template>
	<view class="page">
		<view class="content" :style="{height:contentStyle.height}">
			<view class="content-bg" :style="{ height:'100%',backgroundImage: 'url(' + bgUrl + ')' }">
				<myHeader></myHeader>
				<plusBlack></plusBlack>
				<favInfo></favInfo>
				<orderInfo></orderInfo>
				<assetInfo></assetInfo>
				<moneyCard></moneyCard>
				<activity></activity>
				<waterfall></waterfall>
			</view>
		</view>
		<view class="tabBar-placeholder"></view>
		<jd-tabbar pagePath="pages/national-pavilion/national-pavilion" />
	</view>
</template>

<script>
	import {
		GetJDUserInfoUnionForJD,
		recommend_like_m
	} from '@/api/mine.js';
	import myHeader from './components/my-header'
	import plusBlack from './components/plus_black'
	import favInfo from './components/favInfo/'
	import assetInfo from './components/assetInfo'
	import orderInfo from './components/orderInfo'
	import moneyCard from './components/moneyCard'
	import activity from './components/activity'
	import waterfall from './components/waterfall'
	export default {
		components: {
			myHeader,
			plusBlack,
			favInfo,
			assetInfo,
			orderInfo,
			moneyCard,
			activity,
			waterfall
		},
		data() {
			return {
				contentStyle: {
					height: ''
				},
				bgUrl: this.$mConfig.assetsRemotePath + '/mine/bg.png',
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
		mounted() {

		},
		onReachBottom() {
			// uni.$emit('national-pavilion:onReachBottom');
		},
		methods: {

		},
		computed: {

		},
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
	}

	.tabBar-placeholder {
		height: calc(70px + env(safe-area-inset-bottom));
	}

	//////////////
	//////////////
	//////////////
	.content-bg {
		background-repeat: no-repeat;
		height: 100%;
		overflow: scroll;

		.recommond_wrap {

			.title {
				box-sizing: border-box;
				border: 2px solid red;
			}

			.waterfall {
				.waterfall-item {
					overflow: hidden;
					margin-top: 10px;
					border-radius: 6px;

					&_image {
						box-sizing: border-box;
						border: 1px solid red;
						max-width: 100%;
						min-height: 150px;
					}

					&__ft {
						padding: 20rpx;
						background: #fff;

						&__title {
							margin-bottom: 10rpx;
							line-height: 48rpx;
							font-weight: 700;

							.value {
								font-size: 32rpx;
								color: #303133;
							}
						}

						&__desc .value {
							font-size: 28rpx;
							color: #606266;
						}

						&__btn {
							padding: 10px 0;
						}
					}
				}
			}
		}
	}
</style>