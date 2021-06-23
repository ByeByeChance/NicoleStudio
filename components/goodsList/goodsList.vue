<template>
	<view class="goods-box">
		<view 
			class="goods-item"
			v-for="(goods, index) in goodsList" 
			:key="index"
			@tap="toDetail(goods.id)"
		>
			<image class="goods-cover" :src="goods.cover"></image>
			<view class="goods-content">
				<text class="goods-name">{{goods.name}}</text>
				<text class="goods-price">￥{{goods.price / 100}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		    goodsList: {
				type: Array,
				default: () => []
		    },
		},
		data() {
			return {
				
			};
		},
		methods: {
			toDetail (id) {
				wx.navigateTo({
					url: `../../pages/goods/goods?goodsId=${id}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
	.goods-box {
		position: relative;
		padding: 15 * $length1;
		overflow: hidden;
		
		.goods-item {
			float: left;
			width: 46%;
			height: 315 * $length1;
			margin-bottom: 20 * $length1;
			
			&:nth-child(odd) {
				margin-right: 4%;
			}
			
			&:nth-child(even) {
				margin-left: 4%;
			}
			.goods-cover {
				width: 100%;
				display: block;
				height: 225 * $length1;
			}
			
			.goods-content {
				padding: 5 * $length1;
				height: 90 * $length1;
				position: relative;
				background-image: url(../../static/imgs/bg/goods-bg.jpg);
				background-size: 50% 50%;
				background-repeat: repeat;
				
				.goods-name {
					font-size: $fontsize13;
					@include line-clamp-2;
				}
				
				.goods-price {
					position: absolute;
					right: 5 * $length1;
					bottom: 10 * $length1;
					font-weight: bold;
					text-align: right;
				}
			}
		}
	}
</style>
