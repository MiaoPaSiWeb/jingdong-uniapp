<template>
	<view class="outer">
		<view class="inner">
			<view class="group">
				<view v-for="(item,index) in horTips" :key="index" class="item" @click="clickHorTipItem(item)">
					<view class="img_wrap">
						<jd-image :src="item.icon"></jd-image>
					</view>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'orderInfo',
		data() {
			return {
				horTips: [{
					title: "待付款",
					icon: this.$mAssetsPath.path + '/mine/waitPay.png',
					value: 0
				}, {
					title: "待收货",
					icon: this.$mAssetsPath.path + '/mine/waitReceipt.png',
					value: 0
				}, {
					title: "退换/售后",
					icon: this.$mAssetsPath.path + '/mine/my_order_entrance_type_consult.png',
					value: 0
				}, {
					title: "全部订单",
					icon: this.$mAssetsPath.path + '/mine/totalOder.png',
					value: 0
				}]
			}
		},
		methods: {
			clickSettingBtn() {
				uni.navigateTo({
					url: '/pages/account-set/account-set'
				})

			},
			clickHorTipItem(item) {
				uni.showToast({
					title: item.title
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.outer {
		padding: 0rpx 24rpx 0 24rpx;

		.inner {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid transparent;
			border-radius: 0 0 24rpx 24rpx;
			background: #FFF;
			padding: 10rpx 20rpx;

			.group {
				flex: 1;
				display: flex;
				flex-wrap: wrap;

				.item {
					display: flex;
					align-items: center;
					flex-direction: column;
					font-size: 24rpx;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					box-sizing: border-box;
					border: 1px solid transparent;
					flex-shrink: 0;
					width: 25%;
					position: relative;

					.title {
						font-family: -apple-system, Helvetica, sans-serif;
					}

					.img_wrap {
						width: 60rpx;
						height: 60rpx;
					}

					&:last-child {
						&:before {
							position: absolute;
							z-index: 1;
							top: 10rpx;
							left: -10rpx;
							width: 20rpx;
							height: 88rpx;
							background: url(https://img12.360buyimg.com/img/s20x88_jfs/t1/165515/27/23119/1870/625d23caEaf7372b1/90fd6e9ba15bd553.png);
							background-size: auto;
							background-size: 20rpx;
							content: "";
						}
					}
				}
			}
		}
	}
</style>