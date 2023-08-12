<template>
	<view class="outer">
		<view class="inner">
			<view class="group">
				<view v-for="(item,index) in horTips" :key="index" class="item" @click="clickHorTipItem(item)">
					<view v-if="item.title == '全部资产'">
						<view class="img_wrap">
							<jd-image :src="item.icon"></jd-image>
						</view>
					</view>
					<view v-else>
						<view class="assets_item_val">
							{{item.val}}
						</view>
					</view>

					<view class="assets_item_key">{{item.title}}</view>
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
					title: "优惠券",
					val: 0,
					icon: this.$mAssetsPath.path + '/mine/waitPay.png',
					value: 0
				}, {
					title: "白条",
					val: "开通有礼",
					icon: this.$mAssetsPath.path + '/mine/waitReceipt.png',
					value: 0
				}, {
					title: "京豆",
					val: 99,
					icon: this.$mAssetsPath.path + '/mine/my_order_entrance_type_consult.png',
					value: 0
				}, {
					title: "红包",
					val: 89,
					icon: this.$mAssetsPath.path + '/mine/totalOder.png',
					value: 0
				}, {
					title: "全部资产",
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
		margin-top: 20rpx;
		padding: 0rpx 24rpx 0 24rpx;

		.inner {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid transparent;
			border-radius: 24rpx;
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
					width: 20%;
					position: relative;

					.assets_item_key {
						font-family: -apple-system, Helvetica, sans-serif;
					}

					.assets_item_val {
						width: 100%;
						height: 60rpx;
						line-height: 60rpx;
						font-size: 26rpx;
						font-family: JDZH-Regular;
						font-weight: bold;
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