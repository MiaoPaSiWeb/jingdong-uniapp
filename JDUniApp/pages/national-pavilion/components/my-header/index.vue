<template>
	<view class="content">
		<view class="avatar_wrap">
			<view class="avatar">
				<jd-image :src="require('@/static/mine/avatar.png')"></jd-image>
			</view>
			<view class="real_name">
				待实名认证
			</view>
		</view>
		<view class="personal_wrap">
???
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my-header',
		data() {
			return {}
		},
	}
</script>
<!-- //写在最下面的样式里 -->
<style>
	page {background: transparent;}
</style>

<style lang="scss" scoped>
	.content {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border: 1px solid blue;
		width: 100%;
		height: 170rpx;
		background-color: transparent;

		.avatar_wrap {
			display: flex;
			justify-content: center;
			position: relative;
			box-sizing: border-box;
			border: 1px solid red;

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
			border: 1px solid green;
		}
	}
</style>