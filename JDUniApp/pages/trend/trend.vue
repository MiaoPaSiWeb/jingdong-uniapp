<template>
	<view>
		<view>
			<view v-for="index in 200" :key="index">
				趋势 - {{index}}
			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		<jd-tabbar pagePath='pages/trend/trend'/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
		},
		onHide() {
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
