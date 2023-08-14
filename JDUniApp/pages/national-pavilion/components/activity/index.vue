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
		name: 'activity',
		data() {
			return {
				horTips: [{
					title: "客户服务",
					icon: this.$mConfig.assetsPath + '/mine/tool_item_khfw.webp',
					value: 0
				}, {
					title: "我的预约",
					icon: this.$mConfig.assetsPath + '/mine/tool_item_wdyy.webp',
					value: 0
				}, {
					title: "我的问答",
					icon: this.$mConfig.assetsPath + '/mine/tool_item_wdwd.webp',
					value: 0
				}, {
					title: "闲置还钱",
					icon: this.$mConfig.assetsPath + '/mine/tool_item_xzhq.webp',
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
		padding: 20rpx 24rpx 0 24rpx;

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
					width: 25%;
					position: relative;

					.title {
						font-family: -apple-system, Helvetica, sans-serif;
					}

					.img_wrap {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
	}
</style>