(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"8LTB":function(i,e,t){"use strict";t.r(e),t.d(e,"ion_split_pane",(function(){return o}));var n=t("ae0+"),s=(t("ttJE"),{xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""}),o=function(){function i(i){Object(n.l)(this,i),this.visible=!1,this.disabled=!1,this.when=s.lg,this.ionSplitPaneVisible=Object(n.e)(this,"ionSplitPaneVisible",7)}return i.prototype.visibleChanged=function(i){var e={visible:i,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(e)},i.prototype.connectedCallback=function(){this.styleChildren(),this.updateState()},i.prototype.disconnectedCallback=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},i.prototype.componentWillLoad=function(){void 0===this.contentId&&console.warn('[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId="main-content">\n    ...\n    <div id="main-content">...</div>\n  </ion-split-pane>\n')},i.prototype.updateState=function(){var i=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var e=this.when;if("boolean"!=typeof e){var t=s[e]||e;if(0!==t.length){if(window.matchMedia){var n=function(e){i.visible=e.matches},o=window.matchMedia(t);o.addListener(n),this.rmL=function(){return o.removeListener(n)},this.visible=o.matches}}else this.visible=!1}else this.visible=e}},i.prototype.isPane=function(i){return!!this.visible&&i.parentElement===this.el&&i.classList.contains("split-pane-side")},i.prototype.styleChildren=function(){for(var i=this.contentId,e=this.el.children,t=this.el.childElementCount,n=!1,s=0;s<t;s++){var o=e[s],l=void 0!==i?o.id===i:o.hasAttribute("main");if(l){if(n)return void console.warn("split pane cannot have more than one main node");n=!0}a(o,l)}n||console.warn("split pane does not have a specified main node")},i.prototype.render=function(){var i,e=Object(n.d)(this);return Object(n.i)(n.a,{class:(i={},i[e]=!0,i["split-pane-"+e]=!0,i["split-pane-visible"]=this.visible,i)})},Object.defineProperty(i.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),i}(),a=function(i,e){var t,n;e?(t="split-pane-main",n="split-pane-side"):(t="split-pane-side",n="split-pane-main");var s=i.classList;s.add(t),s.remove(n)}}}]);