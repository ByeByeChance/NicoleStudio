<template>
	<view class="goods-container">
		<swiper></swiper>
		<view class="goods-content">
			<view class="goods-name">{{goods.name}}</view>
			<view class="goods-price">
				<text class="price-item price-new">￥{{goods.price / 100}}</text>
				<text class="price-item price-old">￥{{goods.price / 100}}</text>
				<text class="tags-item tags-limit">限</text>
			</view>
			<view class="goods-activity">限时活动</view>
		</view>
		<view class="goods-attribute">
			<view class="goods-attribute-item">
				<view class="attribute-title">选择颜色</view>
				<view class="attribute-box">
					<view class="attribute-item" :class="activeColor === 'white' ? 'active' : ''" @tap="activeColor = 'white'">白色</view>
					<view class="attribute-item" :class="activeColor === 'purple' ? 'active' : ''" @tap="activeColor = 'purple'">紫色</view>
				</view>
			</view>
			<view class="goods-attribute-item">
				<view class="attribute-title">选择尺寸</view>
				<view class="attribute-box">
					<view class="attribute-item" :class="activeSize === '37' ? 'active' : ''" @tap="activeSize = '37'">37</view>
					<view class="attribute-item" :class="activeSize === '38' ? 'active' : ''" @tap="activeSize = '38'">38</view>
					<view class="attribute-item" :class="activeSize === '39' ? 'active' : ''" @tap="activeSize = '39'">39</view>
					<view class="attribute-item" :class="activeSize === '40' ? 'active' : ''" @tap="activeSize = '40'">40</view>
				</view>
			</view>
		</view>
		<view class="goods-production">
			<image src="../../static/imgs/test/goods-detail.png" class="goods-detail-img" mode="widthFix"></image>
			<!-- <view class="classification-title"></view> -->
		</view>
		<view class="tools-box">
			<view class="tools-item goods-share" @tap="share">
				<button type="default" open-type="share"></button>
			</view>
			<view class="tools-item goods-collect" :class="isCollect ? 'active' : ''" @tap="collect"></view>
		</view>
		<view class="footer">
			<view class="normal" v-if="goodsType === 'normal'">
				<view class="car">
					<view class="icon-car"></view>
					加入购物车
				</view>
				<view class="buy">购买</view>
			</view>
			<view class="empty" v-if="goodsType === 'empty'">
				<view class="btn-empty">已售罄</view>
			</view>
			<view class="presale" v-if="goodsType === 'presale'">
				<view class="btn-presale">预售</view>
			</view>
		</view>
	</view>
</template>

<script>
	import swiper from "@/components/swiper/swiper.vue";
	export default {
		components: {
			swiper
		},
		data() {
			return {
				goods: {
					name: '优雅潇洒大小姐',
					price: 12956
				},
				goodsType: 'normal',
				activeSize: '',
				activeColor: '',
				isCollect: false
			}
		},
		methods: {
			share () {
				console.log('share')
			},
			collect () {
				this.isCollect = !this.isCollect
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
	.goods-container {
		padding-bottom: 80 * $length1;
	}
	
	swiper {
		height: 900rpx;
	}
	
	.goods-content {
		position: relative;
		padding: 15 * $length1;
		@include border-bottom-1px;
		
		.goods-name {
			width: 100%;
			font-size: $fontsize16;
			line-height: 27 * $length1;
			@include line-clamp-2;
		}
		
		.goods-price {
			width: 100%;
			padding: 10 * $length1 0;
			@include flex-box-start;
			
			.price-item {
				margin-right: 10 * $length1;
				
				&.price-new {
					font-weight: bold;
					font-size: $fontsize18;
				}
				
				&.price-old {
					color: $color999;
					text-decoration: line-through;
					font-size: $fontsize13;
				}
			}
			
			.tags-item {
				display: inline-block;
				padding: 3 * $length1 5 * $length1;
				color: $colorfff;
				font-size: $fontsize13;
				
				&.tags-limit {
					background-color: $limit-color;
				}
			}
		}
		
		.goods-activity {
			font-size: $fontsize12;
		}
	}
	
	.goods-attribute {
		padding: 15 * $length1;
		@include border-bottom-1px;
		
		.goods-attribute-item {
			position: relative;
			margin-bottom: 15 * $length1;
			
			.attribute-title {
				font-size: $fontsize16;
				margin-bottom: 5 * $length1;
			}
			
			.attribute-box {
				overflow: hidden;
				
				.attribute-item {
					float: left;
					font-size: $fontsize13;
					margin-right: 15 * $length1;
					margin-top: 10 * $length1;
					padding: 4 * $length1 12 * $length1;
					border: 1 * $length1 solid $colorGray;
					
					&.active {
						border-color: $color000;
					}
				}
			}
		}
	}
	
	.goods-production {
		position: relative;
		width: 100%;
		
		.goods-detail-img {
			width: 100%;
			height: 100%;
		}
		
		.classification-title {
			color: $colorfff;
			font-weight: bold;
			text-align: center;
			font-size: $fontsize18;
			height: 90 * $length1;
			line-height: 90 * $length1;
			background-image: url(../../static/imgs/bg/index-classification-bg.png);
			background-size: cover;
		}
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60 * $length1;
		font-size: $fontsize16;
		
		.normal {
			width: 100%;
			display: flex;
			
			.car {
				width: 60%;
				height: 60 * $length1;
				color: $colorfff;
				background-color: $color000;
				@include flex-box-center;
				
				.icon-car {
					height: 20 * $length1;
					width: 20 * $length1;
					background-image: url(../../static/imgs/icon/cart-active.png);
					background-repeat: no-repeat;
					background-size: 100% 100%;
					margin-right: 10 * $length1;
				}
			}
			
			.buy {
				width: 40%;
				height: 60 * $length1;
				color: $colorfff;
				background-color: $buy-btn-bg-color;
				@include flex-box-center;
			}
		}
		
		.empty {
			width: 100%;
			
			.btn-empty {
				width: 100%;
				color: $colorfff;
				text-align: center;
				height: 60 * $length1;
				line-height: 60 * $length1;
				background-color: $color999;
			}
		}
		
		.presale {
			width: 100%;
			
			.btn-presale {
				width: 100%;
				color: $colorfff;
				text-align: center;
				height: 60 * $length1;
				line-height: 60 * $length1;
				background-color: $settlement-bg-color;
			}
		}
	}
	
	.tools-box {
		position: fixed;
		right: 15 * $length1;
		bottom: 100 * $length1;
		.tools-item {
			height: 35 * $length1;
			width: 35 * $length1;
			border-radius: 50%;
			background-color: rgba(192, 192, 192, .3);
			background-repeat: no-repeat;
			background-size: 60% 60%;
			background-position: center;
			margin-bottom: 5 * $length1;
			overflow: hidden;
			
			&.goods-share {
				background-image: url(../../static/imgs/icon/share.png);
				
				button {
					height: 35 * $length1;
					width: 35 * $length1;
					opacity: 0;
				}
			}
			&.goods-collect {
				background-image: url(../../static/imgs/icon/collect.png);
				
				&.active {
					background-image: url(../../static/imgs/icon/collect-active.png);
				}
			}
		}
	}
</style>
