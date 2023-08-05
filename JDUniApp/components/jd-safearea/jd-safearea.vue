<template>
	<view class="safe-padding"></view>
</template>

<script>
export default {
	name: 'jDSafearea'
}
</script>

<style>
	.safe-padding {
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>