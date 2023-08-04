<template>
	<view>
		<view>
			<view v-for="index in 200" :key="index">
				category - {{index}}
			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		
		<jd-tabbar pagePath='pages/category/category' />
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