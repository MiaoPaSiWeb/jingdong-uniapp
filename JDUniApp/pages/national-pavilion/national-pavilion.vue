<template>
	<view class="content">
		<view class="content-linear" :style="{ backgroundImage: 'url(' + bgUrl2 + ')' }">
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
						<template v-slot:default="item">
							<view class="item" @click="reset()">
								<view class="title">{{item.itemData.name}}</view>
								<view class="desc">{{item.itemData.desc}}</view>
							</view>
						</template>
					</custom-waterfalls-flow>
				</view>
				<view style="{width: 100%;;height: 100px;border: 1px solid green;}">
					???
				</view>
			</view>
		</view>

		<jd-tabbar pagePath="pages/national-pavilion/national-pavilion" />
	</view>
</template>

<script>
	import {
		GetJDUserInfoUnionForJD,recommend_like_m
	} from '@/api/mine.js';
	import myHeader from './components/my-header'
	import plusBlack from './components/plus_black'
	import favInfo from './components/favInfo/'
	import assetInfo from './components/assetInfo'
	import orderInfo from './components/orderInfo'
	import moneyCard from './components/moneyCard'
	import activity from './components/activity'
import { data } from '../../uni_modules/uview-ui/libs/mixin/mixin';
	const channelData = require('@/static/mock-data/tab/index/feedtab/floorId_83595812_0/result_1.json')

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
				loading: false,
				bgUrl: 'https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-uniapp/main/JDUniApp/static/mine/bg.png',
				bgUrl2: this.$mAssetsPath.path + '/mine/bg.png',
				data: {
						page:1,
					// list: channelData.result.list,
					list: []
				},

			}
		},
		mounted() {
			this.queryChannelData();
		},
		methods: {
			reset() {
				console.log("轻轻。。。。。")
				this.$http
					.get(`${recommend_like_m}/result_${this.data.page}.json`, {})
					.then(r => {
						console.log(r.data);
					})
					.catch((e) => {
						console.log("error"+e.message);
					});
			},
			// 添加商品至购物车
			queryChannelData() {
				let list = [];
				const recommondList = channelData.result.list;
				for (var i = 0; i < recommondList.length; i++) {
					const pictureUrl = recommondList[i]['pictureUrl'];
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
				this.data.list = [...list];

				// this.data.list =[{
				// 		image: 'https://m.360buyimg.com/babel/jfs/t1/93753/31/42210/96716/64a8b199F1f54cfac/22716e28934afc24.png',
				// 		title: '我是标题1',
				// 		desc: '描述描述描述描述描述描述描述描述1'
				// 	},
				// 	{
				// 		image: 'https://via.placeholder.com/200x200.png/2878ff',
				// 		title: '我是标题2',
				// 		desc: '描述描述描述描述描述描述描述描述2'
				// 	}

				// ]
				this.$refs.waterfallsFlowRef.refresh();

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

		.content-linear {
			background-repeat: no-repeat;

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
			padding: 12rpx 0;
			text {
				font-size: 24rpx;
			}
		}
	}
</style>