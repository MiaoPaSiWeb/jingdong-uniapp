<template>
	<block>
		<image
			v-if="preview"
			class="jd-image"
			mode="mode"
			lazy-load="true"
			@tap.stop="previewImage(src)"
			@error="onImageError"
			:src="src || $mAssetsPath.errorImage"
		></image>
		<image
			v-else
			class="jd-image"
			mode="mode"
			lazy-load="true"
			@error="onImageError"
			:src="src || $mAssetsPath.errorImage"
		></image>
	</block>
</template>

<script>
/**
 * @des 图片标签的建议封装
 *
 * @author stav stavyan@qq.com
 * @date 2020-03-10 15:33
 * @copyright 2020
 */
import $mAssetsPath from '@/config/assets.config';

export default {
	name: 'jDImage',
	props: {
		src: {
			type: String,
			default: $mAssetsPath.errorImage
		},
		// 显示模式
		mode: {
			type: String,
			default: 'aspectFill'
		},
		// 是否预览
		preview: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		// 图片异常处理
		onImageError() {
			console.log("onImageError",this.src);
			// this.src = $mAssetsPath.errorImage;
		},
		// 图片预览
		previewImage(urls) {
			if (!this.preview) return;
			if (!urls) return;
			uni.previewImage({
				urls: urls.split('#$#')
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.jd-image {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	border: 1px solid saddlebrown;
}
</style>
