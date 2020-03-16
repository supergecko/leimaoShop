<template>
	<view class="introduceWarp">
		<view class="introduceHeadBg" :style="{backgroundImage:`url(${introduceHeadBg})`}"></view>
		<view class="introduceContent1">
			<view class="introduceTitle">商城设备营业额返佣</view>
			<view class="currencyText" style="margin-top: -20upx;">
				<view class="currencyTitle">普通用户权益：</view>
				<view style="width: 614upx;height: 128upx;margin: 0 auto;">
					<view>1、可获得直接通过用户专属注册链接注册的用户订单金额分佣，分佣比例如下：</view>
					<view style="padding-left: 12px;">①矿机设备订单金额的<span style="color:#FE3E30;">5%</span></view>
					<view style="padding-left: 12px;">②电费缴纳订单金额的<span style="color:#FE3E30;">1%</span></view>
				</view>
			</view>	
			<view class="currencyText" style="margin-top: 32upx;">
				<view class="currencyTitle">雷猫合伙人权益：</view>
				<view style="width: 614upx;height: 128upx;margin: 0 auto;">
					<view>1、可获得直接通过合伙人专属注册链接注册的用户订单金额分佣，分佣比例如下：</view>
					<view style="padding-left: 12px;">①矿机设备订单金额的<span style="color:#FE3E30;">10%</span></view>
					<view style="padding-left: 12px;">②电费缴纳订单金额的<span style="color:#FE3E30;">5%</span></view>
				</view>
				<view style="width: 614upx;height: 128upx;margin: 0 auto;margin-top: 32upx;">
					<view>2、可获得通过名下用户及合伙人的专属注册链接注册的用户订单金额分佣，分佣比例如下：</view>
					<view style="padding-left: 12px;">①矿机设备订单金额的<span style="color:#FE3E30;">2%</span></view>
					<view style="padding-left: 12px;">②电费缴纳订单金额的<span style="color:#FE3E30;">2%</span></view>
				</view>
			</view>
			<view class="ItemBg1" :style="{backgroundImage:`url(${ItemBg1})`}">
				<view class="ItemText1">订单金额 10%</view>
				<view class="ItemText2">订单金额 2%</view>
				<view class="ItemText3">订单金额 5%</view>
			</view>
			<view class="ItemBg1" :style="{backgroundImage:`url(${ItemBg1})`}">
				<view class="ItemText1">缴纳电费 5%</view>
				<view class="ItemText2">缴纳电费 2%</view>
				<view class="ItemText3">缴纳电费 1%</view>
			</view>
		</view>
		<view class="introduceContent2" :style="{backgroundImage:`url(${introduceContent2})`}">
			<view class="introduceTitle2">如何成为雷猫合伙人？</view>
			<view class="introduceTitleFirst">累计个人矿机设备订单金额<span style="color:#FFDB00">≥10W</span></view>
			<view style="display: flex;align-items:center;margin-left: 75upx;">
				<view class="yellow"></view>
				<text class="introduceYellowText">普通用户业绩量计算标准：</text>
			</view>
			<view class="yellowContent">个人订单金额×100%＋通过用户专属注册链接注册的用户订单金额×100%</view>
			<view style="display: flex;align-items:center;margin-left: 75upx;margin-top: 30upx;">
				<view class="yellow"></view>
				<text class="introduceYellowText">合伙人业绩量计算标准：</text>
			</view>
			<view class="yellowContent">个人订单金额×100%＋通过合伙人专属注册链接注册的用户订单金额×100%＋通过名下用户及合伙人的专属注册链接注册的用户订单金额×100%＋名下其他用户订单金额×10%</view>
			<view class="yellowFooter">
				<view>例:</view>
				<view>A合伙人邀请B用户注册</view>
				<view>B用户邀请C用户注册</view>
				<view>C用户邀请D用户注册</view>
				<view>D用户邀请F用户注册</view>
				<view>则A合伙人的业绩量＝A的订单金额×100%＋B的订单金额×100%＋C的订单金额×100%＋D的订单金额×10%＋F的订单金额×10%......以此类推</view>
			</view>
		</view>
		<view class="introduceContent3">
			<view class="introduceTitle2" style="top:-40upx;">奖池活动规则</view>
			<view class="currencyTitle" style="margin-left:44upx;margin-top:-40upx;">普通用户权益：</view>
			<view style="margin-left: 47upx;display: flex;align-items: center;margin-bottom: 20upx;">
				<view class="blue">1.</view>
				<text class="blueText">雷猫商城全部成交金额的1%会注入奖池</text>
			</view>
			<view style="margin-left: 47upx;display: flex;align-items: center;margin-bottom: 20upx;">
				<view class="blue">2.</view>
				<text class="blueText">雷猫商城合伙人有权参与奖池瓜分</text>
			</view>
			<view style="margin-left: 47upx;display: flex;align-items: center;margin-bottom: 20upx;">
				<view class="blue">3.</view>
				<text class="blueText">达成分阶段目标，即可享受阶段目标对应比例的奖池分红</text>
			</view>
			<view style="margin-left: 47upx;display: flex;align-items: center;margin-bottom: 20upx;">
				<view class="blue">4.</view>
				<text class="blueText">完成更高阶段目标的合伙人，同样参与低阶段目标奖池分红</text>
			</view>
			<view style="margin-left: 47upx;display: flex;align-items: center;">
				<view class="blue">5.</view>
				<text class="blueText">若分阶段目标无人达成，则该阶段对应奖池金额累计至下期活动</text>
			</view>
			
			<view class="jztBg1" :style="{backgroundImage:`url(${jztBg1})`}"></view>
			<view class="jztText1">
				<view>总奖池=商城总营业额*1%</view>
				<view>分阶段标准达成，即可享受奖池阶段分红</view>
			</view>
			<view class="jztBg2" :style="{backgroundImage:`url(${jztBg2})`}">
				<view style="position: absolute;color: #0A9EFE;font-weight: bold;">例:</view>
			</view>
			<view class="jztText2">
				<view>若A用户，活动期间业绩量为50W,商城总营业额为1000w,则奖池总金额为1000w*1%=10w</view>
				<view>该用户可获得的奖池分红为：</view>
				<view style="max-width: 658upx;">（10w*20%÷1）+（10w*20%÷5）+（10w*20%÷10）+<br>（10w*20%÷15）+（10w*20%÷20）≈2.8w</view>
			</view>
		</view>
		<view class="introduceContent4">
			<view class="introduceTitle2" style="top:-28upx;">雷猫积分使用规则</view>
			<view style="margin-top: -20upx;">
				<view class="footerText"><span style="color:#FEDA01">1.</span>预缴本商城出售设备的电费</view>
				<view class="footerText"><span style="color:#FEDA01">2.</span>购买本商城的设备</view>
				<view class="footerText"><span style="color:#FEDA01">3.</span>转让给其他商城用户</view>
			</view>
			<view class="kefuText">雷猫商城专属客服扫码添加</view>
			<view class="kefuImg" @click="handleDownloadQrIMg('https://www.leimaominer.com/public/images/webservice/service.png')"></view>
		</view>
	</view>
