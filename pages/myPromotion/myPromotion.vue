<template>
	<view class="myPromotion">
		<image class="img" src="../../static/images/user/promote.png" mode=""></image>
		<view class="rebate">
			<view class="title">
				<text class="txt">{{identity}}</text>
				<text class="txt">累计邀请人数 {{direct_number}}</text>
			</view>
			<view class="content">
				<view class="left">
					<text class="txt" style="margin-bottom: 20upx;">累计返佣金额</text>
					<text class="num">{{add_up_coin}}</text>
					<!-- <text class="txt">（雷猫积分）</text> -->
				</view>
				<view class="right">
					<text class="txt">雷猫积分</text>
					<text class="num">{{available}}</text>
					<!-- <text class="btn">申请转账</text> -->
				</view>
			</view>
		</view>
		<view class="invite">
			<view class="title">
				<text class="txt">我的邀请链接</text>
				<text class="btn" @click="copyText">复制邀请链接</text>
			</view>
			<text class="txt-link">
				{{input}}
			</text>
		</view>
		<view class="record">
			<text class="title">返佣记录</text>
			<view class="content" v-for="(item,index) in bonus_record" :key='index' v-if="!(bonus_record.length===0)">
				<!-- <text class="txt">{{item.order_sn}}</text> -->
				<view class="username">
					<text>{{item.nickname}}</text>
					<text>{{item.thundercat_coin}}</text>
				</view>
				<view class="time">
					<text class="txt">{{item.create_time}}</text>
					<text class="txt">{{item.bonus_type_str}}</text>
				</view>
			</view>
			<view class="zanwuClass" v-if="bonus_record.length===0">
				<image src="../../static/zanwu.png" style="width: 230upx;height: 230upx;"></image>
				<text style="font-size: 30upx;color:gray;">暂无数据</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState(['hasLogin'])
		},
		data() {
			return {
				shadow: false,
				QRCodeUrl: '', // 邀请链接的二维码地址
				input: '', // 邀请链接文字
				identity: '', // 当前身份
				add_up_coin: 0, // 累计返佣雷猫积分
				direct_number: 0, // 累计邀请人数
				available: 0, // 可提佣金
				bonus_record: [] // 返佣记录
			}
		},
		methods: {
			//#ifdef H5
			//复制 (H5)
			copyText() {
				const _this = this
				this.$copyText(this.input).then(function(e) {
					uni.showToast({
						icon: 'none',
						title: '复制成功'
					})
				}, function(e) {
					uni.showToast({
						icon: 'none',
						title: '复制失败，请重试'
					})
				})
			},
			//#endif
			
			//#ifdef APP-PLUS
			//复制 (APP)
			copyText(item) {
				uni.setClipboardData({
				    data: this.input,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			//#endif
			
			// 拉取我的推广信息
			_myPopularize() {
				uni.getNetworkType({
					success: (res) => {
						if (res.networkType == 'none') {
							uni.showToast({
								icon: 'none',
								title: '当前网络不可用'
							})
						}
					}
				})
				uni.showLoading({
					title: '加载中'
				});
				const user_id = uni.getStorageSync('userID')
				const timestamp = Date.parse(new Date()) / 1000
				const sign = this.$md5(`${user_id}__${timestamp}__elseleimaohasjer2860`)
				let params = {
					user_id,
					timestamp,
					sign
				}
				this.$ajax.post({
					url: this.$service.api_lists.myPopularize,
					data: params
				}).then((res) => {
					if (res.data.code == 1) {
						//初始化信息
						this.input = res.data.data.popularize_url
						this.QRCodeUrl = res.data.data.qr_code
						this.add_up_coin = res.data.data.add_up_coin === null ? 0 : res.data.data.add_up_coin
						this.direct_number = res.data.data.direct_number === null ? 0 : res.data.data.direct_number
						this.available = res.data.data.available === null ? 0 : res.data.data.available
						this.identity = res.data.data.identity
						this.bonus_record = res.data.data.bonus_record
					}
					uni.hideLoading()
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({
						title: err,
						duration: 2000
					});
				})
			}
		},
		onLoad(option) {
			if (!this.hasLogin) {
				uni.reLaunch({
					url: '../login/loginPas'
				});
				return;
			}
			this._myPopularize()
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			var fres = setTimeout(() => {
				//刷新要执行的方法
				this._myPopularize()
				uni.stopPullDownRefresh(); //停止下拉刷新动画
				uni.showToast({
					icon: 'none',
					title: '刷新成功'
				})
			}, 1000);
			uni.getNetworkType({
			    success:  (res) => {
			        if(res.networkType == 'none'){
						uni.showToast({
							icon:'none',
							title:'当前网络不可用'
						})
						clearTimeout(fres)
						uni.stopPullDownRefresh(); //停止下拉刷新动画
					}
			    }
			})
		}
	}
</script>

<style scoped lang='scss'>
	.zanwuClass{
		height: 432upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: #FFFFFF;
		margin-top: 20upx;
	}
	.myPromotion {
		padding: 32upx 20upx;
		box-sizing: border-box;
		background-image: linear-gradient(#fff, rgb(245, 245, 245));

		.img {
			width: 710upx;
			height: 281upx;
			border-radius: 16upx;
			margin-bottom: 28upx;
		}

		.rebate {
			width: 100%;
			height: 324upx;
			padding: 34upx 28upx;
			box-sizing: border-box;
			background: url(../../static/images/user/myPromotionBg.png);
			background-size: 100% 100%;
			margin-bottom: 55upx;

			.title {
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				margin-bottom: 60upx;

				.txt {
					font-size: 30upx;
					color: #fff;
				}
			}

			.content {
				display: flex;
				flex-direction: row;

				.left {
					width: 50%;
					padding-left: 42upx;
					box-sizing: border-box;
					border-right: 1upx solid #fff;
					height: 140upx;

					.txt {
						font-size: 16upx;
						color: rgba(222, 239, 252, 1);
						display: block;
					}

					.num {
						font-size: 40upx;
						color: #fff;
					}
				}

				.right {
					width: 50%;
					padding-left: 70upx;
					box-sizing: border-box;

					.txt {
						font-size: 16upx;
						color: rgba(222, 239, 252, 1);
						display: block;
						margin-bottom: 20upx;
					}

					.num {
						font-size: 40upx;
						color: #fff;
						display: block;
					}

					.btn {
						padding: 8upx 15upx;
						background-color: rgba(0, 0, 0, 0);
						font-size: 24upx;
						border: 1upx solid #fff;
						color: #fff;
					}
				}
			}

		}

		.invite {
			.title {
				display: flex;
				justify-content: space-between;
				flex-direction: row;

				.txt {
					font-size: 34upx;
					color: #171719;
					/* font-weight: bold; */
				}

				.btn {
					padding: 15upx 19upx;
					background-color: #42A2EC;
					color: #fff;
					font-size: 24upx;
					border-radius: 4upx;
				}
			}

			.txt-link {
				display: block;
				font-size: 26upx;
				color: rgba(23, 23, 25, 1);
				padding: 34upx 28upx;
				margin-top: 30upx;
				background-color: #D9EEFF;
				border-radius: 8upx;
			}
		}

		.record {
			margin-top: 70upx;

			/* margin-bottom: 30upx; */
			.title {
				font-size: 32upx;
				color: #171719;
				/* font-weight: bold; */
				margin-bottom: 14upx;
			}

			.content {
				background: #fff;
				padding: 28upx 28upx;
				margin-top: 20upx;

				.txt {
					font-size: 26upx;
					color: #666666;
					padding-bottom: 22upx;
					border-bottom: 1px solid rgb(245, 245, 245);
					display: block;
				}

				.username {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					font-size: 32upx;
					margin: 38upx 0;
				}

				.time {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.txt {
						border: none;
					}
				}
			}
		}
	}
</style>
