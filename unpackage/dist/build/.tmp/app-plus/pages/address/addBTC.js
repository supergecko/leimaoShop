(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addBTC"],{"33c9":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("2f62");function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){s(e,t,a[t])})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={data:function(){return{wallet_address:"",editFalg:!1}},computed:i({},(0,o.mapState)(["hasLogin"])),onLoad:function(t){this.hasLogin?"true"==t.edit&&(e.setNavigationBarTitle({title:"编辑钱包地址"}),this.wallet_address=t.address,this.editFalg=!0,this.walletId=t.walletId):e.reLaunch({url:"../login/loginPas"})},methods:i({},(0,o.mapMutations)(["onLineIndex"]),{clearAddress:function(){this.wallet_address=""},toBack:function(){e.navigateBack({delta:1})},_saveWallet:function(){var t=this;if(e.getNetworkType({success:function(t){"none"==t.networkType&&e.showToast({icon:"none",title:"当前网络不可用"})}}),this.wallet_address){e.showLoading({title:"保存中"});var a=this.wallet_address,o=e.getStorageSync("userID"),i=1,s=Date.parse(new Date)/1e3,c=this.$md5("".concat(o,"__").concat(i,"__").concat(a,"__").concat(s,"__elseleimaohasjer2860")),r={user_id:o,coin_id:i,address:a,timestamp:s,sign:c};this.$ajax.post({url:this.$service.api_lists.saveWallet,data:r}).then(function(a){1==a.data.code&&e.showToast({title:"保存成功",duration:2e3}),t.onLineIndex(-1),e.hideLoading(),e.navigateBack({delta:1}),console.log(n(a," at pages\\address\\addBTC.vue:96"))}).catch(function(t){e.hideLoading(),e.showToast({title:t,duration:2e3})})}else e.showToast({icon:"none",title:"请输入钱包地址"})},_editWallet:function(){var t=this;e.showModal({title:"提示",content:"是否确定修改该钱包地址",success:function(a){if(a.confirm){if(e.getNetworkType({success:function(t){"none"==t.networkType&&e.showToast({icon:"none",title:"当前网络不可用"})}}),!t.wallet_address)return void e.showToast({icon:"none",title:"请输入钱包地址"});e.showLoading({title:"修改中"});var o=t.wallet_address,i=e.getStorageSync("userID"),s=t.walletId,c=Date.parse(new Date)/1e3,r=t.$md5("".concat(i,"__").concat(s,"__").concat(o,"__").concat(c,"__elseleimaohasjer2860")),d={user_id:i,wallet_id:s,address:o,timestamp:c,sign:r};t.$ajax.post({url:t.$service.api_lists.editWallet,data:d}).then(function(a){1==a.data.code&&e.showToast({title:"修改成功",duration:2e3}),t.onLineIndex(-1),e.hideLoading(),e.navigateBack({delta:1}),console.log(n(a," at pages\\address\\addBTC.vue:154"))}).catch(function(t){e.hideLoading(),e.showToast({title:t,duration:2e3})})}else if(a.cancel)return}})}})};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},5923:function(e,t,a){},"67fa":function(e,t,a){"use strict";a.r(t);var n=a("33c9"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},a164:function(e,t,a){"use strict";var n=a("5923"),o=a.n(n);o.a},a2d6:function(e,t,a){"use strict";(function(e){a("5942"),a("921b");n(a("66fd"));var t=n(a("d4c7"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},b91b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},d4c7:function(e,t,a){"use strict";a.r(t);var n=a("b91b"),o=a("67fa");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("a164");var s=a("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"16423428",null);t["default"]=c.exports}},[["a2d6","common/runtime","common/vendor"]]]);