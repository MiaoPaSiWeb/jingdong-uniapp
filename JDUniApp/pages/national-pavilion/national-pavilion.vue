<template>
	<view>
		<button @click="showModalView">显示弹出层</button>
		<button @click="showModalView">显示模态框</button>
		<view class="content">
			<view class="content-bg" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
				<myHeader></myHeader>
				<plusBlack></plusBlack>
				<favInfo></favInfo>
				<orderInfo></orderInfo>
				<assetInfo></assetInfo>
				<moneyCard></moneyCard>
				<activity></activity>
				<waterfall></waterfall>
			</view>
			<jd-tabbar pagePath="pages/national-pavilion/national-pavilion" />
		</view>
		<jd-modal v-if="showModal" @close="closeModal">
			<view>
				<p @click="closeModal">这是弹出层中的内容</p>
				<view v-for="index in 200" :key="index">
					{{index}}
				</view>
			</view>
		</jd-modal>
		<!-- <jd-confirmation v-bind:show="showModal" v-bind:onCancel="cancel" v-bind:onConfirm="confirm">
			<template v-slot:body>
				<p>确定要删除吗？</p>
			</template>
		</jd-confirmation> -->
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
				bgUrl: this.$mConfig.assetsRemotePath + '/mine/bg.png',
				showModal: false,
			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif

		},
		onHide() {

		},
		mounted() {

		},
		onReachBottom() {
			uni.$emit('national-pavilion:onReachBottom');
		},
		methods: {
			showModalView() {
				this.showModal = !this.showModal;
				if (this.showModal) {
					this.stopScroll()
				} else {
					this.canScroll()
				}
			},
			closeModal() {
				this.showModal = false; // 关闭弹窗
				this.canScroll()
			},
			cancel() {
				this.showModal = false
			},
			confirm() {
				alert('删除成功！')
				this.showModal = false
			}
		},
		computed: {

		},
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #f5f5f5;

		.content-bg {
			background-repeat: no-repeat;
			padding-bottom: calc(70px + env(safe-area-inset-bottom));
		}
	}

	.recommond_wrap {
		width: 750rpx;

		.title {
			box-sizing: border-box;
			border: 2px solid red;
		}

		.waterfall {
			width: 750rpx;

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
</style>