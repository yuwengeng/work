var t;t=function(t){"function"==typeof t&&t("common/ui/Loading");var i=window.addEventListener?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path d="M116.152,99.999l36.482-36.486c2.881-2.881,2.881-7.54,0-10.42 l-5.215-5.215c-2.871-2.881-7.539-2.881-10.42,0l-36.484,36.484L64.031,47.877c-2.881-2.881-7.549-2.881-10.43,0l-5.205,5.215 c-2.881,2.881-2.881,7.54,0,10.42l36.482,36.486l-36.482,36.482c-2.881,2.881-2.881,7.549,0,10.43l5.205,5.215 c2.881,2.871,7.549,2.871,10.43,0l36.484-36.488L137,152.126c2.881,2.871,7.549,2.871,10.42,0l5.215-5.215 c2.881-2.881,2.881-7.549,0-10.43L116.152,99.999z"/></svg>':"",e="WebkitAppearance"in document.documentElement.style||void 0!==document.webkitHidden;$.dialog=function(t){return new n(t)};var n=function(t){var n={title:"",content:"",width:"auto",buttons:[],onShow:$.noop,onHide:$.noop,onRemove:$.noop},o=$.extend({},n,t||{}),a={};this.el=a,this.width=o.width,this.callback={show:o.onShow,hide:o.onHide,remove:o.onRemove},a.container=window.addEventListener?$('<dialog class="ui-dialog-container"></dialog>'):$('<div class="ui-dialog-container"></div>'),history.pushState&&a.container.get(0).addEventListener(e?"webkitAnimationEnd":"animationend",function(t){"dialog"==t.target.tagName.toLowerCase()&&this.classList.remove("ui-dialog-animation")}),a.dialog=$('<div class="ui-dialog"></div>').css("width",o.width).attr({tabindex:"-1",role:"dialog"}),a.title=$('<div class="ui-dialog-title" role="heading"></div>').html(o.title);var l=("id_"+Math.random()).replace("0.","");a.close=$('<a href="javascript:" class="ui-dialog-close ESC"></a>').attr({role:"button","aria-label":"关闭",id:l,"data-target":l}).html(i).click($.proxy(function(t){t.preventDefault();var i=document.activeElement,e=i.getAttribute("data-target"),n=e&&document.getElementById(e);window.isKeyEvent&&n&&i!=a.close[0]&&document.querySelector('a[data-target="'+e+'"],input[data-target="'+e+'"]')&&n.clientWidth>0||this[this.closeMode]()},this));var s=o.content;$.isFunction(s)&&(s=s()),this.closeMode=s.size?"hide":"remove",a.body=$('<div class="ui-dialog-body"></div>')[s.size?"append":"html"](s),a.footer=$('<div class="ui-dialog-footer"></div>'),this.button(o.buttons),a.container.append(a.dialog.append(a.close).append(a.title).append(a.body).append(a.footer)),document.querySelector||a.container.append('<i class="ui-dialog-after"></i>');var r=$(".ui-dialog-container");return r.length?r.eq(0).before(a.container.css({zIndex:1*r.eq(0).css("z-index")+1})):(o.container||$(document.body)).append(a.container),this.display=!1,o.content&&this.show(),this};return n.prototype.button=function(t){var i=this.el,e=this;return i.footer.empty(),$.each(t,function(t,n){n=n||{};var o=t?n.type||"":n.type||"primary",a=t?n.value||"取消":n.value||"确定",l=n.events||{click:function(){e[e.closeMode]()}};$.isFunction(l)&&(l={click:l});var s="ui-button";o&&(s=s+" "+s+"-"+o),i["button"+t]=n.for?$('<label for="'+n.for+'" class="'+s+'" role="button">'+a+"</label>"):$('<a href="javascript:" class="'+s+'" role="button">'+a+"</a>"),$.each(l,function(n,o){i["button"+t].bind(n,{dialog:e},o),i["button"+t].on("focus",function(){$(this).css("outline",window.isKeyEvent?"":"none")})}),i.footer.append(i["button"+t])}),e},n.prototype.loading=function(){if(!$().loading)return window.console&&window.console.error("need Loading.js"),i;var t=this.el,i=this;return t&&(t.container.attr("class",["ui-dialog-container","ui-dialog-loading"].join(" ")),t.body.loading(),i.show()),i},n.prototype.unloading=function(t){if(!$().unloading)return window.console&&window.console.error("need Loading.js"),e;var i=this.el,e=this;return i&&(i.container.removeClass("ui-dialog-loading"),i.body.unloading(t)),e},n.prototype.open=function(t,i){var e=this.el,n=$.extend({},{title:"",buttons:[]},i||{});return e&&t&&(e.container.attr("class",["ui-dialog-container"].join(" ")),e.title.html(n.title),e.body.html(t),this.button(n.buttons).show()),this},n.prototype.alert=function(t,i){var e=this.el,n=$.extend({},{title:"",type:"remind",buttons:[{}]},i||{});return n.buttons[0].type||"remind"==n.type||(n.buttons[0].type=n.type),e&&t&&(e.container.attr("class",["ui-dialog-container","ui-dialog-alert"].join(" ")),e.dialog.width("auto").attr({role:"alertdialog"}),e.title.html(n.title),0==/<[\w\W]+>/.test(t)&&(t="<p>"+t+"</p>"),e.body.html('<div class="ui-dialog-'+n.type+' ui-dialog-alert">'+t+"</div>"),this.button(n.buttons).show(),e.button0&&e.button0.focus()),this},n.prototype.confirm=function(t,i){var e=this.el,n=$.extend({},{title:"",type:"warning",buttons:[{type:"warning"},{}]},i||{});return n.buttons.length&&!n.buttons[0].type&&(n.buttons[0].type="warning"),e&&t&&(e.container.attr("class",["ui-dialog-container","ui-dialog-confirm"].join(" ")),e.dialog.width("auto"),e.title.html(n.title),0==/<[\w\W]+>/.test(t)&&(t="<p>"+t+"</p>"),e.body.html('<div class="ui-dialog-'+n.type+' ui-dialog-confirm">'+t+"</div>"),this.button(n.buttons).show(),e.button0&&e.button0.focus()),this},n.prototype.ajax=function(t,i){var e=this,n=$.extend({},{dataType:"JSON",timeout:3e4,error:function(t,i){e.alert("<h6>尊敬的用户，很抱歉您刚才的操作没有成功！</h6>"+("timeout"==i?"<p>主要是由于请求时间过长，数据没能成功加载，这一般是由于网速过慢导致，您可以稍后重试！</p>":"parsererror"==i?"<p>原因是请求的数据含有不规范的内容。一般出现这样的问题是开发人员没有考虑周全，欢迎向我们反馈此问题！</p>":"<p>一般是网络出现了异常，如断网；或是网络临时阻塞，您可以稍后重试！如依然反复出现此问题，欢迎向我们反馈！</p>"),{type:"warning"}).unloading()}},t||{});if(!n.url)return this;var o=$.extend({},{title:"",content:function(t){return"string"==typeof t?t:"看见我说明没使用'options.content'做JSON解析"},buttons:[]},i||{}),a=(new Date).getTime(),l=n.success;return n.success=function(t){e.open(o.content(t),o),(new Date).getTime()-a<100?e.unloading(0):e.unloading(),$.isFunction(l)&&l.apply(this,arguments)},e.loading(),$.ajax(n),e},n.prototype.scroll=function(){var t=$(".ui-dialog-container"),i=!1;if(t.each(function(){"block"==$(this).css("display")&&(i=!0)}),i){var e=17;1!=this.display&&"number"==typeof window.innerWidth&&(e=window.innerWidth-document.documentElement.clientWidth),document.documentElement.style.overflow="hidden",1!=this.display&&$(document.body).css("border-right",e+"px solid transparent")}else document.documentElement.style.overflow="",$(document.body).css("border-right","");return this},n.prototype.tabindex=function(){var t=this.el.dialog,i=this.lastActiveElement;if(1==this.display){var e=document.activeElement;t[0]!==e&&(this.lastActiveElement=e),t&&t.focus()}else i&&"body"!=i.tagName.toLowerCase()&&(i.focus(),i.blur(),this.lastActiveElement=null);return t},n.prototype.show=function(){var t=this.el&&this.el.container;return t&&(t.css("display","block"),1!=this.display&&t.addClass("ui-dialog-animation"),this.scroll(),this.display=!0,this.tabindex(),$.isFunction(this.callback.show)&&this.callback.show.call(this,t)),this},n.prototype.hide=function(){var t=this.el.container;return t&&(t.hide(),this.scroll(),this.display=!1,this.tabindex(),$.isFunction(this.callback.hide)&&this.callback.hide.call(this,t)),this},n.prototype.remove=function(){var t=this.el&&this.el.container;return t&&(t.remove(),this.scroll(),this.display=!1,this.tabindex(),$.isFunction(this.callback.remove)&&this.callback.remove.call(this,t)),this},n},"function"==typeof define&&(define.amd||define.cmd)?define(t):(void 0).Dialog=t();
//# sourceMappingURL=form.modern.js.map
