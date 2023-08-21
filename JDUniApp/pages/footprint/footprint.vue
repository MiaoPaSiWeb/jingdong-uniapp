<template>
	<view>
		<view class="header-nav">
			<text>最多为您展示100条</text>
		</view>
		<view class="list-wrap">
			<view v-for="(group,index) in list" :key="group.datetime" class="group">
				<text class="title">{{formatDate(group.datetime)}}</text>
				<view class="items-wrap">
					<view v-for="item in group.items" :key="item.ts" class="item">
						<view class="image-wrap">
							<jd-image :src='item.img'></jd-image>
						</view>
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							{{item.jprice}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		footprint_records
	} from '@/api/mine.js';
	export default {
		data() {
			return {
				page: 1,
				loadStatus: 'loadmore',
				list: [],
			}
		},
		onLoad() {
			this.loadData(true)
		},
		methods: {
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
						.get(`${footprint_records}/result_${this.page}`, {})
						.then(r => {
							const historyList = r.data.data;

							// 创建一个空对象，用于存储转换后的数据
							const transformedData = {};

							// 遍历原始数据
							historyList.forEach(item => {
								const timestamp = item.ts;

								// 将时间戳转换为日期字符串，格式为 YYYY-MM-DD
								const date = new Date(timestamp);
								const dateString =
									`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

								// 如果日期不存在于 transformedData 中，则创建一个新的数组
								if (!transformedData[dateString]) {
									transformedData[dateString] = {
										datetime: timestamp,
										items: []
									};
								}

								// 将数据添加到日期对应的数组的 items 中
								transformedData[dateString].items.push(item);
							});

							// 将 transformedData 转换为数组格式
							const resultArray = Object.values(transformedData);

							console.log(resultArray);



							if (this.page == 1) {
								this.list = [...resultArray];
							} else {
								this.list = [...this.list, ...resultArray];
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
			clickProductItem(item) {
				uni.navigateTo({
					url: '/pages/product/product'
				})
			},
			formatDate(timestamp) {
			    const now = new Date();
			    const date = new Date(timestamp);
			    
			    const diffTime = now.getTime() - date.getTime();
			    const oneDayInMs = 24 * 60 * 60 * 1000;
			
			    if (diffTime < oneDayInMs) {
			        return "今天";
			    } else if (diffTime < 2 * oneDayInMs) {
			        return "昨天";
			    } else if (diffTime < 3 * oneDayInMs) {
			        return "前天";
			    } else {
			        const year = date.getFullYear();
			        const month = (date.getMonth() + 1).toString().padStart(2, '0');
			        const day = date.getDate().toString().padStart(2, '0');
			        return `${year}-${month}-${day}`;
			    }
			}
		},
	}
</script>

<style lang="scss" scoped>
	.header-nav {
		padding: 12rpx;
		font-size: 14px;
		color: #999;
	}

	.list-wrap {}

	.group {
		box-sizing: border-box;
		border: 1px solid transparent;
		margin-bottom: 20rpx;
		background-color: #FFF;
		border-radius: 12rpx;
		padding: 12rpx;

		.items-wrap {
			box-sizing: border-box;
			border: 1px solid transparent;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.item {
				width: 33.3%;
				box-sizing: border-box;
				border: 1px solid transparent;
				padding: 4rpx;

				.image-wrap {
					aspect-ratio: 1;
				}

				.name {
					box-sizing: border-box;
					border: 1px solid transparent;
					width: 100%;
					font-size: 12px;
					/*设置文本2行显示*/
					overflow: hidden;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
				}
				.price {
					color: red;
				}
			}
		}
	}
</style>