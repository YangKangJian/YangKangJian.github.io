(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+ego":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),c=t("/MKj"),r=t("Bw5p"),u=t("Hg0r"),o=t("bG7m"),f=t("emqv");function v(){var e=Object(u["b"])(),n=e.location,t=n.pathname,a=n.query,c=(null===a||void 0===a?void 0:a.AppName)||"",r=Object(f["b"])();i.a.useEffect((function(){r("updater",{action:function(e){e.AppName=Object(o["l"])("/preview"===t?"\u9884\u89c8":c)}});var n=o["h"].get("indexPath");"/"===t&&t!==n&&e.replace({pathname:n,query:a})}),[t,c])}t("6fvg"),t("shk3");var p=t("LBgK"),l=t("ZZvL");function s(e){"dingTalk"===Object(l["b"])()&&p["ready"]((function(){p["biz"].navigation.setTitle({title:e,onSuccess:function(){},onFail:function(){}})})),document.title=e}var b=function(e){var n=e.title,t=e.children;return Object(a["useEffect"])((function(){var e=n||"";e!==document.title&&s(e)}),[n]),i.a.createElement(i.a.Fragment,null,t)},d=b,m=t("nKUr");n["default"]=function(e){var n=e.children;v();var t=Object(c["e"])((function(e){var n=e.app;return Object(r["a"])(n,["AppName"])})),a=t.AppName;return Object(m["jsx"])(d,{title:a,children:n})}},"6fvg":function(e,n,t){"use strict";var a=t("vJtL"),i=t("q1tI"),c=t.n(i),r=t("bG7m"),u=(t("Zftn"),function(e){var n=e.created,t=e.key,i=e.version;return c.a.useEffect((function(){var e=new r["a"];e.init({el:"hx-map",key:t,version:i}).then((function(t){Object(a["a"])(n)&&n(t,e)}))}),[]),c.a.createElement("div",{id:"hx-map"})});n["a"]=u},Zftn:function(e,n,t){},shk3:function(e,n,t){}}]);