/*! Copyright 2009-2016 Evernote Corporation. All rights reserved. */
function Experiment(){function a(){return auth.getCurrentUser()?!!Persistent.get("eligibleForImageExperiment"+auth.getCurrentUser()):!1}function b(){return options.get("saveToEvernote")}function c(){if(!a())return!1;var b=d(auth.getCurrentUser(),"retn_web_saveToEvernoteButton_CC-1897_v1",100);return b>=0&&49>=b}function d(a,b,c){var d=SparkMD5.hash(""+a+b),e=d.charCodeAt(d.length-2)<<8|d.charCodeAt(d.length-1);return e%c}this.eligibleForImageExperiment=a,this.imageHoverEnabledInSettings=b,this.isInGroupA=c,Object.preventExtensions(this)}Object.preventExtensions(Experiment);var experiment=new Experiment;