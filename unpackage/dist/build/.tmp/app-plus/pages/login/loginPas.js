(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/loginPas"],{1219:function(t,e,n){"use strict";n.r(e);var o=n("b451"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},1690:function(t,e,n){"use strict";var o=n("925e"),a=n.n(o);a.a},"79a1":function(t,e,n){},"8ab0":function(t,e,n){"use strict";(function(t){n("5942"),n("921b");o(n("66fd"));var e=o(n("ac4c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"925e":function(t,e,n){},ac4c:function(t,e,n){"use strict";n.r(e);var o=n("e5ce"),a=n("1219");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("dd4a"),n("1690");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"4bf4d670",null);e["default"]=u.exports},b451:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r={data:function(){return{userInfo:{username:"",verification:""}}},onNavigationBarButtonTap:function(){t.reLaunch({url:"../home/home"})},onLoad:function(){this.logout()},onPullDownRefresh:function(){var e=this;setTimeout(function(){e.userInfo.username="",e.userInfo.verification="",t.stopPullDownRefresh(),t.showToast({icon:"none",title:"刷新成功"})},1e3)},computed:a({},(0,o.mapState)(["forcedLogin"])),methods:a({},(0,o.mapMutations)(["login","logout"]),{bindLogin:function(){var e=this;if(t.getNetworkType({success:function(e){"none"==e.networkType&&t.showToast({icon:"none",title:"当前网络不可用"})}}),this.userInfo.username.length<11||this.userInfo.username.length>11)t.showToast({icon:"none",title:"请输入正确的账号"});else if(this.userInfo.verification.length<5)t.showToast({icon:"none",title:"密码不能小于5位"});else{t.showLoading({title:"登录中"});var n=this.userInfo.username,o=this.userInfo.verification,a=Date.parse(new Date)/1e3,i=this.$md5("".concat(n,"__").concat(o,"__").concat(a,"__elseleimaohasjer2860")),r={mobile:n,password:o,timestamp:a,sign:i};this.$ajax.post({url:this.$service.api_lists.userLogin,data:r}).then(function(n){1==n.data.code&&(t.setStorageSync("userToken",n.data.data.token),t.setStorageSync("userName",n.data.data.mobile),t.setStorageSync("userID",n.data.data.mobile),t.setStorageSync("identityId",n.data.data.identity),e.toMain(n.data.data.user_id)),t.hideLoading()}).catch(function(e){t.hideLoading(),t.showToast({title:e,duration:2e3})})}},toMain:function(e){this.login(e),this.forcedLogin?t.reLaunch({url:"../home/home"}):t.navigateBack()},toPage:function(e){t.navigateTo({url:e})},empty:function(){this.userInfo.username=""}})};e.default=r}).call(this,n("6e42")["default"])},dd4a:function(t,e,n){"use strict";var o=n("79a1"),a=n.n(o);a.a},e5ce:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["8ab0","common/runtime","common/vendor"]]]);