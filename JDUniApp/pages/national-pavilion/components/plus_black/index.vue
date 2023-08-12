<template>
	<view class="plus_black_wrap" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
		<view class="plus_title">
			<view class="titlelogo">

			</view>
		</view>
		<view class="left_tab">
			10倍返京豆
		</view>
		<view class="mid_tab">
			<view class="wqvue-image">
				<jd-image
					:src="`https://m.360buyimg.com/babel/jfs/t1/113353/24/20397/14472/621f6787E539399b7/83f66682991c9ff7.png`"></jd-image>
			</view>
			<view class="content">
				<view class="mid_tab_top">
					品质生活
				</view>
				<view class="mid_tab_bottom">
					赠PLUS
				</view>
			</view>
		</view>
		<view class="right_tab">
			<view class="wqvue-image">
				<jd-image
					:src="`https://m.360buyimg.com/babel/jfs/t1/158791/25/38149/2389/649e91f3Fee2165e5/2ebc61529d1e7949.jpg`"></jd-image>
			</view>
			<view class="content">
				<view class="mid_tab_top">
					开PLUS
				</view>
				<view class="mid_tab_bottom">
					20元红包
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'plus_black_wrap',
		data() {
			return {
				bgUrl: this.$mAssetsPath.path + '/mine/plus_back_bg.png',
				horTips: ["京享值", "开启小白守约特权", "京享值", "开启小白守约特权"]
			}
		},
		methods: {
			clickSettingBtn() {
				uni.navigateTo({
					url: '/pages/account-set/account-set'
				})

			},
			clickHorTipItem(v) {
				uni.showToast({
					title: v
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.plus_black_wrap {
		height: 112rpx;
		margin: 12rpx 20rpx 0;
		box-sizing: border-box;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size: 710rpx 112rpx;
		position: relative;

		.plus_title {
			position: absolute;
			margin: -8px 0 0 3%;
			width: 140px;
			height: 30px;
			box-sizing: border-box;
			border: 1px solid transparent;

			.titlelogo {
				width: 28px;
				height: 28px;
				background: url(https://img12.360buyimg.com/img/s56x56_jfs/t1/181444/36/22843/5717/62591243E7f51cfc4/ef465db87a86bc9e.png) 50% no-repeat;
				background-size: contain;
			}
		}

		.left_tab {
			box-sizing: border-box;
			border: 1px solid transparent;
			display: inline-block;
			font-size: 12px;
			font-family: PingFangSC;
			color: #996300;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 35%;
			position: absolute;
			margin-top: 30px;
			text-align: center;
		}

		.mid_tab {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid transparent;
			position: absolute;
			margin: 13px 0 0 37%;

			.wqvue-image {
				width: 60rpx;
				height: 60rpx;
			}

			.content {
				padding: 0 10rpx;

				.mid_tab_top {
					overflow: hidden;
					white-space: nowrap;
					font-family: PingFangSC;
					font-weight: 700;
					letter-spacing: -1px;
					color: #8c5c25;
					font-size: 24rpx;
					max-width: 150rpx;
					min-width: 40rpx;
				}

				.mid_tab_bottom {
					color: #8c5c25;
					font-family: PingFangSC-Bold;
					font-size: 20rpx;
					width: 140rpx;
				}
			}
		}

		.right_tab {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid transparent;
			position: absolute;
			margin: 13px 0 0 68%;
			.wqvue-image {
				width: 60rpx;
				height: 60rpx;
			}
			
			.content {
				padding: 0 10rpx;
			
				.mid_tab_top {
					overflow: hidden;
					white-space: nowrap;
					font-family: PingFangSC;
					font-weight: 700;
					letter-spacing: -1px;
					color: #8c5c25;
					font-size: 24rpx;
					max-width: 150rpx;
					min-width: 40rpx;
				}
			
				.mid_tab_bottom {
					color: #8c5c25;
					font-family: PingFangSC-Bold;
					font-size: 20rpx;
					width: 140rpx;
				}
			}
		}
	}
</style>