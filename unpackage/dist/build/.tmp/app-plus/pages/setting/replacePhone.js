(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/replacePhone"],{6547:function(e,t,n){"use strict";n.r(t);var o=n("bd12"),s=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=s.a},7313:function(e,t,n){"use strict";n.r(t);var o=n("7dc9"),s=n("6547");for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n("8db9");var i=n("2877"),c=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,"1af0bb8a",null);t["default"]=c.exports},"7dc9":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},"8db9":function(e,t,n){"use strict";var o=n("8e6e"),s=n.n(o);s.a},"8e6e":function(e,t,n){},"9c2d":function(e,t,n){"use strict";(function(e){n("5942"),n("921b");o(n("66fd"));var t=o(n("7313"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},bd12:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{showPas:!0,userPhone:"",userCode:"",newPassWord:"",againtPassWord:"",sendCodeText:"获取验证码",intervalId:0,sendCodeFlag:!1}},onLoad:function(e){e.userName&&(this.userPhone=e.userName)},methods:{changePas:function(){this.showPas=!this.showPas},_sendCode:function(){var t=this;if(""!==this.userPhone){e.getNetworkType({success:function(t){"none"==t.networkType&&e.showToast({icon:"none",title:"当前网络不可用"})}}),e.showLoading({title:"加载中"});var n=this.userPhone,o=Date.parse(new Date)/1e3,s=3,a=this.$md5("".concat(n,"__").concat(s,"__").concat(o,"__elseleimaohasjer2860")),i={mobile:n,timestamp:o,scene:s,sign:a};this.$ajax.post({url:this.$service.api_lists.sendCode,data:i}).then(function(n){1==n.data.code&&(t.sendCodeFlag=!0,t.sendCodeText=60,t.intervalId=setInterval(function(){t.sendCodeText--},1e3),e.showToast({icon:"none",title:"发送成功"})),e.hideLoading()}).catch(function(t){e.hideLoading(),e.showToast({title:t,duration:2e3})})}else e.showToast({icon:"none",title:"请输入手机号"})},_Modifypassword:function(){if(""!==this.userPhone)if(""!==this.userCode)if(""!==this.newPassWord)if(""!==this.againtPassWord)if(this.againtPassWord===this.newPassWord){e.getNetworkType({success:function(t){"none"==t.networkType&&e.showToast({icon:"none",title:"当前网络不可用"})}}),e.showLoading({title:"加载中"});var t=e.getStorageSync("userID"),n=this.newPassWord,o=this.userCode,s=2,a=Date.parse(new Date)/1e3,i=this.$md5("".concat(t,"__").concat(n,"__").concat(o,"__").concat(s,"__").concat(a,"__elseleimaohasjer2860")),c={user_id:t,new_password:n,code:o,scene:s,timestamp:a,sign:i};this.$ajax.post({url:this.$service.api_lists.Modifypassword,data:c}).then(function(t){if(1==t.data.code){e.showToast({icon:"none",title:"重置密码成功"});setTimeout(function(){e.reLaunch({url:"../login/loginPas"})},1500)}e.hideLoading()}).catch(function(t){e.hideLoading(),e.showToast({title:t,duration:2e3})})}else e.showToast({icon:"none",title:"请检查两次密码是否相同"});else e.showToast({icon:"none",title:"请再次输入新密码"});else e.showToast({icon:"none",title:"请输入新密码"});else e.showToast({icon:"none",title:"请输入验证码"});else e.showToast({icon:"none",title:"请输入手机号"})}},watch:{sendCodeText:function(e,t){0===e&&(clearInterval(this.intervalId),this.sendCodeText="获取验证码",this.sendCodeFlag=!1)}}};t.default=n}).call(this,n("6e42")["default"])}},[["9c2d","common/runtime","common/vendor"]]]);