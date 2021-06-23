<template>
	<view class="page-section swiper-box">
		<view class="page-section-spacing">
			<swiper 
				class="swiper" 
				:indicator-dots="swiperSetting.indicatorDots" 
				:autoplay="swiperSetting.autoplay" 
				:interval="swiperSetting.interval" 
				:duration="swiperSetting.duration"
			>
				<swiper-item>
					<image class="swiper-img" :src="imgSrc"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-img" :src="imgSrc"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-img" :src="imgSrc"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperSetting: {
					indicatorDots: false,
					autoplay: true,
					interval: 4000,
					duration: 1000,
				},
				imgSrc: '../../static/imgs/test/slider-demo.png'
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	
	.swiper-box {
		
		.swiper {
			height: 900rpx;
		}
		
		.swiper-img {
			width: 100%;
			height: 100%;
		}
		
		.wx-swiper-dots.wx-swiper-dots-horizontal {
		    margin-bottom: 2rpx;
		}
		
		.wx-swiper-dot {
		    width: 50rpx;
		    display: inline-flex;
		    height: 5rpx;
		    margin-left: 1rpx;
		    justify-content: space-between;
		}
		
		.wx-swiper-dot::before {
		    content: '';
		    flex-grow: 1; 
		    border-radius: 8rpx;
			background-color: rgba(0, 0, 0, .4);
		}
		
		.wx-swiper-dot-active::before {
		    background: $colorfff;   
		}
	}
</style>
