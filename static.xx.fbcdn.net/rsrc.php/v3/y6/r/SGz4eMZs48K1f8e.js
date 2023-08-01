;/*FB_PKG_DELIM*/

__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){a="DesktopHScrollUnit/itemInserted";b="DesktopHScrollUnit/itemShown";c="DesktopHScrollUnit/HideIndividualItem";d="DesktopHScrollUnit/scrollItemBeforeXout";e="DesktopHScrollUnit/unhideIndividualItem";var g="logLastAdXout",h="onXoutIndividualItem";f.HSCROLL_ITEM_INSERTED_EVENT=a;f.HSCROLL_ITEM_SHOWN_EVENT=b;f.HSCROLL_ITEM_HIDE_EVENT=c;f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT=d;f.HSCROLL_ITEM_UNHIDE_EVENT=e;f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN=g;f.HSCROLL_PAGER_ITEM_HIDE_EVENT=h}),66);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g,h){"use strict";var i=new Map();function a(a){var b=j(a.nodeID);if(!b)return;var d=c("DOM").scry(b,"._5v9_"),e=d&&d.length?d:[b];a.actorIDs.forEach(function(a){var b=[].concat(i.get(a)||[]);b.push.apply(b,e);i.set(a,b)})}function b(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){if(a===b)return;d("CSS").hide(a)})}function e(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){d("CSS").show(a)});b&&d("Focus").setWithoutOutline(b)}function j(a){a=c("ge")(a);return a?d("EntstreamFeedObject").getRoot(a):null}g.register=a;g.hideAllFromActor=b;g.unhideAllFromActor=e;g.getRoot=j}),98);
__d("getCentralImpressionScrollSpeed",["Event"],(function(a,b,c,d,e,f){"use strict";var g=0,h=Date.now(),i=null,j=null;function a(a){b("Event").listen(window,"scroll",function(){j&&clearTimeout(j),j=setTimeout(function(){return a()},100)},b("Event").Priority.NORMAL,{passive:!0})}function k(){var a=window.scrollY,b=Date.now();if(i!=null&&b!==h){var c=a-i;g=c/(b-h)*1e3}i=a;h=b}a(function(){g=0,i=null});b("Event").listen(window,"scroll",function(){return k()},b("Event").Priority.NORMAL,{passive:!0});e.exports=function(){return g}}),null);
__d("getCentralImpressionTimeAfterRefresh",[],(function(a,b,c,d,e,f){"use strict";var g=null;window.addEventListener("load",function(){g=Date.now()},{passive:!0});function a(){return g!=null?Date.now()-g:0}f["default"]=a}),66);
__d("GHLBox",["FBLogger","GhlTennisKnobsConfig","Promise","WebStorage","gkx","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("json-bigint").__setRef("GHLBox"),i=atob("YXJlc19sYXN0X3NpZ25hbF9mbHVzaA=="),j=atob("YmR6X3BsYXliYWNrX3N0YXRl"),k=36,l=c("gkx")("3499"),m=c("GhlTennisKnobsConfig").ghlbox_log_validity_in_mins*60*1e3,n=c("GhlTennisKnobsConfig").ghlbox_initialize_in_mins*60*1e3;a=3;d=function(){return new(b("Promise"))(function(a){h.onReady(function(b){var c=o(b,!0);b=o(b);if(c===0&&b===0)return a(!1);if(c!==b){p(Date.now());return a(!0)}return Date.now()-b<=m?a(!0):a(!1)})})};var o=function(a,b){b===void 0&&(b=!1);var d=c("WebStorage").getLocalStorageForRead();if(!d||!l)return 0;var e;if(!b){b=(b=d.getItem(i))!=null?b:"";e=Number.parseInt(b,10)}else{b=(d=(a=a.parse(d.getItem(j)))==null?void 0:a.session_key)!=null?d:"";e=Number.parseInt(b,k)}return!Number.isFinite(e)?0:e};e=function(){var a=c("WebStorage").getLocalStorage();if(!a||!l)return;if(a.getItem(i)!==null)return;if(a.getItem(j)!==null)return;p(Date.now()-n)};var p=function(a){h.onReady(function(b){var d=c("WebStorage").getLocalStorage();if(d&&l){var e=a.toString();try{d.setItem(i,e)}catch(a){c("FBLogger")("GHLBox").warn("Exception while writing to local storage exception: %s, tss: %s, tss.length: (%d)",a,e,e.length)}e={session_key:a.toString(k),buffer_length:60};d.setItem(j,b.stringify(e))}})};f=p;d=d;e=e;g.MinimumHiddenAdsToUpdateLocalStorage=a;g.s=f;g.r=d;g.i=e}),98);
__d("ghlTestUBT",["cr:1543261","cr:334"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1543261")&&b("cr:1543261")(),g["default"]=b("cr:334")}),98);
__d("ghlInternalBumpODSKey",["ODS"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return d("ODS").bumpEntityKey(2966,"feed_ads",a+"."+b)}g["default"]=a}),98);
__d("ghlTestUBTFacebook",["ConstUriUtils","GHLBox","Promise","cr:1088657","ghlInternalBumpODSKey","promiseDone","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=function(a){a=d("ConstUriUtils").getUri(a);if(a==null)throw c("unrecoverableViolation")("URI cannot be null in ghlTestUBTFacebook.","ad_blocker_defense_ghost_owl");return a},i=function(a){return new(b("Promise"))(function(b){var c=window.atob,d=document.body;if(c==null||d==null){b(!1);return}var e=document.createElement("div");e.className=a.map(c).join(" ");d.appendChild(e);c=l(e);if(c&&c.MozBinding&&c.MozBinding.startsWith("url")){setTimeout(function(){return b(e.clientWidth===0)},5e3);return}b((c==null?void 0:c.display)==="none")})},j=function(){return new(b("Promise"))(function(a){var b=document.body;if(b==null){a(!1);return}var c=document.createElement("img");c.setAttribute("alt","");b.appendChild(c);c.onload=function(){var b=l(c);a((b==null?void 0:b.display)==="none");c.parentNode&&c.parentNode.removeChild(c)};c.onerror=function(){a(!0),c.parentNode&&c.parentNode.removeChild(c)};c.src=h("../../scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()})},k=null;a=function(a){k==null&&(p("init"),k=new(b("Promise"))(function(a){return c("promiseDone")(b("Promise").all([i(m),j(),i([n(o)]),d("GHLBox").r()]),function(b){var c=b[0],e=b[1],f=b[2];b=b[3];p("done",c,e,f);c=c||e||f;c?d("GHLBox").s(Date.now()):d("GHLBox").i();a([c,b])})})),c("promiseDone")(k,function(b){return a(b[0],b[1])}),b("cr:1088657")&&b("cr:1088657").i()};var l=function(a){return window.getComputedStyle(a)},m=["QWRCb3g=","QWQ=","YWR2ZXJ0","cG9zdC1hZHM="],n=function(a){return a[Math.floor(Math.random()*a.length)]},o=["UmVjdGFuZ2xlQWQ=","YWR2ZXJ0aXNpbmdfd2lkZ2V0","ZG93bmxvYWRfbGlua19zcG9uc29yZWQ=","c3BvbnNvclBvc3Q=","d2lkZ2V0U3BvbnNvcnM=","b2ItaG92ZXI=","ZGZwX3VuaXQ="],p=function(){for(var a=arguments.length,b=new Array(a),d=0;d<a;d++)b[d]=arguments[d];return c("ghlInternalBumpODSKey")("ghlTestUBT",String(b.join(".")))};e=a;g["default"]=e}),98);
__d("CometMetricsChannel2ViewabilityFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1960868");b=d("FalcoLoggerInternal").create("comet_metrics_channel2_viewability",a);e=b;g["default"]=e}),98);
__d("PercentVisible",[],(function(a,b,c,d,e,f){a=-1;b=0;c=50;d=100;f.NO_VISIBLE=a;f.VISIBLE_0_PCT=b;f.VISIBLE_50_PCT=c;f.VISIBLE_100_PCT=d}),66);