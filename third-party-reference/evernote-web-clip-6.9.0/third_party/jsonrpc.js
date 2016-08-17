/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function toJSON(a){function b(){for(var a;d;)a=d[f].prev,delete d[f],d=a}function c(a,i,j){var k,l,m,n,o,p=[];if(null===a||void 0===a)return"null";if("string"==typeof a)return escapeJSONString(a);if("number"==typeof a)return a.toString();if("boolean"==typeof a)return a.toString();if(a[f]){for(k=[j],m=i;m;)l&&l.unshift(m[f].ref),m===a&&(n=m,l=[n[f].ref]),k.unshift(m[f].ref),m=m[f].parent;if(n){if(JSONRpcClient.fixupCircRefs)return k.shift(),l.shift(),g.push([k,l]),h;throw b(),new Error("circular reference detected!")}if(JSONRpcClient.fixupDuplicates){for(l=[a[f].ref],m=a[f].parent;m;)l.unshift(m[f].ref),m=m[f].parent;return k.shift(),l.shift(),g.push([k,l]),h}}else a[f]={parent:i,prev:d,ref:j},d=a;if(a.constructor===Date)return a.javaClass?'{javaClass: "'+a.javaClass+'", time: '+a.valueOf()+"}":'{javaClass: "java.util.Date", time: '+a.valueOf()+"}";if(a.constructor===Array||"[object Array]"===Object.prototype.toString.call(a)){for(o=0;o<a.length;o++)e=c(a[o],a,o),p.push(e===h?null:e);return"["+p.join(", ")+"]"}for(var q in a)q===f||(null===a[q]||void 0===a[q]?p.push('"'+q+'": null'):"function"==typeof a[q]||(e=c(a[q],a,q),e!==h&&p.push(escapeJSONString(q)+": "+e)));return"{"+p.join(", ")+"}"}var d,e,f="$_$jabsorbed$813492",g=[],h={};return e=c(a,null,"root"),b(),g.length?{json:e,fixups:g}:{json:e}}function JSONRpcClient(){var a,b,c,d=0,e=typeof arguments[0],f=!0;"function"===e?(this.readyCB=arguments[0],d++):arguments[0]&&"object"===e&&arguments[0].length&&(this._addMethods(arguments[0]),d++,f=!1),this.serverURL=arguments[d],this.user=arguments[d+1],this.pass=arguments[d+2],this.objectID=0,f&&(this._addMethods(["system.listMethods"]),a=JSONRpcClient._makeRequest(this,"system.listMethods",[]),this.readyCB&&(c=this,a.cb=function(a,b){b||c._addMethods(a),c.readyCB(a,b)}),this.readyCB?(JSONRpcClient.async_requests.push(a),JSONRpcClient.kick_async()):(b=JSONRpcClient._sendRequest(this,a),this._addMethods(b)))}function JSONRPCCallableProxy(){this.objectID=arguments[0],this.javaClass=arguments[1],this.JSONRPCType="CallableReference"}var escapeJSONString=function(){var a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(c){return a.lastIndex=0,a.test(c)?'"'+c.replace(a,function(a){var c=b[a];return"string"==typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+c+'"'}}();JSONRpcClient.prototype.createCallableProxy=function(a,b){var c,d;c=new JSONRPCCallableProxy(a,b);for(d in JSONRpcClient.knownClasses[b])c[d]=JSONRpcClient.bind(JSONRpcClient.knownClasses[b][d],c);return c},JSONRpcClient.knownClasses={},JSONRpcClient.Exception=function(a){var b;for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);this.trace&&(b=this.trace.match(/^([^:]*)/),b&&(this.name=b[0])),this.name||(this.name="JSONRpcClientException")},JSONRpcClient.Exception.CODE_REMOTE_EXCEPTION=490,JSONRpcClient.Exception.CODE_ERR_CLIENT=550,JSONRpcClient.Exception.CODE_ERR_PARSE=590,JSONRpcClient.Exception.CODE_ERR_NOMETHOD=591,JSONRpcClient.Exception.CODE_ERR_UNMARSHALL=592,JSONRpcClient.Exception.CODE_ERR_MARSHALL=593,JSONRpcClient.Exception.prototype=new Error,JSONRpcClient.Exception.prototype.toString=function(a,b){var c="";return this.name&&(c+=this.name),this.message&&(c+=": "+this.message),0==c.length&&(c="no exception information given"),c},JSONRpcClient.default_ex_handler=function(a){var b,c="";for(b in a)c+=b+"	"+a[b]+"\n";alert(c)},JSONRpcClient.toplevel_ex_handler=JSONRpcClient.default_ex_handler,JSONRpcClient.profile_async=!1,JSONRpcClient.max_req_active=2,JSONRpcClient.requestId=1,JSONRpcClient.fixupCircRefs=!0,JSONRpcClient.fixupDuplicates=!0,JSONRpcClient.transformDates=!1,JSONRpcClient.transformDateWithoutHint=!1,JSONRpcClient.javaDateClasses={"java.util.Date":!0,"java.sql.Date":!0,"java.sql.Time":!0,"java.sql.Timestamp":!0},JSONRpcClient.bind=function(a,b){return function(){return a.apply(b,arguments)}},JSONRpcClient._createMethod=function(a,b){var c=function(){for(var c,d=[],e=0;e<arguments.length;e++)d.push(arguments[e]);"function"==typeof d[0]&&(c=d.shift());var f=JSONRpcClient._makeRequest(this,b,d,this.objectID,c);return c?(JSONRpcClient.async_requests.push(f),JSONRpcClient.kick_async(),f.requestId):JSONRpcClient._sendRequest(a,f)};return c},JSONRpcClient.prototype.createObject=function(){for(var a,b,c,d=[],e=null,f=0;f<arguments.length;f++)d.push(arguments[f]);return"function"==typeof d[0]&&(e=d.shift()),a=d[0]+".$constructor",b=d[1],c=JSONRpcClient._makeRequest(this,a,b,0,e),null===e?JSONRpcClient._sendRequest(this,c):(JSONRpcClient.async_requests.push(c),JSONRpcClient.kick_async(),c.requestId)},JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX=".ref",JSONRpcClient.prototype._addMethods=function(a,b){for(var c,d,e,f,g,h,i,j,k=[],l=0;l<a.length;l++){if(d=this,e=a[l].split("."),i=a[l].indexOf("["),j=a[l].indexOf("]"),a[l].substring(0,JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX.length)==JSONRpcClient.CALLABLE_REFERENCE_METHOD_PREFIX&&-1!=i&&-1!=j&&j>i)h=a[l].substring(i+1,j);else for(f=0;f<e.length-1;f++)c=e[f],d[c]?d=d[c]:(d[c]={},d=d[c]);c=e[e.length-1],h?(g=JSONRpcClient._createMethod(this,c),JSONRpcClient.knownClasses[h]||(JSONRpcClient.knownClasses[h]={}),JSONRpcClient.knownClasses[h][c]=g):(g=JSONRpcClient._createMethod(this,a[l]),d[c]||b||(d[c]=JSONRpcClient.bind(g,this)),k.push(g)),h=null}return k},JSONRpcClient._getCharsetFromHeaders=function(a){var b,c,d;try{for(b=a.getResponseHeader("Content-type"),c=b.split(/\s*;\s*/),d=0;d<c.length;d++)if("charset="==c[d].substring(0,8))return c[d].substring(8,c[d].length)}catch(e){}return"UTF-8"},JSONRpcClient.async_requests=[],JSONRpcClient.async_inflight={},JSONRpcClient.async_responses=[],JSONRpcClient.async_timeout=null,JSONRpcClient.num_req_active=0,JSONRpcClient._async_handler=function(){var a,b;for(JSONRpcClient.async_timeout=null;JSONRpcClient.async_responses.length>0;)if(a=JSONRpcClient.async_responses.shift(),!a.canceled){a.profile&&(a.profile.dispatch=new Date);try{a.cb(a.result,a.ex,a.profile)}catch(c){JSONRpcClient.toplevel_ex_handler(c)}}for(;JSONRpcClient.async_requests.length>0&&JSONRpcClient.num_req_active<JSONRpcClient.max_req_active;)b=JSONRpcClient.async_requests.shift(),b.canceled||JSONRpcClient._sendRequest(b.client,b)},JSONRpcClient.kick_async=function(){JSONRpcClient.async_timeout||(JSONRpcClient.async_timeout=setTimeout(JSONRpcClient._async_handler,0))},JSONRpcClient.cancelRequest=function(a){if(JSONRpcClient.async_inflight[a])return JSONRpcClient.async_inflight[a].canceled=!0,!0;var b;for(b in JSONRpcClient.async_requests)if(JSONRpcClient.async_requests[b].requestId==a)return JSONRpcClient.async_requests[b].canceled=!0,!0;for(b in JSONRpcClient.async_responses)if(JSONRpcClient.async_responses[b].requestId==a)return JSONRpcClient.async_responses[b].canceled=!0,!0;return!1},JSONRpcClient._makeRequest=function(a,b,c,d,e){var f={};f.client=a,f.requestId=JSONRpcClient.requestId++;var g="{id:"+f.requestId+",method:";g+=d&&d>0?'".obj['+d+"]."+b+'"':'"'+b+'"',e&&(f.cb=e),JSONRpcClient.profile_async&&(f.profile={submit:new Date});var h=toJSON(c);return g+=",params:"+h.json,h.fixups&&(g+=",fixups:"+toJSON(h.fixups).json),f.data=g+"}",f},JSONRpcClient._sendRequest=function(a,b){var c;b.profile&&(b.profile.start=new Date),c=JSONRpcClient.poolGetHTTPRequest(),JSONRpcClient.num_req_active++,c.open("POST",a.serverURL,!!b.cb,a.user,a.pass);try{c.setRequestHeader("Content-type","text/plain")}catch(d){}try{c.setRequestHeader("X-Evernote-Agent",Browser.getAgent())}catch(d){}b.cb?c.onreadystatechange=function(){var d;if(4==c.readyState){c.onreadystatechange=function(){},d={cb:b.cb,result:null,ex:null},b.profile?(d.profile=b.profile,d.profile.end=new Date):d.profile=!1;try{d.result=a._handleResponse(c)}catch(e){d.ex=e}JSONRpcClient.async_inflight[b.requestId].canceled||JSONRpcClient.async_responses.push(d),delete JSONRpcClient.async_inflight[b.requestId],JSONRpcClient.kick_async()}}:c.onreadystatechange=function(){},JSONRpcClient.async_inflight[b.requestId]=b;try{c.send(b.data)}catch(d){throw JSONRpcClient.poolReturnHTTPRequest(c),JSONRpcClient.num_req_active--,new JSONRpcClient.Exception({code:JSONRpcClient.Exception.CODE_ERR_CLIENT,message:"Connection failed"})}return b.cb?null:(delete JSONRpcClient.async_inflight[b.requestId],a._handleResponse(c))},JSONRpcClient.prototype._handleResponse=function(a){this.charset||(this.charset=JSONRpcClient._getCharsetFromHeaders(a));var b,c,d;try{b=a.status,c=a.statusText,d=a.responseText}catch(e){throw JSONRpcClient.poolReturnHTTPRequest(a),JSONRpcClient.num_req_active--,JSONRpcClient.kick_async(),new JSONRpcClient.Exception({code:JSONRpcClient.Exception.CODE_ERR_CLIENT,message:"Connection failed"})}if(JSONRpcClient.poolReturnHTTPRequest(a),JSONRpcClient.num_req_active--,200!=b)throw new JSONRpcClient.Exception({code:b,message:c});return this.unmarshallResponse(d)},JSONRpcClient.prototype.unmarshallResponse=function(a){function b(a,b){function c(a,b){for(var c=0,d=b.length;d>c;c++)a=a[b[c]];return a}function d(a,b,c){for(var d=b.length-1,e=0;d>e;e++)a=a[b[e]];a[b[d]]=c}for(var e=0,f=b.length;f>e;e++)d(a,b[e][0],c(a,b[e][1]))}function c(a){function b(a,b){var c,d=0;if(a.hasOwnProperty(b)){for(c in a)if(a.hasOwnProperty(c)&&(d++,d>1))return;return!0}}var d,e;if(a&&"object"==typeof a){if(a.javaClass&&JSONRpcClient.javaDateClasses[a.javaClass])return e=new Date(a.time),"java.util.Date"!==a.javaClass&&(e.javaClass=a.javaClass),e;if(JSONRpcClient.transformDateWithoutHint&&b(a,"time"))return new Date(a.time);for(d in a)a.hasOwnProperty(d)&&(a[d]=c(a[d]));return a}return a}var d;try{d=JSON.parse(a)}catch(e){throw new JSONRpcClient.Exception({code:550,message:"error parsing result",data:a})}if(d.error)throw new JSONRpcClient.Exception(d.error);var f=d.result;if(f){if(f.objectID&&"CallableReference"==f.JSONRPCType)return this.createCallableProxy(f.objectID,f.javaClass);f=JSONRpcClient.extractCallableReferences(this,JSONRpcClient.transformDates?c(f):f),d.fixups&&b(f,d.fixups)}return f},JSONRpcClient.extractCallableReferences=function(a,b){var c,d,e;for(c in b)"object"==typeof b[c]&&(d=JSONRpcClient.makeCallableReference(a,b[c]),d?b[c]=d:(d=JSONRpcClient.extractCallableReferences(a,b[c]),b[c]=d)),"object"==typeof c&&(d=JSONRpcClient.makeCallableReference(a,c),d?(e=b[c],delete b[c],b[d]=e):(d=JSONRpcClient.extractCallableReferences(a,c),e=b[c],delete b[c],b[d]=e));return b},JSONRpcClient.makeCallableReference=function(a,b){return b&&b.objectID&&b.javaClass&&"CallableReference"==b.JSONRPCType?a.createCallableProxy(b.objectID,b.javaClass):null},JSONRpcClient.http_spare=[],JSONRpcClient.http_max_spare=8,JSONRpcClient.poolGetHTTPRequest=function(){var a=JSONRpcClient.http_spare.pop();return a?a:JSONRpcClient.getHTTPRequest()},JSONRpcClient.poolReturnHTTPRequest=function(a){JSONRpcClient.http_spare.length>=JSONRpcClient.http_max_spare?delete a:JSONRpcClient.http_spare.push(a)},JSONRpcClient.msxmlNames=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","Microsoft.XMLHTTP"],JSONRpcClient.getHTTPRequest=function(){try{return JSONRpcClient.httpObjectName="XMLHttpRequest",new XMLHttpRequest}catch(a){}for(var b=0;b<JSONRpcClient.msxmlNames.length;b++)try{return JSONRpcClient.httpObjectName=JSONRpcClient.msxmlNames[b],new ActiveXObject(JSONRpcClient.msxmlNames[b])}catch(a){}throw JSONRpcClient.httpObjectName=null,new JSONRpcClient.Exception({code:0,message:"Can't create XMLHttpRequest object"})};