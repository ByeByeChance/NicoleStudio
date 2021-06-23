<template>
	<view class="content">
		<swiper></swiper>
		<view class="space"></view>
		<indexClassification></indexClassification>
		<view class="tools-box">
			<view class="tools-item back-top" @tap="toTop"></view>
			<view class="tools-item custom-service" @tap="toCustomService"></view>
			<view class="tools-item shopping-bag" @tap="toCar"></view>
		</view>
	</view>
</template>

<script>
	import swiper from "@/components/swiper/swiper.vue";
	import indexClassification from "@/components/indexClassification/indexClassification.vue";
	
	export default {
		components: {
			swiper,
			indexClassification
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			toTop () {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			toCar () {
				wx.switchTab({
					url: "../shoppingCar/shoppingCar"
				});
			},
			toCustomService () {
				/* wx.navigateTo({
					url: "../category/category"
				}); */
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	
	.content {
		position: relative;
	}
	
	swiper {
		height: 900rpx;
	}
	
	.space {
		height: $spacing-row-base;
		width: 100%;
		background-image: url(../../static/imgs/bg/space-bg.png);
		background-repeat: repeat-x;
		background-size: auto 100%;
	}
	
	.tools-box {
		position: fixed;
		right: 10 * $length1;
		bottom: 30 * $length1;
		.tools-item {
			height: 35 * $length1;
			width: 35 * $length1;
			border-radius: 50%;
			background-color: rgba(0, 0, 0, .5);
			background-repeat: no-repeat;
			background-size: 60% 60%;
			background-position: center;
			margin-bottom: 5 * $length1;
			
			&.back-top {
				background-image: url(../../static/imgs/icon/to-top.png);
			}
			&.custom-service {
				background-image: url(../../static/imgs/icon/custom-service.png);
			}
			&.shopping-bag {
				background-image: url(../../static/imgs/icon/bag.png);
			}
		}
	}

</style>
