<template>
	<view class="waterfall">
		<uv-waterfall ref="waterfall" v-model="list" left-gap="10" right-gap="10" column-gap="8"
			@changeList="changeList">
			<!-- 第一列数据 -->
			<template v-slot:list1>
				<!-- 为了磨平部分平台的BUG，必须套一层view -->
				<view>
					<view v-for="(item, index) in list1" :key="item.id + index" class="waterfall-item"
						:style="{width:item.width+'px'}">
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
					<view v-for="(item, index) in list2" :key="item.id + index" class="waterfall-item"
						:style="{width:item.width+'px'}">
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
		<uv-load-more :status="loadStatus"></uv-load-more>
	</view>
</template>
<script>
	import {
		guid
	} from '@/uni_modules/uv-ui-tools/libs/function/index.js'
	import {
		recommend_like_m
	} from '@/api/mine.js';
	export default {
		data() {
			return {
				page: 1,
				loadStatus: 'loadmore',
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [] // 瀑布流第二列数据
			}
		},
		mounted() {
			console.log("我的-猜你喜欢-mounted")
			//监听下拉加载更多
			uni.$on('national-pavilion:onReachBottom', () => {
				this.loadData();
			})
			this.loadData(true)
		},
		beforeDestroy() {
			uni.$off('national-pavilion:onReachBottom');
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
							console.log("error:" + e);
							this.page--;
							this.loadStatus = 'loadmore';
						});
				}
			},
			// 模拟的后端数据
			// getData() {
			// 	return new Promise((resolve) => {
			// 		const imgs = [
			// 			'https://cdn.uviewui.com/uview/album/1.jpg',
			// 			'https://cdn.uviewui.com/uview/album/2.jpg',
			// 			'https://cdn.uviewui.com/uview/album/3.jpg',
			// 			'https://cdn.uviewui.com/uview/album/4.jpg',
			// 			'https://cdn.uviewui.com/uview/album/5.jpg',
			// 			'https://cdn.uviewui.com/uview/album/6.jpg',
			// 			'https://cdn.uviewui.com/uview/album/7.jpg',
			// 			'https://cdn.uviewui.com/uview/album/8.jpg',
			// 			'https://cdn.uviewui.com/uview/album/9.jpg',
			// 			'https://cdn.uviewui.com/uview/album/10.jpg',
			// 		];
			// 		let list = [];
			// 		const doFn = (i) => {
			// 			const randomIndex = Math.floor(Math.random() * 10);
			// 			return {
			// 				id: guid(),
			// 				allowEdit: i == 0,
			// 				image: imgs[randomIndex],
			// 				title: i % 2 == 0 ? `(${this.list.length + i + 1})体验uv-ui框架` :
			// 					`(${this.list.length + i +1})uv-ui支持多平台`,
			// 				desc: i % 2 == 0 ? `(${this.list.length + i + 1})欢迎使用uv-ui，uni-app生态专用的UI框架` :
			// 					`(${this.list.length + i})开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序`
			// 			}
			// 		};
			// 		// 模拟异步
			// 		setTimeout(() => {
			// 			for (let i = 0; i < 20; i++) {
			// 				list.push(doFn(i));
			// 			}
			// 			resolve({
			// 				data: list
			// 			});
			// 		}, 200)
			// 	})
			// }
		}
	}
</script>
<style>
	page {
		background: #f1f1f1;
	}
</style>
<style scoped lang="scss">
	$show-lines: 1;
	@import '@/uni_modules/uv-ui-tools/libs/css/variable.scss';

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