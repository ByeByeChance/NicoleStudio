<template>
	<view class="number-box">
		<view class="number-operation-item reduce" @tap="num--">-</view>
		<view class="number-operation-item number-input-box">
			<input type="number" v-model="num" @blur="numChange" />
		</view>
		<view class="number-operation-item add" @tap="num++">+</view>
	</view>
</template>

<script>
	export default {
		props: {
		    goodsNum: {
				type: Number,
				default: 0
		    },
			min: {
				type: Number,
				default: 1
			},
			max: {
				type: Number,
				default: 100
			}
		},
		data() {
			return {
				num: this.goodsNum
			}
		},
		watch: {
			num (newVal, oldVal) {
				if (!/^[0-9]+.?[0-9]*$/.test(newVal) || newVal === '' || newVal < this.min) {
					this.num = this.min
				} else if (newVal > this.max) {
					this.num = this.max
				}
			}
		},
		methods: {
			numChange () {
				if (this.num === '') {
					this.$set(this.num, this.min)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/css/base";
	@import "../../common/css/mixin";

	.number-box {
		color: $color000;
		font-weight: bold;
		font-size: $fontsize16;
		@include flex-box-center;
		
		.number-operation-item {
			text-align: center;
			width: 25 * $length1;
			height: 21 * $length1;
			line-height: 21 * $length1;
			
			&.number-input-box {
				height: 23 * $length1;
				font-size: $fontsize14;
				border: $borer-width solid $color000;
			}
		}
	}
</style>
