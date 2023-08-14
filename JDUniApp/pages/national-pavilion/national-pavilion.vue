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
				<uv-waterfall ref="waterfall" v-model="data.list" left-gap="10" right-gap="10" column-gap="8"
					@changeList="changeList">
					<!-- 第一列数据 -->
					<template v-slot:list1>
						<!-- 为了磨平部分平台的BUG，必须套一层view -->
						<view>
							<view v-for="(item, index) in data.list1" :key="item.id" class="waterfall-item">
								<view class="waterfall-item__image">
									<uv-image :src="item.pictureUrl" mode="widthFix" width="{item.width+'px'}">
									</uv-image>
								</view>
								<view class="waterfall-item__ft">
									<view class="waterfall-item__ft__title">
										<text class="value">{{item.itemData.name}}</text>
									</view>
									<view class="waterfall-item__ft__desc uv-line-2">
										<text class="value">{{item.itemData.desc}}</text>
									</view>
								</view>
							</view>
						</view>
					</template>
					<!-- 第二列数据 -->
					<template v-slot:list2>
						<!-- 为了磨平部分平台的BUG，必须套一层view -->
						<view>
							<view v-for="(item, index) in data.list2" :key="item.id" class="waterfall-item">
								<view class="waterfall-item__image">
									<uv-image :src="item.pictureUrl" mode="widthFix" width="{item.width+'px'}">

									</uv-image>
								</view>
								<view class="waterfall-item__ft">
									<view class="waterfall-item__ft__title">
										<text class="value">{{item.itemData.name}}</text>
									</view>
									<view class="waterfall-item__ft__desc uv-line-2">
										<text class="value">{{item.itemData.desc}}</text>
									</view>
								</view>
							</view>
						</view>
					</template>
				</uv-waterfall>
				<!-- 加载更多组件 -->
				<uv-load-more :status="data.loadStatus"></uv-load-more>
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
		data() {
			return {
				bgUrl: this.$mConfig.assetsRemotePath + '/mine/bg.png',
				data: {
					loading: false,
					loadStatus: 'loadmore',
					page: 1,
					list: [], // 瀑布流全部数据
					list1: [], // 瀑布流第一列数据
					list2: [] // 瀑布流第二列数据
				},

			}
		},
		onShow() {
			// #ifndef MP-WEIXIN
			uni.hideTabBar()
			// #endif
		},
		onHide() {
			
		},
		mounted() {
			this.queryRecommondData();
		},
		// 滑动到距离底部100px的时候触发（上拉加载）
		onReachBottom() {
			if (this.data.loadStatus == 'loading') {
				return;
			}
			console.log('滑动到距离底部100px的时候触发,可以放 。。业务逻辑');
			this.data.page++;
			this.queryRecommondData();
		},
		methods: {
			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				// console.log("changeList："+JSON.stringify(e));
				this.data[e.name].push(e.value);
			},
			queryRecommondData() {
				this.data.loadStatus = 'loading';
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
									pictureUrl: pictureUrl,
									itemData: recommondList[i]
								})
							} else {
								list.push({
									pictureUrl: "https://m.360buyimg.com/babel/jfs/t1/93753/31/42210/96716/64a8b199F1f54cfac/22716e28934afc24.png",
									itemData: recommondList[i]
								})
							}
						}
						if (this.data.page == 1) {
							this.data.list = [...list];
						} else {
							this.data.list = [...this.data.list, ...list];

						}
						this.data.loadStatus = 'loadmore';
					})
					.catch((e) => {
						console.log("error:" + e);
						this.data.page--;
						this.data.loadStatus = 'loadmore';
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
		}
	}

	.recommond_wrap {
		box-sizing: border-box;
		border: 2px solid red;

		.title {
			box-sizing: border-box;
			border: 2px solid red;
		}

		.waterfall-item {
			overflow: hidden;
			margin-top: 10px;
			border-radius: 6px;
		}
		.waterfall-item__image {
			box-sizing: border-box;
			border: 1px solid red;
			min-width: 100%;
			min-height: 150px;
		}
		.waterfall-item__ft {
			padding: 20rpx;
			background: #fff;

			&__title {
				margin-bottom: 10rpx;
				line-height: 48rpx;
				font-weight: 700;

				.value {
					font-size: 32rpx;
					color: #303133;
				}
			}

			&__desc .value {
				font-size: 28rpx;
				color: #606266;
			}

			&__btn {
				padding: 10px 0;
			}
		}
	}
</style>