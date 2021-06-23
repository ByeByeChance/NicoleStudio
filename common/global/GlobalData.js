/**
 * 全局数据共享及初始化登录等等
 */

/* import {
	getSmallUUID,
	getSmallToken,
	getAlipaySmallUserId,
	getMemberInfo,
	queryByOpenId
} from "../api/api.js"; */

import {
	baseURL
} from "../config/baseURL.js";

import {
	needLogin
} from "../config/auth.js";

const miniLogin = Symbol("miniLogin"); //小程序登录

export class GlobalData {
	static INSTANCE = null; //单例

	userInfo = {
		openId: "", // 微信openid
		sessionKey: "", //微信sessionKey
		token: "", //登录TOKEN
		mobile: "", //这个字段有值，说明登录且绑定了
		headimgurl: "",
		nickname: ""
	};

	statusBarHeight = 0;
	navHeight = 0;
	shareData = {};

	constructor() {
		if (!GlobalData.INSTANCE) {
			GlobalData.INSTANCE = this;
		}
		return GlobalData.INSTANCE;
	}

	/**
	 * 获取单例
	 */
	static getInstance() {
		if (!this.INSTANCE) {
			this.INSTANCE = new GlobalData();
		}
		return this.INSTANCE;
	}

	// 判断是否登录
	static isLogin() {
		return this.INSTANCE.userInfo.token;
	}

	// 小程序登录
	async [miniLogin]() {
		let result = await new Promise((reslove, reject) => {
			let newObj = {
				openId: "",
				sessionKey: "",
				token: "",
				mobile: "",
				alipayUserId: "",
				uuid: ""
			}
			// #ifdef MP-WEIXIN
			wx.login({
				success: res => {
					console.log(res)
					reslove(newObj);
					// 发送 res.code 到后台换取TOKEN
					/* getSmallUUID({
						code: res.code
					}).then(resp => {
						newObj.openId = resp.data.openId;
						newObj.sessionKey = resp.data.sessionKey;
						reslove(newObj);
					}); */
				}
			});
			// #endif
		});

		console.log(result);
		let {
			openId,
			sessionKey,
			token,
			mobile,
			uuid
		} = result;
		let userInfo = {
			openId,
			sessionKey,
			token,
			mobile,
			uuid,
		};

		this.setUserInfo(userInfo);
		return userInfo;
	}

	init() {
		/**
		 * 设置自定义标题导航高度
		 */
		let sysInfo = uni.getSystemInfoSync();
		console.log(sysInfo);
		this.statusBarHeight = sysInfo.statusBarHeight;
		this.navHeight = sysInfo.statusBarHeight + 44;

		this[miniLogin]();
	}

	// 设置userinfo
	setUserInfo(_userInfo) {
		console.log(this.userInfo)
		this.userInfo = Object.assign(this.userInfo, _userInfo);
		uni.setStorageSync("token", this.userInfo.token);
		uni.setStorageSync("uuid", this.userInfo.uuid);
	}

	// 清空userinfo
	emptyUserInfo() {
		this.userInfo = {
			openId: "", // 微信openid
			sessionKey: "", // 微信sessionKey
			token: "", //登录TOKEN
			mobile: "", //这个字段有值，说明登录且绑定了
			headimgurl: "",
			nickname: ""
		};
		uni.clearStorageSync();
	}

	// 获取用户信息
	getUserInfo() {
		const returnUserinfo = () => {
			return new Promise((reslove, reject) => {
				reslove(this.userInfo);
			});
		};
		//小程序获取token为异步，先判断一下是否存在token，如果不存在，则去获取一下
		if (this.userInfo.token) {
			return returnUserinfo();
		} else {
			// #ifdef MP
			return this[miniLogin]();
			// #endif
		}
	}

	// 获取状态栏高度
	getStatusBarHeight() {
		return this.statusBarHeight;
	}

	// 获取导航栏高度
	getNavHeight() {
		return this.navHeight;
	}

	miniLogin() {
		return this[miniLogin]();
	}

	setShareData(data) {
		this.shareData = Object.assign(this.shareData, data);
	}

	getShareData() {
		return this.shareData;
	}
}
