<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="header">
			<view class="nav">
				<image class="img" src="../../static/images/home/LOGO%20.png" mode="" @click="toPage2"></image>
				<view class="search">
					<view class="wrap">
						<image class="img" src="../../static/images/home/search.png" mode=""></image>
						<text class="txt">搜一搜</text>
					</view>
				</view>
				<image class="img" src="../../static/images/home/navMy.png " mode="" @click="toPage"></image>
			</view>

			<!-- <view class='nav2'>
				<view class="txtWrap">
					<text class='txt navSelect'>首页</text>
					<text class='txt'>矿机拼团</text>
					<text class='txt'>奖池瓜分</text>
					<text class='txt'>推广返佣</text>
				</view>
				<image class="img" src="../../static/images/home/down.png" mode="" @tap="more" v-show="!showMore"></image>
				<image class="img2" src="../../static/images/home/down.png" mode="" @tap="more" v-show="showMore"></image>
			</view> -->
		</view>

		<!-- <view class="popUp" v-show="showMore">
			<view class="content" @tap="more">
				<text class="txt" v-for="(item,index) in list" :key='index'>
					{{ item.title }}
				</text>
			</view>
		</view> -->

		<!-- 首页开始 -->
		<view class="home">
			<swiper class="swiper" :indicator-dots="true" indicator-color="#EDEDED" indicator-active-color="#42A2EC"
				:autoplay="true" :interval="5000" :duration="500" :circular="true">
				<swiper-item class="swpItm" v-for="item in banner">
					<image class="img" :src="item.ad_code" @click="sildeCollapse(item.ad_name)"></image>
				</swiper-item>	
			</swiper>
			<view class="categoryWrap">
				<view class="category">
					<text class="h1">矿机拼团</text>
					<view class="more">
						<text class="txt" @click="toMore">更多</text>
						<image class="img" src="../../static/images/home/more.png" mode=""></image>
					</view>
				</view>
				<view class="presell">
					<view class="title">
						<text class="h1">{{ activity.title }}</text>
						<view style="color: #F85F5F;font-weight: bold;" v-if="activity.status === 2">团购结束</view>
						<view class="dayWrap" v-else>
							<text class="txt txt1">剩余</text>
							<text class="txt txt2">{{ activity.rest_day }}天</text>
						</view>
					</view>
					<view class="time">
						<text class="txt">预计开始挖矿时间</text>
						<text class="txt">{{ activity.dig_time }}</text>
					</view>
					<view class="content">
						<view class="hashrate">
							<view class="h-title">
								<text class="sign"></text>
								<text class="txt">最低算力</text>
							</view>
							<text class="main">{{ activity.minimum_hashrate }}TH/S</text>
						</view>
						<view class="hashrate">
							<view class="d-title">
								<text class="sign"></text>
								<text class="txt">电费</text>
							</view>
							<text class="main">{{ activity.electricity_cost }}元/天</text>
						</view>
						<view class="hashrate" style="width: 100%;margin-top: 53upx;">
							<view class="s-title">
								<text class="sign"></text>
								<text class="txt">来自BTC.com的理论收益</text>
							</view>
							<text class="main">{{ activity.income }}BTC/月</text>
						</view>
						<text class="txt-bottom">每日净挖矿所得等于每日挖矿产出减去算力费和电费。</text>
					</view>
				</view>
				<view class="millWrap">
					<view class="mill" v-for="(item, i) in activity.goods" :key="i">
						<text class="name">{{ item.description }}</text>
						<view class="hashrateWrap">
							<image class="img" src="../../static/images/home/suanli.png" mode=""></image>
							<text class="txt">算力</text>
							<text class="txt">{{ item.hashrate }} Th/s</text>
						</view>
						<view class="powerwrap">
							<image class="img" src="../../static/images/home/gonghao.png" mode=""></image>
							<text class="txt">功耗</text>
							<text class="txt">{{ item.electricity_consumption }} W</text>
						</view>
						<view class="earnings">
							<text class="txt">月化收益</text>
							<text class="txt">{{ item.income }} BTC</text>
						</view>
						<view class="priceWrap">
							<text class="txt" style="margin-right: 2px;">团购价格</text>
							<text class="price">{{ item.shop_price }}元</text>
						</view>
						<view class="workOff">
							<progress class="pross" :percent="item.rate" stroke-width="3" />
							<text class="txt">已售</text>
							<text class="num">{{ item.rate }}%</text>
						</view>
						<button
							type="primary"
							class="btn"
							@click="tabInfo(share_activity_id, item.goods_id)"
							:disabled="item.on_sale === 1 ? false : true"
							:style="{ background: item.on_sale === 1 ? '#42a2ec' : '#808080' }"
						>
							{{ item.on_sale === 0 ? '即将补货' : item.on_sale === 1 ? '立即抢购' : '抢购结束' }}
						</button>
						<text class="txt-botm">— {{ item.goods_name }} —</text>
					</view>
				</view>
				<view class="problem">
					<text class="h2">你是否遇到以下问题？</text>
					<view class="item">
						<image class="img" src="../../static/images/home/one.png" mode=""></image>
						<text class="txt">想要挖矿，不知从何下手？</text>
					</view>
					<view class="item">
						<image class="img" src="../../static/images/home/two.png" mode=""></image>
						<text class="txt">想买矿机，不知道找谁买？怕被骗？</text>
					</view>
					<view class="item">
						<image class="img" src="../../static/images/home/three.png" mode=""></image>
						<text class="txt">有了矿机，家里电价高？不会/没时间维护？</text>
					</view>
					<view class="item">
						<image class="img" src="../../static/images/home/four.png" mode=""></image>
						<text class="txt">找人托管矿机，托管方不专业矿机不稳定？</text>
					</view>
				</view>
				<view class="commitment">
					<view class="title">
						<text class="h2">郑重承诺</text>
						<text class="txt">雷猫商城本着为矿工提供专业一条龙服务的原则</text>
					</view>
					<view class="wrap">
						<view class="content">
							<image class="img" src="../../static/images/home/new.png" mode=""></image>
							<text class="txt">雷猫商城所销售矿机均为全新机器非二手充新</text>
						</view>
						<view class="content" style="border-bottom: 10upx solid rgb(250,197,165);">
							<image class="img" src="../../static/images/home/maintain.png" mode=""></image>
							<text class="txt">凡雷猫商城所售矿机，提供终身维护，180天质保期内出现问题无需买家二次付费</text>
						</view>
						<view class="content" style="height: 600upx;border-bottom: 10upx solid rgb(175,194,245);">
							<image class="img" src="../../static/images/home/buchan.png" mode=""></image>
							<text class="txt">
								在雷猫商城购买矿机并委托雷猫商城托管，1个月内出现问题返厂维修，买家所有损失，雷猫商城将全额补偿（补偿额=用户机型24小时收益*掉线/维修天数-用户机型24小时电费*掉线/维修天数）
							</text>
						</view>
						<view class="content" style="height: 600upx;border-bottom: 10upx solid rgb(176,255,248);">
							<image class="img" src="../../static/images/home/dian.png" mode=""></image>
							<text class="txt">
								凡委托雷猫商城托管矿机，当月因停电造成停机时长超过48小时，雷猫商城将补偿用户当月所有损失。当日因停电造成停机时长超过6小时，当日电费全免。
							</text>
						</view>
					</view>
					<view class="title">
						<text class="h2">来雷猫轻松挖矿</text>
						<text class="txt">简化挖矿繁琐步骤，打包矿机购买、物流、矿场选择、机器维护 矿池接入的复杂环节</text>
					</view>
					<view class="mining">
						<view class="min-top">
							<view>
								<image class="img" src="../../static/images/home/buy.png" mode=""></image>
								<text class="txt">用户购买 套餐</text>
							</view>
							<view>
								<image class="img" src="../../static/images/home/gongxiang.png" mode=""></image>
								<text class="txt" style="width: 160upx;">雷猫矿机分时 共享平台</text>
							</view>
							<view>
								<image class="img" src="../../static/images/home/fenpei.png" mode=""></image>
								<text class="txt">矿池分配 收益</text>
							</view>
							<view>
								<image class="img" src="../../static/images/home/shouyi.png" mode=""></image>
								<text class="txt">用户收到 收益</text>
							</view>
						</view>
						<view class="min-center"><image class="img" src="../../static/images/home/up.png" mode=""></image></view>
						<view class="min-bottom">
							<view>
								<image class="img" src="../../static/images/home/kjcg.png" mode=""></image>
								<text class="txt">采购矿机</text>
							</view>
							<view>
								<image
									class="img"
									src="../../static/images/home/yskc.png"
									mode=""
								></image>
								<text class="txt">运输矿机至矿场</text>
							</view>
							<view>
								<image class="img" src="../../static/images/home/tskj.png" mode=""></image>
								<text class="txt">调试矿机 联通矿池</text>
							</view>
							<view>
								<image class="img" src="../../static/images/home/ywgl.png" mode=""></image>
								<text class="txt">运维管理</text>
							</view>
						</view>
					</view>
					<view class="title">
						<text class="h2">值得信赖的矿机商城</text>
						<text class="txt">500万+用户量 重购率80% 每日产出100+BTC</text>
					</view>
					<view class="trust">
						<view class="content">
							<image class="img" src="../../static/images/home/djgh.png" mode=""></image>
							<text class="name">雷猫顶级供货方</text>
							<text class="txt">雷猫提供最新款矿机支持矿机质量保证</text>
						</view>

						<view class="content">
							<image class="img" src="../../static/images/home/hzkb.png" mode=""></image>
							<text class="name">雷猫矿机分时共享平台</text>
							<text class="txt">BTC.com、AnlPool、F2Pool、ViaBTC、BTC.TCP五大矿池合作支持用户自由选择矿池挖矿</text>
						</view>

						<view class="content">
							<image class="img" src="../../static/images/home/zjdk.png" mode=""></image>
							<text class="name">支持矿池直接打款</text>
							<text class="txt">可选择矿池直接将受益打给用户,雷猫不参与收益的分配与划拨</text>
						</view>

						<view class="content">
							<image class="img" src="../../static/images/home/wh24.png" mode=""></image>
							<text class="name">24小时维护的专业团队</text>
							<text class="txt">平台24小时提供专业的挖矿服务保障人员</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 首页结束-->
	</view>
