<template>
	<view class="content">
		<view v-if="loading">请求中。。。</view>
		<view>
			<view v-for="channel in channelsList" :key="channel.floorId" @click="tapItem()">
				<inGridFloor v-if="channel.floorType === 'GRID_FLOOR'" :fdata='channel' />
				<inAdBanner v-else-if="channel.floorType === 'AD_BANNER'" :fdata='channel' />
				<inChannelWidget v-else-if="channel.floorType === 'CHANNEL_WIDGET'" :fdata='channel' />
				<inFeedWidget v-else-if="channel.floorType === 'FEED_WIDGET'" :fdata='channel' />
				<view v-else>{{channel.floorType}}</view>

			</view>
			<view style="border: 1px solid green;height: 70px;">????</view>
			<jd-safearea />
		</view>
		<jd-tabbar pagePath='pages/index/index' />
	</view>
</template>

<script>
	import {
		pbReferer,
		searchpromptwords,
		queryChannelData,
		feedtab
	} from '@/api/home';
	import inGridFloor from './components/in-grid-floor';
	import inAdBanner from './components/in-ad-banner';
	import inChannelWidget from './components/in-channel-widget';
	import inFeedWidget from './components/in-feed-widget';
  	const channelData = require('@/static/mock-data/tab/index/queryChannelData.json')

	export default {
		components: {
			inGridFloor,
			inAdBanner,
			inChannelWidget,
			inFeedWidget
		},
		data() {
			return {
				loading: false,
				channelsList: []
			}
		},
		onLoad() {
			// this.queryChannelData();
			this.channelsList = channelData.result.data || [];
			
		},
		methods: {
			tapItem() {
				// var list = {
				// 	name: "我的饭康师傅",
				// 	id: 737823
				// }
				// uni.navigateTo({
				// 	url: `/pages/detail/detail??data=${encodeURIComponent(JSON.stringify(list))}`
				// });

				this.queryChannelData();
			},
			// 添加商品至购物车
			queryChannelData() {
				this.loading = true;
				this.$http
					.get(`${queryChannelData}`, {})
					.then(r => {
						this.channelsList = r.data.result.data || [];
						this.loading = false;
					})
					.catch(() => {
						this.loading = false;
					});
			},
		}
	}
</script>

<style scoped>
.content {
	background-color: #eee;
}
</style>