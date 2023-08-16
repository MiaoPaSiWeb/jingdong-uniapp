<template>
	<div class="modal-container" v-show="show">
		<div class="modal-content">
			<div class="modal-body">
				<slot name="body"></slot>
			</div>
			<div class="modal-footer">
				<slot name="footer">
					<button @click="cancel">取消</button>
					<button @click="confirm">确认</button>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jDConfirmation',
		props: {
			show: {
				type: Boolean,
				default: false
			},
			onCancel: Function,
			onConfirm: Function
		},
		methods: {
			cancel() {
				this.onCancel && this.onCancel()
			},
			confirm() {
				this.onConfirm && this.onConfirm()
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
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}

	.modal-footer button {
		margin-left: 10px;
	}
</style>