<template>
	<view style="{flex: 1;height: 100%;}">
		<view class="content">
			<scroll-view class="category-nav" scroll-x="true" :scroll-into-view="'tab'+tabIndex" scroll-with-animation>
				<view :id="'tab'+index" v-for="(item,index) in categorys" class='category'
					:class="index === tabIndex ?'category-active':''" :key="index" @click="clickTab(index)">
					{{item}}
				</view>
			</scroll-view>
			<swiper class="vc_wrap" scroll-x="true" :current="tabIndex" @change='swiperOnChange'>
				<swiper-item class="vc" v-for="(item,index) in categorys" :key="index">
					{{item}}
					<waterfall></waterfall>
				</swiper-item>
			</swiper>
			<jd-tabbar pagePath='pages/self-support/self-support' />
		</view>
	</view>
</template>

<script>
	import waterfall from './components/waterfall';
	export default {
		components:{
			waterfall
		},
		data() {
			return {
				tabIndex: 0,
				categorys: ["的士速递所多所A", "颠三倒四多撒B", "的范德萨发发生的范德萨仿电商C", "的士速递所多所A", "颠三倒四多撒B", "的范德萨发发生的范德萨仿电商C"],
			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
			
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.vc').boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面顶部的距离为" + data.top);
					// this.aheight = data.height
				}).exec();
			})
		},
		onHide() {

		},
		onReachBottom() {
			console.log("onReachBottom");
			uni.$emit('index:onReachBottom');
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
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		box-sizing: border-box;
		// border: 10px solid black;
		overflow: hidden;
		height: 100%;
		padding-bottom: calc(70px + env(safe-area-inset-bottom));
	}

	.category-nav {
		white-space: nowrap;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid red;

		.category {
			box-sizing: border-box;
			border: 1px solid red;
			display: inline-block;
			padding: 10rpx;
			text-align: center;
			font-size: 36rpx;
		}

		.category-active {
			font-weight: bold;
		}
	}

	.vc_wrap {
		flex: 1;
		.vc {
			box-sizing: border-box;
			border: 10px solid springgreen;
			display: block;
			width: 100%;
			height: 100%;
			//解决uni-app 的swiper 高度限制导致页面过长无法滚动的问题
			overflow-y: auto;
		}
	}
</style>