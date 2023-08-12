<template>
	<view class="outer">
		<view class="inner">
			<view class="group">
				<view v-for="(item,index) in horTips" :key="index" class="item" @click="clickHorTipItem(item)">
					<text class="title">{{item.title}}</text>
					<text class="number">{{item.number}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'favInfo',
		data() {
			return {
				horTips: [{
					title: "商品收藏",
					number: 0,
					path: "/pages/goods_fav/goods_fav"
				}, {
					title: "店铺收藏",
					number: 10,
					path: "/pages/shop_fav/shop_fav"
				}, {
					title: "我的足迹",
					number: 99,
					path: "/pages/footprint/footprint"
				}]
			}
		},
		methods: {
			clickHorTipItem(item) {
				uni.navigateTo({
					url: item.path
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.outer {
		padding: 20rpx 24rpx 0 24rpx;

		.inner {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid transparent;
			border-radius: 24rpx 24rpx 0 0;
			background: linear-gradient(90deg, hsla(0, 0%, 94.9%, .5), hsla(0, 0%, 98%, .6)), linear-gradient(#fff, #fff);
			padding: 10rpx 20rpx;

			.group {
				display: flex;
				flex: 1;
				flex-wrap: wrap;
				align-items: center;

				.item {
					flex: 1;
					font-size: 24rpx;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;

					.title {
						font-family: -apple-system, Helvetica, sans-serif;
					}

					.number {
						font-weight: bold;
					}
				}


			}
		}
	}
</style>