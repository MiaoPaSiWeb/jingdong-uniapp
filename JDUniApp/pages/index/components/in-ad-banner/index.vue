<template>
	<view>
		<scroll-view :scroll-x="true" :show-scrollbar='true' class="scroll-view_H" :style="{backgroundColor: bgcolor}">
			<view class="content" >
				<view v-for="item in fdata.adBannerFloor.banners" :key='item.advertId' class="scroll-view-item_H">
					<jd-image :src='item.imageUrl'></jd-image>
				</view>
			</view>
			<view class="slider">
				指示器
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
		},
		computed: {
			bgcolor() {
				return "#7D45F8"
			}
		},
	}
</script>

<style lang="less">
	.scroll-view_H {
		box-sizing: border-box;
		padding: 12rpx 0;
		.content {
			display: flex;
			border: 1px solid red;
			.scroll-view-item_H {
				flex-shrink: 0; //添加 flex-shrink: 0;   值为0不被压缩
				width: 340rpx;
				height: 462rpx;
				margin-right: 20rpx;
				box-sizing: border-box;
				border: 1px solid transparent;

				&:last-child {
					margin-right: 0rpx;
				}
			}

			&::before {
				content: "";
				border: 12rpx solid transparent;
			}

			&::after {
				content: "";
				border: 12rpx solid transparent;
			}
		}
	}
</style>