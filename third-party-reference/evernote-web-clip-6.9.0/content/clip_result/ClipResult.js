/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function addHandlers(){for(var a=document.getElementsByClassName("shareOpt"),b=0;b<a.length;b++)a[b].addEventListener("click",shareNote);document.getElementById("defaultShare").addEventListener("click",shareNote),shareDropdownToggle.addEventListener("click",function(){shareDropdown.classList.toggle("open"),shareDropdown.style.top||(shareDropdown.style.top=shareSection.offsetTop+shareSection.offsetHeight+2+"px",shareDropdown.style.left=Math.max(shareDropdownToggle.offsetLeft+shareDropdownToggle.offsetWidth-shareDropdown.offsetWidth,0)+"px"),setHeight()}),window.addEventListener("click",function(a){"shareDropdownToggle"!==a.srcElement.id&&(shareDropdown.classList.remove("open"),setHeight())}),smart.addEventListener("webkitTransitionEnd",function(){setHeight()});for(var c=document.getElementsByTagName("h2"),b=0;b<c.length;b++)c.item(b).addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),selectSmartSection.call(this)});closeButton.addEventListener("click",dismiss),errorButton.addEventListener("click",handleErrorClick),rateNowButton.addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_sawRatingsPrompt",value:!0}),Browser.sendToExtension({name:"trackEvent",category:"Ratings",action:"ratings_prompt_click",label:"rate_now"})}),sendFeedbackButton.addEventListener("click",openFeedbackForm),closeRatingsPromptButton.addEventListener("click",closeRatingsPrompt),nearQuotaButton.addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"near_quota_promo",label:"promo_clicked"})}),speedbumpButton.addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"speedbump",label:"speedbump_clicked"})}),document.querySelector("#speedbumpTip .tipDismiss").addEventListener("click",function(){tipsButton.click()}),document.querySelector("#basicUpsellTip .button").addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"basic_upsell",label:"promo_clicked_"+basicUpsell.dataset.upsellVersion})}),referralButton.addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"main_openWindow",width:800,height:600,url:Browser.extension.getURL("js/main/generateUrlWithTempToken.html?baseUrl="+encodeURIComponent(baseUrl)+"&targetUrl="+encodeURIComponent("/referfriend?utm_source=web_clipper&utm_medium=in_app"))}),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_sawReferralCount",value:5}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"refer_friend_promo",label:"promo_clicked"})}),workchatPromoCloseButton.addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"workchat_promo",label:"promo_closed"}),document.body.classList.remove("noDismissButtonAndDivider"),document.body.classList.contains("initiallyPartial")?(document.body.classList.add("partial"),document.body.classList.contains("initiallyBrief")&&(document.body.classList.add("brief"),setTimeout(function(){dismiss()},3e3)),setHeight()):selectSmartSection.call(tipsButton)}),workchatPromoButton.addEventListener("click",function(a){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"workchat_promo",label:"promo_clicked"}),shareNote.call(document.getElementById("workchat"),a)})}function buildSiteQuery(){for(var a=url.replace(/^.*?:\/\/(.*?)\/.*$/,"$1"),b=a.replace(/^(www\.)?(.*)/i,"$2"),c="any:",d=["http://","https://","http://www.","https://www."],e=0;e<d.length;e++)c+=' sourceUrl:"'+d[e]+b+'*"';return c}function closeRatingsPrompt(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_sawRatingsPrompt",value:!0}),selectSmartSection.call(tipsButton),Browser.sendToExtension({name:"trackEvent",category:"Ratings",action:"ratings_prompt_click",label:"close"})}function complete(){if(tokens=successResponse.tokens,noteGuid=successResponse.noteGuid,noteUserId=successResponse.userIds.submit,shardId=successResponse.shardId,noteStoreUrl=successResponse.noteStoreUrl,notebookType=successResponse.notebookType,document.body.classList.add("done"),successResponse.noShareNotes&&document.body.classList.add("noShare"),header.innerHTML='<span id="status" title="'+GlobalUtils.escapeXML(successResponse.notebookName)+'">'+Browser.i18n.getMessage("desktopNotification_clipUploaded",GlobalUtils.escapeXML(successResponse.notebookName))+'</span><a id="title" title="'+GlobalUtils.escapeXML(title)+'" target="_blank" href="'+GlobalUtils.getNoteURI(baseUrl,{shardId:shardId,noteGuid:noteGuid},userId,tokens.authenticationToken)+'">'+GlobalUtils.escapeXML(title)+'</a><div id="reminders"></div>',document.getElementById("title").addEventListener("click",doNoteSuccessAction),reminderSetter=new ReminderSetter(document.getElementById("reminders"),tokens.submit,shardId,noteStoreUrl,noteGuid,title,url,function(){setHeight("100%")},function(){setHeight()},function(a){a===ReminderSetter.REMINDER_TYPES.NO_DATE?Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"added_reminder",label:"no_date"}):a===ReminderSetter.REMINDER_TYPES.TOMORROW?Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"added_reminder",label:"tomorrow"}):a===ReminderSetter.REMINDER_TYPES.NEXT_WEEK?Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"added_reminder",label:"next_week"}):a===ReminderSetter.REMINDER_TYPES.CUSTOM_DATE&&Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"added_reminder",label:"custom_date"})}),successResponse.showWorkchat&&(document.body.classList.contains("partial")&&document.body.classList.add("initiallyPartial"),document.body.classList.contains("brief")&&document.body.classList.add("initiallyBrief"),document.body.classList.remove("partial","brief")),document.body.classList.contains("partial"))document.body.classList.contains("brief")&&setTimeout(function(){dismiss()},3e3),setHeight();else if(setHeight("100%"),successResponse.showWorkchat?(tipsContainer.classList.add("workchat"),selectSmartSection.call(tipsButton),document.body.classList.add("noDismissButtonAndDivider"),Browser.sendToExtension({name:"setPersistentValueForUser",key:"sawWorkchatPromo",value:!0,userId:userId}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"workchat_promo",label:"promo_shown"})):successResponse.showRatings?(tipsContainer.classList.add("ratings"),selectSmartSection.call(tipsButton),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_successfulClipsCount",value:0}),Browser.sendToExtension({name:"trackEvent",category:"Ratings",action:"ratings_prompt_shown"})):successResponse.hitSpeedbump?(tipsContainer.classList.add("hitSpeedbump"),document.querySelector("#speedbumpTip .tipLogo").innerText=Browser.i18n.getMessage("speedbumpPremium"),document.querySelector("#speedbumpTip .tipDetails").innerText=Browser.i18n.getMessage("speedbumpPremiumAction"),speedbumpButton.innerText=Browser.i18n.getMessage("confirmActivity"),speedbumpButton.href=generateSupportUrl(!1),selectSmartSection.call(tipsButton),Browser.sendToExtension({name:"setPersistentValueForUser",key:"shownSpeedbump",value:!0,userId:userId}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"speedbump",label:"speedbump_shown"})):successResponse.nearQuota?(tipsContainer.classList.add("nearQuota"),document.querySelector("#nearQuotaTip .tipLogo").innerText=Browser.i18n.getMessage("nearQuota"),basic||plus?(document.getElementById("nearQuotaTip").classList.add("upgradable"),basic?(document.querySelector("#nearQuotaTip .tipDetails").innerText=Browser.i18n.getMessage("nearQuotaBasicAction"),nearQuotaButton.innerText=Browser.i18n.getMessage("upgrade"),nearQuotaButton.href=generateSubscriptionsUrl("ctxt_nearquota_dialog_over75_basic")):plus&&(document.querySelector("#nearQuotaTip .tipDetails").innerText=Browser.i18n.getMessage("nearQuotaPlusAction"),nearQuotaButton.innerText=Browser.i18n.getMessage("goPremium"),nearQuotaButton.href=generateSubscriptionsUrl("ctxt_nearquota_dialog_over75_plus"))):premium&&(document.querySelector("#nearQuotaTip .tipDetails").innerText=Browser.i18n.getMessage("nearQuotaPremiumAction")),selectSmartSection.call(tipsButton),Browser.sendToExtension({name:"setPersistentValueForUser",key:"shownNearQuotaUpsell",value:!0,userId:userId}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"near_quota_promo",label:"promo_shown"})):successResponse.showReferral?(tipsContainer.classList.add("referral"),selectSmartSection.call(tipsButton),Browser.sendToExtension({name:"addToPersistentValue",key:userId+"_sawReferralCount",delta:1}),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_clipsCount_referral",value:0}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"refer_friend_promo",label:"promo_shown"})):successResponse.showBasicUpsell?(tipsContainer.classList.add("basicUpsell"),selectSmartSection.call(tipsButton),document.querySelector("#basicUpsellTip .tipLogo").innerText=Browser.i18n.getMessage("basicUpsellHeaderC"),document.querySelector("#basicUpsellTip .tipDetails").innerText=Browser.i18n.getMessage("basicUpsellDetailsC"),document.querySelector("#basicUpsellTip .button").href=generateSubscriptionsUrl("rglr_generic_dialog_intro_C"),Browser.sendToExtension({name:"setBasicUpsellTimes",forceUpdate:!0}),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"basic_upsell",label:"promo_shown"})):selectSmartSection.call(relatedNotesButton),!document.body.classList.contains("initiallyPartial")&&!document.body.classList.contains("initiallyBrief")){for(var a in relatedNotesResponse.relatedNotes)if(relatedNotesResponse.relatedNotes[a].guid===noteGuid){relatedNotesResponse.relatedNotes[a].splice(a,1);break}var b=new HeroNoteSnippets(document.getElementById("relatedNotesContainer"),baseUrl,userId,tokens.authenticationToken,function(a){Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"view_related_notes",label:a+"_related_note",value:relatedNotesResponse.relatedNotes.length})});b.setNotes(relatedNotesResponse.relatedNotes)}}function dismiss(){Browser.sendToExtension({name:"bounce",message:{name:"hideClipResult"}})}function doNoteSuccessAction(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"open_in_evernote",data:[{slot:Analytics.CD.EXPORT_TO_DB,value:1}]})}function generateSubscriptionsUrl(a){var b="clipper-chrome";return SAFARI?b="clipper-safari":OPERA?b="clipper-opera":YANDEX&&(b="clipper-yandex"),Browser.extension.getURL("js/main/generateUrlWithTempToken.html?baseUrl="+encodeURIComponent(baseUrl)+"&targetUrl="+encodeURIComponent("/subscriptions?origin="+b+"&offer="+a))}function generateSupportUrl(a){return Browser.extension.getURL("js/main/generateUrlWithTempToken.html?baseUrl="+encodeURIComponent(baseUrl)+"&targetUrl="+encodeURIComponent("/SupportLogin.action?from=ua&c="+a))}function handleErrorClick(){this.classList.contains("hasDestination")?(Browser.sendToExtension({name:"main_recordActivity"}),this.classList.contains("overQuota")?basic||plus?Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"over_quota_promo",label:"promo_clicked"}):premium&&Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"over_quota_promo",label:"promo_clicked"}):this.classList.contains("noteSizeExceeded")&&Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"note_size_exceeded_promo",label:"promo_clicked"})):dismiss()}function handleFailure(a,b,c){switch(document.body.className="error",errorTitle.innerText=Browser.i18n.getMessage("cannotSaveClip"),tokens=a.tokens,a.error){case"overQuota":errorButton.classList.add("hasDestination","overQuota"),error.classList.add("subscription"),basic||plus?(error.classList.add("upgradable"),errorTitle.innerText=Browser.i18n.getMessage("cannotSaveClip2"),basic?(errorDetails.innerText=Browser.i18n.getMessage("overQuotaBasic"),errorButton.innerText=Browser.i18n.getMessage("upgrade"),errorButton.href=generateSubscriptionsUrl("ctxt_overquota_dialog_exceeded_basic")):plus&&(errorDetails.innerText=Browser.i18n.getMessage("overQuotaPlus"),errorButton.innerText=Browser.i18n.getMessage("goPremium"),errorButton.href=generateSubscriptionsUrl("ctxt_overquota_dialog_exceeded_plus"))):premium&&(errorDetails.innerHTML=Browser.i18n.getMessage("overQuotaPremium"),errorButton.innerText=Browser.i18n.getMessage("contactSupport"),errorButton.href="https://evernote.com/contact/support/"),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"over_quota_promo",label:"promo_shown"});break;case"noteSizeExceeded":errorTitle.innerText=Browser.i18n.getMessage("noteSizeExceeded",GlobalUtils.convertBytesToPrettyUnit(noteSizeMax)),error.classList.add("subscription"),premium?errorDetails.innerText=Browser.i18n.getMessage("noteSizeExceededPremium",GlobalUtils.convertBytesToPrettyUnit(noteSizeMax)):(basic||plus)&&(error.classList.add("upgradable"),basic?(errorDetails.innerText=Browser.i18n.getMessage("noteSizeExceededBasic",GlobalUtils.convertBytesToPrettyUnit(noteSizeMax)),errorButton.innerText=Browser.i18n.getMessage("upgrade"),errorButton.href=generateSubscriptionsUrl("ctxt_notesize_dialog_over_basic")):plus&&(errorDetails.innerText=Browser.i18n.getMessage("noteSizeExceededPlus",GlobalUtils.convertBytesToPrettyUnit(noteSizeMax)),errorButton.innerText=Browser.i18n.getMessage("goPremium"),errorButton.href=generateSubscriptionsUrl("ctxt_notesize_dialog_over_plus")),errorButton.classList.add("hasDestination","noteSizeExceeded"),Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"note_size_exceeded_promo",label:"promo_shown"}));break;case"overAccountMax":errorDetails.innerText=Browser.i18n.getMessage("overAccountMaxError",[userNoteCountMax.toLocaleString()]),errorButton.innerText=Browser.i18n.getMessage("ok");break;case"network":errorDetails.innerText=Browser.i18n.getMessage("Error_Network_Unavailable");break;default:SAFARI||(errorDetails.innerHTML="<a id='logLink' target='_blank' href='"+Browser.extension.getURL("logs.html")+"'>"+Browser.i18n.getMessage("viewCrashReport")+"</a>")}setTimeout(setHeight,100)}function handleRelatedNotesClick(){Browser.sendToExtension({name:"main_recordActivity"}),document.querySelector("#slider").className=document.querySelector("#slider").className.replace(/show\w+/g,"")+" showLeft";var a=document.querySelector("#siteSearchButton").className;document.querySelector("#siteSearchButton").className=a.replace(/(^|\s+)selected($|\s+)/,""),document.querySelector("#relatedNotesButton").className="selected"}function handleSuccess(a,b,c){success=!0,successResponse=a,Browser.sendToExtension({name:"trackTiming",category:"Clip",variableName:"syncing",time:new Date-startTime}),receivedRelatedNotes&&complete()}function initialize(a,b,c){title=a.title,header.innerHTML=Browser.i18n.getMessage("contentclipper_clipping",[GlobalUtils.escapeXML(title)]),setTitleMaxWidth(),url=a.url,baseUrl=a.baseUrl,/china/i.test(a.locale)&&document.body.classList.add("china"),a.sharingOptionsEnabled.singleNote||document.body.classList.add("noSingleNote"),a.sharingOptionsEnabled.facebook||document.body.classList.add("noFacebook"),a.sharingOptionsEnabled.linkedin||document.body.classList.add("noLinkedin"),a.sharingOptionsEnabled.twitter||document.body.classList.add("noTwitter"),userId=a.userId,basic=a.basic,plus=a.plus,premium=a.premium,noteSizeMax=a.noteSizeMax,quota=a.quota,userNoteCountMax=a.userNoteCountMax,sameSiteNotesButton.innerText=Browser.i18n.getMessage("clipsFromThisSite",url.replace(/^https?:\/\/(?:www\.)?(.*?)\/.*/,"$1")),"postClipShowFull"===a.afterClip?Browser.sendToExtension({name:"getRelatedNotes",pendingNoteKey:a.pendingNoteKey,recText:a.recText,url:url}):(document.body.classList.add("partial"),relatedNotesResponse={relatedNotes:[]},receivedRelatedNotes=!0,"postClipShowNothing"===a.afterClip&&document.body.classList.add("brief")),setHeight()}function openFeedbackForm(){Browser.sendToExtension({name:"main_recordActivity"}),Browser.sendToExtension({name:"setPersistentValue",key:userId+"_sawRatingsPrompt",value:!0}),Browser.sendToExtension({name:"bounce",message:{name:"showFeedbackForm"}}),Browser.sendToExtension({name:"trackEvent",category:"Ratings",action:"ratings_prompt_click",label:"send_feedback"}),dismiss()}function receiveRelatedNotes(a,b,c){receivedRelatedNotes=!0,relatedNotesResponse=a,success&&complete()}function receiveSameSiteNotes(a,b,c){a.notes.list.length&&noteGuid===a.notes.list[0].guid&&a.notes.list.shift();var d=new HeroNoteSnippets(document.getElementById("sameSiteNotesContainer"),baseUrl,userId,tokens.authenticationToken,function(b){Browser.sendToExtension({name:"trackEvent",category:"Post-Clip",action:"view_related_notes",label:b+"_same_site_note",value:a.notes.list.length})});d.setNotes(a.notes.list,!0,!0),setHeight()}function selectSmartSection(){var a=this;if("tips"===a.id&&(smart.classList.toggle(a.id)||(a=relatedNotesButton,tipsContainer.classList.contains("ratings")?Browser.sendToExtension({name:"trackEvent",category:"Ratings",action:"ratings_prompt_click",label:"close"}):tipsContainer.classList.contains("speedbump")?Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"speedbump",label:"speedbump_closed"}):tipsContainer.classList.contains("nearQuota")?Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"near_quota_promo",label:"promo_closed"}):tipsContainer.classList.contains("basicUpsell")&&Browser.sendToExtension({name:"trackEvent",category:"Promotion",action:"basic_upsell",label:"promo_closed_"+basicUpsell.dataset.upsellVersion}))),"tips"!==a.id){var b=document.querySelector("h2.pressed");b&&b.classList.remove("pressed"),a.classList.add("pressed"),smart.classList.remove("relatedNotes","sameSiteNotes"),smart.classList.add(a.id)}"sameSiteNotes"===a.id&&(siteNotesRequested||(Browser.sendToExtension({name:"getSameSiteNotes",resultSpec:{includeAttributes:!0,includeTitle:!0,includeUpdated:!0},noteFilter:{order:2,words:buildSiteQuery()}}),siteNotesRequested=!0))}function setHeight(a){if(a)Browser.sendToExtension({name:"bounce",message:{name:"setClipResultHeight",height:a}});else{var b=main.offsetHeight,c=(main.offsetHeight-main.clientHeight)/2,d=reminderSetter?reminderSetter.height-(b-reminderSetter.top-c):0,e=shareDropdown.classList.contains("open")?shareDropdown.offsetHeight+5-(b-shareDropdown.offsetTop-c):0;Browser.sendToExtension({name:"bounce",message:{name:"setClipResultHeight",height:b+Math.max(e,Math.max(d,0))}})}}function setTitleMaxWidth(){if("title"===header.firstElementChild.id){var a=document.createElement("style");a.innerText="#title:first-child { max-width: "+(header.clientWidth-70-header.lastElementChild.clientWidth)+"px; }",document.head.appendChild(a),header.firstElementChild.nextSibling.nodeType===HTMLElement.TEXT_NODE&&header.removeChild(header.firstElementChild.nextSibling)}}function shareNote(a){var b={workchat:{width:500,height:550},linkedin:{width:520,height:570},weibo:{width:650,height:650},facebook:{width:626,height:436},twitter:{width:550,height:420},gplus:{width:600,height:600},email:{width:452,height:340},url:{width:452,height:230}},c=this.id;"defaultShare"===c&&(c="workchat");var d;d="workchat"===c?Browser.extension.getURL("content/workchat/workchat.html")+"?title="+encodeURIComponent(title)+"&guid="+noteGuid+"&noteStoreUrl="+encodeURIComponent(noteStoreUrl)+"&shardId="+shardId+"&userId="+noteUserId+"&token="+tokens.submit+"&notebookType="+notebookType:Browser.extension.getURL("content/clip_result/sharing.html")+"?title="+encodeURIComponent(title)+"&guid="+noteGuid+"&shareType="+c+"&token="+tokens.submit+"&shared="+tokens.shared+"&noteStoreUrl="+encodeURIComponent(noteStoreUrl)+"&width="+b[c].width+"&height="+b[c].height,SAFARI?window.open(d,"","width="+b[c].width+",height="+b[c].height+",top="+a.screenY+",left="+a.screenX):Browser.sendToExtension({name:"main_openWindow",width:b[c].width,height:b[c].height,url:d,top:a.screenY,left:a.screenX,type:"popup"});var e=c;"email"===e?e="email_started":"workchat"===e&&(e="workchat_started"),Browser.sendToExtension({name:"trackEvent",category:"Share",action:"share_menu",label:e}),Browser.sendToExtension({name:"main_recordActivity"})}function showSyncing(){Browser.sendToExtension({name:"trackTiming",category:"Clip",variableName:"clipping",time:new Date-startTime}),startTime=new Date,header.innerHTML=Browser.i18n.getMessage("contentclipper_syncing",[GlobalUtils.escapeXML(title)]),setTitleMaxWidth(),setHeight()}var noteGuid,noteUserId,notebookType,hour=8,minute=0,reminderOrder,title,baseUrl,noteStoreUrl,china,userId,tokens,shardId,url,basic,plus,premium,noteSizeMax,quota,userNoteCountMax,siteNotesRequested=!1,success=!1,successResponse,relatedNotesResponse,siteNotesRequested=!1,receivedRelatedNotes=!1,main,header,shareDropdown,shareDropdownToggle,shareSection,reminderSetter,relatedNotesButton,sameSiteNotesButton,tipsButton,closeButton,smart,error,errorTitle,errorDetails,errorButton,numEmailed,tipsContainer,rateNowButton,sendFeedbackButton,closeRatingsPromptButton,nearQuotaButton,speedbumpButton,referralButton,workchatPromoCloseButton,workchatPromoButton,basicUpsell,startTime;window.addEventListener("DOMContentLoaded",function(){SAFARI&&document.body.classList.add("safari"),main=document.getElementById("main"),header=document.getElementById("header"),shareDropdown=document.getElementById("shareDropdown"),shareDropdownToggle=document.getElementById("shareDropdownToggle"),shareSection=document.getElementById("share"),closeButton=document.getElementById("close"),smart=document.getElementById("smart"),relatedNotesButton=document.getElementById("relatedNotes"),sameSiteNotesButton=document.getElementById("sameSiteNotes"),tipsButton=document.getElementById("tips"),error=document.getElementById("error"),errorTitle=document.getElementById("errorTitle"),errorDetails=document.getElementById("errorDetails"),errorButton=document.getElementById("errorButton"),tipsContainer=document.querySelector("#tipsContainer"),rateNowButton=document.getElementById("rateNow"),sendFeedbackButton=document.getElementById("sendFeedback"),closeRatingsPromptButton=document.getElementById("closeRatingsPrompt"),nearQuotaButton=document.querySelector("#nearQuotaTip .button"),speedbumpButton=document.querySelector("#speedbumpTip .button"),referralButton=document.getElementById("referralCTA"),workchatPromoCloseButton=document.querySelector("#workchatTip .tipCloseX"),workchatPromoButton=document.querySelector("#workchatTip .button"),basicUpsell=document.getElementById("basicUpsellTip"),GlobalUtils.localize(document.body),OPERA&&(rateNowButton.href="https://addons.opera.com/en/extensions/details/evernote-web-clipper/"),addHandlers(),setHeight(),startTime=new Date}),Browser.addMessageHandlers({cr_initialize:initialize,cr_receiveRelatedNotes:receiveRelatedNotes,cr_receiveSameSiteNotes:receiveSameSiteNotes,handleFailure:handleFailure,handleSuccess:handleSuccess,showSyncing:showSyncing}),document.addEventListener("keyup",function(a){a&&a.keyCode&&27==a.keyCode&&dismiss()});