/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function OptionsController(){"use strict";function a(){var a={};for(var b in y)y[b].forEach(function(b){a[b]=!1});Browser.sendToExtension({name:"main_getConfig",options:a,returnName:"options_config"})}function b(a){if(a.options){GlobalUtils.localize(document.body),GlobalUtils.localize(document.getElementsByTagName("title")[0]);for(var b in y)switch(b){case"checkboxValues":y[b].forEach(function(b){var c=b,d=document.getElementById(c);d.checked=a.options[c],"enableKeyboardShortcuts"==c&&(d.checked||document.getElementById("shortcutsContainer").classList.add("disabled")),d.addEventListener("change",e)});break;case"selectValues":y[b].forEach(function(b){var c=b,d=document.getElementById(c);if("startNotebook"===c)C&&(I=a.options[c],Browser.sendToExtension({name:"getNotebooks",page:"op"}));else for(var e=a.options[c],g=0;g<d.options.length;g++)if(d.options[g].value==e){d.selectedIndex=g;break}d.addEventListener("change",f)});break;case"textValues":y[b].forEach(function(b){var c=b,d=document.getElementById(c);d.value=a.options[c],d.addEventListener("change",g)});break;case"radioValues":y[b].forEach(function(b){var c=b;"notebookSelection"===c&&"smartFiling"===a.options[c]&&C&&C.bizAuthenticationToken&&(document.getElementById("bizSmartFilingCheckbox").style.display="block");for(var d=document.getElementsByName(c),e=0;e<d.length;e++)d.item(e).value==a.options[c]&&(d.item(e).checked=!0),d.item(e).addEventListener("change",h)})}d(a),l()}}function c(a,b,c){var e=[],f=[],g=[];for(var h in a.options)a.options[h]!==z[h]&&(e.push(z[h]),f.push(a.options[h]),g.push(h));d(a),Browser.sendToExtension({name:"bounceToAll",message:{name:"updateKeyboardShortcut",oldShortcut:e,shortcut:f,shortcutName:g}})}function d(a){z={},A={},B={},y.shortcutValues.forEach(function(b){var c=b,d=document.getElementById(c);z[c]=a.options[c],A[a.options[c]]=c;var e=new ShortcutSetter(d,a.options[c],"optionsPage",function(a,b){var c=a.id;if(A[b])return A[b]==c?!1:(v=B[A[b]],v.showConflict(),{conflict:!0});if(/(\||^)27(\||$)/.test(b)&&"closeWebClipperShortcut"!==c)return{noEsc:!0};i();var d={};return d[c]=b,console.log("Sending options change:"),console.log(d),Browser.sendToExtension({name:"main_setOption",options:d}),Browser.sendToExtension({name:"bounceToAll",message:{name:"updateKeyboardShortcut",oldShortcut:z[c],shortcut:b,shortcutName:c}}),delete A[z[c]],A[b]=c,z[c]=b,!1},function(){return t?!0:(t=!0,!1)},function(){v&&(v.removeConflict(),v=null)},function(){return document.getElementById("shortcutsContainer").classList.contains("disabled")},function(a){return x[a]});B[c]=e})}function e(a){var b=this.id;if(b){i();var c={};c[b]=this.checked,"enableKeyboardShortcuts"==b&&(this.checked?document.getElementById("shortcutsContainer").classList.remove("disabled"):document.getElementById("shortcutsContainer").classList.add("disabled"),Browser.sendToExtension({name:"bounceToAll",message:{name:"receiveKeyboardShortcutsEnabled",keyboardShortcutsEnabled:this.checked}})),Browser.sendToExtension({name:"main_setOption",options:c})}l()}function f(a){var b=this.id;if(b){i();var c={};c[b]=this.options[this.selectedIndex].value,Browser.sendToExtension({name:"main_setOption",options:c})}l()}function g(a){var b=this.id;if(b){i();var c={};c[b]=this.value,console.log("Sending options change:"),console.log(c),Browser.sendToExtension({name:"main_setOption",options:c})}l()}function h(){var a=this.name;if(a){i();var b={};b[a]=this.value,"notebookSelection"==a&&("smartFiling"===this.value&&C&&C.bizAuthenticationToken?document.getElementById("bizSmartFilingCheckbox").style.display="block":(document.getElementById("bizSmartFilingCheckbox").style.display="","alwaysStartIn"===this.value&&f.call(document.getElementById("startNotebook")))),Browser.sendToExtension({name:"main_setOption",options:b})}l()}function i(){window.setTimeout(function(){document.querySelector("#savingContainer").className="invisible"},500),document.querySelector("#savingContainer").className="visible"}function j(a){event.keyCode==E[F]?F++:F=0,F==E.length&&(F=0,"none"==document.getElementById(G).style.display?document.getElementById(G).style.display="table-row-group":document.getElementById(G).style.display="none",l())}function k(b){b&&b.auth&&(C=b.auth,D=b.saveToEvernote,document.body.classList.add("loggedIn"),document.getElementById("username").innerText=C.email,D&&(document.getElementById("options_showSaveToEvernote").style.display="table-row")),a()}function l(){var a=document.getElementById("optionsContainer"),b=a.scrollHeight;document.getElementsByClassName("pinch")[0].style.height=b+"px",Browser.sendToExtension({name:"bounce",message:{name:"setOptionsHeight",height:266+b}})}function m(a,b){u&&["INPUT","TEXTAREA"].indexOf(b.nodeName)<0&&"true"!==b.contentEditable&&Browser.sendToExtension({name:"bounce",message:{name:"duplicateKeyboardShortcut",keycode:a}})}function n(a,b){["INPUT","TEXTAREA"].indexOf(b.nodeName)<0&&"true"!==b.contentEditable&&Browser.sendToExtension({name:"bounce",message:{name:"duplicateKeyboardShortcut",keycode:a}})}function o(a,b,c){"charCodeCache"==a.key?(x=a.value||{},Browser.sendToExtension({name:"main_isAuthenticated",type:"options"})):"isDevelopOptionsEnable"===a.key&&"true"===a.value&&("none"==document.getElementById(G).style.display?document.getElementById(G).style.display="table-row-group":document.getElementById(G).style.display="none",Browser.sendToExtension({name:"setPersistentValue",key:"isDevelopOptionsEnable",value:"false"}),l())}function p(){Browser.sendToExtension({name:"bounceToAll",message:{name:"hideOptions",authed:!1}}),Browser.sendToExtension({name:"main_restart"})}function q(a,b,c){if(u=a.enabled,a.handlers){var d={};for(var e in a.handlers)for(var f=0;f<a.handlers[e].length;f++)"closeWebClipperShortcut"===e?d[a.handlers[e][f]]=n:d[a.handlers[e][f]]=m;Browser.addKeyboardHandlers(d)}}function r(a,b,c){document.getElementsByClassName("pinch")[0].style.height=a.totalHeight-266+"px"}function s(a,b,c){function d(a){return"OPTION"===a.nodeName?a.innerText:"OPTGROUP"===a.nodeName?a.label:void 0}for(var e=document.getElementById("startNotebook"),f=0;f<a.notebooks.length;f++){var g=document.createElement("option");g.text=a.notebooks[f].name,a.notebooks[f].owner&&(g.text+=" ("+a.notebooks[f].owner+")"),g.value=a.notebooks[f].guid,a.notebooks[f].stack?(H[a.notebooks[f].stack]||(H[a.notebooks[f].stack]=document.createElement("optgroup"),H[a.notebooks[f].stack].label=a.notebooks[f].stack,CommonSelector.binaryInsert(e,d,H[a.notebooks[f].stack])),CommonSelector.binaryInsert(H[a.notebooks[f].stack],d,g)):CommonSelector.binaryInsert(e,d,g),a.notebooks[f].defaultNotebook&&(J=g),I&&I===a.notebooks[f].guid&&(g.selected=!0,K=!0)}J&&!K&&(J.selected=!0)}var t=!1,u=!0;window.addEventListener("DOMContentLoaded",function(){document.getElementById("signOut").addEventListener("click",function(){Browser.sendToExtension({name:"LOGOUT"}),Browser.sendToExtension({name:"trackEvent",category:"Account",action:"sign_out",endSession:!0})}),document.getElementById("resetShortcuts").addEventListener("click",function(){i(),Browser.sendToExtension({name:"main_clearOptions",options:y,type:"shortcutValues"})}),document.getElementById("resetAllOptions").addEventListener("click",function(){confirm("Warning. This action will delete all persistent clipper data on this browser.")===!0?(log.log("Reset all options"),i(),log.log("Clean all local storage"),Persistent.clearAll(),Browser.sendToExtension({name:"clearPersistent"}),Browser.sendToExtension({name:"main_clearOptions",options:y,type:"all"}),Browser.sendToExtension({name:"LOGOUT"})):log.log("Cancel to reset all options")}),document.getElementById("done").addEventListener("click",function(){Browser.sendToExtension({name:"bounce",message:{name:"hideOptions",authed:!!C}})}),Browser.sendToExtension({name:"getPersistentValue",key:"charCodeCache"}),Browser.sendToExtension({name:"getPersistentValue",key:"isDevelopOptionsEnable"})}),Browser.addMessageHandlers({logoutCallback:p,options_config:b,options_isAuthenticated:k,optionsShortcutCleared:c,op_receivePersonalNotebooks:s,op_receiveSharedNotebooks:s,op_receiveBusinessNotebooks:s,op_setKeyboardHandlers:q,op_setPinchHeight:r,receivePersistentValue:o});var v,w,x,y={checkboxValues:["smartFilingTags","alwaysTagWith","useSearchHelper","enablePdfPageButton","saveToEvernote","simulateSimplifiedChinese","useStage","enableKeyboardShortcuts","bizSmartFilingEnabled"],selectValues:["startNotebook","clipAction"],textValues:["alwaysTags","insecureProto","secureProto","overrideServiceURL"],radioValues:["notebookSelection","defaultClipAction","afterClip","simulateClippingError"],shortcutValues:["startWebClipperShortcut","closeWebClipperShortcut","previewArticleShortcut","previewFullPageShortcut","previewUrlShortcut","selectionModeShortcut","takeScreenshotShortcut","clearlyShortcut","pdfShortcut","emailShortcut","expandArticleShortcut","contractArticleShortcut","moveArticleUpShortcut","moveArticleDownShortcut","selectNotebookShortcut","addTagsShortcut","saveShortcut","minimizeClipperShortcut","selectAllMarkupShortcut","arrowShortcut","textShortcut","rectangleShortcut","roundedRectangleShortcut","ellipseShortcut","lineShortcut","markerShortcut","highlighterShortcut","stampShortcut","pixelateShortcut","cropShortcut","zoomInShortcut","zoomOutShortcut","zoomToFitShortcut","zoomToOriginalShortcut","undoShortcut","redoShortcut"]},z={},A={},B={},C=null,D=!1;window.addEventListener("keydown",function(a){x&&(a.keyCode<65||a.keyCode>90)&&(w=a.keyCode)},!0),window.addEventListener("keypress",function(a){x&&w&&(w!=a.charCode&&(x[w]=a.charCode,Browser.sendToExtension({name:"setPersistentValue",key:"charCodeCache",value:x})),w=null)}),window.addEventListener("keydown",j);var E=[38,38,40,40,37,39,37,39,66,65],F=0,G="developerContainer",H={},I=null,J=null,K=!1;Object.preventExtensions(this)}Object.preventExtensions(OptionsController);var optionsController=new OptionsController;window.addEventListener("DOMContentLoaded",function(){function a(a){if(a.bootstrapInfo&&a.bootstrapInfo.name){a.bootstrapInfo.name.match(/china/i)&&document.body.classList.add("china");var b="https://"+a.bootstrapInfo.serviceHost;document.getElementById("copyright").innerHTML=Browser.i18n.getMessage("copyright",[(new Date).getFullYear(),b]),document.getElementById("logDescription").innerHTML=Browser.i18n.getMessage("options_eventLogDescription",[b+"/privacy"]);for(var c=document.getElementsByClassName("tab"),d=0;d<c.length;d++)c.item(d).addEventListener("click",function(){var a=document.querySelector(".tab.pressed");a&&(a.className=a.className.replace(/\s*pressed/g,""));var b=document.querySelector(".pinch");b.className=b.className.replace(/\s*(options|shortcuts|legal)/g,""),this.className+=" pressed","optionsTab"==this.id?b.className+=" options":"shortcutsTab"==this.id?b.className+=" shortcuts":"legalTab"==this.id&&(b.className+=" legal")});/shortcuts/.test(document.location.hash)&&document.getElementById("shortcutsTab").click()}}function b(a,b,c){"EVERNOTE_VERSION"==a.key&&(document.getElementById("version").innerText=a.value+" ("+BUILD_VERSION+"/"+SKITCH_BUILD_VERSION+")")}SAFARI&&document.body.classList.add("safari"),/iframe/.test(document.location.hash)&&document.body.classList.add("iframe"),Browser.addMessageHandlers({options_config:a,receivePersistentValue:b}),Browser.sendToExtension({name:"main_getConfig",bootstrapInfo:{name:null,serviceHost:null},returnName:"options_config"}),Browser.sendToExtension({name:"getPersistentValue",key:"EVERNOTE_VERSION"})}),window.addEventListener("error",function(a){log.error(JSON.stringify(a))});