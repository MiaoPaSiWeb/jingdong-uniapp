<template>
	<view class="page">
		<view class="content" :style="contentStyle">
			<scroll-view class="category-nav" scroll-x="true" :scroll-into-view="'tab'+tabIndex" scroll-with-animation>
				<view :id="'tab'+index" v-for="(item,index) in categorys" class='category'
					:class="index === tabIndex ?'category-active':''" :key="index" @click="clickTab(index)">
					{{item}}
				</view>
			</scroll-view>
			<swiper class="vc_wrap" scroll-x="true" :current="tabIndex" @change='swiperOnChange'>
				<swiper-item  v-for="(item,index) in categorys" :key="index">
					<waterfall class="vc"></waterfall>
				</swiper-item>
			</swiper>
		</view>
		<jd-mainpage-bottom />
		<jd-tabbar pagePath='pages/self-support/self-support' />
	</view>
</template>

<script>
	import waterfall from './components/waterfall';
	export default {
		components: {
			waterfall
		},
		data() {
			return {
				contentStyle: {
					height: ''
				},
				tabIndex: 0,
				categorys: ["A", "B", "C", "D", "E", "F"],
			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif

			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.content').boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面顶部的距离为" + data.top);
					this.contentStyle.height = data.height + 'px'
				}).exec();
			})
		},
		onHide() {

		},
		onReachBottom() {
			// console.log("onReachBottom");
			// uni.$emit('index:onReachBottom');
		},
		methods: {
			clickTab(index) {
				this.tabIndex = index;
			},
			swiperOnChange(event) {
				this.tabIndex = event.detail.current;
			}
		}
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
	
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-top: var(--window-top);
	}
	//////////////
	//////////////
	//////////////
	.category-nav {
		white-space: nowrap;
		width: 100%;
	
		.category {
			display: inline-block;
			padding: 20rpx;
			text-align: center;
			font-size: 26rpx;
		}
	
		.category-active {
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	
	.vc_wrap {
		flex: 1;
		
		.vc {
			display: block;
			width: 100%;
			height: 100%;
		}
	}

</style>