!function(t,o,e){function i(o,e){this.bodyOverflowX,this.callbacks={hide:[],show:[]},this.checkInterval=null,this.Content,this.$el=t(o),this.$elProxy,this.elProxyPosition,this.enabled=!0,this.options=t.extend({},l,e),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.Status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this._init()}function s(o,e){var i=!0;return t.each(o,function(t){return"undefined"==typeof e[t]||o[t]!==e[t]?(i=!1,!1):void 0}),i}function n(){return!d&&p}function r(){var t=e.body||e.documentElement,o=t.style,i="transition";if("string"==typeof o[i])return!0;v=["Moz","Webkit","Khtml","O","ms"],i=i.charAt(0).toUpperCase()+i.substr(1);for(var s=0;s<v.length;s++)if("string"==typeof o[v[s]+i])return!0;return!1}var a="tooltipstercustom",l={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,debug:!0,delay:200,minWidth:0,maxWidth:null,functionInit:function(){},functionBefore:function(t,o){o()},functionReady:function(){},functionAfter:function(){},hideOnClick:!1,icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,multiple:!1,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,positionTrackerCallback:function(){"hover"==this.option("trigger")&&this.option("autoClose")&&this.hide()},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",customColor:"#ffffff",customBackground:"#000000",customBorder:"#000000",touchDevices:!0,trigger:"hover",updateAnimation:!0};i.prototype={_init:function(){var o=this;if(e.querySelector){var i=null;void 0===o.$el.data("tooltipster-initialTitle")&&(i=o.$el.attr("title"),void 0===i&&(i=null),o.$el.data("tooltipster-initialTitle",i)),o._content_set(null!==o.options.content?o.options.content:i);var s=o.options.functionInit.call(o.$el,o.$el,o.Content);"undefined"!=typeof s&&o._content_set(s),o.$el.removeAttr("title").addClass("tooltipstered"),!p&&o.options.iconDesktop||p&&o.options.iconTouch?("string"==typeof o.options.icon?(o.$elProxy=t('<span class="'+o.options.iconTheme+'"></span>'),o.$elProxy.text(o.options.icon)):o.$elProxy=o.options.iconCloning?o.options.icon.clone(!0):o.options.icon,o.$elProxy.insertAfter(o.$el)):o.$elProxy=o.$el,"hover"==o.options.trigger?(o.$elProxy.on("mouseenter."+o.namespace,function(){(!n()||o.options.touchDevices)&&(o.mouseIsOverProxy=!0,o._show())}).on("mouseleave."+o.namespace,function(){(!n()||o.options.touchDevices)&&(o.mouseIsOverProxy=!1)}),p&&o.options.touchDevices&&o.$elProxy.on("touchstart."+o.namespace,function(){o._showNow()})):"click"==o.options.trigger&&o.$elProxy.on("click."+o.namespace,function(){(!n()||o.options.touchDevices)&&o._show()})}},_show:function(){var t=this;"shown"!=t.Status&&"appearing"!=t.Status&&(t.options.delay?t.timerShow=setTimeout(function(){("click"==t.options.trigger||"hover"==t.options.trigger&&t.mouseIsOverProxy)&&t._showNow()},t.options.delay):t._showNow())},_showNow:function(e){var i=this;i.options.functionBefore.call(i.$el,i.$el,function(){if(i.enabled&&null!==i.Content){e&&i.callbacks.show.push(e),i.callbacks.hide=[],clearTimeout(i.timerShow),i.timerShow=null,clearTimeout(i.timerHide),i.timerHide=null,i.options.onlyOne&&t(".tooltipstered").not(i.$el).each(function(o,e){var i=t(e),s=i.data("tooltipster-ns");t.each(s,function(t,o){var e=i.data(o),s=e.status(),n=e.option("autoClose");"hidden"!==s&&"disappearing"!==s&&n&&e.hide()})});var s=function(){i.Status="shown",t.each(i.callbacks.show,function(t,o){o.call(i.$el)}),i.callbacks.show=[]};if("hidden"!==i.Status){var n=0;"disappearing"===i.Status?(i.Status="appearing",r()?(i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+i.options.animation+"-show"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(s)):i.$tooltip.stop().fadeIn(s)):"shown"===i.Status&&s()}else{i.Status="appearing";var n=i.options.speed;i.bodyOverflowX=t("body").css("overflow-x"),t("body").css("overflow-x","hidden");var a="tooltipster-"+i.options.animation,l="-webkit-transition-duration: "+i.options.speed+"ms; -webkit-animation-duration: "+i.options.speed+"ms; -moz-transition-duration: "+i.options.speed+"ms; -moz-animation-duration: "+i.options.speed+"ms; -o-transition-duration: "+i.options.speed+"ms; -o-animation-duration: "+i.options.speed+"ms; -ms-transition-duration: "+i.options.speed+"ms; -ms-animation-duration: "+i.options.speed+"ms; transition-duration: "+i.options.speed+"ms; animation-duration: "+i.options.speed+"ms;",d=i.options.minWidth?"min-width:"+Math.round(i.options.minWidth)+"px;":"",c=i.options.maxWidth?"max-width:"+Math.round(i.options.maxWidth)+"px;":"",f=i.options.interactive?"pointer-events: auto;":"";if("tooltipster-custom"==i.options.theme)var u="background: "+i.options.customBackground+"; border: 1px solid "+i.options.customBorder+"; color: "+i.options.customColor+";";else var u="";if(i.$tooltip=t('<div class="tooltipster-base '+i.options.theme+'" style="'+d+" "+c+" "+f+" "+l+" "+u+'"><div class="tooltipster-content"></div></div>'),r()&&i.$tooltip.addClass(a),i._content_insert(),i.$tooltip.appendTo("body"),i.reposition(),i.options.functionReady.call(i.$el,i.$el,i.$tooltip),r()?(i.$tooltip.addClass(a+"-show"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(s)):i.$tooltip.css("display","none").fadeIn(i.options.speed,s),i._interval_set(),t(o).on("scroll."+i.namespace+" resize."+i.namespace,function(){i.reposition()}),i.options.autoClose)if(t("body").off("."+i.namespace),"hover"==i.options.trigger){if(p&&setTimeout(function(){t("body").on("touchstart."+i.namespace,function(){i.hide()})},0),i.options.interactive){p&&i.$tooltip.on("touchstart."+i.namespace,function(t){t.stopPropagation()});var h=null;i.$elProxy.add(i.$tooltip).on("mouseleave."+i.namespace+"-autoClose",function(){clearTimeout(h),h=setTimeout(function(){i.hide()},i.options.interactiveTolerance)}).on("mouseenter."+i.namespace+"-autoClose",function(){clearTimeout(h)})}else i.$elProxy.on("mouseleave."+i.namespace+"-autoClose",function(){i.hide()});i.options.hideOnClick&&i.$elProxy.on("click."+i.namespace+"-autoClose",function(){i.hide()})}else"click"==i.options.trigger&&(setTimeout(function(){t("body").on("click."+i.namespace+" touchstart."+i.namespace,function(){i.hide()})},0),i.options.interactive&&i.$tooltip.on("click."+i.namespace+" touchstart."+i.namespace,function(t){t.stopPropagation()}))}i.options.timer>0&&(i.timerHide=setTimeout(function(){i.timerHide=null,i.hide()},i.options.timer+n))}})},_interval_set:function(){var o=this;o.checkInterval=setInterval(function(){if(0===t("body").find(o.$el).length||0===t("body").find(o.$elProxy).length||"hidden"==o.Status||0===t("body").find(o.$tooltip).length)("shown"==o.Status||"appearing"==o.Status)&&o.hide(),o._interval_cancel();else if(o.options.positionTracker){var e=o._repositionInfo(o.$elProxy),i=!1;s(e.dimension,o.elProxyPosition.dimension)&&("fixed"===o.$elProxy.css("position")?s(e.position,o.elProxyPosition.position)&&(i=!0):s(e.offset,o.elProxyPosition.offset)&&(i=!0)),i||(o.reposition(),o.options.positionTrackerCallback.call(o,o.$el))}},200)},_interval_cancel:function(){clearInterval(this.checkInterval),this.checkInterval=null},_content_set:function(t){"object"==typeof t&&null!==t&&this.options.contentCloning&&(t=t.clone(!0)),this.Content=t},_content_insert:function(){var t=this,o=this.$tooltip.find(".tooltipster-content");"string"!=typeof t.Content||t.options.contentAsHTML?o.empty().append(t.Content):o.text(t.Content)},_update:function(t){var o=this;o._content_set(t),null!==o.Content?"hidden"!==o.Status&&(o._content_insert(),o.reposition(),o.options.updateAnimation&&(r()?(o.$tooltip.css({width:"","-webkit-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=o.Status&&(o.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==o.Status&&o.$tooltip.css({"-webkit-transition":o.options.speed+"ms","-moz-transition":o.options.speed+"ms","-o-transition":o.options.speed+"ms","-ms-transition":o.options.speed+"ms",transition:o.options.speed+"ms"})},o.options.speed))},o.options.speed)):o.$tooltip.fadeTo(o.options.speed,.5,function(){"hidden"!=o.Status&&o.$tooltip.fadeTo(o.options.speed,1)}))):o.hide()},_repositionInfo:function(t){return{dimension:{height:t.outerHeight(!1),width:t.outerWidth(!1)},offset:t.offset(),position:{left:parseInt(t.css("left")),top:parseInt(t.css("top"))}}},hide:function(e){var i=this;e&&i.callbacks.hide.push(e),i.callbacks.show=[],clearTimeout(i.timerShow),i.timerShow=null,clearTimeout(i.timerHide),i.timerHide=null;var s=function(){t.each(i.callbacks.hide,function(t,o){o.call(i.$el)}),i.callbacks.hide=[]};if("shown"==i.Status||"appearing"==i.Status){i.Status="disappearing";var n=function(){i.Status="hidden","object"==typeof i.Content&&null!==i.Content&&i.Content.detach(),i.$tooltip.remove(),i.$tooltip=null,t(o).off("."+i.namespace),t("body").off("."+i.namespace).css("overflow-x",i.bodyOverflowX),t("body").off("."+i.namespace),i.$elProxy.off("."+i.namespace+"-autoClose"),i.options.functionAfter.call(i.$el,i.$el),s()};r()?(i.$tooltip.clearQueue().removeClass("tooltipster-"+i.options.animation+"-show").addClass("tooltipster-dying"),i.options.speed>0&&i.$tooltip.delay(i.options.speed),i.$tooltip.queue(n)):i.$tooltip.stop().fadeOut(i.options.speed,n)}else"hidden"==i.Status&&s();return i},show:function(t){return this._showNow(t),this},update:function(t){return this.content(t)},content:function(t){return"undefined"==typeof t?this.Content:(this._update(t),this)},reposition:function(){function e(){var e=t(o).scrollLeft();0>I-e&&(n=I-e,I=e),I+l-e>r&&(n=I-(r+e-l),I=r+e-l)}function i(e,i){a.offset.top-t(o).scrollTop()-p-S-12<0&&i.indexOf("top")>-1&&(H=e),a.offset.top+a.dimension.height+p+12+S>t(o).scrollTop()+t(o).height()&&i.indexOf("bottom")>-1&&(H=e,Q=a.offset.top-p-S-12)}var s=this;if(0!==t("body").find(s.$tooltip).length){s.$tooltip.css("width",""),s.elProxyPosition=s._repositionInfo(s.$elProxy);var n=null,r=t(o).width(),a=s.elProxyPosition,l=s.$tooltip.outerWidth(!1),p=(s.$tooltip.innerWidth()+1,s.$tooltip.outerHeight(!1));if(s.$elProxy.is("area")){var d=s.$elProxy.attr("shape"),c=s.$elProxy.parent().attr("name"),f=t('img[usemap="#'+c+'"]'),u=f.offset().left,h=f.offset().top,m=void 0!==s.$elProxy.attr("coords")?s.$elProxy.attr("coords").split(","):void 0;if("circle"==d){var v=parseInt(m[0]),y=parseInt(m[1]),g=parseInt(m[2]);a.dimension.height=2*g,a.dimension.width=2*g,a.offset.top=h+y-g,a.offset.left=u+v-g}else if("rect"==d){var v=parseInt(m[0]),y=parseInt(m[1]),$=parseInt(m[2]),w=parseInt(m[3]);a.dimension.height=w-y,a.dimension.width=$-v,a.offset.top=h+y,a.offset.left=u+v}else if("poly"==d){for(var b=0,x=0,k=0,C=0,T="even",P=0;P<m.length;P++){var _=parseInt(m[P]);"even"==T?(_>k&&(k=_,0===P&&(b=k)),b>_&&(b=_),T="odd"):(_>C&&(C=_,1==P&&(x=C)),x>_&&(x=_),T="even")}a.dimension.height=C-x,a.dimension.width=k-b,a.offset.top=h+x,a.offset.left=u+b}else a.dimension.height=f.outerHeight(!1),a.dimension.width=f.outerWidth(!1),a.offset.top=h,a.offset.left=u}var I=0,j=0,Q=0,S=parseInt(s.options.offsetY),O=parseInt(s.options.offsetX),H=s.options.position;if("top"==H){var M=a.offset.left+l-(a.offset.left+a.dimension.width);I=a.offset.left+O-M/2,Q=a.offset.top-p-S-12,e(),i("bottom","top")}if("top-left"==H&&(I=a.offset.left+O,Q=a.offset.top-p-S-12,e(),i("bottom-left","top-left")),"top-right"==H&&(I=a.offset.left+a.dimension.width+O-l,Q=a.offset.top-p-S-12,e(),i("bottom-right","top-right")),"bottom"==H){var M=a.offset.left+l-(a.offset.left+a.dimension.width);I=a.offset.left-M/2+O,Q=a.offset.top+a.dimension.height+S+12,e(),i("top","bottom")}if("bottom-left"==H&&(I=a.offset.left+O,Q=a.offset.top+a.dimension.height+S+12,e(),i("top-left","bottom-left")),"bottom-right"==H&&(I=a.offset.left+a.dimension.width+O-l,Q=a.offset.top+a.dimension.height+S+12,e(),i("top-right","bottom-right")),"left"==H){I=a.offset.left-O-l-12,j=a.offset.left+O+a.dimension.width+12;var D=a.offset.top+p-(a.offset.top+a.dimension.height);if(Q=a.offset.top-D/2-S,0>I&&j+l>r){var W=2*parseFloat(s.$tooltip.css("border-width")),B=l+I-W;s.$tooltip.css("width",B+"px"),p=s.$tooltip.outerHeight(!1),I=a.offset.left-O-B-12-W,D=a.offset.top+p-(a.offset.top+a.dimension.height),Q=a.offset.top-D/2-S}else 0>I&&(I=a.offset.left+O+a.dimension.width+12,n="left")}if("right"==H){I=a.offset.left+O+a.dimension.width+12,j=a.offset.left-O-l-12;var D=a.offset.top+p-(a.offset.top+a.dimension.height);if(Q=a.offset.top-D/2-S,I+l>r&&0>j){var W=2*parseFloat(s.$tooltip.css("border-width")),B=r-I-W;s.$tooltip.css("width",B+"px"),p=s.$tooltip.outerHeight(!1),D=a.offset.top+p-(a.offset.top+a.dimension.height),Q=a.offset.top-D/2-S}else I+l>r&&(I=a.offset.left-O-l-12,n="right")}if(s.options.arrow){var A="tooltipster-arrow-"+H;if(s.options.arrowColor.length<1)var z=s.$tooltip.css("background-color");else var z=s.options.arrowColor;if(n?"left"==n?(A="tooltipster-arrow-right",n=""):"right"==n?(A="tooltipster-arrow-left",n=""):n="left:"+Math.round(n)+"px;":n="","top"==H||"top-left"==H||"top-right"==H)var F=parseFloat(s.$tooltip.css("border-bottom-width")),X=s.$tooltip.css("border-bottom-color");else if("bottom"==H||"bottom-left"==H||"bottom-right"==H)var F=parseFloat(s.$tooltip.css("border-top-width")),X=s.$tooltip.css("border-top-color");else if("left"==H)var F=parseFloat(s.$tooltip.css("border-right-width")),X=s.$tooltip.css("border-right-color");else if("right"==H)var F=parseFloat(s.$tooltip.css("border-left-width")),X=s.$tooltip.css("border-left-color");else var F=parseFloat(s.$tooltip.css("border-bottom-width")),X=s.$tooltip.css("border-bottom-color");F>1&&F++;var R="";if(0!==F){var L="",N="border-color: "+X+";";-1!==A.indexOf("bottom")?L="margin-top: -"+Math.round(F)+"px;":-1!==A.indexOf("top")?L="margin-bottom: -"+Math.round(F)+"px;":-1!==A.indexOf("left")?L="margin-right: -"+Math.round(F)+"px;":-1!==A.indexOf("right")&&(L="margin-left: -"+Math.round(F)+"px;"),R='<span class="tooltipster-arrow-border" style="'+L+" "+N+';"></span>'}s.$tooltip.find(".tooltipster-arrow").remove();var U='<div class="'+A+' tooltipster-arrow" style="'+n+'">'+R+'<span style="border-color:'+z+';"></span></div>';s.$tooltip.append(U)}s.$tooltip.css({top:Math.round(Q)+"px",left:Math.round(I)+"px"})}return s},enable:function(){return this.enabled=!0,this},disable:function(){return this.hide(),this.enabled=!1,this},destroy:function(){var o=this;o.hide(),o.$el[0]!==o.$elProxy[0]&&o.$elProxy.remove(),o.$el.removeData(o.namespace).off("."+o.namespace);var e=o.$el.data("tooltipster-ns");if(1===e.length){var i=null;"previous"===o.options.restoration?i=o.$el.data("tooltipster-initialTitle"):"current"===o.options.restoration&&(i="string"==typeof o.Content?o.Content:t("<div></div>").append(o.Content).html()),i&&o.$el.attr("title",i),o.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else e=t.grep(e,function(t){return t!==o.namespace}),o.$el.data("tooltipster-ns",e);return o},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:void 0},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:void 0},option:function(t,o){return"undefined"==typeof o?this.options[t]:(this.options[t]=o,this)},status:function(){return this.Status}},t.fn[a]=function(){var o=arguments;if(0===this.length){if("string"==typeof o[0]){var e=!0;switch(o[0]){case"setDefaults":t.extend(l,o[1]);break;default:e=!1}return e?!0:this}return this}if("string"==typeof o[0]){var s="#*$~&";return this.each(function(){var e=t(this).data("tooltipster-ns"),i=e?t(this).data(e[0]):null;if(!i)throw new Error("You called Tooltipster's \""+o[0]+'" method on an uninitialized element');if("function"!=typeof i[o[0]])throw new Error('Unknown method .tooltipstercustom("'+o[0]+'")');var n=i[o[0]](o[1],o[2]);return n!==i?(s=n,!1):void 0}),"#*$~&"!==s?s:this}var n=[],r=o[0]&&"undefined"!=typeof o[0].multiple,a=r&&o[0].multiple||!r&&l.multiple,p=o[0]&&"undefined"!=typeof o[0].debug,d=p&&o[0].debug||!p&&l.debug;return this.each(function(){var e=!1,s=t(this).data("tooltipster-ns"),r=null;s?a?e=!0:d&&console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'):e=!0,e&&(r=new i(this,o[0]),s||(s=[]),s.push(r.namespace),t(this).data("tooltipster-ns",s),t(this).data(r.namespace,r)),n.push(r)}),a?n:this};var p=!!("ontouchstart"in o),d=!1;t("body").one("mousemove",function(){d=!0})}(jQuery,window,document),function(t){t(document).ready(function(){function t(t,e,i){var s=t,n=!1,r="",a="",l="",p="",d="tooltipster-black",c="top",f=0,u=0;n="true"==s.attr("data-tooltipster-html")?!0:!1,r=s.attr("data-tooltipster-title"),a=s.attr("data-tooltipster-text"),n&&void 0!=a&&""!=a&&(a=decodeURIComponent(TS_VCSC_Base64.decode(a))),l=s.attr("data-tooltipster-image"),p="undefined"!=typeof l&&""!=l?'<img class="tooltipster-content-image" src="'+l+'">':"undefined"!=typeof r&&""!=r?'<div class="tooltipster-content-title">'+r+'</div><div class="tooltipster-content-text">'+a+"</div>":'<div class="tooltipster-content-text">'+a+"</div>",f=parseInt(s.attr("data-tooltipster-offsetx")),u=parseInt(s.attr("data-tooltipster-offsety")),"bottom"==c?u-=o:("top"==c||"left"==c||"right"==c)&&(u+=o),s.tooltipstercustom({autoClose:i,multiple:!1,touchDevices:!1,theme:s.attr("data-tooltipster-theme"),customColor:"tooltipster-custom"==d?s.attr("data-tooltipster-color"):"#ffffff",customBackground:"tooltipster-custom"==d?s.attr("data-tooltipster-background"):"#000000",customBorder:"tooltipster-custom"==d?s.attr("data-tooltipster-border"):"#000000",arrow:"true"==s.attr("data-tooltipster-arrow")?!0:!1,content:p,contentAsHTML:!0,trigger:e,animation:s.attr("data-tooltipster-animation"),onlyOne:!0,position:s.attr("data-tooltipster-position"),positionTracker:!0,delay:200,minWidth:75,maxWidth:300,iconDesktop:!1,iconTouch:"true"==s.attr("data-tooltipster-touch")?!0:!1,offsetX:f,offsetY:u,interactive:!0,restoration:"none",functionInit:function(t){t.attr("data-tooltipset","true")},functionBefore:function(t,o){o()},functionReady:function(){},functionAfter:function(){}}),"custom"==e?(s.attr("data-tooltipset","true"),s.tooltipstercustom("show")):s.attr("data-tooltipset","false")}if(void 0===o||null===o)if(void 0!=jQuery("html").css("boxSizing")&&"border-box"==jQuery("html").css("boxSizing"))var o=jQuery("#wpadminbar").length>0?parseInt(jQuery("html").css("marginTop").replace("px","")):0;else var o=0;if("undefined"!=typeof jQuery.fn.tooltipstercustom){var e=null,i=!1,s="",n="",r="",a="",l="hover",p="tooltipster-black",d="#000000",c="#000000",f="#ffffff",u="top",h="swing",m=!0,v=!1,y=0,g=0;jQuery("body").on("mouseenter touchstart",".ts-has-tooltipster-tooltip",function(){if(e=jQuery(this),!e.hasClass("ts-use-tooltipster-click")){if("true"==e.attr("data-tooltipset"))try{e.tooltipstercustom("destroy").attr("data-tooltipset","false")}catch(t){}i="true"==e.attr("data-tooltipster-html")?!0:!1,s=e.attr("data-tooltipster-title"),n=e.attr("data-tooltipster-text"),i&&void 0!=n&&""!=n&&(n=decodeURIComponent(TS_VCSC_Base64.decode(n))),r=e.attr("data-tooltipster-image"),a="undefined"!=typeof r&&""!=r?'<img class="tooltipster-content-image" src="'+r+'">':"undefined"!=typeof s&&""!=s?'<div class="tooltipster-content-title">'+s+'</div><div class="tooltipster-content-text">'+n+"</div>":'<div class="tooltipster-content-text">'+n+"</div>",l=e.attr("data-tooltipster-trigger"),("undefined"==typeof l||""==l)&&(l="hover"),p=e.attr("data-tooltipster-theme"),("undefined"==typeof p||""==p)&&(p="tooltipster-black"),d="tooltipster-custom"==p?e.attr("data-tooltipster-background"):"#000000",c="tooltipster-custom"==p?e.attr("data-tooltipster-border"):"#000000",f="tooltipster-custom"==p?e.attr("data-tooltipster-color"):"#ffffff",u=e.attr("data-tooltipster-position"),("undefined"==typeof u||""==u)&&(u="top"),h=e.attr("data-tooltipster-animation"),("undefined"==typeof h||""==h)&&(h="swing"),m="true"==e.attr("data-tooltipster-arrow")?!0:"false"==e.attr("data-tooltipster-arrow")?!1:!0,v="true"==e.attr("data-tooltipster-touch")?!0:!1,y=e.attr("data-tooltipster-offsetx"),y="undefined"==typeof y||""==y?0:parseInt(y),g=e.attr("data-tooltipster-offsety"),g="undefined"==typeof g||""==g?0:parseInt(g),"bottom"==u?g-=o:("top"==u||"left"==u||"right"==u)&&(g+=o),e.tooltipstercustom({multiple:!1,touchDevices:!1,theme:p,customColor:f,customBackground:d,customBorder:c,arrow:m,content:a,contentAsHTML:!0,trigger:l,animation:h,onlyOne:!0,position:u,delay:200,minWidth:75,maxWidth:300,iconDesktop:!1,iconTouch:v,offsetX:y,offsetY:g,interactive:!0,restoration:"none",functionInit:function(t){t.attr("data-tooltipset","true")},functionBefore:function(t,o){o()},functionReady:function(){},functionAfter:function(){}}),e.tooltipstercustom("show")}}),jQuery("body").on("mouseleave touchend",".ts-has-tooltipster-tooltip",function(){if(e=jQuery(this),!e.hasClass("ts-use-tooltipster-click")&&"true"==e.attr("data-tooltipset"))try{e.tooltipstercustom("destroy").attr("data-tooltipset","false")}catch(t){}}),jQuery(".ts-has-tooltipster-tooltip.ts-use-tooltipster-click").each(function(){t(jQuery(this),"click",!0)}),jQuery("body").on("click",".ts-has-tooltipster-tooltip.ts-use-tooltipster-click",function(){"true"==jQuery(this).attr("data-tooltipset")?(jQuery(this).tooltipstercustom("hide"),jQuery(this).attr("data-tooltipset","false")):(jQuery(this).tooltipstercustom("show"),jQuery(this).attr("data-tooltipset","true"))}),jQuery(".ts-use-tooltipster-tooltip").each(function(){t(jQuery(this),"custom",!1)}),jQuery("body").on("click",".ts-use-tooltipster-tooltip.ts-use-tooltipster-click",function(){"true"==jQuery(this).attr("data-tooltipset")?(jQuery(this).tooltipstercustom("hide"),jQuery(this).attr("data-tooltipset","false")):(jQuery(this).tooltipstercustom("show"),jQuery(this).attr("data-tooltipset","true"))}),jQuery("body").on("mouseenter touchstart",".ts-use-tooltipster-tooltip.ts-use-tooltipster-hover",function(){"false"==jQuery(this).attr("data-tooltipset")&&(jQuery(this).tooltipstercustom("show"),jQuery(this).attr("data-tooltipset","true"))}),jQuery("body").on("mouseleave touchend",".ts-use-tooltipster-tooltip.ts-use-tooltipster-hover",function(){"true"==jQuery(this).attr("data-tooltipset")&&(jQuery(this).tooltipstercustom("hide"),jQuery(this).attr("data-tooltipset","false"))})}})}(jQuery);