function initClearlyComponent__detect_custom(_paramInstance){if(_paramInstance){}else{return false;}
var $DC=_paramInstance;switch(true)
{case(!($DC.callbacks)):case(!($DC.callbacks.finished)):case(!($DC.window)):case(!($DC.window.document)):case(!($DC.window.document.body)):if($DC.debug)
{console.log(!($DC.callbacks));console.log(!($DC.callbacks.finished));console.log(!($DC.window));console.log(!($DC.window.document));console.log(!($DC.window.document.body));}
return false;}
$DC.document=$DC.window.document;if($DC.settings){}else{$DC.settings={};}
var _default=function(_setting,_default_value){if($DC.settings[_setting]){}else{$DC.settings[_setting]=_default_value;}};var $=$DC.jQuery;$DC.site=false;$DC.debug=($DC.debug||false);$DC.debugRemembered={};if($DC.debug)
{switch(true)
{case(!(!($DC.window.console&&$DC.window.console.log))):$DC.logOneline=function(msg){$DC.window.console.log(msg);};break;case(!(!($DC.window.opera&&$DC.window.opera.postError))):$DC.logOneline=function(msg){$DC.window.opera.postError(msg);};break;default:$DC.logOneline=function(msg){};break;}
$DC.log=function()
{if($DC.debug){}else{return;}
for(var i=0,il=arguments.length;i<il;i++){$DC.logOneline(arguments[i]);}
$DC.logOneline('-----------------------------------------');};$DC.debugRemember=function(_k,_v)
{$DC.debugRemembered[_k]=_v;};}
else
{$DC.writeLog=function(){return false;};$DC.log=function(){return false;};$DC.debugRemember=function(){return false;};}
$DC.escape_html=function(_string)
{var _replace={"&":"amp",'"':"quot","<":"lt",">":"gt"};return((_string&&_string.replace)?_string.replace(/[&"<>]/g,function(_match){return("&"+_replace[_match]+";");}):'');};$DC.parser__jQueryFindInDocument=function(_expression)
{return $DC.$document.find(_expression);};$DC.parser__trim=function(_text)
{if(!_text||typeof(_text)!=='string'){return'';}
return _text.replace(/^[\s\n\r\t]+/gi,'').replace(/[\s\n\r\t]+$/,'');};$DC.parser__nnl=function(_text)
{if(!_text||typeof(_text)!=='string'){return'';}
return $DC.parser__trim(_text.replace(/[\s\n\r\t]+/gi,' '));};$DC.parser__html=function(_$object)
{var _html=_$object.html();if(_html){}else{return'';}
_html=_html.replace(/<\s+/gi,'<');_html=_html.replace(/\s+>/gi,'>');_html=_html.replace(/\s+\/>/gi,'/>');_html=_html.replace(/<script[^>]*?>([\s\S]*?)<\/script>/gi,'');_html=_html.replace(/<script[^>]*?\/>/gi,'');_html=_html.replace(/<noscript[^>]*?>([\s\S]*?)<\/noscript>/gi,'');return _html;};$DC.sites={'amazon':{'rules':{'main':'^https?://(www|smile)[.]amazon[.](com|co[.]uk|ca|com[.]au|de|fr|es|it|nl|co[.]jp)/([^/]+/)?dp/[^/]{10}','secondary':'^https?://(www|smile)[.]amazon[.](com|co[.]uk|ca|com[.]au|de|fr|es|it|nl|co[.]jp)/gp/product/[^/]{10}'},'validators':{'main':function(_rule){switch(true){case($DC.document.body&&$DC.document.body.id&&($DC.document.body.id=='dp')):return'main';break;case($DC.document.body&&!$DC.document.body.id&&$DC.document.body.className&&($DC.document.body.className=='dp')):return'kindle';break;}
return false;}},'parsers':{'main':function(_rule,$find,_trim,_nnl,_html){return{'headers':{'images':'Images','bullets':'Summary','reviews':_nnl($find('#revMHLContainer > h2').first().text()),'book_description':'Book Description','product_description':'Product Description','dp_review':_nnl($find('#dpr-review-summary-widget > h2').first().text()),'technical_details':_nnl((function()
{var _return=$find('#technicalSpecifications_feature_div > h2').first().text();_return=(_return?_return:$find('#prodDetails > h2').first().text());_return=(_return?_return:$find('#technicalSpecifications_feature_div > h2').first().text());_return=(_return?_return:'Product Specifications');return _return;})())},'name':_nnl($find('h1#title').text()),'url':_nnl($find('head link[rel="canonical"]').attr('href')),'price':_nnl((function()
{var _return=$find('#priceblock_ourprice').text();_return=(_return?_return:$find('#buyNewSection h5 .a-text-right .offer-price').text());return _return;})()),'stars_text':_nnl($find('#acrPopover').attr('title')),'stars_count':_nnl($find('#acrCustomerReviewText').text()),'stars_icon':_nnl((function()
{var _stars='0',_icon=$find('#acrPopover i').get(0);_icon=((_icon&&_icon.className)?_icon.className.replace(/a-star-([0-5][-]?[0-9]?)/gi,function(_whole,_match){_stars=_match;return _whole;}):'');return _stars;})()),'images':(function()
{var _$images=$find('#altImages ul li img');_$images=(_$images.length?_$images:$find('#imageBlockThumbs div > img'));var _return=[];_$images.each(function()
{var _$this=$(this),_is_video=false,_item=''+
_nnl(_$this.attr('src').replace(/[\/]([^.\/]+?)[.][_]([^.\/]+?)[_][.](jpg|png|gif)$/gi,function(_whole,_file,_stuff,_extension)
{_is_video=((_stuff.indexOf('play-button')>-1)||(_file=='video'));return'/'+_file+'.'+_extension;}))+'';if(_item&&!_is_video){_return.push(_item);}});return _return;})(),'bullets':(function()
{var _return=[];$find(''+'#feature-bullets > ul > li, '+'#feature-bullets .a-expander-content > ul > li, '+'#feature-bullets .technicalData > ul > li, '+'#technical-data .content > ul > li'+'').each(function()
{var _$this=$(this),_item=''+
_trim(_$this.text())+'';if(_item){_return.push(_item);}});return _return;})(),'reviews':(function()
{var _return=[];$find('#revMHRL > div').each(function()
{var _$this=$(this),_item={'stars_icon':_nnl((function()
{var _stars='0',_icon=_$this.find('.a-icon-row a i').get(0);_icon=((_icon&&_icon.className)?_icon.className.replace(/a-star-([0-5][-]?[0-9]?)/gi,function(_whole,_match){_stars=_match;return _whole;}):'');return _stars;})()),'title':_nnl(_$this.find('> div > .a-icon-row > a > span').text()),'usefulness':_nnl(_$this.find('> div > .a-size-small').first().text()),'reviewer_and_date':_nnl((function()
{var _$spans=_$this.find('> div > div + span').find('> span');return''+
(''+_$spans.first().text())+
(''+_$spans.last().text())+'';})()),'quote_more_label':_nnl(_$this.find('> div[id^="revData-"] > .a-section .a-declarative a').text()),'quote_more_url':_nnl((function(){var _h=_$this.find('> div[id^="revData-"] > .a-section .a-declarative a').get(0);return((_h&&_h.href)?_h.href:'');})()),'quote':_trim((function()
{var _return_quote=_$this.find('> div[id^="revData-"] > .a-section').last().get(0);_return_quote=(_return_quote?_return_quote.innerText:false);_return_quote=(_return_quote?_return_quote:'');return _return_quote;})())};_item.quote=(_item.quote_more_label?_item.quote.substr(0,(_item.quote.length-_item.quote_more_label.length)):_item.quote);if(_item.title&&_item.quote){_return.push(_item);}
if(_return.length>=5){return false;}});return _return;})(),'book_description':_trim((function()
{var _return='';$find('#bookDesc_iframe').contents().find('#iframeContent p').each(function()
{var _$this=$(this),_item=''+
_trim(_$this.text())+"\n\n"+'';if(_item){_return+=_item;}});_return=(_return?_return:$find('#bookDesc_iframe').contents().find('#iframeContent').get(0));_return=((_return&&_return.innerText)?_return.innerText:_return);_return=((_return&&_return.replace)?_return.replace(/([\n]{3,})/gi,"\n\n"):_return);return _return;})()),'product_description':_trim((function()
{var _return='';$find('#product-description-iframe').contents().find('#pdIframeContent p').each(function()
{var _$this=$(this),_item=''+
_trim(_$this.text())+"\n\n"+'';if(_item){_return+=_item;}});_return=(_return?_return:$find('#product-description-iframe').contents().find('#productDescription .productDescriptionWrapper').get(0));_return=((_return&&_return.innerText)?_return.innerText:_return);_return=((_return&&_return.replace)?_return.replace(/([\n]{3,})/gi,"\n\n"):_return);return _return;})()),'technical_details':(function()
{var _$tables=$find('#technicalSpecifications_feature_div .a-row .a-column > table');_$tables=(_$tables.length?_$tables:$find('#prodDetails .column.col1 .pdTab > table'));_$tables=(_$tables.length?_$tables:$find('#technical-details-table'));_$tables=(_$tables.length?_$tables:$find('#technicalSpecifications_sections'));_$tables=(_$tables.length?_$tables:$find('#aloha-ppd-glance-always-visible-table, #aloha-ppd-glance-additional-table'));var _return_tables=[];_$tables.each(function()
{var _$this_table=$(this),_item_table=(function()
{var _return_rows=[];_$this_table.find('> tr, > tbody > tr').each(function()
{var _$this_row=$(this),_$tds=_$this_row.find('th, td'),_item_row={'label':_trim(_$tds.first().text()),'value':_trim(_$tds.last().text())};if(_item_row.label&&_item_row.value){_return_rows.push(_item_row);}});return _return_rows;})();if(_item_table.length){_return_tables.push(_item_table);}});return _return_tables;})(),'dp_review':(function()
{var _return_different=false,_return={'score':_nnl($find('#dpreviewBadge_feature_div .a-size-medium').first().text()),'score_label':_nnl($find('#dpreviewBadge_feature_div .a-size-mini').first().text()),'pros_label':_nnl($find('#dpr-review-summary-widget .dpr-pros-and-cons .dpr-pros > h3').first().text()),'cons_label':_nnl($find('#dpr-review-summary-widget .dpr-pros-and-cons .dpr-cons > h3').first().text()),'pros':(function()
{var _return_pros=[];$find('#dpr-review-summary-widget .dpr-pros-and-cons .dpr-pros > ul > li').each(function()
{var _$this_pro=$(this),_item_pro=''+
_trim(_$this_pro.text())+'';if(_item_pro){_return_pros.push(_item_pro);}});return _return_pros;})(),'cons':(function()
{var _return_cons=[];$find('#dpr-review-summary-widget .dpr-pros-and-cons .dpr-cons > ul > li').each(function()
{var _$this_con=$(this),_item_con=''+
_trim(_$this_con.text())+'';if(_item_con){_return_cons.push(_item_con);}});return _return_cons;})()};switch(true)
{case(!!$find('#dpr-review-summary-widget .dpr-score-and-conclusion .dpr-conclusion .dpr-conclusion-text').get(0)):_return_different={'summary':_trim($find('#dpr-review-summary-widget .dpr-score-and-conclusion .dpr-conclusion .dpr-conclusion-text').text()),'date':_nnl($find('#dpr-review-summary-widget .dpr-award-and-quote .dpr-review-date').first().text()),'image':_nnl($find('#dpr-review-summary-widget .dpr-award-and-quote img.dpr-award').attr('src')),'more_label':_nnl($find('#dpr-review-summary-widget .dpr-award-and-quote .dpr-quote .dpr-review-link a').text()).replace(/\s*[(]dpreview.com[)]$/,''),'more_url':_nnl((function(){var _h=$find('#dpr-review-summary-widget .dpr-award-and-quote .dpr-quote .dpr-review-link a').get(0);return((_h&&_h.href)?_h.href:'');})())};break;case(!!$find('#dpr-review-summary-widget .dpr-badge-and-quote .dpr-quote .dpr-quote-text').get(0)):_return_different={'summary':_trim($find('#dpr-review-summary-widget .dpr-badge-and-quote .dpr-quote .dpr-quote-text').text()),'date':_nnl($find('#dpr-review-summary-widget .dpr-badge-and-quote .dpr-review-date').first().text()),'image':_nnl($find('#dpr-review-summary-widget .dpr-badge-and-quote img.dpr-award').attr('src')),'more_label':_nnl($find('#dpr-review-summary-widget .dpr-badge-and-quote .dpr-quote .dpr-review-link a').text()).replace(/\s*[(]dpreview.com[)]$/,''),'more_url':_nnl((function(){var _h=$find('#dpr-review-summary-widget .dpr-badge-and-quote .dpr-quote .dpr-review-link a').get(0);return((_h&&_h.href)?_h.href:'');})())};break;}
for(var _k in _return_different){_return[_k]=_return_different[_k];}
return((_return&&_return.summary)?_return:false);})()};},'kindle':function(_rule,$find,_trim,_nnl,_html){return{'headers':{'images':'Images','reviews':_nnl($find('#revMHLContainer > h2').first().text()),'book_description':_nnl((function()
{var _return=$find('#productDescription > h2').first().text();_return=(_return?_return:'Book Description');return _return;})())},'name':_nnl($find('#btAsinTitle').text()),'url':_nnl($find('head link[rel="canonical"]').attr('href')),'price':_nnl($find('#priceBlock .priceLarge').first().text()),'stars_text':_nnl($find('#acr .acrRating').text()),'stars_count':_nnl($find('#acr .acrCount').text()),'stars_icon':_nnl((function()
{var _stars='0',_icon=$find('#acr .acrStars .swSprite').get(0);_icon=((_icon&&_icon.className)?_icon.className.replace(/s_starBig_([0-5][_]?[0-9]?)/gi,function(_whole,_match){_stars=_match;return _whole;}):'');return _stars.replace('_','-').replace(/-0$/,'');})()),'images':(function()
{var _$images=$find('#main-image');var _return=[];_$images.each(function()
{var _$this=$(this),_is_video=false,_item=''+
_nnl(_$this.attr('src').replace(/[\/]([^.\/]+?)[.][_]([^.\/]+?)[_][.](jpg|png|gif)$/gi,function(_whole,_file,_stuff,_extension)
{_is_video=((_stuff.indexOf('play-button')>-1)||(_file=='video'));return'/'+_file+'.'+_extension;}))+'';if(_item&&!_is_video){_return.push(_item);}});return _return;})(),'reviews':(function()
{var _return=[];$find('#revMHRL > div').each(function()
{var _$this=$(this),_item={'stars_icon':_nnl((function()
{var _stars='0',_icon=_$this.find('.swSprite').get(0);_icon=((_icon&&_icon.className)?_icon.className.replace(/s_star_([0-5][_]?[0-9]?)/gi,function(_whole,_match){_stars=_match;return _whole;}):'');return _stars.replace('_','-').replace(/-0$/,'');})()),'title':_nnl(_$this.find('a').first().find('strong').text()),'usefulness':_nnl(_$this.find('.txtsmall').first().text()),'reviewer_and_date':_nnl((function()
{return''+
(''+_nnl(_$this.find('.ath .txtsmall').text()))+', '+
(''+_nnl(_$this.find('.ttl .txtsmall').text()))+'';})()),'quote':_trim((function()
{var _return_quote=_$this.find('.reviewText').get(0);_return_quote=(_return_quote?_return_quote.innerText:false);_return_quote=(_return_quote?_return_quote:'');return _return_quote;})())};_item.quote=(_item.quote_more_label?_item.quote.substr(0,(_item.quote.length-_item.quote_more_label.length)):_item.quote);if(_item.title&&_item.quote){_return.push(_item);}
if(_return.length>=5){return false;}});return _return;})(),'book_description':_trim((function()
{var _return='';$find('#productDescription p').each(function()
{var _$this=$(this),_item=''+
_trim(_$this.text())+"\n\n"+'';if(_item){_return+=_item;}});_return=(_return?_return:$find('#productDescription .productDescriptionWrapper').get(0));_return=((_return&&_return.innerText)?_return.innerText:_return);_return=((_return&&_return.replace)?_return.replace(/([\n]{3,})/gi,"\n\n"):_return);return _return;})())};}}},'linked_in':{'rules':{'main':'^http[s]?://www[.]linkedin[.]com/profile/view[?][\S]*id=([0-9]{2,10})','vanity':'^http[s]?://(www)|([a-z]{2})[.]linkedin[.]com/in/([^/]+)$','public':'^http[s]?://(www)|([a-z]{2})[.]linkedin[.]com/pub/([^/]+)/'},'validators':{'main':function(_rule){if($DC.document.body&&$DC.document.body.id&&$DC.document.body.id.indexOf&&($DC.document.body.id.indexOf('profile')>-1)){}else{return false;}
return((_rule=='main')?(($DC.document.body.id=='pagekey-nprofile_my_profile')?'self':'main'):_rule);}},'parsers':{'main':function(_rule,$find,_trim,_nnl,_html){return{'headers':{'experience':_nnl($find('#background-experience h3').first().text()),'skills':_nnl($find('#background-skills h3').first().text()),'education':_nnl($find('#background-education h3').first().text()),'endorsements':_nnl($find('#endorsements h2').first().text()),'summary':_nnl((function()
{var _return_summary=$find('#background-summary h3').first().text();_return_summary=(_return_summary?_return_summary:$find('#background h2').first().text());_return_summary=(_return_summary?_return_summary:'');return _return_summary;})())},'name':_nnl($find('#name h1').text()),'headline':_nnl($find('#headline').text()),'demographics':_nnl(($find('#location .locality').text()+' | '+$find('#location .industry').text()).replace(/\s*[|]\s*$/gi,'')),'email':_nnl($find('#email').text()),'image':_nnl($find('#top-card .profile-top-card').first().not('.no-photo').find('.profile-picture img').attr('src')),'url':_nnl((function()
{var _return=$find('head link[rel="canonical"]').attr('href');_return=(_return?_return:$find('.public-profile a.view-public-profile').attr('href'));return _return;})()),'experience_summary':_nnl(($find('#overview-summary-past > th > a').text()+': '+$find('#overview-summary-past > td > ol').text()).replace(/\s*[:]\s*$/gi,'')),'education_summary':_nnl(($find('#overview-summary-education > th > a').text()+': '+$find('#overview-summary-education > td > ol').text()).replace(/\s*[:]\s*$/gi,'')),'current_summary':_nnl(($find('#overview-summary-current > th > a').text()+': '+$find('#overview-summary-current > td > ol').text()).replace(/\s*[:]\s*$/gi,'')),'description':_trim($find('#summary-item-view > .summary').text()),'experience':(function()
{var _return=[];$find('#background-experience > div').each(function()
{var _$this=$(this),_item={'title_and_company':_nnl(_$this.find('header h4').text()+', '+_$this.find('header h4 + h5').text()),'period_and_location':_nnl((_$this.find('> div > .experience-date-locale').text().replace(_$this.find('> div > .experience-date-locale .locality').text(),'')+' | '+_$this.find('> div > .experience-date-locale .locality').text()).replace(/\s*[|]\s*$/gi,'')),'description':_trim(_$this.find('> div > .description').text())};if(_item.title_and_company){_return.push(_item);}});return _return;})(),'skills':(function()
{var _return=[];$find('#profile-skills .skills-section > li > .skill-pill').each(function()
{var _$this=$(this),_item={'name':_nnl(_$this.find('.endorse-item-name').text()),'count':_nnl(_$this.find('.endorse-count').text())};if(_item.name){_return.push(_item);}
if(_return.length>=10){return false;}});return _return;})(),'education':(function()
{var _return=[];$find('#background-education > .section-item').each(function()
{var _$this=$(this),_item={'institution':_nnl(_$this.find('header h4').text()),'major_and_degree':_nnl(_$this.find('header h5').text()),'period':_nnl(_$this.find('.education-date').text())};if(_item.institution){_return.push(_item);}});return _return;})(),'endorsements':(function()
{var _return_positions=[];$find('#endorsements .endorsements-received > ol > li').each(function()
{var _$this_position=$(this),_item_position={'position_and_company':_nnl((_$this_position.find('> hgroup > h3').text()+', '+_$this_position.find('> hgroup > h4').text()).replace(/,\s*$/gi,'')),'endorsements':(function()
{var _return_endorsements=[];_$this_position.find('> .endorsement-full').each(function()
{var _$this_endorsement=$(this),_item_endorsement={'quote':_trim(_$this_endorsement.find('blockquote p').text()),'person_and_position':_nnl((_$this_endorsement.find('hgroup h5').text()+', '+_$this_endorsement.find('hgroup h6').text()).replace(/,\s*$/gi,'')),'person_url':_nnl((function(){var _h=_$this_endorsement.find('hgroup h5 a').get(0);return((_h&&_h.href)?_h.href:'');})()).replace(/view?id=([0-9]+?)&(.*)$/,function(_whole,_id){return('view?id='+_id);}),'date_and_connection':_nnl(_$this_endorsement.find('.endorsement-date').text())};if(_item_endorsement.quote&&_item_endorsement.person_and_position){_return_endorsements.push(_item_endorsement);}
if(_return_endorsements.length>=3){return false;}});return _return_endorsements;})()};if(_item_position.position_and_company&&_item_position.endorsements.length){_return_positions.push(_item_position);}
if(_return_positions.length>=3){return false;}});return _return_positions;})()};},'self':function(_rule,$find,_trim,_nnl,_html){return{'headers':{'experience':_nnl($find('#background-experience h3').first().text()),'skills':_nnl($find('#background-skills h3').first().text()),'education':_nnl($find('#background-education h3').first().text()),'endorsements':_nnl($find('#endorsements h2').first().text()),'summary':_nnl((function()
{var _return_summary=$find('#background-summary h3').first().text();_return_summary=(_return_summary?_return_summary:$find('#background h2').first().text());_return_summary=(_return_summary?_return_summary:'');return _return_summary;})())},'name':_nnl($find('#name > h1 > span > span').text()),'headline':_nnl($find('#headline p').text()),'demographics':_nnl(($find('#location dl dd').first().text()+' | '+$find('#location dl dd').last().text()).replace(/\s*[|]\s*$/gi,'')),'email':_nnl($find('#email ul > li').first().text()),'image':_nnl($find('#top-card .profile-top-card').first().not('.no-photo').find('.profile-picture img').attr('src')),'url':_nnl($find('.profile-actions .public-profile-section .public-profile .public-profile-url').text()),'experience_summary':_nnl(($find('#overview-summary-past > th').text()+': '+$find('#overview-summary-past > td ol').text()).replace(/\s*[:]\s*$/gi,'')),'education_summary':_nnl(($find('#overview-summary-education > th').text()+': '+$find('#overview-summary-education > td ol').text()).replace(/\s*[:]\s*$/gi,'')),'current_summary':_nnl(($find('#overview-summary-current > th').text()+': '+$find('#overview-summary-current > td ol').text()).replace(/\s*[:]\s*$/gi,'')),'description':_trim($find('#summary-item-view > .summary > p > span').text()),'experience':(function()
{var _return=[];$find('#background-experience > .entity-container > .entity').each(function()
{var _$this=$(this),_item={'title_and_company':_nnl(_$this.find('> div > header > h4 > span').text()+', '+_$this.find('> div > header h4 + h5').find('> span').text()),'period_and_location':_nnl((_$this.find('> div .experience-date-locale').text().replace(_$this.find('> div .experience-date-locale .locality').text(),'')+' | '+_$this.find('> div .experience-date-locale .locality').text()).replace(/\s*[|]\s*$/gi,'')),'description':_trim(_$this.find('> div > .description > span').text())};if(_item.title_and_company){_return.push(_item);}});return _return;})(),'skills':(function()
{var _return=[];$find('#profile-skills .skills-section > li > .skill-pill').each(function()
{var _$this=$(this),_item={'name':_nnl(_$this.find('.endorse-item-name').text()),'count':_nnl(_$this.find('.endorse-count').text())};if(_item.name){_return.push(_item);}
if(_return.length>=10){return false;}});return _return;})(),'education':(function()
{var _return=[];$find('#background-education > .entity-container > .entity').each(function()
{var _$this=$(this),_item={'institution':_nnl(_$this.find('header > h4 > span').text()),'major_and_degree':_nnl(_$this.find('header > h5 > span').text()),'period':_nnl(_$this.find('> div > div > .date-header-field > span').text())};if(_item.institution){_return.push(_item);}});return _return;})(),'endorsements':(function()
{var _return_positions=[];$find('#endorsements .endorsements-received > ol > li').each(function()
{var _$this_position=$(this),_item_position={'position_and_company':_nnl((_$this_position.find('> h3').first().text()+', '+_$this_position.find('> h4').first().text()).replace(/,\s*$/gi,'')),'endorsements':(function()
{var _return_endorsements=[];_$this_position.find('> .endorsement-full').each(function()
{var _$this_endorsement=$(this),_item_endorsement={'quote':_trim(_$this_endorsement.find('> .endorsement-info > .description').text()),'person_and_position':_nnl((_$this_endorsement.find('> .endorsement-info > h5').text()+', '+_$this_endorsement.find('> .endorsement-info > h6').text()).replace(/,\s*$/gi,'')),'person_url':_nnl((function(){var _h=_$this_endorsement.find('> .endorsement-info > h5 a').get(0);return((_h&&_h.href)?_h.href:'');})()).replace(/view?id=([0-9]+?)&(.*)$/,function(_whole,_id){return('view?id='+_id);}),'date_and_connection':_nnl(_$this_endorsement.find('> .endorsement-info > .endorsement-date').text())};if(_item_endorsement.quote&&_item_endorsement.person_and_position){_return_endorsements.push(_item_endorsement);}
if(_return_endorsements.length>=3){return false;}});return _return_endorsements;})()};if(_item_position.position_and_company&&_item_position.endorsements.length){_return_positions.push(_item_position);}
if(_return_positions.length>=3){return false;}});return _return_positions;})()};}}},'youtube':{'rules':{'main':'^http[s]?://www[.]youtube[.]com/watch[?][\S]*v=([a-z0-9_-]{5,20})'},'validators':{'main':function(_rule){if($DC.document.body&&$DC.document.body.id&&($DC.document.body.id=='body')&&$DC.document.getElementById&&$DC.document.getElementById('player')){}else{return false;}
return _rule;}},'parsers':{'main':function(_rule,$find,_trim,_nnl,_html){return{'headers':{'summary':'Description','comments':'Top Comments'},'url':_nnl($find('.watch-main-col > link[itemprop="url"]').first().attr('href')),'image':_nnl($find('.watch-main-col > link[itemprop="thumbnailUrl"]').first().attr('href')),'title':_nnl($find('#watch-header .watch-title').text()),'published':_nnl($find('#watch-uploader-info .watch-time-text').first().text()),'author':_nnl($find('#watch-header .yt-user-info').first().find('> a').first().text()),'author_url':_nnl((function(){var _h=$find('#watch-header .yt-user-info').first().find('> a').first().get(0);return((_h&&_h.href)?_h.href:'');})()),'views':_nnl($find('#watch-header .watch-action-buttons .watch-view-count').text()),'views_label':_nnl($find('#watch-related .view-count').first().text().replace(/^[0-9,. ]+/,'')),'summary_html':_html($find('#eow-description')),'comments':(function()
{var _return=[];$find('#yt-comments-list > .comment-entry').each(function()
{var _$this=$(this).find('> .comment-item').first().find('> .content'),_item={'author':_nnl(_$this.find('> .comment-header > .user-name').text()),'date':_nnl(_$this.find('> .comment-header > .time').text()),'quote_html':_html(_$this.find('> .comment-text > .comment-text-content'))};if(_item.quote_html){_return.push(_item);}
if(_return.length>=10){return false;}});return _return;})()};}}}};for(var _site in $DC.sites){for(var _rule in $DC.sites[_site].rules){$DC.sites[_site].rules[_rule]=new RegExp($DC.sites[_site].rules[_rule],'gi');}}
$DC.check=function()
{var _url=$DC.window.location.href,_validator=false,_validator_fn=false,_parser=false,_parser_fn=false;for(var _site in $DC.sites)
{for(var _rule in $DC.sites[_site].rules)
{if(_url.match($DC.sites[_site].rules[_rule]))
{_validator=_rule;_validator_fn=$DC.sites[_site].validators[_rule];if(_validator_fn){}else
{_validator='main';_validator_fn=$DC.sites[_site].validators.main;}
_parser=_validator_fn(_rule);_parser=((_parser===true)?_rule:_parser);_parser_fn=(_parser?($DC.sites[_site].parsers[_parser]?$DC.sites[_site].parsers[_parser]:$DC.sites[_site].parsers.main):false);if(_parser&&_parser_fn)
{$DC.site={'id':_site,'rule':_rule,'validator':_validator,'parser':_parser};return $DC.site;}}}}
$DC.site=false;return false;};$DC.start=function()
{if($DC.site){}else{$DC.check();}
if($DC.site){}else{return;}
if($DC.jQuery){}else{return;}
if($DC.jQuery&&!$){$=$DC.jQuery;}
$DC.$window=$($DC.window);$DC.$document=$($DC.document);var _parser=$DC.sites[$DC.site.id].parsers[$DC.site.parser];if(_parser){}else{_parser=$DC.sites[$DC.site.id].parsers.main;}
var _data=_parser($DC.site.rule,$DC.parser__jQueryFindInDocument,$DC.parser__trim,$DC.parser__nnl,$DC.parser__html);for(var _key in _data){if(_data[_key]){}else{delete _data[_key];}}
var _return={'site':$DC.site,'data':_data};$DC.callbacks.finished(_return);};return $DC;}