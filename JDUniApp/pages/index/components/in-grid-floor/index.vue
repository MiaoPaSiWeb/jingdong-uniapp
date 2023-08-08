<template>
	<view>
		<view v-for="item in fdata.gridFloor.items" :key='item.advertId'>
			<view class="image-content">
				<jd-image :src='item.imageUrl'></jd-image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'GRID_FLOOR',
	props: {
		fdata: {
			type: Object,
			default: {}
		}
	},
	mounted() {
		console.log("GRID_FLOOR-onLoad",this.fdata);
	}
}
</script>

<style scoped>
.image-content {
	width: 100%;
	height: 80rpx;
}
</style>