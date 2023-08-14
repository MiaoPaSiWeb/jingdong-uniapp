<template>
	<view class="recommond_wrap">
		<view class="title">
			<text>为你推荐</text>
		</view>
		<uv-waterfall class="waterfall" ref="waterfall" v-model="data.list" left-gap="10" right-gap="10"
			column-gap="8" @changeList="changeList">
			<!-- 第一列数据 -->
			<template v-slot:list1>
				<!-- 为了磨平部分平台的BUG，必须套一层view -->
				<view class="waterfall-item">
					<view v-for="(item, index) in data.list1" :key="item.id">
						<!-- <view class="waterfall-item__image">
							<uv-image :src="item.pictureUrl" mode="widthFix" width="{item.width+'px'}">
							</uv-image>
						</view> -->
						<view>
							{{item.width}}
						</view>
						<view class="waterfall-item__ft">
							<view class="waterfall-item__ft__title">
								<text class="value">{{item.itemData.name}}</text>
							</view>
						</view>
					</view>
				</view>
			</template>
			<!-- 第二列数据 -->
			<template v-slot:list2>
				<!-- 为了磨平部分平台的BUG，必须套一层view -->
				<view class="waterfall-item">
					<view v-for="(item, index) in data.list2" :key="item.id">
						<!-- <view class="waterfall-item__image">
							<uv-image :src="item.pictureUrl" mode="widthFix" width="{item.width+'px'}">
	
							</uv-image>
						</view> -->
						<view>
							{{item.width}}
						</view>
						<view class="waterfall-item__ft">
							<view class="waterfall-item__ft__title">
								<text class="value">{{item.itemData.name}}</text>
							</view>
						</view>
					</view>
				</view>
			</template>
		</uv-waterfall>
		<!-- 加载更多组件 -->
		<uv-load-more :status="data.loadStatus"></uv-load-more>
	</view>
</template>

<script>
</script>

<style>
</style>