<template>
	<view class="modal-container" v-show="show">
		<view class="modal-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'jdModal',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: #fff;
		padding: 20px;
		max-height: 80%;
	}
</style>