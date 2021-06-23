<template>
	<view class="order-container">
		<view class="order-head">
			<view class="order-head-item" :class="activeItem === 0 ? 'active' : ''" @tap="activeItem = 0">全部</view>
			<view class="order-head-item" :class="activeItem === 1 ? 'active' : ''" @tap="activeItem = 1">待付款</view>
			<view class="order-head-item" :class="activeItem === 2 ? 'active' : ''" @tap="activeItem = 2">待发货</view>
			<view class="order-head-item" :class="activeItem === 3 ? 'active' : ''" @tap="activeItem = 3">待收货</view>
		</view>
		<view class="order-body">
			<view class="order-body-list" v-if="activeItem === 0 && list.length > 0">
				<view class="order-body-item">
					<view class="order-message-head">
						<view class="order-id">订单编号：324234564656776</view>
						<view class="order-time">2021/3/31 10:10:10</view>
					</view>
					<view class="order-message-content">
						<view class="order-img"></view>
						<view class="order-base">
							<view class="order-name"></view>
							<view class="order-size-box">
								<view class="order-size-item">红色</view>
							</view>
						</view>
						<view class="order-message-other">
							<view class="order-number"></view>
							<view class="order-price"></view>
						</view>
					</view>
					<view class="order-price"></view>
					<view class="order-status"></view>
				</view>
			</view>
			<view class="order-body-list" v-if="activeItem === 1 && list.length > 0"></view>
			<view class="order-body-list" v-if="activeItem === 2 && list.length > 0"></view>
			<view class="order-body-list" v-if="activeItem === 3 && list.length > 0"></view>
			<view class="order-body-empty">
				<view class="icon"></view>
				<text>没有相关订单</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeItem: 0,
				list: [
					{
						id: '1',
						orderNum: '324234564656776',
						orderDate: '2021/3/31 10:10:10',
						goodsList: [
							{
								goodsCover: '',
								goodsName: '',
								goodsNum: '',
								goodsPrice: '',
								goodsSize: [
									{
										sizeId: '1',
										sizeName: '红色',
										sizeSelect: true
									},
									{
										sizeId: '2',
										sizeName: '37码',
										sizeSelect: true
									}
								]
							}
						],
						orderStatus: '0',
						orderPrice: {
							total: 7000,
							actual: 6500,
							discount: 500
						}
					},
				]
			};
		}
	}
</script>

<style scoped lang="scss">
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
	.order-container {
		position: relative;
		padding-top: 60 * $length1;
		
		.order-head {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 50 * $length1;
			overflow: hidden;
			
			.order-head-item {
				float: left;
				width: 25%;
				text-align: center;
				line-height: 50 * $length1;
				position: relative;
				
				&.active::after {
					position: absolute;
					content: ' ';
					bottom: 0;
					width: 40%;
					left: 30%;
					height: 3 * $length1;
					background-color: $color000;
					transition: all .8s;
				}
			}
		}
		
		.order-body {
			position: relative;
			
			.order-body-list {
				width: 100%;
				padding: 0 20 * $length1;
				border-top: $borer-width solid $border-color-gray;
				border-bottom: $borer-width solid $border-color-gray;
				
				.order-body-item {
					position: relative;
					padding: 20 * $length1 0;
					border-bottom: $borer-width solid $border-color-gray;
					
					&:last-child {
						border-bottom: none;
					}
					
					.order-message-head {
						@include flex-box-between;
						font-size: $fontsize12;
						line-height: 40 * $length1;
					}
					
					.order-message-content{
						width: 100%;
						position: relative;
						padding: 0 100 * $length1;
						
						.order-img {
							height: 90 * $length1;
							width: 90 * $length1;
							background-size: cover;
							background-repeat: no-repeat;
						}
					}
				}
			}
			
			.order-body-empty {
				color: $colorGray;
				@include flex-box-direction;
				padding-top: 100 * $length1;
				
				.icon {
					height: 64px;
					width: 64px;
					margin-bottom: 10 * $length1;
					background-image: url(../../static/imgs/icon/empty.png);
					background-repeat: no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