</template>

<script>
export default {
	data() {
		return {
			showMore: false,
			share_activity_id: '',
			banner: [], // 轮播组
			activity: [] // 众筹数组
		};
	},
	onLoad() {
		this._homePage();
	},
	onPullDownRefresh() {
		//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		var fres = setTimeout(() => {
			//刷新要执行的方法
			this._homePage();
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
	},
	methods: {
		sildeCollapse(type) {
			if (type == '2') {
				console.log('1111')
			}
		},
		toMore() {
			uni.reLaunch({
				url: '../wholesale/wholesale'
			});
		},
		toPage() {
			uni.reLaunch({
				url: '../user/user'
			});
		},
		toPage2() {
			uni.reLaunch({
				url: '../home/home'
			});
		},
		more() {
			this.showMore = !this.showMore;
		},
		tabInfo(share_activity_id, goods_id) {
			uni.navigateTo({
				url: '../productInfo/productInfo?share_activity_id=' + share_activity_id + '&goods_id=' + goods_id
			});
		},
		_homePage() {
			uni.getNetworkType({
				success: res => {
					if (res.networkType == 'none') {
						uni.showToast({
							icon: 'none',
							title: '当前网络不可用'
						});
					}
				}
			});
			uni.showLoading({
				title: '加载中'
			});
			this.$ajax
				.post({
					url: this.$service.api_lists.homePage,
					data: {}
				})
				.then(res => {
					if (res.data.code == 1) {
						//初始化信息
						this.banner = res.data.data.ad;
						this.activity = res.data.data.activity; //众筹
						this.share_activity_id = res.data.data.activity.share_activity_id;
					}
					uni.hideLoading();
				})
				.catch(err => {
					uni.hideLoading();
					uni.showToast({
						title: err,
						duration: 2000
					});
				});
		}
	}
};
</script>

