<template>
	<view class="content">
		<view class="content-linear" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
			<myHeader></myHeader>			
			<view v-for="index in 200" :key="index">
				国家馆 - {{index}}
			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		<jd-tabbar pagePath="pages/national-pavilion/national-pavilion" />
	</view>
</template>

<script>
	import myHeader from './components/my-header'
	export default {
		components:{
			myHeader
		},
		data() {
			return {
bgUrl: 'https://img12.360buyimg.com/img/s750x432_jfs/t1/84804/29/26776/112106/624d07d0E55603649/07ed8923a7bdbad2.png'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		background: #f5f5f5;

		.content-linear {
			background: url("/static/mine/bg.png") no-repeat scroll 0 0/100% auto;
		}
	}
</style>