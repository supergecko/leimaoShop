(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-replacePhone"],{1734:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.spearIpt[data-v-bc5f625e]{padding:%?36?%;font-size:%?28?%;width:70%}.reset[data-v-bc5f625e]{padding:%?46?% %?39?%}.reset .ipt[data-v-bc5f625e]{padding:%?36?%;border-bottom:%?1?% solid #f5f5f5;font-size:%?28?%}.reset .yzm[data-v-bc5f625e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #f5f5f5}.reset .yzm .txt[data-v-bc5f625e]{font-size:%?30?%;color:#333;min-width:%?160?%;text-align:center}.reset .newPass[data-v-bc5f625e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #f5f5f5}.reset .newPass .img[data-v-bc5f625e]{width:%?42?%;height:%?30?%}.reset .btn[data-v-bc5f625e]{background-color:#42a2ec;width:%?670?%;height:%?96?%;text-align:center;line-height:%?96?%;font-size:%?34?%;color:#fff;border-radius:%?6?%;display:block;margin-top:%?84?%}.reset .to[data-v-bc5f625e]{display:inline-block;font-size:%?28?%;color:#666;margin-top:%?34?%}',""])},"39f6":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"reset"},[n("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请输入手机号",disabled:"true"},model:{value:e.userPhone,callback:function(t){e.userPhone=t},expression:"userPhone"}}),n("v-uni-view",{staticClass:"yzm"},[n("v-uni-input",{staticClass:"spearIpt",attrs:{type:"text",placeholder:"请输入验证码"},model:{value:e.userCode,callback:function(t){e.userCode=t},expression:"userCode"}}),n("v-uni-text",{staticClass:"txt",attrs:{disabled:!0===e.sendCodeFlag},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._sendCode.apply(void 0,arguments)}}},[e._v(e._s(e.sendCodeText))])],1),n("v-uni-view",{staticClass:"newPass"},[n("v-uni-input",{staticClass:"spearIpt",attrs:{password:e.showPas,type:"text",placeholder:"请输入新密码（至少8位，首字母+数字）"},model:{value:e.newPassWord,callback:function(t){e.newPassWord=t},expression:"newPassWord"}}),n("v-uni-view",[n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.showPas,expression:"showPas"}],staticClass:"img",attrs:{src:"../../static/images/login/show.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePas.apply(void 0,arguments)}}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!e.showPas,expression:"!showPas"}],staticClass:"img",attrs:{src:"../../static/images/login/conceal.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePas.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"affirm"},[n("v-uni-input",{staticClass:"ipt",attrs:{password:e.showPas,type:"text",placeholder:"请确认新密码"},model:{value:e.againtPassWord,callback:function(t){e.againtPassWord=t},expression:"againtPassWord"}})],1),n("v-uni-text",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._Modifypassword.apply(void 0,arguments)}}},[e._v("重置密码")])],1)},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},6547:function(e,t,n){"use strict";n.r(t);var s=n("8fff"),i=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=i.a},7313:function(e,t,n){"use strict";n.r(t);var s=n("39f6"),i=n("6547");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("b8be");var o=n("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"bc5f625e",null);t["default"]=c.exports},"8fff":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{showPas:!0,userPhone:"",userCode:"",newPassWord:"",againtPassWord:"",sendCodeText:"获取验证码",intervalId:0,sendCodeFlag:!1}},onLoad:function(e){e.userName&&(this.userPhone=e.userName)},methods:{changePas:function(){this.showPas=!this.showPas},_sendCode:function(){var e=this;if(""!==this.userPhone){uni.getNetworkType({success:function(e){"none"==e.networkType&&uni.showToast({icon:"none",title:"当前网络不可用"})}}),uni.showLoading({title:"加载中"});var t=this.userPhone,n=Date.parse(new Date)/1e3,s=3,i=this.$md5("".concat(t,"__").concat(s,"__").concat(n,"__elseleimaohasjer2860")),a={mobile:t,timestamp:n,scene:s,sign:i};this.$ajax.post({url:this.$service.api_lists.sendCode,data:a}).then(function(t){1==t.data.code&&(e.sendCodeFlag=!0,e.sendCodeText=60,e.intervalId=setInterval(function(){e.sendCodeText--},1e3),uni.showToast({icon:"none",title:"发送成功"})),uni.hideLoading()}).catch(function(e){uni.hideLoading(),uni.showToast({title:e,duration:2e3})})}else uni.showToast({icon:"none",title:"请输入手机号"})},_Modifypassword:function(){if(""!==this.userPhone)if(""!==this.userCode)if(""!==this.newPassWord)if(""!==this.againtPassWord)if(this.againtPassWord===this.newPassWord){uni.getNetworkType({success:function(e){"none"==e.networkType&&uni.showToast({icon:"none",title:"当前网络不可用"})}}),uni.showLoading({title:"加载中"});var e=uni.getStorageSync("userID"),t=this.newPassWord,n=this.userCode,s=2,i=Date.parse(new Date)/1e3,a=this.$md5("".concat(e,"__").concat(t,"__").concat(n,"__").concat(s,"__").concat(i,"__elseleimaohasjer2860")),o={user_id:e,new_password:t,code:n,scene:s,timestamp:i,sign:a};this.$ajax.post({url:this.$service.api_lists.Modifypassword,data:o}).then(function(e){if(1==e.data.code){uni.showToast({icon:"none",title:"重置密码成功"});setTimeout(function(){uni.reLaunch({url:"../login/loginPas"})},1500)}uni.hideLoading()}).catch(function(e){uni.hideLoading(),uni.showToast({title:e,duration:2e3})})}else uni.showToast({icon:"none",title:"请检查两次密码是否相同"});else uni.showToast({icon:"none",title:"请再次输入新密码"});else uni.showToast({icon:"none",title:"请输入新密码"});else uni.showToast({icon:"none",title:"请输入验证码"});else uni.showToast({icon:"none",title:"请输入手机号"})}},watch:{sendCodeText:function(e,t){0===e&&(clearInterval(this.intervalId),this.sendCodeText="获取验证码",this.sendCodeFlag=!1)}}};t.default=s},9007:function(e,t,n){var s=n("1734");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=n("4f06").default;i("20c6bfb4",s,!0,{sourceMap:!1,shadowMode:!1})},b8be:function(e,t,n){"use strict";var s=n("9007"),i=n.n(s);i.a}}]);