<style>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.navSelect {
	border-bottom: 4upx solid #fff;
}

* {
	padding: 0;
	margin: 0;
}
</style>
<style lang="scss" scoped>
.header {
	width: 100%;
	padding-bottom: 32upx;
	padding-top: 32upx;
	background: url(../../static/images/home/headerBg.png);
}

.nav {
	width: 100%;
	display: flex;
	flex-direction: row;

	.img {
		width: 44upx;
		height: 44upx;
		margin: 10upx 28upx 0;
	}

	.search {
		flex: 1;
		height: 64upx;
		background: rgba(245, 245, 245, 1);
		border-radius: 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;

		.wrap {
			display: flex;
			flex-direction: row;

			.img {
				width: 36upx;
				height: 36upx;
				margin: 0 10upx 0 40upx;
			}
		}

		.txt {
			font-size: 28upx;
			color: rgba(175, 173, 173, 1);
		}
	}
}

.nav2 {
	margin-top: 43upx;
	display: flex;
	flex-direction: row;

	.txtWrap {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		.txt {
			font-size: 30upx;
			color: #fff;
			padding-bottom: 18upx;
		}
	}

	.img {
		width: 30upx;
		height: 20upx;
		margin: 10upx 26upx 0 0;
	}

	.img2 {
		width: 30upx;
		height: 20upx;
		margin: 10upx 26upx 0 0;
		transform: rotate(180deg);
	}
}