</template>

<script>
	import introduceHeadBg from "@/static/images/introduce/introduceHead.png"
	import ItemBg1 from "@/static/images/introduce/introduce.png"
	import introduceContent2 from "@/static/images/introduce/bg2.png"
	import jztBg1 from "@/static/images/introduce/jzt1.png"
	import jztBg2 from "@/static/images/introduce/jzt2.png"
	import serviceQrcode from "@/static/images/introduce/service.png"
	export default {
		data() {
			return {
				introduceHeadBg:introduceHeadBg,
				ItemBg1:ItemBg1,
				introduceContent2:introduceContent2,
				jztBg1:jztBg1,
				jztBg2:jztBg2,
				serviceQrcode:serviceQrcode
			}
		},
		methods: {
			//#ifdef H5
			// 点击下载图片(H5端)
			handleDownloadQrIMg(ImgSrc) {
				// 这里是获取到的图片base64编码
				const imgUrl = this.serviceQrcode;
				// 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候）
				if (window.navigator.msSaveOrOpenBlob) {
					var bstr = atob(imgUrl.split(',')[1]);
					var n = bstr.length;
					var u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n);
					}
					var blob = new Blob([u8arr]);
					window.navigator.msSaveOrOpenBlob(blob, 'paymentImg' + '.' + 'png');
				} else {
					// 这里就按照chrome等新版浏览器来处理
					const a = document.createElement('a');
					a.href = imgUrl;
					a.setAttribute('download', 'paymentImg.png');
					a.click();
				}
			},
			//#endif
			
			//#ifdef APP-PLUS
			// 点击下载图片(APP端)
			handleDownloadQrIMg(ImgSrc) {
				uni.showActionSheet({
					itemList: ['保存到相册'],
					success: res => {
						if (res.tapIndex == 0) {
							uni.showLoading({
								title: '保存中...'
							});
							setTimeout(function() {
								uni.hideLoading();
							}, 6000);
							uni.downloadFile({
								url: ImgSrc, //网络路径，下载下来
								success: res => {
									if (res.statusCode === 200) {
										uni.saveImageToPhotosAlbum({
											filePath: res.tempFilePath, //下载后的临时路径
											success: res => {
												//下载完成后在相册里压根找不到
												uni.hideLoading();
												uni.showToast({
													title: '保存成功！'
												});
											}
										});
									}
								}
							});
						}
					}
				});
			}
			//#endif
		}
	}
</script>

