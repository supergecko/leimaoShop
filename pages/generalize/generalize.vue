<template>
	<view class="generalize">
		<image class="banner" src="../../static/images/generalize/banner.png" mode=""></image>
		<view class="team">
			<!-- <image class="teamBg" src="../../static/images/generalize/titleBg.png" mode=""></image> -->
			<text class="teamTxt">我的团队</text>
		</view>
		<view class="title">
			<text class="txt">我的推荐人</text>
			<text class="txt2"></text>
		</view>
		<!-- 我的推荐人为空的时候 -->
		<view class="invite1" v-show="leader.length === 0">
			<view class="grade"><text>当前等级</text></view>
			<text class="name">普通用户</text>
			<view class="info">
				<view class="item">
					<text>用户名:暂无</text>
					<text>累计贡献值:暂无</text>
				</view>
				<image class="qrCode" style="width: 100upx;height: 100upx;top: -112upx" src="../../static/images/generalize/qrCode.png" mode=""></image>
			</view>
		</view>
		<!-- 我的推荐人不为空的时候 -->
		<view class="invite1" v-show="!(leader.length === 0)">
			<view class="grade"><text>当前等级</text></view>
			<text class="name">{{ leader.identity === 1 ? '普通用户' : '雷猫合伙人' }}</text>
			<view class="info">
				<view class="item">
					<text>用户名: {{ leader.nickname }}</text>
					<text>累计贡献值: {{ leader.results === null ? 0 : leader.results }}</text>
				</view>
				<image class="qrCode" style="width: 100upx;height: 100upx;top: -112upx" :src="leader.qrcode"></image>
			</view>
		</view>

		<view class="title" style="margin-top: 100upx;">
			<text class="txt">一级邀请用户</text>
			<text class="txt2" style="width: 214upx;"></text>
		</view>
		<!-- 一级邀请用户为空的时候 -->
		<uni-swiper-dot :info="children" :current="current1" mode="round" :dots-styles="dotsStyles" style="height: 334upx;" v-if="children.length === 0">
			<swiper class="swiper-box" @change="change1" style="height: 334upx;">
				<swiper-item v-for="(item, index) in 1" :key="index">
					<view class="invite1 invite2">
						<view class="grade grade2"><text>当前等级</text></view>
						<text class="name">普通用户</text>
						<view class="info">
							<view class="item">
								<text>用户名：暂无</text>
								<text>累计贡献值: 暂无</text>
							</view>
							<image class="qrCode" style="width: 100upx;height: 100upx;" src="../../static/images/generalize/qrCode.png" mode=""></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<!-- 一级邀请用户不为空的时候 -->
		<uni-swiper-dot :info="children" :current="current1" mode="nav" field="for_mobile" :dots-styles="dotsStyles" style="height: 334upx;" v-if="!(children.length === 0)">
			<swiper class="swiper-box" @change="change1" style="height: 334upx;">
				<swiper-item v-for="(item, i) in children" :key="i">
					<view class="invite1 invite2">
						<view class="grade grade2"><text>当前等级</text></view>
						<text class="name">{{ item.identity === 1 ? '普通用户' : '雷猫合伙人' }}</text>
						<view class="info">
							<view class="item">
								<text>用户名：{{ item.nickname }}</text>
								<text>累计贡献值: {{ item.results == null ? 0 : item.results }}</text>
							</view>
							<image class="qrCode" style="width: 100upx;height: 100upx;" :src="item.qrcode"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="title" style="margin-top: 100upx;" v-if="!(grandson.length === 0)">
			<text class="txt">二级邀请用户</text>
			<text class="txt2" style="width: 214upx;"></text>
		</view>

		<!-- 二级邀请用户 -->
		<uni-swiper-dot
			:info="grandson[grandsonIndex]"
			:current="current2"
			mode="round"
			:dots-styles="dotsStyles"
			field="content"
			style="height: 334upx;"
			v-show="!(grandson.length === 0)"
		>
			<swiper class="swiper-box" @change="change2" style="height: 334upx;">
				<swiper-item v-for="(item, index) in grandson[grandsonIndex]" :key="index">
					<view class="invite1 invite2">
						<view class="grade grade2"><text>当前等级</text></view>
						<text class="name">{{ item.identity === 1 ? '普通用户' : '雷猫合伙人' }}</text>
						<view class="info">
							<view class="item">
								<text>用户名：{{ item.nickname }}</text>
								<text>累计贡献值: {{ item.results == null ? 0 : item.results }}</text>
							</view>
							<image class="qrCode" style="width: 100upx;height: 100upx;" :src="item.qrcode"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<view class="rule">
			<view class="team" style="margin-left: 132upx;margin-bottom: 50upx;">
				<!-- <image class="teamBg" src="../../static/images/generalize/titleBg.png" mode=""></image> -->
				<text class="teamTxt">合伙人规则</text>
			</view>
			<view class="content">
				<view class="imgWrap"><image class="img" src="../../static/images/generalize/ellipse.png" mode=""></image></view>
				<text class="text">合伙人可使用专属邀请码进行新用户（普通用户）推广，新用户可使用合伙人专属邀请码注册并下</text>
			</view>
			<view class="content">
				<view class="imgWrap"><image class="img" src="../../static/images/generalize/ellipse.png" mode=""></image></view>
				<text class="text">合伙人可获得使用其邀请码注册的普通用户所购买的雷猫产品全额的10%返佣，以及5%的 缴纳电费金额返佣。（返佣以雷猫币的方式体现，下同）</text>
			</view>
			<view class="content">
				<view class="imgWrap"><image class="img" src="../../static/images/generalize/ellipse.png" mode=""></image></view>
				<text class="text">当普通用户购买雷猫产品金额高于10万元人 民币，将可以选择升级成为合伙人。此时，其上级合伙人将不再获得新合伙人产品购买金额的返佣奖励</text>
			</view>
			<view class="content">
				<view class="imgWrap"><image class="img" src="../../static/images/generalize/ellipse.png" mode=""></image></view>
				<text class="text">当普通用户购买雷猫产品金额高于10万元人 民币，将可以选择升级成为合伙人。此时，其上级合伙人将不再获得新合伙人产品购买金额的返佣奖励</text>
			</view>
		</view>
	</view>
