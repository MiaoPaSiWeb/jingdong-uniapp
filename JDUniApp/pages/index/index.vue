<template>
	<view class="content">
		<view v-if="loading">请求中。。。</view>
		<u-button @click="showPicker = true">打开</u-button>
		<u-button @click="showCalendar = true">打开日历</u-button>

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

		<u-picker :show="showPicker" :columns="columns4" closeOnClickOverlay @cancel="cancel" @confirm="confirm"
			@close="close" ></u-picker>

		<!-- <u-calendar :show="showCalendar"></u-calendar> -->
		<u-calendar
			:show="showCalendar"
			defaultDate="2022-02-15"
			@confirm="showCalendar = false"
			@close="showCalendar = false"
		></u-calendar>
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
				showPicker: false,
				showCalendar: false,
				loading: false,
				channelsList: [],
				columns4: [
					['中国', '美国'],
					['深圳', '厦门', '上海', '拉萨']
				],
			}
		},
		onLoad() {
			// this.queryChannelData();
			this.channelsList = channelData.result.data || [];
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
		},
		onHide() {
			
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
						console.log("？？"+JSON.stringify(r))
					})
					.catch((e) => {
						this.loading = false;
						console.log("error："+JSON.stringify(e))
					});
			},
			close() {
				// console.log('close');
				this.showPicker = false
			},
			confirm(e) {
				// console.log('confirm', e);
				this.showPicker = false

			},
			cancel() {
				// console.log('cancel');
				this.showPicker = false

			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #eee;
	}
</style>