<style>
	.introduceWarp{
		width:750upx;
		height:5758upx;
		background:rgba(76,56,216,1);
	}
	.introduceHeadBg{
		/* background: url(../../static/images/introduce/introduceHead.png); */
		background-size: 100% 100%;
		height: 720upx;
		width: 750upx;
	}
	.introduceTitle{
		background: url(../../static/images/introduce/title1.png);
		background-size: 100% 100%;
		width: 446upx;
		height: 106upx;
		text-align: center;
		line-height: 76upx;
		color: #fff;
		margin: 0 auto;
		position: relative;
		top: -40upx;
	}
	.introduceTitle2{
		background: url(../../static/images/introduce/title2.png);
		background-size: 100% 100%;
		width: 408upx;
		height: 106upx;
		text-align: center;
		line-height: 76upx;
		color: #fff;
		margin: 0 auto;
		position: relative;
		top: -20upx;
	}
	.introduceContent1{
		width:691upx;
		height:1549upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 13upx 46upx 0px rgba(64,45,184,0.39);
		border-radius:16upx;
		margin: 0 auto;
		margin-top: -40upx;
	}
	.currencyText{
		font-size:20upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(68,63,107,1);
		margin-left: 44upx;
	}
	.currencyTitle{
		font-size:32upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:#443F6B;
		margin-left: 14upx;
		margin-bottom: 21upx;
	}
	.ItemBg1{
		/* background: url(../../static/images/introduce/introduce.png); */
		width: 690upx;
		height: 369upx;
		background-size: 100% 100%;
		margin: 0 auto;
		position: relative;
		margin-top: 63upx;
		font-size:14upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(68,63,107,1);
	}
	.ItemText1{
		position: absolute;
		top: 108upx;
		left: 112upx;
		width: 100upx;
		text-align: center;
	}
	.ItemText2{
		position: absolute;
		top: 150upx;
		right: 13upx;
		width: 100upx;
		text-align: center;
	}
	.ItemText3{
		position: absolute;
		top: 250upx;
		left: 0px;
		width: 100upx;
		text-align: center;
	}
	.introduceContent2{
		/* background: url(../../static/images/introduce/bg2.png); */
		width: 702upx;
		height: 917upx;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 70upx;
	}
	.introduceContent3{
		width:691upx;
		height:1822upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 13upx 46upx 0px rgba(64,45,184,0.39);
		border-radius:16upx;
		margin: 0 auto;
		margin-top: 52upx;
	}
	.introduceContent4{
		background: url(../../static/images/introduce/bgFooter.png);
		width: 702upx;
		height: 548upx;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 65upx;
	}
	.introduceTitleFirst{
		font-size:32upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(254,254,254,1);
		margin-left: 75upx;
		margin-bottom: 30upx;
	}
	.yellow{
		width:5upx;
		height:23upx;
		background:rgba(255,219,0,1);
		border-radius:3upx;
		display: inline-block;
		margin-right: 5upx;
	}
	.yellowContent{
		font-size:24upx;
		font-family:Source Han Sans CN;
		font-weight:400;
		color:rgba(228,224,255,1);
		width:547upx;
		margin-left: 89upx;
		/* margin-top: 13upx; */
	}
	.introduceYellowText{
		font-size:26upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(228,224,255,1);
	}
	.yellowFooter{
		font-size:24upx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(255,255,255,0.59);
		opacity:0.5;
		width:530upx;
		margin-left: 90upx;
		margin-top: 20upx;
	}
	.blue{
		font-size:40upx;
		font-family:Impact;
		font-weight:bold;
		font-style:italic;
		color:rgba(10,158,254,1);
		display: inline-block;
		margin-right:15upx;
	}
	.blueText{
		font-size:28upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(68,63,107,1);
		width: 572upx;
	}
	.jztBg1{
		background: url(../../static/images/introduce/jzt1.png);
		width: 614upx;
		height: 436upx;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 67upx;
	}
	.jztText1{
		width:450upx;
		font-size:16upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(68,63,107,1);
		margin-left: 100upx;
		margin-top: 26upx;
	}
	.jztBg2{
		background: url(../../static/images/introduce/jzt2.png);
		width: 648upx;
		height: 436upx;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 60upx;
		position: relative;
	}
	.jztText2{
		font-size:16upx;
		width: 648upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(68,63,107,1);
		text-align: center;
		margin: 0 auto;
	}
	.footerText{
		font-family:Source Han Sans CN;
		font-weight:bold;
		font-style:italic;
		color:#FFFFFF;
		font-size: 26upx;
		margin-left: 87upx;
		margin-bottom: 20upx;
	}
	.kefuText{
		width:200upx;
		font-size:24upx;
		font-family:Source Han Sans CN;
		font-weight:bold;
		color:rgba(255,255,255,1);
		text-align: center;
		margin: 0 auto;
		margin-top: 74upx;
	}
	.kefuImg{
		background: url(../../static/images/introduce/service.png);
		width: 156upx;
		height: 156upx;
		background-size: 100% 100%;
		margin: 0 auto;
		/* margin-top:10upx; */
	}
</style>
