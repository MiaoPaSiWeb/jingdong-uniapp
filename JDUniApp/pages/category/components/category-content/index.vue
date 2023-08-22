<template>
	<view>
		<view class="content">
			<view v-if="moduleList.length == 0">
				暂无数据
			</view>
			<scroll-view v-else class="scroll-box" scroll-y :scroll-top="scrollTop"
					:scroll-with-animation="true" @scroll="scroll">
					<view v-for="(group,index) in moduleList" :key="index" class="group">
						<view class="nav_title">
							{{group.title}}
						</view>
						<view class="content">
							<view v-for="(item,index) in group.items" :key="index" class="item">
								<view class="image_wrap">
									<image :src="item.pic"></image>
								</view>
								<text>{{item.show_name}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			moduleList: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		data() {
			return {
				contentStyle: {
					height: ''
				},
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		mounted() {
			console.log('mounted：' + 'category-content');
			this.$nextTick(function() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.cart-box').boundingClientRect(data => {
					console.log("category-content得到布局位置信息" + JSON.stringify(data));
					console.log("category-content节点离页面顶部的距离为" + data.top);
					this.contentStyle.height = data.height + 'px'
				}).exec();

				// 仅在整个视图都被渲染之后才会运行的代码
				uni.$on('backToTop', (data) => {
					console.log('监听到事件来自 backToTop' + this);
					// 解决view层不同步的问题
					this.scrollTop = this.old.scrollTop
					this.$nextTick(function() {
						this.scrollTop = 0
					});
					uni.showToast({
						icon: "none",
						title: "纵向滚动 scrollTop 值已被修改为 0"
					})
				})
			})


		},
		methods: {
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>


<style lang="scss" scoped>
	.content {
		height: 100%;
		overflow: scroll;
		padding: 0 10px;
	}
	.scroll-box {
		height: 100%;
		overflow: scroll;
	}

	.group {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		padding: 10px;
		background-color: #FFF;
		border-radius: 10px;
		.nav_title {
			height: 30px;
			line-height: 30px;
		}

		.content {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 33.3%;

				.image_wrap {
					width: 50%;
					aspect-ratio: 1;
					background-color: #EEE;

					image {
						width: 100%;
						height: 100%;
					}
				}

				text {
					font-size: 12px;
				}
			}
		}
	}
</style>