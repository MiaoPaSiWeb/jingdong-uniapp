<template>
	<div class="modal-container" @click="closeModal">
		<div class="modal-content" @click.stop>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeModal() {
				this.$emit('close');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		/* 阻止蒙层滑动 */
		overflow-y: hidden;

	}

	.modal-content {
		box-sizing: border-box;
		border: 1px solid red;
		background-color: white;
		border-radius: 10px;
		padding: 20px;
		max-width: 80%;
		max-height: 80%;
		/* 内容正常滑动 */
		overflow-y: auto;

	}
</style>