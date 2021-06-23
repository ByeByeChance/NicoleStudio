<template>
	<view class="classification-box">
		<view 
			class="classification-list" 
			v-for="(item, index) in classificationList" 
			:key="index"
		>
			<view class="classification-title">{{item.title}}</view>
			<goodsList :goodsList="item.list"></goodsList>
			<view class="more-box">
				<text class="more" @tap="toClassification(item.id)">发现更多</text>
			</view>
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
				classificationList: [
					{
						id: 0,
						title: '爆款推荐',
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
							}
						]
					},
					{
						id: 1,
						title: 'NICOLE 联名',
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
							}
						]
					},
					{
						id: 2,
						title: 'NICOLE 品牌精选',
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
							}
						]
					}
				]
			};
		},
		methods: {
			toClassification (id = null) {
				wx.switchTab({
					url: "../../pages/classification/classification"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";
	
	.classification-box {
		position: relative;
		
		.classification-list {
			padding-bottom: $spacing-row-lg;
			
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
			
			.goods-box {
				position: relative;
				padding: 15 * $length1;
				display: flex;
				
				.goods-item {
					width: 46%;
					height: 300 * $length1;
					margin-bottom: 20 * $length1;
					
					&:nth-child(odd) {
						margin-right: 4%;
					}
					
					&:nth-child(even) {
						margin-left: 4%;
					}
					.goods-cover {
						width: 100%;
						height: 200 * $length1;
					}
					
					.goods-content {
						padding: 5 * $length1;
						height: 100 * $length1;
						position: relative;
						
						.goods-name {
							font-size: $fontsize13;
							@include line-clamp-2;
						}
						
						.goods-price {
							position: absolute;
							right: 5 * $length1;
							bottom: 15 * $length1;
							font-weight: bold;
							text-align: right;
						}
					}
				}
			}
			
			.more-box {
				text-align: center;
				
				.more {
					color: $color000;
					border: $borer-width solid $border-color;
					display: inline-block;
					padding: 5 * $length1 30 * $length1;
				}
			}
		}
	}
</style>
