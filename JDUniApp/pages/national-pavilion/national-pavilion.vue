<template>
	<view class="content">
		<view class="content-bg" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
			<myHeader></myHeader>
			<plusBlack></plusBlack>
			<favInfo></favInfo>
			<orderInfo></orderInfo>
			<assetInfo></assetInfo>
			<moneyCard></moneyCard>
			<activity></activity>
			<view class="recommond_wrap">
				<view class="title">
					<text>为你推荐</text>
				</view>
				<view class="waterfallsFlow">
					<custom-waterfalls-flow class="" ref="waterfallsFlowRef" :value="data.list">
						<!-- #ifdef MP-WEIXIN -->
						<view class="item" v-for="(item,index) in data.list" :key="index" slot="slot{{index}}">
							<view class="title">{{item.itemData.name}}</view>
							<view class="desc">{{item.itemData.desc}}</view>
						</view>
						<!-- #endif -->
						<!-- #ifndef MP-WEIXIN -->
						<template v-slot:default="item">
							<view class="item">
								<view class="title">{{item.itemData.name}}</view>
								<view class="desc">{{item.itemData.desc}}</view>
							</view>
						</template>
						<!-- #endif -->
					</custom-waterfalls-flow>
				</view>
				<view class="footer">
					<view class="content">
						<text>{{data.loading ? "加载中...":"???"}}</text>
					</view>
				</view>
			</view>

		</view>
		<jd-tabbar pagePath="pages/national-pavilion/national-pavilion" />
	</view>
</template>

<script>
	import {
		GetJDUserInfoUnionForJD,
		recommend_like_m
	} from '@/api/mine.js';
	import myHeader from './components/my-header'
	import plusBlack from './components/plus_black'
	import favInfo from './components/favInfo/'
	import assetInfo from './components/assetInfo'
	import orderInfo from './components/orderInfo'
	import moneyCard from './components/moneyCard'
	import activity from './components/activity'

	export default {
		components: {
			myHeader,
			plusBlack,
			favInfo,
			assetInfo,
			orderInfo,
			moneyCard,
			activity,
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
		},
		onHide() {
			// #ifndef MP-WEIXIN
			uni.showTabBar()
			// #endif/*  */
		},
		data() {
			return {
				bgUrl: this.$mAssetsPath.path + '/mine/bg.png',
				data: {
					loading: false,
					page: 1,
					list: []
				},

			}
		},
		mounted() {
			this.queryRecommondData();
		},
		// 滑动到距离底部100px的时候触发（上拉加载）
		onReachBottom() {
			if (this.data.loading) {
				return;
			}
			console.log('滑动到距离底部100px的时候触发,可以放 。。业务逻辑');
			this.data.page++;
			this.queryRecommondData();
		},
		methods: {
			queryRecommondData() {
				this.data.loading = true;
				this.$http
					.get(`${recommend_like_m}/result_${this.data.page}.json`, {})
					.then(r => {
						const recommondList = r.data.data.feeds.content;
						let list = [];
						for (var i = 0; i < recommondList.length; i++) {
							//	"imgbase": "jfs/t1/149535/34/36619/29390/6491764eF6190afb2/9ef3155adb952c42.jpg",
							// "imgprefix": "//img14.360buyimg.com/n1/",
							const imgbase = recommondList[i]['imgbase']
							const imgprefix = recommondList[i]['imgprefix']
							const pictureUrl = "https:" + imgprefix + imgbase;
							if (pictureUrl != undefined) {
								list.push({
									image: pictureUrl,
									itemData: recommondList[i]
								})
							} else {
								list.push({
									image: "https://m.360buyimg.com/babel/jfs/t1/93753/31/42210/96716/64a8b199F1f54cfac/22716e28934afc24.png",
									itemData: recommondList[i]
								})
							}
						}
						if (this.data.page == 1) {
							this.data.list = [...list];
						} else{
							this.data.list = [...this.data.list,...list];
							
						}
						this.data.loading = false;
						this.$refs.waterfallsFlowRef.refresh();
						
					})
					.catch((e) => {
						console.log("error:" + e);
						this.data.page--;
						this.data.loading = false;
						this.$refs.waterfallsFlowRef.refresh();
						
					});
			},
		},
		computed: {
			// bgUrl2() {
			// 	return this.$mAssetsPath.path + '/mine/bg.png'
			// }

		},
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #f5f5f5;

		.content-bg {
			background-repeat: no-repeat;
			padding-bottom: calc(70px + env(safe-area-inset-bottom));

			.item {
				box-sizing: border-box;
				border: 1px solid red;
			}
		}
	}

	.recommond_wrap {
		box-sizing: border-box;
		border: 1px solid red;

		.title {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20rpx 0;

			text {
				font-size: 24rpx;
			}
		}

		.footer {
			width: 750rpx;

			.content {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 44px;
				box-sizing: border-box;
				border: 2px solid green;

				text {}
			}
		}
	}
</style>