.popUp {
	width: 100%;
	height: 1035upx;
	background-color: rgba(0, 0, 0, 0.35);

	.content {
		background-color: #fff;
		z-index: 999;
		padding: 16upx 22upx;

		.txt {
			display: inline-block;
			font-size: 26upx;
			width: 158upx;
			height: 64upx;
			border: 1upx solid rgba(181, 181, 181, 1);
			border-radius: 30upx;
			text-align: center;
			line-height: 64upx;
			color: rgba(102, 102, 102, 1);
			margin: 16upx 9upx;
			box-sizing: border-box;
		}
	}
}

//首页开始
.home {
	background: rgb(245, 245, 245);
	padding: 24upx 20upx;

	.swiper {
		width: 710upx;
		height: 280upx;
		margin-bottom: 60upx;
	}

	.swpItm {
		width: 100%;
		border-radius: 16upx;

		.img {
			width: 100%;
			height: 100%;
		}
	}

	.category {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 30upx;

		.h1 {
			font-size: 40upx;
			color: rgba(23, 23, 25, 1);
			font-weight: bold;
		}

		.more {
			line-height: 39upx;
			display: flex;
			align-items: center;

			.img {
				width: 18upx;
				height: 30upx;
				margin-left: 16upx;
			}

			.txt {
				font-size: 28upx;
				color: rgba(136, 136, 136, 1);
			}
		}
	}

	.presell {
		background-color: #fff;
		border-radius: 16upx;
		padding: 36upx 30upx;
		margin-bottom: 26upx;

		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 22upx;

			.h1 {
				font-size: 36upx;
				font-weight: bold;
				color: rgba(23, 23, 25, 1);
			}

			.dayWrap {
				background: url(../../static/images/home/residueBtn.png);
				background-size: cover;
				width: 238upx;
				height: 52upx;
				box-sizing: border-box;
				.txt {
					display: inline-block;
					width: 50%;
					text-align: center;
					line-height: 52upx;
					position: relative;
					top: -5upx;
				}

				.txt1 {
					font-size: 28upx;
					color: #fff;
				}

				.txt2 {
					font-size: 28upx;
					color: #f85f5f;
				}
			}
		}

		.time {
			.txt {
				font-size: 32upx;
				color: rgba(21, 20, 20, 1);
				margin-right: 40upx;
			}

			margin-bottom: 58upx;
		}

		.content {
			.hashrate {
				width: 50%;
				display: inline-block;

				.h-title:before {
					content: '';
					display: inline-block;
					background-color: #f85f5f;
					width: 6upx;
					height: 28upx;
					margin-top: 2upx;
				}

				.s-title:before {
					content: '';
					display: inline-block;
					background-color: #ce9c16;
					width: 6upx;
					height: 28upx;
					margin-top: 2upx;
				}

				.d-title:before {
					content: '';
					display: inline-block;
					background-color: #1f9654;
					width: 6upx;
					height: 28upx;
					margin-top: 2upx;
				}

				.h-title,
				.d-title,
				.s-title {
					display: flex;
					flex-direction: row;
					align-items: center;
					color: rgba(136, 136, 136, 1);
					font-size: 28upx;

					.txt {
						margin-left: 20upx;
					}

					margin-bottom: 26upx;
				}

				.main {
					font-size: 40upx;
					color: rgba(23, 23, 25, 1);
					font-weight: bold;
				}
			}

			.txt-bottom {
				font-size: 26upx;
				color: rgba(102, 102, 102, 1);
				margin: 45upx 0 50upx 0;
			}
		}
	}

	.millWrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;

		.mill {
			width: 346upx;
			background-color: #fff;
			border-radius: 14upx;
			padding: 44upx 25upx;
			box-sizing: border-box;
			margin-bottom: 26upx;

			.img {
				width: 34upx;
				height: 34upx;
			}

			.name {
				color: rgba(23, 23, 25, 1);
				font-size: 38upx;
				font-weight: bold;
				display: inline-block;
				margin-bottom: 20upx;
			}

			.hashrateWrap {
				display: flex;
				flex-direction: row;
				align-items: center;

				.txt {
					font-size: 28upx;
					color: rgba(23, 23, 25, 1);
					margin-left: 11upx;
				}

				margin-bottom: 15upx;
			}

			.powerwrap {
				display: flex;
				flex-direction: row;
				align-items: center;

				.txt {
					font-size: 26upx;
					color: rgba(102, 102, 102, 1);
					margin-left: 11upx;
				}

				margin-bottom: 27upx;
			}

			.earnings {
				.txt {
					font-size: 26upx;
					color: rgba(102, 102, 102, 1);
				}
			}

			.priceWrap {
				.txt {
					font-size: 30upx;
					color: #171719;
					font-weight: 500;
					margin-right: 20upx;
				}

				.price {
					font-size: 30upx;
					color: #f46868;
					font-weight: 600;
				}
			}

			.workOff {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: 40upx;

				.pross {
					width: 60%;
					display: inline-block;
					margin-right: 16upx;
				}

				.txt {
					font-size: 20upx;
					color: #888888;
					margin-right: 4upx;
				}

				.num {
					font-size: 20upx;
					color: #f46868;
				}
			}

			.btn {
				width: 100%;
				height: 70upx;
				background: rgba(66, 162, 236, 1);
				opacity: 0.92;
				border-radius: 4upx;
				font-size: 28upx;
				line-height: 70upx;
				margin-top: 17upx;
				margin-bottom: 19upx;
			}

			.txt-botm {
				font-size: 22upx;
				color: rgba(136, 136, 136, 1);
				display: inline-block;
				width: 100%;
				text-align: center;
			}
		}
	}

	.problem {
		background-color: #fff;
		border-radius: 16px;
		padding: 57upx 26upx;

		.h2 {
			font-size: 40upx;
			color: rgba(23, 23, 25, 1);
			font-weight: bold;
		}

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 41upx;

			.img {
				position: absolute;
				width: 66upx;
				height: 66upx;
				z-index: 10;
			}

			.txt {
				font-size: 32upx;
				color: rgba(23, 23, 25, 1);
				margin-left: 46upx;
				z-index: 99;
			}
		}
	}

	.commitment {
		margin-top: 70upx;

		.title {
			.h2 {
				font-size: 40uxp;
				color: rgba(23, 23, 25, 1);
				font-weight: bold;
			}

			.txt {
				display: block;
				font-size: 26upx;
				margin-top: 20upx;
				color: rgba(136, 136, 136, 1);
			}

			margin-bottom: 44upx;
		}

		.wrap {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.content {
				width: 346upx;
				height: 395upx;
				background-color: #fff;
				padding: 47upx 32upx;
				border-radius: 12upx;
				text-align: center;
				border-bottom: 10upx solid rgb(253, 169, 169);
				box-sizing: border-box;
				margin-bottom: 69upx;

				.img {
					width: 128upx;
					height: 128upx;
				}

				.txt {
					font-size: 28upx;
					color: rgba(23, 23, 25, 1);
					display: block;
					margin-top: 30upx;
				}
			}
		}
	}

	.mining {
		padding: 63upx 23upx 50upx 23upx;
		background-color: #fff;
		border-radius: 12upx;
		margin-bottom: 62upx;

		.min-top {
			text-align: center;
			display: flex;
			justify-content: space-between;
			flex-direction: row;

			.img {
				width: 120upx;
				height: 120upx;
			}

			.txt {
				font-size: 26upx;
				color: #666666;
				display: block;
				width: 112upx;
			}
		}

		.min-center {
			margin-top: 40upx;

			.img {
				width: 56upx;
				height: 56upx;
				margin-left: 210upx;
			}
		}

		.min-bottom {
			text-align: center;
			display: flex;
			justify-content: space-between;
			flex-direction: row;

			.img {
				width: 96upx;
				height: 96upx;
			}

			.txt {
				font-size: 26upx;
				color: #666666;
				display: block;
				width: 112upx;
			}
		}
	}

	.trust {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;

		.content {
			background-color: #fff;
			width: 346upx;
			// height: 460upx;
			border-radius: 12upx;
			padding: 48upx 41upx;
			box-sizing: border-box;
			text-align: center;
			margin-bottom: 25upx;
		}

		.img {
			width: 114upx;
			height: 114upx;
		}

		.name {
			display: block;
			font-size: 20upx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.txt {
			font-size: 26upx;
			color: rgba(136, 136, 136, 1);
		}
	}
}

//首页结束
</style>
