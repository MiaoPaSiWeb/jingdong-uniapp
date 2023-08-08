<template>
	<view class="scroll-view_H">
		<view class="scroll-view-item_H" v-for="tab in fdata.feedFloor.tabList" :key="tab.tabId"
			@click="handleClickTabItem(tab)">
			<view v-if="tab.styleId == 1" class="styleId-1" :class="{'style-active':selectTabId == tab.tabId}">
				<text class="title">{{tab.tabName}}</text>
			</view>
			<view v-else-if="tab.styleId == 3" class="styleId-3" :class="{'style-active':selectTabId == tab.tabId}">
				<view class="img-wrap">
					<jd-image :preview='false' :src='selectTabId == tab.tabId ? tab.tabDefaultImage:tab.tabSelectedImage'></jd-image>
				</view>
			</view>
			<view v-else>
				tab.styleId - {{tab.styleId}}
			</view>
		</view>
	</view>
	<waterfall column-count="2" column-width="auto">
	    <cell v-for="num in lists" >
	      <text>{{num}}</text>
	    </cell>
	  </waterfall>
</template>

<script>
export default {
	name: 'FEED_WIDGET',
	props: {
		fdata: {
			type: Object,
			default: {}
		}
	},
	data() {
		return {
			selectTabId: -1,
			lists: ['A', 'B', 'C', 'D', 'E']
		}
	},
	mounted() {
		console.log("AD_BANNER-onLoad", this.fdata);
	},
	methods: {
		// size每组数组多少个，如：10
		// array需要拆分的数组
		splitArray(array, size) {
			let data = [];
			for (let i = 0; i < array.length; i += size) {
				data.push(array.slice(i, i + size))
			}
			return data
		},
		handleClickTabItem(tab) {
			this.selectTabId = tab.tabId;
			console.log("handleClickTabItem", this.selectTabId);
		}

	},
	computed: {
		// groups() {
		// 	const channels = this.fdata.channelFloor.channels;
		// 	return this.splitArray(channels, 10)
		// }
	},
}
</script>

<style lang="less" scoped>
.scroll-view_H {
	box-sizing: border-box;
	border: 1px solid transparent;
	display: flex; //使用flex布局
	flex-direction: row;
	align-items: center;
	white-space: nowrap; //不换行
	overflow-x: auto; //x轴方向滚动
	padding: 15rpx 12rpx;

	.scroll-view-item_H {
		flex-shrink: 0; //添加 flex-shrink: 0;   值为0不被压缩
		box-sizing: border-box;

		&:last-child {
			margin-right: 0rpx;
		}
	}
}

.styleId-1 {
	color: black;
	font-size: 13px;
	border: 1px solid transparent;
	.title {
		padding: 15rpx 12rpx;
	}
}

.styleId-3 {
	border: 1px solid transparent;
	width: 80px;
	height: 21px;
	.img-wrap {
		width: 100%;
		height: 100%;
	}
}

.style-active {
	color: red;
	font-size: 14px;
	font-weight: bold;
}
</style>