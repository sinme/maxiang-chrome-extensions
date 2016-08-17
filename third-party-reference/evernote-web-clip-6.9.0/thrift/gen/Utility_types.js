/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
MarketingEmailType={DESKTOP_UPSELL:1,CLIPPER_UPSELL:2,MOBILE_UPSELL:3},RelatedContentSourceType={NEWS:1,PROFILE:2},OAUTH_CREDENTIAL_SERVICE_GOOGLE_CONNECT=1,OAUTH_CREDENTIAL_SERVICE_GOOGLE_GLASS=2,OAUTH_CREDENTIAL_SERVICE_FACEBOOK=3,OAUTH_CREDENTIAL_SERVICE_LINKEDIN=4,OAUTH_CREDENTIAL_SERVICE_WSJ=5,OAUTH_CREDENTIAL_SERVICE_IDS=[1,2,3,4,5],EDAM_OAUTH_SCOPE_LEN_MAX=4096,EDAM_OAUTH_SCOPE_LEN_MIN=0,EDAM_OAUTH_VERSION_1=1,EDAM_OAUTH_VERSION_2=2,EDAM_OAUTH_VERSIONS=[1,2],SupportTicket=function(a){this.applicationVersion=null,this.contactEmail=null,this.osInfo=null,this.deviceInfo=null,this.carrierInfo=null,this.connectionInfo=null,this.logFile=null,this.subject=null,this.issueDescription=null,a&&(void 0!==a.applicationVersion&&(this.applicationVersion=a.applicationVersion),void 0!==a.contactEmail&&(this.contactEmail=a.contactEmail),void 0!==a.osInfo&&(this.osInfo=a.osInfo),void 0!==a.deviceInfo&&(this.deviceInfo=a.deviceInfo),void 0!==a.carrierInfo&&(this.carrierInfo=a.carrierInfo),void 0!==a.connectionInfo&&(this.connectionInfo=a.connectionInfo),void 0!==a.logFile&&(this.logFile=a.logFile),void 0!==a.subject&&(this.subject=a.subject),void 0!==a.issueDescription&&(this.issueDescription=a.issueDescription))},SupportTicket.prototype={},SupportTicket.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.applicationVersion=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.contactEmail=a.readString().value:a.skip(c);break;case 3:c==Thrift.Type.STRING?this.osInfo=a.readString().value:a.skip(c);break;case 4:c==Thrift.Type.STRING?this.deviceInfo=a.readString().value:a.skip(c);break;case 5:c==Thrift.Type.STRING?this.carrierInfo=a.readString().value:a.skip(c);break;case 6:c==Thrift.Type.STRING?this.connectionInfo=a.readString().value:a.skip(c);break;case 7:c==Thrift.Type.STRUCT?(this.logFile=new Data,this.logFile.read(a)):a.skip(c);break;case 8:c==Thrift.Type.STRING?this.subject=a.readString().value:a.skip(c);break;case 9:c==Thrift.Type.STRING?this.issueDescription=a.readString().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},SupportTicket.prototype.write=function(a){a.writeStructBegin("SupportTicket"),null!==this.applicationVersion&&void 0!==this.applicationVersion&&(a.writeFieldBegin("applicationVersion",Thrift.Type.STRING,1),a.writeString(this.applicationVersion),a.writeFieldEnd()),null!==this.contactEmail&&void 0!==this.contactEmail&&(a.writeFieldBegin("contactEmail",Thrift.Type.STRING,2),a.writeString(this.contactEmail),a.writeFieldEnd()),null!==this.osInfo&&void 0!==this.osInfo&&(a.writeFieldBegin("osInfo",Thrift.Type.STRING,3),a.writeString(this.osInfo),a.writeFieldEnd()),null!==this.deviceInfo&&void 0!==this.deviceInfo&&(a.writeFieldBegin("deviceInfo",Thrift.Type.STRING,4),a.writeString(this.deviceInfo),a.writeFieldEnd()),null!==this.carrierInfo&&void 0!==this.carrierInfo&&(a.writeFieldBegin("carrierInfo",Thrift.Type.STRING,5),a.writeString(this.carrierInfo),a.writeFieldEnd()),null!==this.connectionInfo&&void 0!==this.connectionInfo&&(a.writeFieldBegin("connectionInfo",Thrift.Type.STRING,6),a.writeString(this.connectionInfo),a.writeFieldEnd()),null!==this.logFile&&void 0!==this.logFile&&(a.writeFieldBegin("logFile",Thrift.Type.STRUCT,7),this.logFile.write(a),a.writeFieldEnd()),null!==this.subject&&void 0!==this.subject&&(a.writeFieldBegin("subject",Thrift.Type.STRING,8),a.writeString(this.subject),a.writeFieldEnd()),null!==this.issueDescription&&void 0!==this.issueDescription&&(a.writeFieldBegin("issueDescription",Thrift.Type.STRING,9),a.writeString(this.issueDescription),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},AppFeedback=function(a){this.rating=null,this.feedback=null,a&&(void 0!==a.rating&&(this.rating=a.rating),void 0!==a.feedback&&(this.feedback=a.feedback))},AppFeedback.prototype={},AppFeedback.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.BYTE?this.rating=a.readByte().value:a.skip(c);break;case 2:c==Thrift.Type.STRUCT?(this.feedback=new SupportTicket,this.feedback.read(a)):a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},AppFeedback.prototype.write=function(a){a.writeStructBegin("AppFeedback"),null!==this.rating&&void 0!==this.rating&&(a.writeFieldBegin("rating",Thrift.Type.BYTE,1),a.writeByte(this.rating),a.writeFieldEnd()),null!==this.feedback&&void 0!==this.feedback&&(a.writeFieldBegin("feedback",Thrift.Type.STRUCT,2),this.feedback.write(a),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},MarketingEmailParameters=function(a){this.marketingEmailType=null,a&&void 0!==a.marketingEmailType&&(this.marketingEmailType=a.marketingEmailType)},MarketingEmailParameters.prototype={},MarketingEmailParameters.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I32?this.marketingEmailType=a.readI32().value:a.skip(c);break;case 0:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},MarketingEmailParameters.prototype.write=function(a){a.writeStructBegin("MarketingEmailParameters"),null!==this.marketingEmailType&&void 0!==this.marketingEmailType&&(a.writeFieldBegin("marketingEmailType",Thrift.Type.I32,1),a.writeI32(this.marketingEmailType),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},CrossPromotionInfo=function(a){this.usesEvernoteWindows=null,this.usesEvernoteMac=null,this.usesEvernoteIOS=null,this.usesEvernoteAndroid=null,this.usesWebClipper=null,this.usesClearly=null,this.usesFoodIOS=null,this.usesFoodAndroid=null,this.usesPenultimateIOS=null,this.usesSkitchWindows=null,this.usesSkitchMac=null,this.usesSkitchIOS=null,this.usesSkitchAndroid=null,this.usesEvernoteSalesforce=null,a&&(void 0!==a.usesEvernoteWindows&&(this.usesEvernoteWindows=a.usesEvernoteWindows),void 0!==a.usesEvernoteMac&&(this.usesEvernoteMac=a.usesEvernoteMac),void 0!==a.usesEvernoteIOS&&(this.usesEvernoteIOS=a.usesEvernoteIOS),void 0!==a.usesEvernoteAndroid&&(this.usesEvernoteAndroid=a.usesEvernoteAndroid),void 0!==a.usesWebClipper&&(this.usesWebClipper=a.usesWebClipper),void 0!==a.usesClearly&&(this.usesClearly=a.usesClearly),void 0!==a.usesFoodIOS&&(this.usesFoodIOS=a.usesFoodIOS),void 0!==a.usesFoodAndroid&&(this.usesFoodAndroid=a.usesFoodAndroid),void 0!==a.usesPenultimateIOS&&(this.usesPenultimateIOS=a.usesPenultimateIOS),void 0!==a.usesSkitchWindows&&(this.usesSkitchWindows=a.usesSkitchWindows),void 0!==a.usesSkitchMac&&(this.usesSkitchMac=a.usesSkitchMac),void 0!==a.usesSkitchIOS&&(this.usesSkitchIOS=a.usesSkitchIOS),void 0!==a.usesSkitchAndroid&&(this.usesSkitchAndroid=a.usesSkitchAndroid),void 0!==a.usesEvernoteSalesforce&&(this.usesEvernoteSalesforce=a.usesEvernoteSalesforce))},CrossPromotionInfo.prototype={},CrossPromotionInfo.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.BOOL?this.usesEvernoteWindows=a.readBool().value:a.skip(c);break;case 2:c==Thrift.Type.BOOL?this.usesEvernoteMac=a.readBool().value:a.skip(c);break;case 3:c==Thrift.Type.BOOL?this.usesEvernoteIOS=a.readBool().value:a.skip(c);break;case 4:c==Thrift.Type.BOOL?this.usesEvernoteAndroid=a.readBool().value:a.skip(c);break;case 5:c==Thrift.Type.BOOL?this.usesWebClipper=a.readBool().value:a.skip(c);break;case 6:c==Thrift.Type.BOOL?this.usesClearly=a.readBool().value:a.skip(c);break;case 7:c==Thrift.Type.BOOL?this.usesFoodIOS=a.readBool().value:a.skip(c);break;case 8:c==Thrift.Type.BOOL?this.usesFoodAndroid=a.readBool().value:a.skip(c);break;case 9:c==Thrift.Type.BOOL?this.usesPenultimateIOS=a.readBool().value:a.skip(c);break;case 10:c==Thrift.Type.BOOL?this.usesSkitchWindows=a.readBool().value:a.skip(c);break;case 11:c==Thrift.Type.BOOL?this.usesSkitchMac=a.readBool().value:a.skip(c);break;case 12:c==Thrift.Type.BOOL?this.usesSkitchIOS=a.readBool().value:a.skip(c);break;case 13:c==Thrift.Type.BOOL?this.usesSkitchAndroid=a.readBool().value:a.skip(c);break;case 14:c==Thrift.Type.BOOL?this.usesEvernoteSalesforce=a.readBool().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},CrossPromotionInfo.prototype.write=function(a){a.writeStructBegin("CrossPromotionInfo"),null!==this.usesEvernoteWindows&&void 0!==this.usesEvernoteWindows&&(a.writeFieldBegin("usesEvernoteWindows",Thrift.Type.BOOL,1),a.writeBool(this.usesEvernoteWindows),a.writeFieldEnd()),null!==this.usesEvernoteMac&&void 0!==this.usesEvernoteMac&&(a.writeFieldBegin("usesEvernoteMac",Thrift.Type.BOOL,2),a.writeBool(this.usesEvernoteMac),a.writeFieldEnd()),null!==this.usesEvernoteIOS&&void 0!==this.usesEvernoteIOS&&(a.writeFieldBegin("usesEvernoteIOS",Thrift.Type.BOOL,3),a.writeBool(this.usesEvernoteIOS),a.writeFieldEnd()),null!==this.usesEvernoteAndroid&&void 0!==this.usesEvernoteAndroid&&(a.writeFieldBegin("usesEvernoteAndroid",Thrift.Type.BOOL,4),a.writeBool(this.usesEvernoteAndroid),a.writeFieldEnd()),null!==this.usesWebClipper&&void 0!==this.usesWebClipper&&(a.writeFieldBegin("usesWebClipper",Thrift.Type.BOOL,5),a.writeBool(this.usesWebClipper),a.writeFieldEnd()),null!==this.usesClearly&&void 0!==this.usesClearly&&(a.writeFieldBegin("usesClearly",Thrift.Type.BOOL,6),a.writeBool(this.usesClearly),a.writeFieldEnd()),null!==this.usesFoodIOS&&void 0!==this.usesFoodIOS&&(a.writeFieldBegin("usesFoodIOS",Thrift.Type.BOOL,7),a.writeBool(this.usesFoodIOS),a.writeFieldEnd()),null!==this.usesFoodAndroid&&void 0!==this.usesFoodAndroid&&(a.writeFieldBegin("usesFoodAndroid",Thrift.Type.BOOL,8),a.writeBool(this.usesFoodAndroid),a.writeFieldEnd()),null!==this.usesPenultimateIOS&&void 0!==this.usesPenultimateIOS&&(a.writeFieldBegin("usesPenultimateIOS",Thrift.Type.BOOL,9),a.writeBool(this.usesPenultimateIOS),a.writeFieldEnd()),null!==this.usesSkitchWindows&&void 0!==this.usesSkitchWindows&&(a.writeFieldBegin("usesSkitchWindows",Thrift.Type.BOOL,10),a.writeBool(this.usesSkitchWindows),a.writeFieldEnd()),null!==this.usesSkitchMac&&void 0!==this.usesSkitchMac&&(a.writeFieldBegin("usesSkitchMac",Thrift.Type.BOOL,11),a.writeBool(this.usesSkitchMac),a.writeFieldEnd()),null!==this.usesSkitchIOS&&void 0!==this.usesSkitchIOS&&(a.writeFieldBegin("usesSkitchIOS",Thrift.Type.BOOL,12),a.writeBool(this.usesSkitchIOS),a.writeFieldEnd()),null!==this.usesSkitchAndroid&&void 0!==this.usesSkitchAndroid&&(a.writeFieldBegin("usesSkitchAndroid",Thrift.Type.BOOL,13),a.writeBool(this.usesSkitchAndroid),a.writeFieldEnd()),null!==this.usesEvernoteSalesforce&&void 0!==this.usesEvernoteSalesforce&&(a.writeFieldBegin("usesEvernoteSalesforce",Thrift.Type.BOOL,14),a.writeBool(this.usesEvernoteSalesforce),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},FriendReferral=function(a){this.created=null,this.email=null,this.referredUserId=null,this.pointsEarned=null,a&&(void 0!==a.created&&(this.created=a.created),void 0!==a.email&&(this.email=a.email),void 0!==a.referredUserId&&(this.referredUserId=a.referredUserId),void 0!==a.pointsEarned&&(this.pointsEarned=a.pointsEarned))},FriendReferral.prototype={},FriendReferral.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I64?this.created=a.readI64().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.email=a.readString().value:a.skip(c);break;case 3:c==Thrift.Type.I32?this.referredUserId=a.readI32().value:a.skip(c);break;case 4:c==Thrift.Type.I32?this.pointsEarned=a.readI32().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},FriendReferral.prototype.write=function(a){a.writeStructBegin("FriendReferral"),null!==this.created&&void 0!==this.created&&(a.writeFieldBegin("created",Thrift.Type.I64,1),a.writeI64(this.created),a.writeFieldEnd()),null!==this.email&&void 0!==this.email&&(a.writeFieldBegin("email",Thrift.Type.STRING,2),a.writeString(this.email),a.writeFieldEnd()),null!==this.referredUserId&&void 0!==this.referredUserId&&(a.writeFieldBegin("referredUserId",Thrift.Type.I32,3),a.writeI32(this.referredUserId),a.writeFieldEnd()),null!==this.pointsEarned&&void 0!==this.pointsEarned&&(a.writeFieldBegin("pointsEarned",Thrift.Type.I32,4),a.writeI32(this.pointsEarned),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},OAuthCredential=function(a){this.serviceId=null,this.oAuthVersion=null,this.accessToken=null,this.scope=null,this.created=null,this.updated=null,this.expires=null,this.refreshAfter=null,a&&(void 0!==a.serviceId&&(this.serviceId=a.serviceId),void 0!==a.oAuthVersion&&(this.oAuthVersion=a.oAuthVersion),void 0!==a.accessToken&&(this.accessToken=a.accessToken),void 0!==a.scope&&(this.scope=a.scope),void 0!==a.created&&(this.created=a.created),void 0!==a.updated&&(this.updated=a.updated),void 0!==a.expires&&(this.expires=a.expires),void 0!==a.refreshAfter&&(this.refreshAfter=a.refreshAfter))},OAuthCredential.prototype={},OAuthCredential.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I16?this.serviceId=a.readI16().value:a.skip(c);break;case 2:c==Thrift.Type.I16?this.oAuthVersion=a.readI16().value:a.skip(c);break;case 3:c==Thrift.Type.STRING?this.accessToken=a.readString().value:a.skip(c);break;case 4:c==Thrift.Type.STRING?this.scope=a.readString().value:a.skip(c);break;case 5:c==Thrift.Type.I64?this.created=a.readI64().value:a.skip(c);break;case 6:c==Thrift.Type.I64?this.updated=a.readI64().value:a.skip(c);break;case 7:c==Thrift.Type.I64?this.expires=a.readI64().value:a.skip(c);break;case 8:c==Thrift.Type.I64?this.refreshAfter=a.readI64().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},OAuthCredential.prototype.write=function(a){a.writeStructBegin("OAuthCredential"),null!==this.serviceId&&void 0!==this.serviceId&&(a.writeFieldBegin("serviceId",Thrift.Type.I16,1),a.writeI16(this.serviceId),a.writeFieldEnd()),null!==this.oAuthVersion&&void 0!==this.oAuthVersion&&(a.writeFieldBegin("oAuthVersion",Thrift.Type.I16,2),a.writeI16(this.oAuthVersion),a.writeFieldEnd()),null!==this.accessToken&&void 0!==this.accessToken&&(a.writeFieldBegin("accessToken",Thrift.Type.STRING,3),a.writeString(this.accessToken),a.writeFieldEnd()),null!==this.scope&&void 0!==this.scope&&(a.writeFieldBegin("scope",Thrift.Type.STRING,4),a.writeString(this.scope),a.writeFieldEnd()),null!==this.created&&void 0!==this.created&&(a.writeFieldBegin("created",Thrift.Type.I64,5),a.writeI64(this.created),a.writeFieldEnd()),null!==this.updated&&void 0!==this.updated&&(a.writeFieldBegin("updated",Thrift.Type.I64,6),a.writeI64(this.updated),a.writeFieldEnd()),null!==this.expires&&void 0!==this.expires&&(a.writeFieldBegin("expires",Thrift.Type.I64,7),a.writeI64(this.expires),a.writeFieldEnd()),null!==this.refreshAfter&&void 0!==this.refreshAfter&&(a.writeFieldBegin("refreshAfter",Thrift.Type.I64,8),a.writeI64(this.refreshAfter),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RelatedContentSourcePreference=function(a){this.sourceId=null,this.activated=null,this.sourceName=null,this.sourceUrl=null,this.faviconUrl=null,this.sourceDescription=null,this.sourceType=null,a&&(void 0!==a.sourceId&&(this.sourceId=a.sourceId),void 0!==a.activated&&(this.activated=a.activated),void 0!==a.sourceName&&(this.sourceName=a.sourceName),void 0!==a.sourceUrl&&(this.sourceUrl=a.sourceUrl),void 0!==a.faviconUrl&&(this.faviconUrl=a.faviconUrl),void 0!==a.sourceDescription&&(this.sourceDescription=a.sourceDescription),void 0!==a.sourceType&&(this.sourceType=a.sourceType))},RelatedContentSourcePreference.prototype={},RelatedContentSourcePreference.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.sourceId=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.BOOL?this.activated=a.readBool().value:a.skip(c);break;case 3:c==Thrift.Type.STRING?this.sourceName=a.readString().value:a.skip(c);break;case 4:c==Thrift.Type.STRING?this.sourceUrl=a.readString().value:a.skip(c);break;case 5:c==Thrift.Type.STRING?this.faviconUrl=a.readString().value:a.skip(c);break;case 6:c==Thrift.Type.STRING?this.sourceDescription=a.readString().value:a.skip(c);break;case 7:c==Thrift.Type.I32?this.sourceType=a.readI32().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RelatedContentSourcePreference.prototype.write=function(a){a.writeStructBegin("RelatedContentSourcePreference"),null!==this.sourceId&&void 0!==this.sourceId&&(a.writeFieldBegin("sourceId",Thrift.Type.STRING,1),a.writeString(this.sourceId),a.writeFieldEnd()),null!==this.activated&&void 0!==this.activated&&(a.writeFieldBegin("activated",Thrift.Type.BOOL,2),a.writeBool(this.activated),a.writeFieldEnd()),null!==this.sourceName&&void 0!==this.sourceName&&(a.writeFieldBegin("sourceName",Thrift.Type.STRING,3),a.writeString(this.sourceName),a.writeFieldEnd()),null!==this.sourceUrl&&void 0!==this.sourceUrl&&(a.writeFieldBegin("sourceUrl",Thrift.Type.STRING,4),a.writeString(this.sourceUrl),a.writeFieldEnd()),null!==this.faviconUrl&&void 0!==this.faviconUrl&&(a.writeFieldBegin("faviconUrl",Thrift.Type.STRING,5),a.writeString(this.faviconUrl),a.writeFieldEnd()),null!==this.sourceDescription&&void 0!==this.sourceDescription&&(a.writeFieldBegin("sourceDescription",Thrift.Type.STRING,6),a.writeString(this.sourceDescription),a.writeFieldEnd()),null!==this.sourceType&&void 0!==this.sourceType&&(a.writeFieldBegin("sourceType",Thrift.Type.I32,7),a.writeI32(this.sourceType),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RelatedContentProfile=function(a){this.id=null,this.sourceId=null,this.userId=null,this.type=null,this.fullName=null,this.callingName=null,this.photoUrl=null,this.shortDescription=null,this.longDescription=null,this.contactUrls=null,this.organizations=null,a&&(void 0!==a.id&&(this.id=a.id),void 0!==a.sourceId&&(this.sourceId=a.sourceId),void 0!==a.userId&&(this.userId=a.userId),void 0!==a.type&&(this.type=a.type),void 0!==a.fullName&&(this.fullName=a.fullName),void 0!==a.callingName&&(this.callingName=a.callingName),void 0!==a.photoUrl&&(this.photoUrl=a.photoUrl),void 0!==a.shortDescription&&(this.shortDescription=a.shortDescription),void 0!==a.longDescription&&(this.longDescription=a.longDescription),void 0!==a.contactUrls&&(this.contactUrls=a.contactUrls),void 0!==a.organizations&&(this.organizations=a.organizations))},RelatedContentProfile.prototype={},RelatedContentProfile.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.id=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.sourceId=a.readString().value:a.skip(c);break;case 3:c==Thrift.Type.I32?this.userId=a.readI32().value:a.skip(c);break;case 4:c==Thrift.Type.I32?this.type=a.readI32().value:a.skip(c);break;case 5:c==Thrift.Type.STRING?this.fullName=a.readString().value:a.skip(c);break;case 6:c==Thrift.Type.STRING?this.callingName=a.readString().value:a.skip(c);break;case 7:c==Thrift.Type.STRING?this.photoUrl=a.readString().value:a.skip(c);break;case 8:c==Thrift.Type.STRING?this.shortDescription=a.readString().value:a.skip(c);break;case 9:c==Thrift.Type.STRING?this.longDescription=a.readString().value:a.skip(c);break;case 10:if(c==Thrift.Type.LIST){var e,f=0;this.contactUrls=[];var g=0;e=a.readListBegin(),g=e.etype,f=e.size;for(var h=0;f>h;++h){var i=null;i=a.readString().value,this.contactUrls.push(i)}a.readListEnd()}else a.skip(c);break;case 11:if(c==Thrift.Type.MAP){var j,k=0;this.organizations={};var l=0,m=0;j=a.readMapBegin(),l=j.ktype,m=j.vtype,k=j.size;for(var n=0;k>n;++n){n>0&&a.rstack.length>a.rpos[a.rpos.length-1]+1&&a.rstack.pop();var o=null,p=null;o=a.readString().value,p=a.readString().value,this.organizations[o]=p}a.readMapEnd()}else a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RelatedContentProfile.prototype.write=function(a){if(a.writeStructBegin("RelatedContentProfile"),null!==this.id&&void 0!==this.id&&(a.writeFieldBegin("id",Thrift.Type.STRING,1),a.writeString(this.id),a.writeFieldEnd()),null!==this.sourceId&&void 0!==this.sourceId&&(a.writeFieldBegin("sourceId",Thrift.Type.STRING,2),a.writeString(this.sourceId),a.writeFieldEnd()),null!==this.userId&&void 0!==this.userId&&(a.writeFieldBegin("userId",Thrift.Type.I32,3),a.writeI32(this.userId),a.writeFieldEnd()),null!==this.type&&void 0!==this.type&&(a.writeFieldBegin("type",Thrift.Type.I32,4),a.writeI32(this.type),a.writeFieldEnd()),null!==this.fullName&&void 0!==this.fullName&&(a.writeFieldBegin("fullName",Thrift.Type.STRING,5),a.writeString(this.fullName),a.writeFieldEnd()),null!==this.callingName&&void 0!==this.callingName&&(a.writeFieldBegin("callingName",Thrift.Type.STRING,6),a.writeString(this.callingName),a.writeFieldEnd()),null!==this.photoUrl&&void 0!==this.photoUrl&&(a.writeFieldBegin("photoUrl",Thrift.Type.STRING,7),a.writeString(this.photoUrl),a.writeFieldEnd()),null!==this.shortDescription&&void 0!==this.shortDescription&&(a.writeFieldBegin("shortDescription",Thrift.Type.STRING,8),a.writeString(this.shortDescription),a.writeFieldEnd()),null!==this.longDescription&&void 0!==this.longDescription&&(a.writeFieldBegin("longDescription",Thrift.Type.STRING,9),a.writeString(this.longDescription),a.writeFieldEnd()),null!==this.contactUrls&&void 0!==this.contactUrls){a.writeFieldBegin("contactUrls",Thrift.Type.LIST,10),a.writeListBegin(Thrift.Type.STRING,this.contactUrls.length);for(var b in this.contactUrls)this.contactUrls.hasOwnProperty(b)&&(b=this.contactUrls[b],a.writeString(b));a.writeListEnd(),a.writeFieldEnd()}if(null!==this.organizations&&void 0!==this.organizations){a.writeFieldBegin("organizations",Thrift.Type.MAP,11),a.writeMapBegin(Thrift.Type.STRING,Thrift.Type.STRING,Thrift.objectLength(this.organizations));for(var c in this.organizations)if(this.organizations.hasOwnProperty(c)){var d=this.organizations[c];a.writeString(c),a.writeString(d)}a.writeMapEnd(),a.writeFieldEnd()}a.writeFieldStop(),a.writeStructEnd()},RelatedContentProfilePage=function(a){this.relatedContentProfile=null,this.userProfile=null,a&&(void 0!==a.relatedContentProfile&&(this.relatedContentProfile=a.relatedContentProfile),void 0!==a.userProfile&&(this.userProfile=a.userProfile))},RelatedContentProfilePage.prototype={},RelatedContentProfilePage.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRUCT?(this.relatedContentProfile=new RelatedContentProfile,this.relatedContentProfile.read(a)):a.skip(c);break;case 2:c==Thrift.Type.STRUCT?(this.userProfile=new UserProfile,this.userProfile.read(a)):a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RelatedContentProfilePage.prototype.write=function(a){a.writeStructBegin("RelatedContentProfilePage"),null!==this.relatedContentProfile&&void 0!==this.relatedContentProfile&&(a.writeFieldBegin("relatedContentProfile",Thrift.Type.STRUCT,1),this.relatedContentProfile.write(a),a.writeFieldEnd()),null!==this.userProfile&&void 0!==this.userProfile&&(a.writeFieldBegin("userProfile",Thrift.Type.STRUCT,2),this.userProfile.write(a),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},PromotionStatus=function(a){this.promotionId=null,this.optedOut=null,this.shownCount=null,this.timeLastShown=null,a&&(void 0!==a.promotionId&&(this.promotionId=a.promotionId),void 0!==a.optedOut&&(this.optedOut=a.optedOut),void 0!==a.shownCount&&(this.shownCount=a.shownCount),void 0!==a.timeLastShown&&(this.timeLastShown=a.timeLastShown))},PromotionStatus.prototype={},PromotionStatus.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.promotionId=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.BOOL?this.optedOut=a.readBool().value:a.skip(c);break;case 3:c==Thrift.Type.I32?this.shownCount=a.readI32().value:a.skip(c);break;case 4:c==Thrift.Type.I64?this.timeLastShown=a.readI64().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},PromotionStatus.prototype.write=function(a){a.writeStructBegin("PromotionStatus"),null!==this.promotionId&&void 0!==this.promotionId&&(a.writeFieldBegin("promotionId",Thrift.Type.STRING,1),a.writeString(this.promotionId),a.writeFieldEnd()),null!==this.optedOut&&void 0!==this.optedOut&&(a.writeFieldBegin("optedOut",Thrift.Type.BOOL,2),a.writeBool(this.optedOut),a.writeFieldEnd()),null!==this.shownCount&&void 0!==this.shownCount&&(a.writeFieldBegin("shownCount",Thrift.Type.I32,3),a.writeI32(this.shownCount),a.writeFieldEnd()),null!==this.timeLastShown&&void 0!==this.timeLastShown&&(a.writeFieldBegin("timeLastShown",Thrift.Type.I64,4),a.writeI64(this.timeLastShown),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RealTimeAuthentication=function(a){this.authenticationToken=null,a&&void 0!==a.authenticationToken&&(this.authenticationToken=a.authenticationToken)},RealTimeAuthentication.prototype={},RealTimeAuthentication.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.authenticationToken=a.readString().value:a.skip(c);break;case 0:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RealTimeAuthentication.prototype.write=function(a){a.writeStructBegin("RealTimeAuthentication"),null!==this.authenticationToken&&void 0!==this.authenticationToken&&(a.writeFieldBegin("authenticationToken",Thrift.Type.STRING,1),a.writeString(this.authenticationToken),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RealTimePing=function(a){},RealTimePing.prototype={},RealTimePing.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype);b.fid;if(c==Thrift.Type.STOP)break;a.skip(c),a.readFieldEnd()}a.readStructEnd()},RealTimePing.prototype.write=function(a){a.writeStructBegin("RealTimePing"),a.writeFieldStop(),a.writeStructEnd()},RealTimeRequest=function(a){this.realTimeAuthentication=null,this.realTimePing=null,a&&(void 0!==a.realTimeAuthentication&&(this.realTimeAuthentication=a.realTimeAuthentication),void 0!==a.realTimePing&&(this.realTimePing=a.realTimePing))},RealTimeRequest.prototype={},RealTimeRequest.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRUCT?(this.realTimeAuthentication=new RealTimeAuthentication,this.realTimeAuthentication.read(a)):a.skip(c);break;case 2:c==Thrift.Type.STRUCT?(this.realTimePing=new RealTimePing,this.realTimePing.read(a)):a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RealTimeRequest.prototype.write=function(a){a.writeStructBegin("RealTimeRequest"),null!==this.realTimeAuthentication&&void 0!==this.realTimeAuthentication&&(a.writeFieldBegin("realTimeAuthentication",Thrift.Type.STRUCT,1),this.realTimeAuthentication.write(a),a.writeFieldEnd()),null!==this.realTimePing&&void 0!==this.realTimePing&&(a.writeFieldBegin("realTimePing",Thrift.Type.STRUCT,2),this.realTimePing.write(a),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RealTimeAuthenticationResult=function(a){this.pingFrequency=null,this.userMaxMessageEventId=null,a&&(void 0!==a.pingFrequency&&(this.pingFrequency=a.pingFrequency),void 0!==a.userMaxMessageEventId&&(this.userMaxMessageEventId=a.userMaxMessageEventId))},RealTimeAuthenticationResult.prototype={},RealTimeAuthenticationResult.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I16?this.pingFrequency=a.readI16().value:a.skip(c);break;case 2:c==Thrift.Type.I64?this.userMaxMessageEventId=a.readI64().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RealTimeAuthenticationResult.prototype.write=function(a){a.writeStructBegin("RealTimeAuthenticationResult"),null!==this.pingFrequency&&void 0!==this.pingFrequency&&(a.writeFieldBegin("pingFrequency",Thrift.Type.I16,1),a.writeI16(this.pingFrequency),a.writeFieldEnd()),null!==this.userMaxMessageEventId&&void 0!==this.userMaxMessageEventId&&(a.writeFieldBegin("userMaxMessageEventId",Thrift.Type.I64,2),a.writeI64(this.userMaxMessageEventId),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},MessageNotification=function(a){this.syncChunk=null,this.previousEventId=null,a&&(void 0!==a.syncChunk&&(this.syncChunk=a.syncChunk),void 0!==a.previousEventId&&(this.previousEventId=a.previousEventId))},MessageNotification.prototype={},MessageNotification.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRUCT?(this.syncChunk=new MessageSyncChunk,this.syncChunk.read(a)):a.skip(c);break;case 2:c==Thrift.Type.I64?this.previousEventId=a.readI64().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},MessageNotification.prototype.write=function(a){a.writeStructBegin("MessageNotification"),null!==this.syncChunk&&void 0!==this.syncChunk&&(a.writeFieldBegin("syncChunk",Thrift.Type.STRUCT,1),this.syncChunk.write(a),a.writeFieldEnd()),null!==this.previousEventId&&void 0!==this.previousEventId&&(a.writeFieldBegin("previousEventId",Thrift.Type.I64,2),a.writeI64(this.previousEventId),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},RealTimeNotification=function(a){this.authenticationResult=null,this.messageNotification=null,this.realTimePing=null,a&&(void 0!==a.authenticationResult&&(this.authenticationResult=a.authenticationResult),void 0!==a.messageNotification&&(this.messageNotification=a.messageNotification),void 0!==a.realTimePing&&(this.realTimePing=a.realTimePing))},RealTimeNotification.prototype={},RealTimeNotification.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRUCT?(this.authenticationResult=new RealTimeAuthenticationResult,this.authenticationResult.read(a)):a.skip(c);break;case 2:c==Thrift.Type.STRUCT?(this.messageNotification=new MessageNotification,this.messageNotification.read(a)):a.skip(c);break;case 3:c==Thrift.Type.STRUCT?(this.realTimePing=new RealTimePing,this.realTimePing.read(a)):a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},RealTimeNotification.prototype.write=function(a){a.writeStructBegin("RealTimeNotification"),null!==this.authenticationResult&&void 0!==this.authenticationResult&&(a.writeFieldBegin("authenticationResult",Thrift.Type.STRUCT,1),this.authenticationResult.write(a),a.writeFieldEnd()),null!==this.messageNotification&&void 0!==this.messageNotification&&(a.writeFieldBegin("messageNotification",Thrift.Type.STRUCT,2),this.messageNotification.write(a),a.writeFieldEnd()),null!==this.realTimePing&&void 0!==this.realTimePing&&(a.writeFieldBegin("realTimePing",Thrift.Type.STRUCT,3),this.realTimePing.write(a),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},MessagingInvitation=function(a){this.id=null,this.senderUserId=null,this.senderFullName=null,this.senderPhoto=null,this.invitedIdentityId=null,this.invitedContactId=null,this.invitedContactType=null,this.msgCount=null,this.firstMsgSentAt=null,this.created=null,this.threadId=null,a&&(void 0!==a.id&&(this.id=a.id),void 0!==a.senderUserId&&(this.senderUserId=a.senderUserId),void 0!==a.senderFullName&&(this.senderFullName=a.senderFullName),
void 0!==a.senderPhoto&&(this.senderPhoto=a.senderPhoto),void 0!==a.invitedIdentityId&&(this.invitedIdentityId=a.invitedIdentityId),void 0!==a.invitedContactId&&(this.invitedContactId=a.invitedContactId),void 0!==a.invitedContactType&&(this.invitedContactType=a.invitedContactType),void 0!==a.msgCount&&(this.msgCount=a.msgCount),void 0!==a.firstMsgSentAt&&(this.firstMsgSentAt=a.firstMsgSentAt),void 0!==a.created&&(this.created=a.created),void 0!==a.threadId&&(this.threadId=a.threadId))},MessagingInvitation.prototype={},MessagingInvitation.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.id=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.I32?this.senderUserId=a.readI32().value:a.skip(c);break;case 3:c==Thrift.Type.STRING?this.senderFullName=a.readString().value:a.skip(c);break;case 4:c==Thrift.Type.STRING?this.senderPhoto=a.readBinary().value:a.skip(c);break;case 5:c==Thrift.Type.I64?this.invitedIdentityId=a.readI64().value:a.skip(c);break;case 6:c==Thrift.Type.STRING?this.invitedContactId=a.readString().value:a.skip(c);break;case 7:c==Thrift.Type.I32?this.invitedContactType=a.readI32().value:a.skip(c);break;case 8:c==Thrift.Type.I32?this.msgCount=a.readI32().value:a.skip(c);break;case 9:c==Thrift.Type.I64?this.firstMsgSentAt=a.readI64().value:a.skip(c);break;case 10:c==Thrift.Type.I64?this.created=a.readI64().value:a.skip(c);break;case 11:c==Thrift.Type.I64?this.threadId=a.readI64().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},MessagingInvitation.prototype.write=function(a){a.writeStructBegin("MessagingInvitation"),null!==this.id&&void 0!==this.id&&(a.writeFieldBegin("id",Thrift.Type.STRING,1),a.writeString(this.id),a.writeFieldEnd()),null!==this.senderUserId&&void 0!==this.senderUserId&&(a.writeFieldBegin("senderUserId",Thrift.Type.I32,2),a.writeI32(this.senderUserId),a.writeFieldEnd()),null!==this.senderFullName&&void 0!==this.senderFullName&&(a.writeFieldBegin("senderFullName",Thrift.Type.STRING,3),a.writeString(this.senderFullName),a.writeFieldEnd()),null!==this.senderPhoto&&void 0!==this.senderPhoto&&(a.writeFieldBegin("senderPhoto",Thrift.Type.STRING,4),a.writeBinary(this.senderPhoto),a.writeFieldEnd()),null!==this.invitedIdentityId&&void 0!==this.invitedIdentityId&&(a.writeFieldBegin("invitedIdentityId",Thrift.Type.I64,5),a.writeI64(this.invitedIdentityId),a.writeFieldEnd()),null!==this.invitedContactId&&void 0!==this.invitedContactId&&(a.writeFieldBegin("invitedContactId",Thrift.Type.STRING,6),a.writeString(this.invitedContactId),a.writeFieldEnd()),null!==this.invitedContactType&&void 0!==this.invitedContactType&&(a.writeFieldBegin("invitedContactType",Thrift.Type.I32,7),a.writeI32(this.invitedContactType),a.writeFieldEnd()),null!==this.msgCount&&void 0!==this.msgCount&&(a.writeFieldBegin("msgCount",Thrift.Type.I32,8),a.writeI32(this.msgCount),a.writeFieldEnd()),null!==this.firstMsgSentAt&&void 0!==this.firstMsgSentAt&&(a.writeFieldBegin("firstMsgSentAt",Thrift.Type.I64,9),a.writeI64(this.firstMsgSentAt),a.writeFieldEnd()),null!==this.created&&void 0!==this.created&&(a.writeFieldBegin("created",Thrift.Type.I64,10),a.writeI64(this.created),a.writeFieldEnd()),null!==this.threadId&&void 0!==this.threadId&&(a.writeFieldBegin("threadId",Thrift.Type.I64,11),a.writeI64(this.threadId),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()};