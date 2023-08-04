<template>
	<view class="content">
		<view>
			<view v-for="index in 200" :key="index" @click="tapItem()">
				index - {{index}}
			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		<jd-tabbar pagePath='pages/index/index' />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			tapItem() {
				var list = {name:"我的饭康师傅",id:737823}
				uni.navigateTo({
					url: `/pages/detail/detail??data=${encodeURIComponent(JSON.stringify(list))}`
				});
				
			}
		}
	}
</script>

<style>

</style>