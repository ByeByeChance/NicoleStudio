<template>
	<view class="register-box">
		<image class="head-img" src="../../static/imgs/bg/logo.jpg" mode=""></image>
		<text class="company-name">NICOLE STUDIO</text>
		<block v-if="showWeixinLogin">
			<label for='wxlogin' class="btn-wrap">
				<view class="weixin-login">微信用户一键登录</view>
			</label>
			
			<button
				id='wxlogin'
				open-type="getPhoneNumber"
				@getphonenumber="getPhoneNumber"
			></button>
		</block>
		<view class="input-list" v-else>
			<view class="input-item">
				<input type="text" v-model="registerData.name" placeholder="姓名" />
			</view>
			<view class="input-item">
				<input type="number" v-model="registerData.phone" placeholder="手机号码" />
			</view>
			<view class="input-item">
				<view class="label">性别</view>
				<view class="radio-box">
					<view class="radio-item" @click="registerData.sex = '0'">
						<view class="radio-select" :class="registerData.sex === '0' ? 'active' : ''"></view>
						<view class="radio-name">男</view>
					</view>
					<view class="radio-item" @click="registerData.sex = '1'">
						<view class="radio-select" :class="registerData.sex === '1' ? 'active' : ''"></view>
						<view class="radio-name">女</view>
					</view>
				</view>
			</view>
			<view class="input-item" style="margin-bottom: 0;">
				<div class="label">生日</div>
			</view>
			<view class="input-item">
				<view class="date-select-cell">
					<view class="date-select-cell-db">
						<picker mode="date" :value="registerData.birthday" @change="bindDateChange">
							<view class="uni-input">{{registerData.birthday}}</view>
						</picker>
					</view>
					<van-icon name="play" class="date-select-icon" />
				</view>
			</view>
			<view class="input-item">
				<button class="register-btn" @tap="register">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				showWeixinLogin: false,
				registerData: {
					name: '',
					phone: '',
					sex: '0',
					birthday: currentDate
				}
			};
		},
		methods: {
			register () {
				uni.setStorageSync('userInfo', JSON.stringify(this.registerData))
				uni.navigateTo({
				    url: './registerSuccess/registerSuccess'
				})
			},
			/**
			 * 微信获取手机号回调
			 */
			getPhoneNumber(e) {
				GolbalData.getInstance()
					.getUserInfo()
					.then(userInfo => {
						let params = {
							openId: userInfo.openId,
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv,
							sessionKey: userInfo.sessionKey,
							topAccount: '3'
						}
						//this.register(params);
					});
			},
			bindDateChange (e) {
				this.registerData.birthday = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
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
		
		.company-name {
			font-weight: bold;
			font-size: $fontsize16;
			margin-top: 20 * $length1;
			margin-bottom: 30 * $length1;
		}
		
		.btn-wrap {
			display: block;
			width: 80%;
		}
		
		.weixin-login {
			width: 100%;
			height: 50 * $length1;
			text-align: center;
			line-height: 50 * $length1;
			color: $colorfff;
			background-color: $color000;
			border-radius: 25 * $length1;
		}
		
		.input-list {
			width: 65%;
			
			.input-item {
				width: 100%;
				height: 40 * $length1;
				line-height: 40 * $length1;
				margin-bottom: 10 * $length1;
				
				input {
					font-size: $fontsize14;
					height: 40 * $length1;
					border-bottom: $borer-width solid $border-color;
					
					&:placeholder {
					    color: $placeholder-color;
					}
				}
				
				.label {
					position: absolute;
					height: 40 * $length1;
					line-height: 40 * $length1;
					width: 50 * $length1;
					color: $color000;
					font-weight: bold;
				}
				
				.radio-box {
					padding-left: 60 * $length1;
					height: 40 * $length1;
					line-height: 40 * $length1;
					
					.radio-item {
						display: inline-block;
						position: relative;
						padding-left: 25 * $length1;
						margin-right: 15 * $length1;
						
						.radio-select {
							position: absolute;
							top: 12.5 * $length1;
							left: 0;
							height: 15 * $length1;
							width: 15 * $length1;
							border: $borer-width solid $border-color;
							border-radius: 50%;
							box-sizing: border-box;
							
							&.active::after {
								content: ' ';
								position: absolute;
								width: 80%;
								height: 80%;
								top: 10%;
								left: 10%;
								border-radius: 50%;
								background-color: $color000;
							}
						}
					}
				}
				
				.date-select-cell {
					position: relative;
					border-bottom: $borer-width solid $border-color;
					
					.date-select-icon {
						position: absolute;
						top: 12 * $length1;
						right: 0;
						transform: rotate(90deg);
					}
				}
				
				.register-btn {
					width: 70%;
					height: 40 * $length1;
					text-align: center;
					line-height: 40 * $length1;
					color: $colorfff;
					font-size: $fontsize14;
					background-color: $color000;
					border-radius: 20 * $length1;
					margin-top: 55 * $length1;
				}
			}
		}
	}
</style>
