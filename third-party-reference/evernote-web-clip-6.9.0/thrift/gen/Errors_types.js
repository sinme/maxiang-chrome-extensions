/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
EDAMErrorCode={UNKNOWN:1,BAD_DATA_FORMAT:2,PERMISSION_DENIED:3,INTERNAL_ERROR:4,DATA_REQUIRED:5,LIMIT_REACHED:6,QUOTA_REACHED:7,INVALID_AUTH:8,AUTH_EXPIRED:9,DATA_CONFLICT:10,ENML_VALIDATION:11,SHARD_UNAVAILABLE:12,LEN_TOO_SHORT:13,LEN_TOO_LONG:14,TOO_FEW:15,TOO_MANY:16,UNSUPPORTED_OPERATION:17,TAKEN_DOWN:18,RATE_LIMIT_REACHED:19,BUSINESS_SECURITY_LOGIN_REQUIRED:20},EDAMInvalidContactReason={BAD_ADDRESS:0,DUPLICATE_CONTACT:1,NO_CONNECTION:2},EDAMUserException=function(a){this.errorCode=null,this.parameter=null,a&&(void 0!==a.errorCode&&(this.errorCode=a.errorCode),void 0!==a.parameter&&(this.parameter=a.parameter))},Thrift.inherits(EDAMUserException,Thrift.TException),EDAMUserException.prototype.name="EDAMUserException",EDAMUserException.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I32?this.errorCode=a.readI32().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.parameter=a.readString().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},EDAMUserException.prototype.write=function(a){a.writeStructBegin("EDAMUserException"),null!==this.errorCode&&void 0!==this.errorCode&&(a.writeFieldBegin("errorCode",Thrift.Type.I32,1),a.writeI32(this.errorCode),a.writeFieldEnd()),null!==this.parameter&&void 0!==this.parameter&&(a.writeFieldBegin("parameter",Thrift.Type.STRING,2),a.writeString(this.parameter),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},EDAMSystemException=function(a){this.errorCode=null,this.message=null,this.rateLimitDuration=null,a&&(void 0!==a.errorCode&&(this.errorCode=a.errorCode),void 0!==a.message&&(this.message=a.message),void 0!==a.rateLimitDuration&&(this.rateLimitDuration=a.rateLimitDuration))},Thrift.inherits(EDAMSystemException,Thrift.TException),EDAMSystemException.prototype.name="EDAMSystemException",EDAMSystemException.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.I32?this.errorCode=a.readI32().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.message=a.readString().value:a.skip(c);break;case 3:c==Thrift.Type.I32?this.rateLimitDuration=a.readI32().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},EDAMSystemException.prototype.write=function(a){a.writeStructBegin("EDAMSystemException"),null!==this.errorCode&&void 0!==this.errorCode&&(a.writeFieldBegin("errorCode",Thrift.Type.I32,1),a.writeI32(this.errorCode),a.writeFieldEnd()),null!==this.message&&void 0!==this.message&&(a.writeFieldBegin("message",Thrift.Type.STRING,2),a.writeString(this.message),a.writeFieldEnd()),null!==this.rateLimitDuration&&void 0!==this.rateLimitDuration&&(a.writeFieldBegin("rateLimitDuration",Thrift.Type.I32,3),a.writeI32(this.rateLimitDuration),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},EDAMNotFoundException=function(a){this.identifier=null,this.key=null,a&&(void 0!==a.identifier&&(this.identifier=a.identifier),void 0!==a.key&&(this.key=a.key))},Thrift.inherits(EDAMNotFoundException,Thrift.TException),EDAMNotFoundException.prototype.name="EDAMNotFoundException",EDAMNotFoundException.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:c==Thrift.Type.STRING?this.identifier=a.readString().value:a.skip(c);break;case 2:c==Thrift.Type.STRING?this.key=a.readString().value:a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},EDAMNotFoundException.prototype.write=function(a){a.writeStructBegin("EDAMNotFoundException"),null!==this.identifier&&void 0!==this.identifier&&(a.writeFieldBegin("identifier",Thrift.Type.STRING,1),a.writeString(this.identifier),a.writeFieldEnd()),null!==this.key&&void 0!==this.key&&(a.writeFieldBegin("key",Thrift.Type.STRING,2),a.writeString(this.key),a.writeFieldEnd()),a.writeFieldStop(),a.writeStructEnd()},EDAMInvalidContactsException=function(a){this.contacts=null,this.parameter=null,this.reasons=null,a&&(void 0!==a.contacts&&(this.contacts=a.contacts),void 0!==a.parameter&&(this.parameter=a.parameter),void 0!==a.reasons&&(this.reasons=a.reasons))},Thrift.inherits(EDAMInvalidContactsException,Thrift.TException),EDAMInvalidContactsException.prototype.name="EDAMInvalidContactsException",EDAMInvalidContactsException.prototype.read=function(a){for(a.readStructBegin();;){var b=a.readFieldBegin(),c=(b.fname,b.ftype),d=b.fid;if(c==Thrift.Type.STOP)break;switch(d){case 1:if(c==Thrift.Type.LIST){var e,f=0;this.contacts=[];var g=0;e=a.readListBegin(),g=e.etype,f=e.size;for(var h=0;f>h;++h){var i=null;i=new Contact,i.read(a),this.contacts.push(i)}a.readListEnd()}else a.skip(c);break;case 2:c==Thrift.Type.STRING?this.parameter=a.readString().value:a.skip(c);break;case 3:if(c==Thrift.Type.LIST){var j,k=0;this.reasons=[];var l=0;j=a.readListBegin(),l=j.etype,k=j.size;for(var m=0;k>m;++m){var n=null;n=a.readI32().value,this.reasons.push(n)}a.readListEnd()}else a.skip(c);break;default:a.skip(c)}a.readFieldEnd()}a.readStructEnd()},EDAMInvalidContactsException.prototype.write=function(a){if(a.writeStructBegin("EDAMInvalidContactsException"),null!==this.contacts&&void 0!==this.contacts){a.writeFieldBegin("contacts",Thrift.Type.LIST,1),a.writeListBegin(Thrift.Type.STRUCT,this.contacts.length);for(var b in this.contacts)this.contacts.hasOwnProperty(b)&&(b=this.contacts[b],b.write(a));a.writeListEnd(),a.writeFieldEnd()}if(null!==this.parameter&&void 0!==this.parameter&&(a.writeFieldBegin("parameter",Thrift.Type.STRING,2),a.writeString(this.parameter),a.writeFieldEnd()),null!==this.reasons&&void 0!==this.reasons){a.writeFieldBegin("reasons",Thrift.Type.LIST,3),a.writeListBegin(Thrift.Type.I32,this.reasons.length);for(var c in this.reasons)this.reasons.hasOwnProperty(c)&&(c=this.reasons[c],a.writeI32(c));a.writeListEnd(),a.writeFieldEnd()}a.writeFieldStop(),a.writeStructEnd()};