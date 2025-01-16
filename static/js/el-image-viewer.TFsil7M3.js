import{bR as e,b as a,h as l,ao as t,b7 as n,d as s,bg as o,eE as i,eF as r,u as c,a as u,eh as d,r as v,cA as f,A as m,B as p,C as g,Y as y,o as b,c as k,l as w,w as x,a0 as h,T as z,k as C,n as I,g as _,G as O,ac as S,ad as N,a1 as E,E as T,a7 as L,e as A,O as R,br as B,ak as Y,eG as $,bF as j,m as F,eH as M,eI as P,P as X,Z as D,a6 as G,f as H,_ as K,b1 as W,F as Z,bw as q,s as J,dm as V,eg as Q,eJ as U,z as ee,at as ae,eK as le,x as te,e2 as ne,J as se,eL as oe,t as ie}from"./index.CIEL02Q3.js";import{E as re}from"./index.pqwmeHws.js";import{d as ce}from"./debounce.BuvLGChc.js";import{i as ue}from"./position.Dl4LUyUF.js";function de(a,l,t){var n=!0,s=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return e(t)&&(n="leading"in t?!!t.leading:n,s="trailing"in t?!!t.trailing:s),ce(a,l,{leading:n,maxWait:l,trailing:s})}const ve=a({urlList:{type:l(Array),default:()=>t([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),fe={close:()=>!0,switch:e=>n(e),rotate:e=>n(e)},me=s({name:"ElImageViewer"});const pe=J(K(s({...me,props:ve,emits:fe,setup(e,{expose:a,emit:l}){var t;const n=e,s={CONTAIN:{name:"contain",icon:o(i)},ORIGINAL:{name:"original",icon:o(r)}},{t:K}=c(),J=u("image-viewer"),{nextZIndex:V}=d(),Q=v(),U=v([]),ee=f(),ae=v(!0),le=v(n.initialIndex),te=m(s.CONTAIN),ne=v({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),se=v(null!=(t=n.zIndex)?t:V()),oe=p((()=>{const{urlList:e}=n;return e.length<=1})),ie=p((()=>0===le.value)),ce=p((()=>le.value===n.urlList.length-1)),ue=p((()=>n.urlList[le.value])),ve=p((()=>[J.e("btn"),J.e("prev"),J.is("disabled",!n.infinite&&ie.value)])),fe=p((()=>[J.e("btn"),J.e("next"),J.is("disabled",!n.infinite&&ce.value)])),me=p((()=>{const{scale:e,deg:a,offsetX:l,offsetY:t,enableTransition:n}=ne.value;let o=l/e,i=t/e;const r=a*Math.PI/180,c=Math.cos(r),u=Math.sin(r);o=o*c+i*u,i=i*c-l/e*u;const d={transform:`scale(${e}) rotate(${a}deg) translate(${o}px, ${i}px)`,transition:n?"transform .3s":""};return te.value.name===s.CONTAIN.name&&(d.maxWidth=d.maxHeight="100%"),d}));function pe(){ee.stop(),l("close")}function ge(){ae.value=!1}function ye(e){ae.value=!1,e.target.alt=K("el.image.error")}function be(e){if(ae.value||0!==e.button||!Q.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:l}=ne.value,t=e.pageX,n=e.pageY,s=de((e=>{ne.value={...ne.value,offsetX:a+e.pageX-t,offsetY:l+e.pageY-n}})),o=W(document,"mousemove",s);W(document,"mouseup",(()=>{o()})),e.preventDefault()}function ke(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function we(){if(ae.value)return;const e=q(s),a=Object.values(s),l=te.value.name,t=(a.findIndex((e=>e.name===l))+1)%e.length;te.value=s[e[t]],ke()}function xe(e){const a=n.urlList.length;le.value=(e+a)%a}function he(){ie.value&&!n.infinite||xe(le.value-1)}function ze(){ce.value&&!n.infinite||xe(le.value+1)}function Ce(e,a={}){if(ae.value)return;const{minScale:t,maxScale:s}=n,{zoomRate:o,rotateDeg:i,enableTransition:r}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>t&&(ne.value.scale=Number.parseFloat((ne.value.scale/o).toFixed(3)));break;case"zoomIn":ne.value.scale<s&&(ne.value.scale=Number.parseFloat((ne.value.scale*o).toFixed(3)));break;case"clockwise":ne.value.deg+=i,l("rotate",ne.value.deg);break;case"anticlockwise":ne.value.deg-=i,l("rotate",ne.value.deg)}ne.value.enableTransition=r}function Ie(e){var a;"pointer"===(null==(a=e.detail)?void 0:a.focusReason)&&e.preventDefault()}function _e(){n.closeOnPressEscape&&pe()}return g(ue,(()=>{y((()=>{const e=U.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),g(le,(e=>{ke(),l("switch",e)})),b((()=>{!function(){const e=de((e=>{switch(e.code){case Z.esc:n.closeOnPressEscape&&pe();break;case Z.space:we();break;case Z.left:he();break;case Z.up:Ce("zoomIn");break;case Z.right:ze();break;case Z.down:Ce("zoomOut")}})),a=de((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})}));ee.run((()=>{W(document,"keydown",e),W(document,"wheel",a)}))}()})),a({setActiveItem:xe}),(e,a)=>(k(),w(_(re),{to:"body",disabled:!e.teleported},{default:x((()=>[h(z,{name:"viewer-fade",appear:""},{default:x((()=>[C("div",{ref_key:"wrapper",ref:Q,tabindex:-1,class:I(_(J).e("wrapper")),style:O({zIndex:se.value})},[h(_(S),{loop:"",trapped:"","focus-trap-el":Q.value,"focus-start-el":"container",onFocusoutPrevented:Ie,onReleaseRequested:_e},{default:x((()=>[C("div",{class:I(_(J).e("mask")),onClick:N((a=>e.hideOnClickModal&&pe()),["self"])},null,10,["onClick"]),E(" CLOSE "),C("span",{class:I([_(J).e("btn"),_(J).e("close")]),onClick:pe},[h(_(T),null,{default:x((()=>[h(_(L))])),_:1})],2),E(" ARROW "),_(oe)?E("v-if",!0):(k(),A(R,{key:0},[C("span",{class:I(_(ve)),onClick:he},[h(_(T),null,{default:x((()=>[h(_(B))])),_:1})],2),C("span",{class:I(_(fe)),onClick:ze},[h(_(T),null,{default:x((()=>[h(_(Y))])),_:1})],2)],64)),E(" ACTIONS "),C("div",{class:I([_(J).e("btn"),_(J).e("actions")])},[C("div",{class:I(_(J).e("actions__inner"))},[h(_(T),{onClick:e=>Ce("zoomOut")},{default:x((()=>[h(_($))])),_:1},8,["onClick"]),h(_(T),{onClick:e=>Ce("zoomIn")},{default:x((()=>[h(_(j))])),_:1},8,["onClick"]),C("i",{class:I(_(J).e("actions__divider"))},null,2),h(_(T),{onClick:we},{default:x((()=>[(k(),w(F(_(te).icon)))])),_:1}),C("i",{class:I(_(J).e("actions__divider"))},null,2),h(_(T),{onClick:e=>Ce("anticlockwise")},{default:x((()=>[h(_(M))])),_:1},8,["onClick"]),h(_(T),{onClick:e=>Ce("clockwise")},{default:x((()=>[h(_(P))])),_:1},8,["onClick"])],2)],2),E(" CANVAS "),C("div",{class:I(_(J).e("canvas"))},[(k(!0),A(R,null,X(e.urlList,((a,l)=>D((k(),A("img",{ref_for:!0,ref:e=>U.value[l]=e,key:a,src:a,style:O(_(me)),class:I(_(J).e("img")),crossorigin:e.crossorigin,onLoad:ge,onError:ye,onMousedown:be},null,46,["src","crossorigin"])),[[G,l===le.value]]))),128))],2),H(e.$slots,"default")])),_:3},8,["focus-trap-el"])],6)])),_:3})])),_:3},8,["disabled"]))}}),[["__file","image-viewer.vue"]])),ge=a({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:l([String,Object])},previewSrcList:{type:l(Array),default:()=>t([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),ye={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>n(e),close:()=>!0,show:()=>!0},be=s({name:"ElImage",inheritAttrs:!1});const ke=J(K(s({...be,props:ge,emits:ye,setup(e,{emit:a}){const l=e;let t="";const{t:n}=c(),s=u("image"),o=V(),i=p((()=>Q(Object.entries(o).filter((([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))))),r=U({excludeListeners:!0,excludeKeys:p((()=>Object.keys(i.value)))}),d=v(),f=v(!1),m=v(!0),h=v(!1),z=v(),O=v(),S=ee&&"loading"in HTMLImageElement.prototype;let N,T;const L=p((()=>[s.e("inner"),Y.value&&s.e("preview"),m.value&&s.is("loading")])),B=p((()=>{const{fit:e}=l;return ee&&e?{objectFit:e}:{}})),Y=p((()=>{const{previewSrcList:e}=l;return ae(e)&&e.length>0})),$=p((()=>{const{previewSrcList:e,initialIndex:a}=l;let t=a;return a>e.length-1&&(t=0),t})),j=p((()=>"eager"!==l.loading&&(!S&&"lazy"===l.loading||l.lazy))),F=()=>{ee&&(m.value=!0,f.value=!1,d.value=l.src)};function M(e){m.value=!1,f.value=!1,a("load",e)}function P(e){m.value=!1,f.value=!0,a("error",e)}function X(){ue(z.value,O.value)&&(F(),K())}const D=le(X,200,!0);async function G(){var e;if(!ee)return;await y();const{scrollContainer:a}=l;ne(a)?O.value=a:se(a)&&""!==a?O.value=null!=(e=document.querySelector(a))?e:void 0:z.value&&(O.value=oe(z.value)),O.value&&(N=W(O,"scroll",D),setTimeout((()=>X()),100))}function K(){ee&&O.value&&D&&(null==N||N(),O.value=void 0)}function Z(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function q(){Y.value&&(T=W("wheel",Z,{passive:!1}),t=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,a("show"))}function J(){null==T||T(),document.body.style.overflow=t,h.value=!1,a("close")}function re(e){a("switch",e)}return g((()=>l.src),(()=>{j.value?(m.value=!0,f.value=!1,K(),G()):F()})),b((()=>{j.value?G():F()})),(e,a)=>(k(),A("div",te({ref_key:"container",ref:z},_(i),{class:[_(s).b(),e.$attrs.class]}),[f.value?H(e.$slots,"error",{key:0},(()=>[C("div",{class:I(_(s).e("error"))},ie(_(n)("el.image.error")),3)])):(k(),A(R,{key:1},[void 0!==d.value?(k(),A("img",te({key:0},_(r),{src:d.value,loading:e.loading,style:_(B),class:_(L),crossorigin:e.crossorigin,onClick:q,onLoad:M,onError:P}),null,16,["src","loading","crossorigin"])):E("v-if",!0),m.value?(k(),A("div",{key:1,class:I(_(s).e("wrapper"))},[H(e.$slots,"placeholder",{},(()=>[C("div",{class:I(_(s).e("placeholder"))},null,2)]))],2)):E("v-if",!0)],64)),_(Y)?(k(),A(R,{key:2},[h.value?(k(),w(_(pe),{key:0,"z-index":e.zIndex,"initial-index":_($),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:J,onSwitch:re},{default:x((()=>[e.$slots.viewer?(k(),A("div",{key:0},[H(e.$slots,"viewer")])):E("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],16))}}),[["__file","image.vue"]]));export{ke as E};
