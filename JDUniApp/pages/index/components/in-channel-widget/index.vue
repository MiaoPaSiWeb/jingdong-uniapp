<template>
	<view>
		<view class="content">
			<view class="uni-margin-wrap">
				<swiper class="swiper" @change="handleChange" @transition="handleTransition">
					<swiper-item v-for="(group,index) in groups" :key="index">
						<view class="swiper-item">
							<view class="item" v-for="item in group" :key='item.advertId'>
								<view class="image-wrap">
									<jd-image :src='item.imageUrl'></jd-image>
								</view>
								<text class="title">{{item.name}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CHANNEL_WIDGET',
		props: {
			fdata: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				scroll_list: ['1', '2', '3', '4', '5', '6']
			}
		},
		mounted() {
			console.log("AD_BANNER mounted", this.fdata);
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
			handleChange(e){
				// console.log("handleChange："+e)
			},
			handleTransition(e){
				// console.log("handleTransition："+JSON.stringify(e))
			}

		},
		computed: {
			groups() {
				const channels = this.fdata.channelFloor.channels;
				return this.splitArray(channels, 10)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 12rpx;		
	}
	.uni-margin-wrap {
		width: 100%;
		background-color: #FFF;
		border-radius: 12px;
	}
	
	.swiper {
		height: 280rpx;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		height: 280rpx;
		.item {
			display: flex;	
			flex-direction: column;
			align-items: center;
			// box-sizing: border-box;
			// border: 1px solid red;
			width: 20%;

			.image-wrap {
				width: 90rpx;
				height: 90rpx;
				background-color: antiquewhite;
			}

			.title {
				font-size: 12px;
			}
		}

	}



	.scroll-view_H {
		box-sizing: border-box;
		display: flex; //使用flex布局
		flex-direction: row;
		white-space: nowrap; //不换行
		overflow-x: auto; //x轴方向滚动
		margin: 12rpx 12rpx;

		.group {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			flex-shrink: 0; //添加 flex-shrink: 0;   值为0不被压缩
			width: calc(100%);
			background-color: #FFF;
			border-radius: 12rpx;

			.item {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 10rpx;
				width: calc(100% / 5);


				.image-wrap {
					width: 100rpx;
					height: 100rpx;
					background-color: antiquewhite;
				}

				.title {
					font-size: 12px;
				}
			}
		}
	}
</style>
