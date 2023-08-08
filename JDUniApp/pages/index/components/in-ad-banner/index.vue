<template>
	<view>
		<view class="scroll-view_H">
			<view v-for="item in fdata.adBannerFloor.banners" :key='item.advertId' class="scroll-view-item_H">
				<jd-image :src='item.imageUrl'></jd-image>
			</view>
		</view>
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

<style lang="less" scoped>
.scroll-view_H {
	box-sizing: border-box;
	display: flex; //使用flex布局
	flex-direction: row;
	white-space: nowrap; //不换行
	overflow-x: auto; //x轴方向滚动
	padding: 12rpx 0;

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
</style>