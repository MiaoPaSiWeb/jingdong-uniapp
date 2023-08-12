<template>
	<view class="content">
		<jd-image :src="bgUrl"></jd-image>
	</view>
</template>

<script>
	export default {
		name:"moneyCard",
		data(){
			return {
				bgUrl:"https://img12.360buyimg.com/img/s750x98_jfs/t1/137036/22/22941/72603/6216ec7aE4ba88584/ddbf5ebdb080083b.png.webp"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin-top: 20rpx;
		width: 750rpx;
		height: 98rpx;
	}
</style>