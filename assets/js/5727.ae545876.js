"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5727],{55727:(e,r,n)=>{n.r(r),n.d(r,{b:()=>a});var t=n(74291),i=Object.defineProperty,o=(e,r)=>i(e,"name",{value:r,configurable:!0});function l(e,r){for(var n=0;n<r.length;n++){const t=r[n];if("string"!=typeof t&&!Array.isArray(t))for(const r in t)if("default"!==r&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}o(l,"_mergeNamespaces");!function(e){function r(r){return function(n,t){var i=t.line,l=n.getLine(i);function f(r){for(var o,f=t.ch,a=0;;){var s=f<=0?-1:l.lastIndexOf(r[0],f-1);if(-1!=s){if(1==a&&s<t.ch)break;if(o=n.getTokenTypeAt(e.Pos(i,s+1)),!/^(comment|string)/.test(o))return{ch:s+1,tokenType:o,pair:r};f=s-1}else{if(1==a)break;a=1,f=l.length}}}function a(r){var t,o,l=1,f=n.lastLine(),a=r.ch;e:for(var s=i;s<=f;++s)for(var u=n.getLine(s),c=s==i?a:0;;){var g=u.indexOf(r.pair[0],c),d=u.indexOf(r.pair[1],c);if(g<0&&(g=u.length),d<0&&(d=u.length),(c=Math.min(g,d))==u.length)break;if(n.getTokenTypeAt(e.Pos(s,c+1))==r.tokenType)if(c==g)++l;else if(! --l){t=s,o=c;break e}++c}return null==t||i==t?null:{from:e.Pos(i,a),to:e.Pos(t,o)}}o(f,"findOpening"),o(a,"findRange");for(var s=[],u=0;u<r.length;u++){var c=f(r[u]);c&&s.push(c)}for(s.sort((function(e,r){return e.ch-r.ch})),u=0;u<s.length;u++){var g=a(s[u]);if(g)return g}return null}}o(r,"bracketFolding"),e.registerHelper("fold","brace",r([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",r([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));if(/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=n,o=Math.min(r.lastLine(),n+10);i<=o;++i){var l=r.getLine(i).indexOf(";");if(-1!=l)return{startCh:t.end,end:e.Pos(i,l)}}}o(t,"hasImport");var i,l=n.line,f=t(l);if(!f||t(l-1)||(i=t(l-2))&&i.end.line==l-1)return null;for(var a=f.end;;){var s=t(a.line+1);if(null==s)break;a=s.end}return{from:r.clipPos(e.Pos(l,f.startCh+1)),to:a}})),e.registerHelper("fold","include",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));return/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}o(t,"hasInclude");var i=n.line,l=t(i);if(null==l||null!=t(i-1))return null;for(var f=i;null!=t(f+1);)++f;return{from:e.Pos(i,l+1),to:r.clipPos(e.Pos(f))}}))}((0,t.r)());var f={};const a=l({__proto__:null,default:(0,t.g)(f)},[f])}}]);