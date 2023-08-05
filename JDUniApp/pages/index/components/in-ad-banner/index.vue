<template>
	<view>
		<scroll-view :scroll-x="true" class="scroll-view_H">
			<view v-for="item in fdata.adBannerFloor.banners" :key='item.advertId' class="scroll-view-item_H">
				<view style="width: 100%;height: 100%;">
					<view style="width: 100%;height: 100%;background-color: antiquewhite;">
						<jd-image :src='item.imageUrl'></jd-image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'AD_BANNER',
		props: {
			fdata: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				scroll_list: ['1', '2', '3', '4', '5', '6']
			}
		},
		mounted() {
			console.log("AD_BANNER-onLoad", this.fdata);
		}
	}
</script>

<style lang="less">
	.scroll-view_H {
		display: flex;
		flex-direction: column;//设置布局方向为水平
		white-space: nowrap;
		background-color: #7D45F8;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 340rpx;
		height: 462rpx;
		margin-left: 20rpx;
		margin-right: 0rpx;
		box-sizing: border-box;
		border: 1px solid red;
		&:first-child {
			margin-left: 24rpx;
		}
		&:last-child {
			margin-right: 24rpx;
		}
	}
</style>