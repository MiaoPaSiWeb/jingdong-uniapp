<template>
	<view>
		<view>
			<view v-for="index in 200" :key="index">
				国家馆 - {{index}}
			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		<jd-tabbar pagePath="pages/national-pavilion/national-pavilion"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
