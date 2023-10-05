<template>
	<view class="tabBar-placeholder"></view>
</template>

<script>
	export default {
		name:"jd-mainpage-bottom",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.tabBar-placeholder {
		height: calc(70px + env(safe-area-inset-bottom));
	}
</style>