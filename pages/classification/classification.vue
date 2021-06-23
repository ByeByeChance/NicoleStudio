<template>
	<view class="classification-box">
		<div class="head">
			<view class="btn-all" @tap="showWrap = true"></view>
			<view class="search-box">
				<input type="text" v-model="searchKey" placeholder="请输入搜索" />
				<view class="search"></view>
			</view>
		</div>
		<goodsList :goodsList="list"></goodsList>
		<view class="mask" v-show="showWrap" @tap="showWrap = false" catchtouchmove='true'></view>
		<view class="classification-wrap" :style="{ 'left': showWrap ? '0' : '-440rpx' }" catchtouchmove='true'>
			<view class="close" @tap="showWrap = false"></view>
			<scroll-view
				scroll-y="true" 
				class="classification-list" 
			>
			    <view
			    	class="classification-item"
			    	v-for="(item, index) in classificationList"
			    	:key="index"
			    >
					<text class="parent-text" @tap="changePid(item.id)">{{item.name}}</text>
					<view 
						class="classification-child-box" 
						v-show="item.list !== null && item.list.length > 0 && activePid === item.id"
					>
						<view 
							class="classification-child-item" 
							v-for="(child, idx) in item.list"
							:key="idx"
						>
							<text 
								:class="activeCid === child.id ? 'child-text active' : 'child-text'"
								@tap="changeCid(child.id)"
							>
								{{child.name}}
							</text>
						</view>
					</view>
			    </view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import goodsList from "@/components/goodsList/goodsList.vue";
	
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				showWrap: false,
				searchKey: "",
				activePid: null,
				activeCid: null,
				classificationList: [
					{
						id: 1,
						name: '男装',
						list: [
							{
								id: 0,
								name: '男装1'
							},{
								id: 1,
								name: '男装2'
							},{
								id: 2,
								name: '男装3'
							},{
								id: 3,
								name: '男装4'
							}
						]
					},{
						id: 2,
						name: '女装'
					},{
						id: 3,
						name: '配饰'
					},{
						id: 4,
						name: '潮玩'
					},{
						id: 5,
						name: '潮食'
					},{
						id: 6,
						name: '家居'
					},{
						id: 7,
						name: '艺人同款'
					},{
						id: 5,
						name: '潮食'
					},{
						id: 6,
						name: '家居'
					},{
						id: 7,
						name: '艺人同款'
					}
				],
				list: [
					{
						id: '00001',
						cover: '../../static/imgs/test/goods1.jpg',
						name: '优雅潇洒大小姐',
						price: 16956
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					},
					{
						id: '00002',
						cover: '../../static/imgs/test/goods2.jpg',
						name: '优雅潇洒大小姐',
						price: 16945
					}
				]
			};
		},
		methods: {
			changePid (id) {
				if (this.activePid === id) {
					this.activePid = null
				} else {
					this.activePid = id
				}
			},
			changeCid (id) {
				this.activeCid = id
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
	.classification-box {
		padding-top: 60 * $length1;
	}
	
	.head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50 * $length1;
		z-index: 10;
		background-color: $colorfff;
		@include flex-box-between;
		
		.btn-all {
			width: 30 * $length1;
			height: 30 * $length1;
			margin-left: 20 * $length1;
			background-image: url(../../static/imgs/icon/all.png);
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		.search-box {
			position: absolute;
			z-index: 10;
			top: 10 * $length1;
			width: calc(100% - 90px);
			left: 70 * $length1;
			height: 30 * $length1;
			border: $borer-width solid $border-color;
			border-radius: 15 * $length1;
			
			input {
				font-size: $fontsize13;
				height: 30 * $length1;
				line-height: 30 * $length1;
				padding-left: 10 * $length1;
				padding-right: 50 * $length1;
			}
			
			.search {
				width: 20 * $length1;
				height: 20 * $length1;
				background-image: url(../../static/imgs/icon/search.png);
				background-repeat: no-repeat;
				background-size: cover;
				position: absolute;
				z-index: 20;
				top: 5 * $length1;
				right: 10 * $length1;
			}
		}
	}
	
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 90;
	}
	
	.classification-wrap {
		position: fixed;
		width: 160 * $length1;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1000;
		background-color: rgba(0, 0, 0, .8);
		transition: .6s;
		padding: 50 * $length1 30 * $length1;
		
		.close {
			height: 20 * $length1;
			width: 20 * $length1;
			position: absolute;
			top: 10 * $length1;
			right: 10 * $length1;
			background-image: url(../../static/imgs/icon/close.png);
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		.classification-list {
			position: relative;
			height: calc(100% - 200rpx);
			
			&::-webkit-scrollbar {
				width: 0;
				height: 0;
				color: transparent;
			}
			
			.classification-item {
				padding: 25 * $length1 0;
				color: $colorfff;
				font-weight: bold;
				font-size: $fontsize18;
				border-bottom: $length1 solid #cccccc;
				
				.classification-child-item {
					font-weight: normal;
					font-size: $fontsize14;
					padding-top: 30 * $length1;
					
					.child-text {
						padding-bottom: 5 * $length1;
						
						&.active {
							border-bottom: 2 * $length1 solid $colorfff;
						}
					}
				}
			}
		}
	}
</style>
