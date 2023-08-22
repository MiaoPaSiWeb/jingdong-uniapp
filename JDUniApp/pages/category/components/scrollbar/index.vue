<template>
	<view>
		<view class="content">
			<scroll-view scroll-y >
				<view v-for="(item,index) in industryList" :key="item.industryId">
					<view class="item" :class="{'item_active':curIndustryId === item.industryId}"
						@click="checked(item)">
						<text>{{item.industryName}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Scrollbar',
		props: {
			curIndustryId: {
				type: String,
				default: ""
			},
			industryList: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		data() {
			return {
				isActive: "",
			}
		},
		mounted() {
			console.log("Scrollbar mounted", this.industryList);
		},
		methods: {
			checked(item) {
				uni.$emit('backToTop',{msg:'页面更新'})
				
				//获取div的原生DOM元素
				//这里的message实际上对应了父组件中的message，两者一致才可以交互数据。
				this.$emit('clickLeftNavItem', item);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		overflow: scroll;
	}
	.item {
		box-sizing: border-box;
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		cursor: pointer;
		font-size: 13px;
		color: #666;
	}
	
	.item_active {
		color: orangered;
		font-weight: 700;
		font-size: 15px;
	}
</style>