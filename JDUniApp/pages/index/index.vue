<template>
	<view>
		<view class="page">
			<view class="content" :style="contentStyle">
				<view v-for="channel in channelsList" :key="channel.floorId" @click="tapItem()">
					<inGridFloor v-if="channel.floorType === 'GRID_FLOOR'" :fdata='channel' />
					<inAdBanner v-else-if="channel.floorType === 'AD_BANNER'" :fdata='channel' />
					<inChannelWidget v-else-if="channel.floorType === 'CHANNEL_WIDGET'" :fdata='channel' />
					<inFeedWidget v-else-if="channel.floorType === 'FEED_WIDGET'" :fdata='channel' />
					<view v-else></view>
				</view>
			</view>
			<view class="tabBar-placeholder"></view>
			<jd-tabbar pagePath='pages/index/index' />
		</view>
	</view>
</template>

<script>
	import {
		searchpromptwords,
		queryChannelData,
	} from '@/api/home';
	import inGridFloor from './components/in-grid-floor';
	import inAdBanner from './components/in-ad-banner';
	import inChannelWidget from './components/in-channel-widget';
	import inFeedWidget from './components/in-feed-widget';

	export default {
		components: {
			inGridFloor,
			inAdBanner,
			inChannelWidget,
			inFeedWidget,
		},
		data() {
			return {
				channelsList: []
			}
		},
		onLoad() {
			this.queryChannelData();
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
		},
		onHide() {

		},
		onReachBottom() {
			uni.$emit('index:onReachBottom');
		},
		methods: {
			tapItem() {
				this.$http
					.get('/tab/index/queryChannelData', {})
					.then(r => {
						console.log("？？" + JSON.stringify(r))
					})
					.catch((e) => {
						console.log("error：" + JSON.stringify(e))
					});


			},
			// 添加商品至购物车
			queryChannelData() {
				this.loading = true;
				this.$http
					.get(`${queryChannelData}`, {})
					.then(r => {
						this.channelsList = r.data.result.data || [];
						this.loading = false;
						console.log("？？" + JSON.stringify(r))
					})
					.catch((e) => {
						this.loading = false;
						console.log("error：" + JSON.stringify(e))
					});
			},
			findFloorData(floorType) {
				return this.channelsList.filter(item => item.floorType == floorType)	 
			}
		},
		computed: {
			
		},
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0rpx;
		display: flex;
		flex-direction: column;
	}
	.tabBar-placeholder {
		height: calc(70px + env(safe-area-inset-bottom));
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-top: var(--window-top);
		overflow: scroll;
	}
	//////////////
	//////////////
	//////////////
</style>