<template>
	<view>
		<view v-for="index in 200" :key="index">
			详情 - {{index}}
		</view>
		<view style="border: 1px solid green;height: 70px;">????</view>
		<jd-safearea />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad: function (option) {
			
			const item = JSON.parse(decodeURIComponent(option.data));
			console.log("详情页"+option.data);
		}
	}
</script>

<style lang="less">

</style>
