<template>
	<view class="personal-box">
		<view class="personal-header">
			<view class="head-img"></view>
			<view class="nickname">{{userInfo.name}}</view>
		</view>
		<view class="list">
			<view class="list-item" @tap="jump('order')">订单中心</view>
			<view class="list-item">我的预约</view>
			<view class="list-item">我的地址</view>
			<view class="list-item">我的客服</view>
		</view>
	</view>
</template>

<script>
	import { GlobalData } from "../../common/global/GlobalData.js";
	
	export default {
		data() {
			return {
				userInfo: {
					name: '',
					phone: '',
					sex: '0',
					birthday: ''
				}
			};
		},
		onShow() {
			let that = this;
			let storageUserInfo = uni.getStorageSync('userInfo')
			let run = userInfo => {
				if (!userInfo.token) {
					uni.navigateTo({
						url: "/pages/register/register"
					});
					/* queryByOpenId({
						openId: userInfo.openId,
						type: "wx"
					}).then(result => {
						if (!result.data.token) {
							// 没有token去绑定页面
							uni.navigateTo({
								url: "/pages/index/register"
							});
						} else {
							GlobalData.getInstance().setUserInfo({
								token: result.data.token,
								mobile: result.data.mobile
							})
						}
					}).catch(error => {
						//console.log(error)
						if (error.code === "MB100026") {
							// msg 该账号还未绑定手机号，请先绑定手机号进行登录
							uni.navigateTo({
								url: "/pages/index/register"
							});
						}
					}) */
				}
			};
			if (!storageUserInfo) {
				GlobalData.getInstance()
					.getUserInfo()
					.then(run);
			} else {
				this.userInfo = JSON.parse(storageUserInfo)
			}
		},
		methods: {
			jump (name = '') {
				wx.navigateTo({
					url: `../../pages/${name}/${name}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	
	.personal-header {
		height: 200 * $length1;
		position: relative;
		
		.head-img {
			height: 80 * $length1;
			width: 80 * $length1;
			position: absolute;
			left: 50%;
			bottom: 70 * $length1;
			margin-left: -40 * $length1;
			background-color: $colorGray;
			border-radius: 50%;
		}
		
		.nickname {
			position: absolute;
			width: 100%;
			left: 0;
			text-align: center;
			bottom: 40 * $length1;
		}
	}
	
	.list {
		position: relative;
		padding: 0 20 * $length1;
		
		.list-item {
			color: $color333;
			position: relative;
			line-height: 70 * $length1;
			padding-left: 30 * $length1;
			border-bottom: $borer-width solid $colorGray;
			
			&:nth-child(1) {
				border-top: $borer-width solid $colorGray;
			}
			
			&::before {
				position: absolute;
				content: '';
				width: 20 * $length1;
				height: 20 * $length1;
				top: 25 * $length1;
				left: 0;
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
			
			&:nth-child(1)::before {
				background-image: url(../../static/imgs/icon/order.png);
			}
			
			&:nth-child(2)::before {
				background-image: url(../../static/imgs/icon/appointment.png);
			}
			
			&:nth-child(3)::before {
				background-image: url(../../static/imgs/icon/address.png);
			}
			
			&:nth-child(4)::before {
				background-image: url(../../static/imgs/icon/custom-service-black.png);
			}
			
			&::after {
				position: absolute;
				content: '';
				width: 20 * $length1;
				height: 20 * $length1;
				top: 25 * $length1;
				right: 0;
				transform: rotate(180deg);
				background-image: url(../../static/imgs/icon/arrow-left-333333.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}
	}
</style>
