<template>
	<view>
		<view class="container">
			<uv-waterfall ref="waterfall" v-model="list" left-gap="10" right-gap="10" column-gap="8"
				@changeList="changeList">
				<!-- 第一列数据 -->
				<template v-slot:list1>
					<!-- 为了磨平部分平台的BUG，必须套一层view -->
					<view>
						<view v-for="(item, index) in list1" :key="index" class="waterfall-item"
							:style="{width:item.width+'px'}" @click="clickProductItem(item)">
							<view class="waterfall-item__image">
								<image :src="'https:'+item.imgprefix+item.imgbase" mode="widthFix"
									:style="{width:item.width+'px'}"></image>
							</view>
							<view class="waterfall-item__ft">
								<view class="waterfall-item__ft__title">
									<text class="value">{{item.name}}</text>
								</view>
								<view class="waterfall-item__ft__desc">
									<text class="value">{{item.oriprice}}</text>
								</view>
							</view>
						</view>
					</view>
				</template>
				<!-- 第二列数据 -->
				<template v-slot:list2>
					<!-- 为了磨平部分平台的BUG，必须套一层view -->
					<view>
						<view v-for="(item, index) in list2" :key="index" class="waterfall-item"
							:style="{width:item.width+'px'}" @click="clickProductItem(item)">
							<view class="waterfall-item__image">
								<image :src="'https:'+item.imgprefix+item.imgbase" mode="widthFix"
									:style="{width:item.width+'px'}"></image>
							</view>
							<view class="waterfall-item__ft">
								<view class="waterfall-item__ft__title">
									<text class="value">{{item.name}}</text>
								</view>
								<view class="waterfall-item__ft__desc uv-line-2">
									<text class="value">{{item.oriprice}}</text>
								</view>
							</view>
						</view>
					</view>
				</template>
			</uv-waterfall>
			<!-- 加载更多组件 -->
			<view class="load-more">
				<uv-load-more :status="loadStatus"></uv-load-more>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		guid
	} from '@/uni_modules/uv-ui-tools/libs/function/index.js'
	import {
		recommend_like_m
	} from '@/api/mine.js';

	let observer = null;

	export default {
		data() {
			return {
				page: -1,
				loadStatus: 'loadmore',
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [] // 瀑布流第二列数据
			}
		},
		mounted() {
			console.log("我的-猜你喜欢-mounted")
			observer = uni.createIntersectionObserver(this);
			observer.relativeToViewport({
				bottom: 0
			}).observe('.load-more', (res) => {
				console.log("createIntersectionObserver：")
				if (res.intersectionRatio > 0 && !this.appear) {
					this.loadData()
				} else if (!res.intersectionRatio > 0 && this.appear) {

				}
			})

			this.loadData(true)
		},
		beforeDestroy() {
			if (observer) {
				observer.disconnect()
			}
		},
		methods: {
			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);
			},
			loadData(isRefresh = false) {
				if (this.loadStatus == 'loadmore') {
					this.loadStatus = 'loading';
					console.log("loadData")
					if (isRefresh) {
						this.page = 1;
					} else {
						this.page++;
					}
					this.$http
						.get(`${recommend_like_m}/result_${this.page}`, {})
						.then(r => {
							const recommondList = r.data.data.feeds.content;
							if (this.page == 1) {
								this.list = [...recommondList];
							} else {
								this.list = [...this.list, ...recommondList];
							}
							this.loadStatus = 'loadmore';
						})
						.catch((e) => {
							console.log("error:" + JSON.stringify(e));
							this.page--;
							this.loadStatus = 'loadmore';
							uni.showToast({
								title:"获取数据失败"
							})
						});
				}
			},
			clickProductItem(item) {
				uni.navigateTo({
					url: '/pages/product/product'
				})

			},
		}
	}
</script>
<style scoped lang="scss">
	.container {
		box-sizing: border-box;
		border: 1px solid red;
	}

	.waterfall-item {
		overflow: hidden;
		margin-top: 10px;
		border-radius: 6px;
		box-sizing: border-box;
		border: 1px solid red;
	}

	.waterfall-item__ft {
		padding: 20rpx;
		background: #fff;

		&__title {
			margin-bottom: 10rpx;

			.value {
				text-align: left;
				line-height: 1.05rem;
				height: 2.1rem;
				font-size: 0.7rem;
				font-family: -apple-system, Helvetica, sans-serif;
				overflow: hidden;
				color: #434343;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				word-break: break-all;
				-webkit-box-orient: vertical;
			}
		}

		&__desc {
			.value {
				font-style: normal;
				font-family: JDZH-Regular, sans-serif;
				display: inline-block;
				font-size: 0.7rem;
				line-height: 1.5rem;
				color: #ff4142;
			}
		}
	}
</style>