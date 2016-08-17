/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function ShortcutSetter(a,b,c,d,e,f,g,h){"use strict";function i(){a.addEventListener("focus",function(){g()||e()||s("setShortcutInstruction",!0)}),a.parentNode.addEventListener("webkitAnimationEnd",function(){n()})}function j(){a.addEventListener("mousemove",function(){clearTimeout(u),u=setTimeout(function(){v&&v.parentNode||s("shortcutReleaseNotesTooltip",!1)},500)}),a.addEventListener("mouseout",function(){clearTimeout(u),n()})}function k(){a.parentNode.classList.remove("error")}function l(a){for(var b=a.split("|"),c=0;c<b.length;c++)z.push(parseInt(b[c])),y.push(o(z[c]));t(),p()}function m(){k(),n()}function n(){clearTimeout(u),a.parentNode.classList.remove("shortcutTooltip","vanish"),a.parentNode.removeAttribute("tooltip"),v&&v.parentNode&&v.parentNode.removeChild(v)}function o(a){return x[a]?x[a]:h(a)?String.fromCharCode(h(a)):String.fromCharCode(a)}function p(){y=[],z=[]}function q(){r(),s("shortcutConflict",!1)}function r(){a.parentNode.classList.add("error")}function s(b,c){a.parentNode.classList.add("shortcutTooltip"),a.parentNode.setAttribute("tooltip",Browser.i18n.getMessage(b)),v=document.createElement("style");var d=window.getComputedStyle(a.parentNode,":after"),e=parseInt(d.height)+parseInt(d.paddingTop)+parseInt(d.paddingBottom);v.innerText=".shortcutTooltip:before { top: "+(a.offsetTop+7)+"px; } .shortcutTooltip:after { top: "+(a.offsetTop-(e-26)/2)+"px; }",document.head.appendChild(v),c&&(u=setTimeout(function(){a.parentNode.classList.add("vanish")},3e3))}function t(){var b=y.indexOf("CTRL");b>-1&&(y[b]=y[0],y[0]="CTRL");var c=y.indexOf("CMD");c>-1&&(y[c]=y[b>-1?1:0],y[b>-1?1:0]="CMD");var d=y.indexOf("ALT");if(d>-1){var e=(b>-1?1:0)+(c>-1?1:0);y[d]=y[e],y[e]="ALT"}var f=y.indexOf("SHIFT");if(f>-1){var e=(b>-1?1:0)+(c>-1?1:0)+(d>-1?1:0);y[f]=y[e],y[e]="SHIFT"}a.value=y.join(" + ")}var u,v,w={9:"Tab"},x={8:"DEL",13:"Enter",16:"SHIFT",17:"CTRL",18:"ALT",27:"ESC",32:"SPACE",37:"\u21e6",38:"\u21e7",39:"\u21e8",40:"\u21e9",91:/mac/i.test(window.navigator.userAgent)?"CMD":"CTRL",93:"CMD",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",124:"F13",125:"F14",126:"F15",127:"F16",128:"F17",129:"F18",130:"F19"},y=[],z=[],A=b;l(b),this.removeConflict=m,this.showConflict=q;var B=document.getElementById("markupShortcutsHeader");B&&B.compareDocumentPosition(a)===a.DOCUMENT_POSITION_FOLLOWING||(a.addEventListener("blur",function(){m(),f()}),a.addEventListener("click",function(){g()||this.select()}),a.addEventListener("keyup",function(){if(z.length>0){var a,b;z.length>3?a={tooLong:!0}:(b=z.sort(function(a,b){return a>b?1:b>a?-1:0}).join("|"),a=d(this,b)),p(),n(),a?(l(A),a.conflict?q():a.tooLong?(r(),s("shortcutLengthError",!1)):a.noEsc&&(r(),s("shortcutNoEsc",!1))):(A=b,this.blur())}}),a.addEventListener("keydown",function(a){if(!g()){m(),f();var b=a.which||a.keyCode||a.charCode;if(!w[b]){var c=o(b);c&&y.indexOf(c)<0&&(y.push(c),z.push(93==b?91:b),t()),(a.metaKey||a.ctrlKey||x[b])&&a.preventDefault()}a.stopPropagation()}}),a.addEventListener("keypress",function(a){g()||z.length>0&&(z[z.length-1]<65||z[z.length-1]>90)&&(y[y.length-1]=o(a.charCode),t())}),"optionsPage"===c?i():"releaseNotes"===c&&j(),Object.preventExtensions(this))}Object.preventExtensions(ShortcutSetter);