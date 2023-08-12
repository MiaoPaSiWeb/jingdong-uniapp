<template>
	<view class="myheader_content">
		<view class="avatar_wrap">
			<view class="avatar">
				<jd-image :src="require('@/static/mine/avatar.png')"></jd-image>
			</view>
			<view class="real_name">
				待实名认证
			</view>
		</view>
		<view class="personal_wrap">
			<view class="name_wrap">
				<text>jd_aTxANcqkkDne</text>
			</view>
			<view class="hor-tips">
				<view v-for="(item,index) in horTips" :key="index" class="notice" @click="clickHorTipItem(item)">
					{{item}}
				</view>
			</view>
		</view>
		<view class="account_wrap">
			<view class="account_wrap_content" @click="clickSettingBtn()">
				<jd-image :src="require('@/static/mine/setting.png')"></jd-image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-header',
		data() {
			return {
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
	.myheader_content {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border: 1px solid blue;
		padding: 10rpx;
		width: 100%;

		.avatar_wrap {
			position: relative;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			border: 1px solid transparent;

			.avatar {
				padding: 0 24rpx;
				width: 100rpx;
				height: 100rpx;
			}

			.real_name {
				position: absolute;
				bottom: -12rpx;
				color: hsla(0, 0%, 100%, .7);
				background-color: rgba(0, 0, 0, .5);
				padding: 0 10rpx;
				height: 30rpx;
				line-height: 30rpx;
				border-radius: 15rpx;
				font-size: 20rpx;
			}
		}

		.personal_wrap {
			flex: 1;
			box-sizing: border-box;
			border: 1px solid transparent;

			.name_wrap {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 18px;
				font-weight: 500;
			}

			.hor-tips {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin-top: 10px;

				.notice {
					position: relative;
					max-width: 150px;
					height: 16px;
					line-height: 17px;
					padding: 0 14px 0 6px;
					margin: 0 6px 0 0;
					border-radius: 15px;
					font-size: 10px;
					background: hsla(0, 0%, 100%, .68);
					border: 1px solid #f8cfce;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: 400;

					&:last-child {
						&:after {
							display: block;
							content: "";
							width: 6px;
							height: 6px;
							position: absolute;
							right: 5px;
							top: 5px;
							background: url(https://img12.360buyimg.com/img/s24x24_jfs/t1/198876/9/23243/833/62654947E187d03d4/c4184ae89be2e97d.png) no-repeat;
							background-size: 100%;
						}
					}
				}


			}
		}

		.account_wrap {
			box-sizing: border-box;
			border: 1px solid transparent;
			height: 100rpx;

			.account_wrap_content {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>