<template>
	<view class="register-box">
		<image class="head-img" src="../../../static/imgs/bg/logo.jpg" mode=""></image>
		<text class="tips">注册成功</text>
		<button class="btn" @tap="back('personal')">返回个人中心</button>
		<button class="btn" @tap="back('index')">返回首页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			back (target) {
				if (target === 'index') {
					wx.switchTab({
						url: "../../index/index"
					})
				} else if (target === 'personal') {
					wx.switchTab({
						url: "../../personal/personal"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../common/css/base";
	@import "../../../common/css/mixin";

	.register-box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: $fontsize14;
		background-color: #f4f4f4;
		@include flex-box-direction;
		padding-top: 30 * $length1;
		
		.head-img {
			width: 70 * $length1;
			height: 70 * $length1;
			border-radius: 50%;
			overflow: hidden;
		}
		
		.tips {
			font-weight: bold;
			font-size: $fontsize16;
			margin-top: 20 * $length1;
			margin-bottom: 30 * $length1;
		}
		
		.btn {
			width: 40%;
			margin-left: 30%;
			margin-top: 40 * $length1;
			height: 40 * $length1;
			text-align: center;
			line-height: 40 * $length1;
			color: $colorfff;
			font-size: $fontsize14;
			background-color: $color000;
			border-radius: 20 * $length1;
		}
	}
</style>
