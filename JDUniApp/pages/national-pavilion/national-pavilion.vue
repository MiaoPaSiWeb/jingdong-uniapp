<template>
	<view class="content">
		<view class="content-linear" :style="{ backgroundImage: 'url(' + bgUrl2 + ')' }">
			<myHeader></myHeader>
			<plusBlack></plusBlack>
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
	import plusBlack from './components/plus_black'
	
	export default {
		components: {
			myHeader,plusBlack
		},
		data() {
			return {
				bgUrl: 'https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-uniapp/main/JDUniApp/static/mine/bg.png',
				bgUrl2: this.$mAssetsPath.path + '/mine/bg.png'
			}
		},
		methods: {

		},
		computed: {
			// bgUrl2() {
			// 	return this.$mAssetsPath.path + '/mine/bg.png'
			// }
			
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #f5f5f5;

		.content-linear {
			background-repeat: no-repeat;
		}
	}
</style>