(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/introduce/introduce"],{2559:function(t,e,n){"use strict";n.r(e);var u=n("3daf"),a=n("8c27");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d78c");var c=n("2877"),i=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},"3daf":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"8c27":function(t,e,n){"use strict";n.r(e);var u=n("d5b2"),a=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=a.a},d5b2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=f(n("e0eb")),a=f(n("315b")),o=f(n("e26a")),c=f(n("315b1")),i=f(n("76a8")),d=f(n("241a"));function f(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{introduceHeadBg:u.default,ItemBg1:a.default,introduceContent2:o.default,jztBg1:c.default,jztBg2:i.default,serviceQrcode:d.default}},methods:{handleDownloadQrIMg:function(e){t.showActionSheet({itemList:["保存到相册"],success:function(n){0==n.tapIndex&&(t.showLoading({title:"保存中..."}),setTimeout(function(){t.hideLoading()},6e3),t.downloadFile({url:e,success:function(e){200===e.statusCode&&t.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(e){t.hideLoading(),t.showToast({title:"保存成功！"})}})}}))}})}}};e.default=r}).call(this,n("6e42")["default"])},d78c:function(t,e,n){"use strict";var u=n("fca4"),a=n.n(u);a.a},da8b:function(t,e,n){"use strict";(function(t){n("5942"),n("921b");u(n("66fd"));var e=u(n("2559"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fca4:function(t,e,n){}},[["da8b","common/runtime","common/vendor"]]]);