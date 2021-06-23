<template>
	<view class="shopping-car-box">
		<view class="title">{{pageTitle}}</view>
		<view class="empty-content" v-if="list.length === 0">
			<view class="empty-icon"></view>
			<view>您还未添加商品在购物车</view>
		</view>
		<scroll-view
			class="shopping-car-list"
			scroll-y="true" 
			v-if="list.length > 0"
		>
			<checkbox-group @change="checkboxChange">
				<view class="shopping-car-item" v-for="(item, index) in list" :key="index">
					<view class="checkbox-content">
						<checkbox :value="item.id" :checked="item.checked" color="#000000" />
					</view>
					<view class="goods-content">
						<!-- <image class="goods-cover" :src="item.cover" mode=""></image> -->
						<view class="goods-delete"></view>
						<view class="goods-cover" :style="{ 'backgroundImage': 'url(' + item.cover + ')' }"></view>
						<view class="goods-detail">
							<view class="goods-name">{{item.name}}</view>
							<view class="goods-size">{{item.size}}</view>
							<view class="goods-price">￥{{item.price / 100}}</view>
						</view>
						<goodsNumberOperation 
							class="goods-num" 
							:min="1" 
							:max="100" 
							:goodsNum="item.num"
							@change="change(num, item.id)"
						></goodsNumberOperation>
					</view>
				</view>
			</checkbox-group>
		</scroll-view>
	</view>
</template>

<script>
	import goodsNumberOperation from "@/components/goodsNumberOperation/goodsNumberOperation.vue";
	
	export default {
		components: {
			goodsNumberOperation
		},
		data() {
			return {
				pageTitle: '我的购物车',
				list: [
					{
						id: '00001',
						cover: '../../static/imgs/test/goods1.jpg',
						name: '优雅潇洒大小姐优雅潇洒大小姐优雅潇洒大小姐优雅潇洒大小姐优雅潇洒大小姐',
						price: 16956,
						size: '红色',
						num: 1,
						checked: true
					},{
						id: '00002',
						cover: '../../static/imgs/test/goods1.jpg',
						name: '优雅潇洒大小姐',
						price: 16956,
						size: '蓝色',
						num: 1,
						checked: true
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";

	.title {
		color: $color000;
		font-size: $fontsize18;
		font-weight: bold;
		text-align: center;
		height: 50 * $length1;
		line-height: 50 * $length1;
	}
	
	.empty-content {
		color: $colorGray;
		text-align: center;
		font-size: $fontsize14;
		padding: 30 * $length1 0;
		
		.empty-icon {
			width: 100 * $length1;
			height: 100 * $length1;
			display: inline-block;
			background-image: url(../../static/imgs/icon/car-gray.png);
			background-size: contain;
		}
	}
	
	.shopping-car-list {
		height: calc(100% - 100px);
		
		.shopping-car-item {
			position: relative;
			height: 100 * $length1;
			width: 100%;
			padding: 10 * $length1 0;
			border-bottom: $borer-width solid $colorGray;
			
			.checkbox-content {
				display: inline-block;
				height: 40 * $length1;
				width: 40 * $length1;
				position: absolute;
				top: 40 * $length1;
				left: 10 * $length1;
				z-index: 99;
				@include flex-box-center;
			}
			
			.goods-content {
				height: 100 * $length1;
				width: 100%;
				top: 0;
				padding-left: 60 * $length1;
				position: relative;
				
				.goods-cover {
					position: absolute;
					top: 0;
					left: 60 * $length1;
					height: 100 * $length1;
					width: 100 * $length1;
					background-size: cover;
				}
				
				.goods-detail {
					position: absolute;
					top: 0;
					left: 180 * $length1;
					bottom: 0;
					right: 0;
					font-size: $fontsize13;
					overflow: hidden;
					
					.goods-name {
						@include line-clamp-2;
						margin-bottom: 10 * $length1;
						padding-right: 90 * $length1;
					}
					
					.goods-size {
						display: inline-block;
						padding: 3 * $length1 10 * $length1;
						border: $borer-width solid $color000;
					}
					
					.goods-price {
						display: inline-block;
						position: absolute;
						left: 0;
						bottom: 0;
						font-size: $fontsize16;
						font-weight: bold;
					}
				}
				
				.goods-delete {
					position: absolute;
					top: 0;
					right: 70 * $length1;
					height: 20 * $length1;
					width: 20 * $length1;
					background-image: url(../../static/imgs/icon/close-black.png);
					background-size: contain;
					z-index: 999;
				}
				
				.goods-num {
					position: absolute;
					bottom: 0;
					right: 70 * $length1;
					
					&.number-box {
						color: $color000;
						font-weight: bold;
						font-size: $fontsize16;
						@include flex-box-center;
						
						.number-operation-item {
							text-align: center;
							width: 25 * $length1;
							height: 21 * $length1;
							line-height: 21 * $length1;
							
							&.number-input-box {
								height: 23 * $length1;
								font-size: $fontsize14;
								border: $borer-width solid $color000;
							}
						}
					}
				}
			}
		}
	}
</style>
