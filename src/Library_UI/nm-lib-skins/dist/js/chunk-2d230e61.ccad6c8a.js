(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e61"],{edf2:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nm-container",[e("demo"),e("nm-code-preview",{attrs:{code:t.code}})],1)},l=[],o=e("3ce1"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nm-split",{scopedSlots:t._u([{key:"left",fn:function(){return[e("nm-box",{attrs:{page:""}},[t._v("左侧面板")])]},proxy:!0},{key:"right",fn:function(){return[e("nm-split",{attrs:{mode:"vertical"},scopedSlots:t._u([{key:"top",fn:function(){return[e("nm-box",{attrs:{page:""}},[t._v("上方面板")])]},proxy:!0},{key:"bottom",fn:function(){return[e("nm-box",{attrs:{page:""}},[t._v("下方面板")])]},proxy:!0}]),model:{value:t.split1,callback:function(n){t.split1=n},expression:"split1"}})]},proxy:!0}]),model:{value:t.split,callback:function(n){t.split=n},expression:"split"}})},a=[],s={data:function(){return{split:.3,split1:.3}}},i=s,m=e("2877"),c=Object(m["a"])(i,p,a,!1,null,null,null),u=c.exports,d='<template>\r\n  <nm-split v-model="split">\r\n    <template v-slot:left>\r\n      <nm-box page>左侧面板</nm-box>\r\n    </template>\r\n    <template v-slot:right>\r\n      <nm-split v-model="split1" mode="vertical">\r\n        <template v-slot:top>\r\n          <nm-box page>上方面板</nm-box>\r\n        </template>\r\n        <template v-slot:bottom>\r\n          <nm-box page>下方面板</nm-box>\r\n        </template>\r\n      </nm-split>\r\n    </template>\r\n  </nm-split>\r\n</template>\r\n<script>\r\nexport default {\r\n  data () {\r\n    return {\r\n      split: 0.3,\r\n      split1: 0.3\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n',f={name:o["default"].name,components:{Demo:u},data:function(){return{timer:null,code:d}}},x=f,b=Object(m["a"])(x,r,l,!1,null,null,null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d230e61.ccad6c8a.js.map