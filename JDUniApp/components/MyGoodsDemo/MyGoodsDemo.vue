<template>
	<view>
		<view class="waterfall-box" v-for="(item, index) in list" :key="index">
			<u-image :src="item.image" :lazy-load="true" radius="10" width="160" height="160"></u-image>
			<view class="box-item-title">
				{{item.title}}
			</view>
			<view class="box-item-price">
				{{item.price}}元
			</view>
			<view class="box-item-tag">
				<view class="tag-owner">
					自营
				</view>
				<view class="tag-text">
					放心购
				</view>
			</view>
			<view class="box-comment">
				{{item.shop}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MyGoodsDemo",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.waterfall-box {
		border-radius: 16rpx;
		margin: 10rpx;
		background-color: #ffffff;
		padding: 16rpx;
		position: relative;

		.box-item-title {
			width: 320rpx;
			font-size: 26rpx;
			margin-top: 10rpx;
			color: #434343;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.box-item-price {
			font-size: 30rpx;
			color: #ff4142;
			margin-top: 10rpx;
		}

		.box-item-tag {
			display: flex;
			margin-top: 10rpx;

			.tag-owner {
				background-color: #FF4142;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				padding: 4rpx 14rpx;
				border-radius: 50rpx;
				font-size: 16rpx;
				line-height: 1;
			}

			.tag-text {
				border: 1px solid #FF4142;
				color: #FF4142;
				margin-left: 20rpx;
				border-radius: 50rpx;
				line-height: 1;
				padding: 4rpx 14rpx;
				display: flex;
				align-items: center;
				font-size: 20rpx;
			}
		}

		.box-comment {
			font-size: 22rpx;
			color: orangered;
			margin-top: 5px;
		}
	}
</style>