</template>

<script>
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
import {mapState} from 'vuex'
export default {
	components: {
		uniSwiperDot
	},
	computed: {
		...mapState(['hasLogin'])
	},
	data() {
		return {
			current1: 0,
			current2: 0,
			dotsStyles: {
				backgroundColor: 'rgba(83, 200, 249,0.3)',
				border: '1px rgba(83, 200, 249,0.3) solid',
				color: '#fff',
				selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
				selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
			},
			leader: {},
			children: [],
			grandson: [],
			grandsonIndex:0
		}
	},
	methods: {
		change1(e) {
			this.current1 = e.detail.current
			this.grandsonIndex = e.detail.current
			console.log(e.detail.current)
		},
		change2(e) {
			this.current2 = e.detail.current
		},
		// 获取分佣团队
		_polularizeDetail() {
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
			let params = {user_id, timestamp, sign}
			this.$ajax.post({
				url: this.$service.api_lists.polularizeDetail,
				data: params
			}).then((res) => {
				if (res.data.code == 1) {
					//初始化信息
					this.leader = res.data.data.leader
					this.children = res.data.data.children
					this.grandson = res.data.data.grandson
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
	onLoad() {
		if (!this.hasLogin) {
			uni.reLaunch({
				url: '../login/loginPas'
			});
			return;
		}
		this._polularizeDetail()
	},
	onPullDownRefresh() {
		//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		var fres = setTimeout(() => {
			//刷新要执行的方法
			this._polularizeDetail()
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

<style scoped lang="scss">
.generalize {
	overflow: hidden;
	padding: 42upx 20upx 1upx;

	.banner {
		width: 710upx;
		height: 280upx;
		margin-bottom: 80upx;
		border-radius: 16upx;
	}

	.team {
		width: 386upx;
		height: 82upx;
		text-align: center;
		line-height: 82upx;
		background: url('../../static/images/generalize/titleBg.png');
		background-size: cover;
		margin-left: 162upx;
		margin-bottom: 110upx;

		.teamTxt {
			color: #f7e7d4;
			font-size: 34upx;
		}
	}

	.title {
		margin-left: 259upx;
		margin-bottom: 45upx;

		.txt {
			font-size: 36upx;
			color: #171719;
		}

		.txt2 {
			opacity: 0.63;
			z-index: -1;
			display: block;
			width: 186upx;
			height: 14upx;
			background-color: #cf992d;
			position: relative;
			top: -20upx;
		}
	}

	.invite1 {
		// position: relative;
		background: url('../../static/images/generalize/deepBlur2.png');
		background-size: cover;
		width: 604upx;
		height: 334upx;
		margin-left: 47upx;

		.grade {
			background: url(../../static/images/generalize/deepBlur.png);
			width: 124upx;
			height: 50upx;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 50upx;
			position: relative;
			top: 25upx;
		}

		.name {
			font-size: 44upx;
			color: #fff;
			font-weight: bold;
			margin-left: 216upx;
			position: relative;
			top: 40upx;
		}

		.info {
			.item {
				width: 322upx;
				border-right: 2upx solid #fff;
				margin-left: 52upx;
				margin-top: 100upx;

				text {
					color: #fff;
					font-size: 28upx;
					display: block;
					margin-bottom: 8px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.qrCode {
				float: right;
				position: relative;
				top: -92upx;
				right: 60upx;
			}
		}
	}

	.invite2 {
		background: url(../../static/images/generalize/yellow2.png);
		background-size: cover;
		width: 604upx;
		height: 334upx;
		margin-left: 47upx;

		.grade {
			background: url(../../static/images/generalize/yellow.png);
			width: 124upx;
			height: 50upx;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 50upx;
			position: relative;
			top: 25upx;
		}
	}

	.rule {
		margin-top: 128upx;
		margin-bottom: 45upx;
		padding: 40upx 34upx;
		padding-bottom: 0;
		border-radius: 14upx;
		border: 1px solid rgba(237, 231, 220, 1);
		box-shadow: 4upx 7upx 16upx 0upx rgba(142, 97, 6, 0.15);

		.content {
			flex-direction: row;
			display: flex;
			margin-bottom: 45upx;

			.imgWrap {
				display: flex;
				justify-content: flex-start;
				flex-direction: row;

				.img {
					width: 26upx;
					height: 26upx;
					margin-top: 8upx;
				}
			}

			.text {
				// display: inline-block;
				margin-left: 21upx;
				font-size: 30upx;
				color: #171719;
			}
		}
	}
}

// 3D轮播样式
.imageContainer {
	width: 770upx;
	/* height: 500rpx; */
	/* background: #000; */
	height: 340upx;
	background-color: #fff;
}

.swiperitem {
	/* height: 500rpx; */
	// height: 255upx;
	padding: 0upx 20upx;
	box-sizing: border-box;
	position: relative;

	.swiperText {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 56upx;
		left: 51upx;
		z-index: 998;
		width: 162upx;
		height: 163upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 8upx;
		padding: 10upx;

		.name {
			font-size: 26upx;
			font-weight: 500;
			color: rgba(253, 57, 91, 1);
			line-height: 37upx;
			margin-bottom: 10upx;
		}

		.zq,
		.cz {
			font-size: 20upx;
			color: rgba(253, 57, 91, 1);
			line-height: 35upx;
		}

		.addNl {
			width: 120upx;
			height: 26upx;
			background: rgba(253, 57, 91, 1);
			border-radius: 13upx;
			font-size: 20upx;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			text-align: center;
			line-height: 26upx;
			margin-top: 10upx;
		}
	}
}
</style>
