;/*!examples/sdk-mod.js*/
var require,define;!function(e){var r=window.amis||{};if(!require){var t=document.getElementsByTagName("head")[0],n={},i={},a={},u={},o={},s={},c=function(e,r){for(var n=document.createDocumentFragment(),i=0,a=e.length;a>i;i++){var o=e[i].id,s=e[i].url;if(!(s in u)){u[s]=!0;var c=document.createElement("script");r&&!function(e,t){var n=setTimeout(function(){r(t)},require.timeout);e.onerror=function(){clearTimeout(n),r(t)};var i=function(){clearTimeout(n)};"onload"in e?e.onload=i:e.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&i()}}(c,o),c.type="text/javascript",c.src=s,n.appendChild(c)}}t.appendChild(n)},l=function(e,r,t){for(var i=[],a=0,u=e.length;u>a;a++){var l=e[a],p=n[l]||(n[l]=[]);p.push(r);var f,d=o[l]||o[l+".js"]||{},h=d.pkg;f=h?s[h].url||s[h].uri:d.url||d.uri||l,i.push({id:l,url:f})}c(i,t)};define=function(e,r){e=e.replace(/\.js$/i,""),i[e]=r;var t=n[e];if(t){for(var a=0,u=t.length;u>a;a++)t[a]();delete n[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=a[e];if(r)return r.exports;var t=i[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=a[e]={exports:{}};var n="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return n&&(r.exports=n),r.exports},require.async=function(r,t,n){function a(e){for(var r,t=0,n=e.length;n>t;t++){var u=require.alias(e[t]);u in s||(s[u]=!0,u in i?(r=o[u]||o[u+".js"],r&&"deps"in r&&a(r.deps)):(p.push(u),c++,r=o[u]||o[u+".js"],r&&"deps"in r&&a(r.deps)))}}function u(){if(0===c--){for(var n=[],i=0,a=r.length;a>i;i++)n[i]=require(r[i]);t&&t.apply(e,n)}}"string"==typeof r&&(r=[r]);var s={},c=0,p=[];a(r),l(p,u,n),u()},require.ensure=function(e,r){require.async(e,function(){r&&r.call(this,require)})},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(s[r]=t[r])},require.loadJs=function(e){if(!(e in u)){u[e]=!0;var r=document.createElement("script");r.type="text/javascript",r.src=e,t.appendChild(r)}},require.loadCss=function(e){if(e.content){var r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=e.content:r.innerHTML=e.content,t.appendChild(r)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",t.appendChild(n)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3,r.require=require,r.define=define,window.amis=r}}(this);
;/*!examples/index.jsx*/
define("ca626e1",function(e,t){"use strict";function d(e){n.render(l.default.createElement(u.default,null),e)}Object.defineProperty(t,"__esModule",{value:!0});var o=e("node_modules/tslib/tslib"),l=o.__importDefault(e("node_modules/react/index")),n=e("node_modules/react-dom/index"),u=o.__importDefault(e("135e0c7"));t.bootstrap=d});
;/*!examples/polyfills/Object.assign.ts*/
define("d89b1f2",function(){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},writable:!0,configurable:!0})});
;/*!examples/polyfills/Array.from.ts*/
define("804ccfd",function(){Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===r.call(n)},e=function(r){var n=Number(r);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,o=function(r){var n=e(r);return Math.min(Math.max(n,0),t)};return function(r){var e=this,t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,i=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof i){if(!n(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var u,f=o(t.length),c=n(e)?Object(new e(f)):new Array(f),h=0;f>h;)u=t[h],c[h]=i?"undefined"==typeof a?i(u,h):i.call(a,u,h):u,h+=1;return c.length=f,c}}())});
;/*!examples/polyfills/Array.find.ts*/
define("5982bcf",function(){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],i=0;t>i;){var o=e[i];if(r.call(n,o,i,e))return o;i++}return void 0},configurable:!0,writable:!0})});
;/*!examples/polyfills/cloest.ts*/
define("ba41ebe",function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})});
;/*!examples/polyfills/index.ts*/
define("835699d",function(e,d){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),e("d89b1f2"),e("804ccfd"),e("5982bcf"),e("ba41ebe"),e("node_modules/promise/polyfill"),e("node_modules/es6-symbol/implement")});
;/*!examples/embed.tsx*/
define("2ab197b",function(e,t){"use strict";function n(e,t,n,c){if("string"==typeof e&&(e=document.querySelector(e)),!e)return void console.error("选择器不对，页面上没有此元素");if("BODY"===e.tagName){var l=document.createElement("div");e.appendChild(l),e=l}e.classList.add("amis-scope");var f,p=function(e){e=e||"";var t=window.location;e&&"#"===e[0]?e=t.pathname+t.search+e:e&&"?"===e[0]&&(e=t.pathname+e);var n=e.indexOf("?"),r=e.indexOf("#"),o=~n?e.substring(0,n):~r?e.substring(0,r):e,a=~n?e.substring(n,~r?r:void 0):"",i=~r?e.substring(r):t.hash;if(o){if("/"!=o[0]&&!/^https?\:\/\//.test(o)){var s=t.pathname,u=s.split("/");u.pop();for(var d=void 0;d=/^\.\.?\//.exec(o);)"../"===d[0]&&u.pop(),o=o.substring(d[0].length);o=u.concat(o).join("/")}}else o=t.pathname;return o+a+i},m=function(e){return function(t){var n=t.data;if(c&&c.responseAdpater){var o=(e.url,e.url.indexOf("?")),a=~o?u.default.parse(e.url.substring(o)):{},i=r.__assign(r.__assign({},e),{query:a,body:e.data});n=c.responseAdpater(e,n,a,i)}else n.hasOwnProperty("errno")?(n.status=n.errno,n.msg=n.errmsg):n.hasOwnProperty("no")&&(n.status=n.no,n.msg=n.error);var s=r.__assign(r.__assign({},t),{data:n});return s}};return a.render(o.default.createElement("div",{className:"amis-routes-wrapper"},o.default.createElement(d.ToastComponent,{position:c&&c.toastPosition||"top-right",closeButton:!1,timeOut:5e3,extendedTimeOut:3e3}),o.default.createElement(d.AlertComponent,{container:e}),d.render(t,r.__assign(r.__assign({},n),{scopeRef:function(e){return f=e}}),r.__assign({getModalContainer:function(){return document.querySelector(".amis-scope")},notify:function(e,t){return d.toast[e]?d.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t)},alert:d.alert,confirm:d.confirm,updateLocation:function(e,t){return"goBack"===e?window.history.back():void(t||(location.href=p(e)))},isCurrentUrl:function(e){var t=p(e),n=window.location,r=t,o="",a=t.indexOf("?");if(~a&&(r=t.substring(0,a),o=t.substring(a)),o){if(r!==n.pathname||!n.search)return!1;var i=u.default.parse(o.substring(1)),s=u.default.parse(n.search.substring(1));return Object.keys(i).every(function(e){return i[e]===s[e]})}return r===n.pathname?!0:!1},jumpTo:function(e,t){return"goBack"===e?window.history.back():(e=p(e),t&&"url"===t.actionType?void(t.blank===!1?window.location.href=e:window.open(e)):void(/^https?:\/\//.test(e)?window.location.replace(e):location.href=e))},fetcher:function(e){var t=e.url,n=e.method,r=e.data,o=e.responseType,a=e.config,s=e.headers;return a=a||{},a.withCredentials=!0,o&&(a.responseType=o),a.cancelExecutor&&(a.cancelToken=new i.default.CancelToken(a.cancelExecutor)),a.headers=s||{},a.method=n,"get"===n&&r?a.params=r:r&&r instanceof FormData||!r||"string"==typeof r||r instanceof Blob||r instanceof ArrayBuffer||(r=JSON.stringify(r),a.headers["Content-Type"]="application/json"),r&&(a.data=r),i.default(t,a).then(m(e))},isCancel:function(e){return i.default.isCancel(e)},copy:function(e,t){void 0===t&&(t={});var n=s.default(e,t);return n&&t.shutup!==!0&&d.toast.info("内容已拷贝到剪切板"),n},richTextToken:"",affixOffsetBottom:0},c))),e),f}Object.defineProperty(t,"__esModule",{value:!0});var r=e("node_modules/tslib/tslib");e("835699d");var o=r.__importDefault(e("node_modules/react/index")),a=e("node_modules/react-dom/index"),i=r.__importDefault(e("node_modules/axios/index")),s=r.__importDefault(e("node_modules/copy-to-clipboard/index")),u=r.__importDefault(e("node_modules/qs/lib/index")),d=e("d019970");t.embed=n});
;/*!examples/loader.ts*/
define("3be4436",function(e){function o(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var s=o.shift();return s=Array.isArray(s)?s.map(function(e){return d[e]||e}):d[s]||s,o.unshift(s),e.apply(this,o)}var d={jquery:"node_modules/jquery/dist/jquery",react:"node_modules/react/index","react-dom":"node_modules/react-dom/index","react-addons-update":"node_modules/react-addons-update/index","immutability-helper":"node_modules/react-addons-update/index","react-cropper":"node_modules/react-cropper/dist/react-cropper","react-dropzone":"node_modules/react-dropzone/dist/index",classnames:"node_modules/classnames/index",axios:"node_modules/axios/index",moment:"node_modules/moment/moment",mobx:"node_modules/mobx/lib/mobx","mobx-state-tree":"node_modules/mobx-state-tree/dist/mobx-state-tree","react-transition-group":"node_modules/react-transition-group/index",echarts:"node_modules/echarts/index",zrender:"node_modules/zrender/index",sortablejs:"node_modules/sortablejs/Sortable",amis:"d019970","amis/embed":"2ab197b","prop-types":"node_modules/prop-types/index",async:"node_modules/async/dist/async",qs:"node_modules/qs/lib/index"};window.amisRequire=o});
;/*!src/components/RichText.tsx*/
define("1e5b785",function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=e("node_modules/tslib/tslib"),o=t.__importDefault(e("node_modules/react/index")),n=t.__importDefault(e("node_modules/jquery/dist/jquery"));[e("node_modules/froala-editor/js/froala_editor.min"),e("node_modules/froala-editor/js/plugins/align.min"),e("node_modules/froala-editor/js/plugins/char_counter.min"),e("node_modules/froala-editor/js/plugins/code_beautifier.min"),e("node_modules/froala-editor/js/plugins/code_view.min"),e("node_modules/froala-editor/js/plugins/colors.min"),e("node_modules/froala-editor/js/plugins/draggable.min"),e("node_modules/froala-editor/js/plugins/emoticons.min"),e("node_modules/froala-editor/js/plugins/entities.min"),e("node_modules/froala-editor/js/plugins/font_family.min"),e("node_modules/froala-editor/js/plugins/font_size.min"),e("node_modules/froala-editor/js/plugins/forms.min"),e("node_modules/froala-editor/js/plugins/fullscreen.min"),e("node_modules/froala-editor/js/plugins/help.min"),e("node_modules/froala-editor/js/plugins/image.min"),e("node_modules/froala-editor/js/plugins/image_manager.min"),e("node_modules/froala-editor/js/plugins/inline_class.min"),e("node_modules/froala-editor/js/plugins/inline_style.min"),e("node_modules/froala-editor/js/plugins/line_breaker.min"),e("node_modules/froala-editor/js/plugins/line_height.min"),e("node_modules/froala-editor/js/plugins/link.min"),e("node_modules/froala-editor/js/plugins/lists.min"),e("node_modules/froala-editor/js/plugins/paragraph_format.min"),e("node_modules/froala-editor/js/plugins/paragraph_style.min"),e("node_modules/froala-editor/js/plugins/print.min"),e("node_modules/froala-editor/js/plugins/quick_insert.min"),e("node_modules/froala-editor/js/plugins/quote.min"),e("node_modules/froala-editor/js/plugins/save.min"),e("node_modules/froala-editor/js/plugins/special_characters.min"),e("node_modules/froala-editor/js/plugins/table.min"),e("node_modules/froala-editor/js/plugins/url.min"),e("node_modules/froala-editor/js/plugins/video.min"),e("node_modules/froala-editor/js/plugins/word_paste.min")].forEach(function(e){return e()});var a=e("67d35e6"),l=function(e){function i(i){var t=e.call(this,i)||this;return t.listeningEvents=[],t.$element=null,t.$editor=null,t.config={immediateReactModelUpdate:!1,reactIgnoreAttrs:null},t.editorInitialized=!1,t.oldModel=null,t.textareaRef=t.textareaRef.bind(t),t}return t.__extends(i,e),i.prototype.componentDidUpdate=function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.setContent()},i.prototype.textareaRef=function(e){e?this.createEditor(e):this.destroyEditor()},i.prototype.createEditor=function(e){this.editorInitialized||(this.config=this.props.config||this.config,this.$element=n.default(e),this.setContent(!0),this.registerEvents(),a.resizeSensor(e.parentElement,function(){n.default(e).prev(".fr-box").find(".fr-toolbar").css("width","")},!0),this.$editor=this.$element.froalaEditor(this.config).data("froala.editor").$el,this.initListeners(),this.editorInitialized=!0)},i.prototype.setContent=function(e){void 0===e&&(e=!1),(this.editorInitialized||e)&&(this.props.model||""==this.props.model)&&(this.oldModel=this.props.model,this.setNormalTagContent(e))},i.prototype.setNormalTagContent=function(e){function i(){t.$element.froalaEditor("html.set",t.props.model||"",!0),t.$element.froalaEditor("undo.reset"),t.$element.froalaEditor("undo.saveStep")}var t=this;e?this.registerEvent(this.$element,"froalaEditor.initialized",i):i()},i.prototype.getEditor=function(){return this.$element?this.$element.froalaEditor.bind(this.$element):null},i.prototype.updateModel=function(){if(this.props.onModelChange){var e="",i=this.$element.froalaEditor("html.get");"string"==typeof i&&(e=i),this.oldModel=e,this.props.onModelChange(e)}},i.prototype.initListeners=function(){var e=this;this.registerEvent(this.$element,"froalaEditor.contentChanged",function(){e.updateModel()}),this.config.immediateReactModelUpdate&&this.registerEvent(this.$editor,"keyup",function(){e.updateModel()})},i.prototype.registerEvent=function(e,i,t){e&&i&&t&&(this.listeningEvents.push(i),e.on(i,t))},i.prototype.registerEvents=function(){var e=this.config.events;if(e)for(var i in e)e.hasOwnProperty(i)&&this.registerEvent(this.$element,i,e[i])},i.prototype.destroyEditor=function(){this.$element&&(this.listeningEvents&&this.$element.off(this.listeningEvents.join(" ")),this.$editor.off("keyup"),this.$element.froalaEditor("destroy"),this.listeningEvents.length=0,this.$element=null,this.editorInitialized=!1)},i.prototype.render=function(){return o.default.createElement("textarea",{ref:this.textareaRef})},i}(o.default.Component);i.default=l,n.default.FE.VIDEO_PROVIDERS=[{test_regex:/.*/,url_regex:"",url_text:"",html:'<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'}],n.default.FE.LANGUAGE.zh_cn={translation:{"Type something":"输入一些内容",Bold:"粗体",Italic:"斜体",Underline:"下划线",Strikethrough:"删除线",Insert:"插入",Delete:"删除",Cancel:"取消",OK:"确定",Back:"背部",Remove:"去掉",More:"更多",Update:"更新",Style:"风格","Font Family":"字体","Font Size":"字号",Colors:"颜色",Background:"背景",Text:"文字","Paragraph Format":"格式",Normal:"正常",Code:"代码","Heading 1":"标题1","Heading 2":"标题2","Heading 3":"标题3","Heading 4":"标题4","Paragraph Style":"段落样式","Inline Style":"内联样式",Align:"对齐方式","Align Left":"左对齐","Align Center":"居中","Align Right":"右对齐","Align Justify":"两端对齐",None:"无","Ordered List":"编号列表","Unordered List":"项目符号","Decrease Indent":"减少缩进","Increase Indent":"增加缩进","Insert Link":"插入链接","Open in new tab":"开启在新标签页","Open Link":"打开链接","Edit Link":"编辑链接",Unlink:"删除链接","Choose Link":"选择链接","Insert Image":"插入图片","Upload Image":"上传图片","By URL":"通过网址",Browse:"浏览","Drop image":"图像拖放","or click":"或点击","Manage Images":"管理图像",Loading:"载入中",Deleting:"删除",Tags:"标签","Are you sure? Image will be deleted.":"你确定吗？图像将被删除。",Replace:"更换",Uploading:"上传","Loading image":"导入图像",Display:"显示",Inline:"排队","Break Text":"断开文本","Alternate Text":"备用文本","Change Size":"尺寸变化",Width:"宽度",Height:"高度","Something went wrong. Please try again.":"出了些问题。 请再试一次。","Insert Video":"插入视频","Embedded Code":"嵌入式代码","Insert Table":"插入表格","Table Header":"表头","Remove Table":"删除表","Table Style":"表格样式","Horizontal Align":"水平对齐方式",Row:"行","Insert row above":"在上方插入","Insert row below":"在下方插入","Delete row":"删除行",Column:"列","Insert column before":"在左侧插入","Insert column after":"在右侧插入","Delete column":"删除列",Cell:"单元格","Merge cells":"合并单元格","Horizontal split":"水平分割","Vertical split":"垂直分割","Cell Background":"单元格背景","Vertical Align":"垂直对齐方式",Top:"最佳",Middle:"中间",Bottom:"底部","Align Top":"顶部对齐","Align Middle":"中间对齐","Align Bottom":"底部对齐","Cell Style":"单元格样式","Upload File":"上传文件","Drop file":"文件拖放",Emoticons:"表情","Grinning face":"脸上笑嘻嘻","Grinning face with smiling eyes":"","Face with tears of joy":"笑嘻嘻的脸，含笑的眼睛","Smiling face with open mouth":"笑脸张开嘴","Smiling face with open mouth and smiling eyes":"笑脸张开嘴微笑的眼睛","Smiling face with open mouth and cold sweat":"笑脸张开嘴，一身冷汗","Smiling face with open mouth and tightly-closed eyes":"笑脸张开嘴，紧紧闭着眼睛","Smiling face with halo":"笑脸晕","Smiling face with horns":"微笑的脸角","Winking face":"眨眼表情","Smiling face with smiling eyes":"面带微笑的眼睛","Face savoring delicious food":"面对品尝美味的食物","Relieved face":"面对如释重负","Smiling face with heart-shaped eyes":"微笑的脸，心脏形的眼睛","Smiling face with sunglasses":"笑脸太阳镜","Smirking face":"面对面带笑容","Neutral face":"中性面","Expressionless face":"面无表情","Unamused face":"一脸不快的脸","Face with cold sweat":"面对冷汗","Pensive face":"沉思的脸","Confused face":"面对困惑","Confounded face":"该死的脸","Kissing face":"面对接吻","Face throwing a kiss":"面对投掷一个吻","Kissing face with smiling eyes":"接吻脸，含笑的眼睛","Kissing face with closed eyes":"接吻的脸闭着眼睛","Face with stuck out tongue":"面对伸出舌头","Face with stuck out tongue and winking eye":"面对伸出舌头和眨动的眼睛","Face with stuck out tongue and tightly-closed eyes":"面对伸出舌头和紧闭的眼睛","Disappointed face":"面对失望","Worried face":"面对担心","Angry face":"愤怒的脸","Pouting face":"面对噘嘴","Crying face":"哭泣的脸","Persevering face":"怎奈脸","Face with look of triumph":"面带看的胜利","Disappointed but relieved face":"失望，但脸上释然","Frowning face with open mouth":"面对皱着眉头张口","Anguished face":"面对痛苦","Fearful face":"可怕的脸","Weary face":"面对厌倦","Sleepy face":"面对困","Tired face":"疲惫的脸","Grimacing face":"狰狞的脸","Loudly crying face":"大声哭脸","Face with open mouth":"面对张开嘴","Hushed face":"安静的脸","Face with open mouth and cold sweat":"","Face screaming in fear":"面对张开嘴，一身冷汗","Astonished face":"面对惊讶","Flushed face":"红扑扑的脸蛋","Sleeping face":"熟睡的脸","Dizzy face":"面对眩","Face without mouth":"脸上没有嘴","Face with medical mask":"面对医疗口罩",Break:"破",Subscript:"下标",Superscript:"上标",Fullscreen:"全屏","Insert Horizontal Line":"插入水平线","Clear Formatting":"格式化删除",Undo:"撤消",Redo:"重复","Select All":"全选","Code View":"代码视图",Quote:"引用",Increase:"增加引用",Decrease:"删除引用","Quick Insert":"快插"},direction:"ltr"}});
;/*!examples/components/Play.jsx*/
define("9b1667d",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("node_modules/tslib/tslib"),n=o.__importDefault(e("node_modules/react/index")),a=e("6ae88e0"),s=e("d019970"),i=o.__importDefault(e("node_modules/axios/index")),r=o.__importDefault(e("node_modules/react-frame-component/lib/index")),d=o.__importDefault(e("node_modules/strip-json-comments/index")),l=o.__importDefault(e("997c87d")),u='{\n    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",\n    "type": "page",\n    "title": "Title",\n    "body": "Body",\n    "aside": "Aside",\n    "toolbar": "Toolbar"\n}',h={none:"",body:'{\n        "type": "page",\n        "body": SCHEMA_PLACEHOLDER\n    }',form:'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "autoFocus": false,\n            "api": "https://houtai.baidu.com/api/mock2/saveForm?waitSeconds=1",\n            "mode": "horizontal",\n            "controls": SCHEMA_PLACEHOLDER,\n            "submitText": null,\n            "actions": []\n        }\n    }',"form-item":'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "mode": "horizontal",\n            "autoFocus": false,\n            "controls": [\n                SCHEMA_PLACEHOLDER\n            ],\n            "submitText": null,\n            "actions": []\n        }\n    }'},c=function(e){function t(t){var n=e.call(this,t)||this;n.state=null,n.startX=0,n.oldContents="";var s=n.buildSchema(t.code||u,t);n.state={asideWidth:t.asideWidth||Math.max(300,.3*window.innerWidth),schema:s,schemaCode:JSON.stringify(s,null,2)},n.handleMouseDown=n.handleMouseDown.bind(n),n.handleMouseMove=n.handleMouseMove.bind(n),n.handleMouseUp=n.handleMouseUp.bind(n),n.removeWindowEvents=n.removeWindowEvents.bind(n),n.handleChange=n.handleChange.bind(n),n.schemaProps={style:{height:"100%"}},n.env={updateLocation:function(){},fetcher:function(e){return e=o.__assign({dataType:"json"},e),"json"===e.dataType&&e.data&&(e.data=JSON.stringify(e.data),e.headers=e.headers||{},e.headers["Content-Type"]="application/json"),i.default[e.method](e.url,e.data,e)},notify:function(e,t){return a.toast[e]?a.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t)}};var r=[].slice.call(document.head.querySelectorAll("link,style")).map(function(e){return e.outerHTML});return n.frameTemplate="<!DOCTYPE html><html><head>"+r.join("")+"</head><body><div></div></body></html>",n}return o.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this.props;if(t.code!==e.code){var o=this.buildSchema(e.code||u,e);this.setState({schema:o,schemaCode:JSON.stringify(o,null,2)})}},t.prototype.componentDidMount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!0)},t.prototype.componentWillUnmount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!1)},t.prototype.buildSchema=function(e,t){void 0===t&&(t=this.props);var o=t.location.query;try{var n=o.scope||t.scope;return n&&h[n]&&(e=h[n].replace("SCHEMA_PLACEHOLDER",e)),e=d.default(e).replace(/('|")raw:/g,"$1"),JSON.parse(e)}catch(a){console.error(this.formatMessage(a.message,e))}return{}},t.prototype.formatMessage=function(e,t){if(/position\s?(\d+)$/.test(e)){var o=t.substring(0,parseInt(RegExp.$1,10)).split(/\n|\r\n|\r/);e="Json 语法错误，请检测。出错位置："+o.length+"，列："+o[o.length-1].length+"。"}return e},t.prototype.renderPreview=function(){var e=this.state.schema;return this.props.useIFrame?n.default.createElement(r.default,{width:"100%",height:"100%",frameBorder:0,initialContent:this.frameTemplate},s.render(e,this.schemaProps,this.env)):s.render(e,this.schemaProps,this.env)},t.prototype.handleChange=function(e){this.setState({schemaCode:e});try{var t=JSON.parse(e);this.setState({schema:t})}catch(o){}},t.prototype.handleMouseDown=function(e){return this.startX=e.clientX,this.startWidth=this.state.asideWidth,window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),!1},t.prototype.handleMouseMove=function(e){var t=this.startX-e.clientX;e.preventDefault(),this.setState({asideWidth:Math.min(800,Math.max(200,this.startWidth+t))})},t.prototype.handleMouseUp=function(){this.removeWindowEvents()},t.prototype.removeWindowEvents=function(){window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)},t.prototype.renderEditor=function(){return n.default.createElement(l.default,{value:this.state.schemaCode,onChange:this.handleChange,language:"json"})},t.prototype.render=function(){var e=this.props.vertical;return e?n.default.createElement("div",{className:"vbox"},n.default.createElement("div",{className:"row-row"},n.default.createElement("div",{className:"cell pos-rlt"},n.default.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview()))),n.default.createElement("div",{className:"row-row",style:{height:200}},n.default.createElement("div",{className:"cell"},this.renderEditor()))):n.default.createElement("div",{style:{position:"absolute",top:50,bottom:0}},n.default.createElement("div",{className:"hbox"},n.default.createElement("div",{className:"col pos-rlt"},n.default.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview())),n.default.createElement("div",{className:"col bg-light lter b-l bg-auto pos-rlt",style:{width:this.state.asideWidth}},n.default.createElement("div",{className:"resizer",onMouseDown:this.handleMouseDown}),this.renderEditor())))},t.defaultProps={useIFrame:!1,vertical:!1},t}(n.default.Component);t.default=c});