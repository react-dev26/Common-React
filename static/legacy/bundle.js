/**
 *  JQUERY-FORM-VALIDATOR
 *
 *  @website by
 *  @license MIT
 *  @version 2.2.83
 */

!function(a){"use strict";var b=a(window),c=function(b){if(b.valAttr("error-msg-container"))return a(b.valAttr("error-msg-container"));var c=b.parent();if(!c.hasClass("form-group")&&!c.closest("form").hasClass("form-horizontal")){var d=c.closest(".form-group");if(d.length)return d.eq(0)}return c},d=function(a,b){a.addClass(b.errorElementClass).removeClass("valid"),c(a).addClass(b.inputParentClassOnError).removeClass(b.inputParentClassOnSuccess),""!==b.borderColorOnError&&a.css("border-color",b.borderColorOnError)},e=function(b,d){b.each(function(){var b=a(this);f(b,"",d,d.errorMessagePosition),b.removeClass("valid").removeClass(d.errorElementClass).css("border-color",""),c(b).removeClass(d.inputParentClassOnError).removeClass(d.inputParentClassOnSuccess).find("."+d.errorMessageClass).remove()})},f=function(d,e,f,g){var h=document.getElementById(d.attr("name")+"_err_msg"),i=function(a){b.trigger("validationErrorDisplay",[d,a]),a.html(e)},j={};if(h)i(a(h));else if("object"==typeof g){var k=!1;g.find("."+f.errorMessageClass).each(function(){return this.inputReferer===d[0]?(k=a(this),!1):void 0}),k?e?i(k):k.remove():(j=a('<div class="'+f.errorMessageClass+'"></div>'),i(j),j[0].inputReferer=d[0],g.prepend(j))}else{var l=c(d);j=l.find("."+f.errorMessageClass+".help-block"),0===j.length&&(j=a("<span></span>").addClass("help-block").addClass(f.errorMessageClass),j.appendTo(l)),i(j)}},g=function(b,c,d,e){var f,g=e.errorMessageTemplate.messages.replace(/\{errorTitle\}/g,c),h=[];a.each(d,function(a,b){h.push(e.errorMessageTemplate.field.replace(/\{msg\}/g,b))}),g=g.replace(/\{fields\}/g,h.join("")),f=e.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g,e.errorMessageClass),f=f.replace(/\{messages\}/g,g),b.children().eq(0).before(f)};a.fn.validateOnBlur=function(b,c){return this.find("*[data-validation]").bind("blur.validation",function(){a(this).validateInputOnBlur(b,c,!0,"blur")}),c.validateCheckboxRadioOnClick&&this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation",function(){a(this).validateInputOnBlur(b,c,!0,"click")}),this},a.fn.validateOnEvent=function(b,c){return this.find("*[data-validation-event]").each(function(){var d=a(this),e=d.valAttr("event");e&&d.unbind(e+".validation").bind(e+".validation",function(){a(this).validateInputOnBlur(b,c,!0,e)})}),this},a.fn.showHelpOnFocus=function(b){return b||(b="data-validation-help"),this.find(".has-help-txt").valAttr("has-keyup-event",!1).removeClass("has-help-txt"),this.find("textarea,input").each(function(){var c=a(this),d="jquery_form_help_"+(c.attr("name")||"").replace(/(:|\.|\[|\])/g,""),e=c.attr(b);e&&c.addClass("has-help-txt").unbind("focus.help").bind("focus.help",function(){var b=c.parent().find("."+d);0===b.length&&(b=a("<span />").addClass(d).addClass("help").addClass("help-block").text(e).hide(),c.after(b)),b.fadeIn()}).unbind("blur.help").bind("blur.help",function(){a(this).parent().find("."+d).fadeOut("slow")})}),this},a.fn.validate=function(b,c,d){var e=a.extend({},a.formUtils.LANG,d||{});this.each(function(){var d=a(this),f=d.closest("form").get(0).validationConfig||{};d.one("validation",function(a,c){"function"==typeof b&&b(c,this,a)}),d.validateInputOnBlur(e,a.extend({},f,c||{}),!0)})},a.fn.willPostponeValidation=function(){return(this.valAttr("suggestion-nr")||this.valAttr("postpone")||this.hasClass("hasDatepicker"))&&!window.postponedValidation},a.fn.validateInputOnBlur=function(b,g,h,i){if(a.formUtils.eventType=i,this.willPostponeValidation()){var j=this,k=this.valAttr("postpone")||200;return window.postponedValidation=function(){j.validateInputOnBlur(b,g,h,i),window.postponedValidation=!1},setTimeout(function(){window.postponedValidation&&window.postponedValidation()},k),this}b=a.extend({},a.formUtils.LANG,b||{}),e(this,g);var l=this,m=l.closest("form"),n=a.formUtils.validateInput(l,b,g,m,i);return n.isValid?n.shouldChangeDisplay&&(l.addClass("valid"),c(l).addClass(g.inputParentClassOnSuccess)):n.isValid||(d(l,g),f(l,n.errorMsg,g,g.errorMessagePosition),h&&l.unbind("keyup.validation").bind("keyup.validation",function(){a(this).validateInputOnBlur(b,g,!1,"keyup")})),this},a.fn.valAttr=function(a,b){return void 0===b?this.attr("data-validation-"+a):b===!1||null===b?this.removeAttr("data-validation-"+a):(a=a.length>0?"-"+a:"",this.attr("data-validation"+a,b))},a.fn.isValid=function(h,i,j){if(a.formUtils.isLoadingModules){var k=this;return setTimeout(function(){k.isValid(h,i,j)},200),null}i=a.extend({},a.formUtils.defaultConfig(),i||{}),h=a.extend({},a.formUtils.LANG,h||{}),j=j!==!1,a.formUtils.errorDisplayPreventedWhenHalted&&(delete a.formUtils.errorDisplayPreventedWhenHalted,j=!1),a.formUtils.isValidatingEntireForm=!0,a.formUtils.haltValidation=!1;var l=function(b,c){a.inArray(b,n)<0&&n.push(b),o.push(c),c.attr("current-error",b),j&&d(c,i)},m=[],n=[],o=[],p=this,q=function(b,c){return"submit"===c||"button"===c||"reset"===c?!0:a.inArray(b,i.ignore||[])>-1};if(j&&(p.find("."+i.errorMessageClass+".alert").remove(),e(p.find("."+i.errorElementClass+",.valid"),i)),p.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function(){var b=a(this),d=b.attr("type"),e="radio"===d||"checkbox"===d,f=b.attr("name");if(!q(f,d)&&(!e||a.inArray(f,m)<0)){e&&m.push(f);var g=a.formUtils.validateInput(b,h,i,p,"submit");g.shouldChangeDisplay&&(g.isValid?g.isValid&&(b.valAttr("current-error",!1).addClass("valid"),c(b).addClass(i.inputParentClassOnSuccess)):l(g.errorMsg,b))}}),"function"==typeof i.onValidate){var r=i.onValidate(p);a.isArray(r)?a.each(r,function(a,b){l(b.message,b.element)}):r&&r.element&&r.message&&l(r.message,r.element)}return a.formUtils.isValidatingEntireForm=!1,!a.formUtils.haltValidation&&o.length>0?(j&&("top"===i.errorMessagePosition?g(p,h.errorTitle,n,i):"custom"===i.errorMessagePosition?"function"==typeof i.errorMessageCustom&&i.errorMessageCustom(p,h.errorTitle,n,i):a.each(o,function(a,b){f(b,b.attr("current-error"),i,i.errorMessagePosition)}),i.scrollToTopOnError&&b.scrollTop(p.offset().top-20)),!1):(!j&&a.formUtils.haltValidation&&(a.formUtils.errorDisplayPreventedWhenHalted=!0),!a.formUtils.haltValidation)},a.fn.validateForm=function(a,b){return window.console&&"function"==typeof window.console.warn&&window.console.warn("Use of deprecated function $.validateForm, use $.isValid instead"),this.isValid(a,b,!0)},a.fn.restrictLength=function(b){return new a.formUtils.lengthRestriction(this,b),this},a.fn.addSuggestions=function(b){var c=!1;return this.find("input").each(function(){var d=a(this);c=a.split(d.attr("data-suggestions")),c.length>0&&!d.hasClass("has-suggestions")&&(a.formUtils.suggest(d,c,b),d.addClass("has-suggestions"))}),this},a.split=function(b,c){if("function"!=typeof c){if(!b)return[];var d=[];return a.each(b.split(c?c:/[,|\-\s]\s*/g),function(b,c){c=a.trim(c),c.length&&d.push(c)}),d}b&&a.each(b.split(/[,|\-\s]\s*/g),function(b,d){return d=a.trim(d),d.length?c(d,b):void 0})},a.validate=function(c){var d=a.extend(a.formUtils.defaultConfig(),{form:"form",validateOnEvent:!1,validateOnBlur:!0,validateCheckboxRadioOnClick:!0,showHelpOnFocus:!0,addSuggestions:!0,modules:"",onModulesLoaded:null,language:!1,onSuccess:!1,onError:!1,onElementValidate:!1});if(c=a.extend(d,c||{}),c.lang&&"en"!==c.lang){var f="lang/"+c.lang+".js";c.modules+=c.modules.length?","+f:f}a(c.form).each(function(d,f){f.validationConfig=c;var g=a(f);b.trigger("formValidationSetup",[g,c]),g.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),g.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),g.bind("submit.validation",function(){var b=a(this);if(a.formUtils.haltValidation)return!1;if(a.formUtils.isLoadingModules)return setTimeout(function(){b.trigger("submit.validation")},200),!1;var d=b.isValid(c.language,c);if(a.formUtils.haltValidation)return!1;if(!d||"function"!=typeof c.onSuccess)return d||"function"!=typeof c.onError?d:(c.onError(b),!1);var e=c.onSuccess(b);return e===!1?!1:void 0}).bind("reset.validation",function(){a(this).find("."+c.errorMessageClass+".alert").remove(),e(a(this).find("."+c.errorElementClass+",.valid"),c)}).addClass("has-validation-callback"),c.showHelpOnFocus&&g.showHelpOnFocus(),c.addSuggestions&&g.addSuggestions(),c.validateOnBlur&&(g.validateOnBlur(c.language,c),g.bind("html5ValidationAttrsFound",function(){g.validateOnBlur(c.language,c)})),c.validateOnEvent&&g.validateOnEvent(c.language,c)}),""!==c.modules&&a.formUtils.loadModules(c.modules,!1,function(){"function"==typeof c.onModulesLoaded&&c.onModulesLoaded(),b.trigger("validatorsLoaded",["string"==typeof c.form?a(c.form):c.form,c])})},a.formUtils={defaultConfig:function(){return{ignore:[],errorElementClass:"error",borderColorOnError:"#b94a48",errorMessageClass:"form-error",validationRuleAttribute:"data-validation",validationErrorMsgAttribute:"data-validation-error-msg",errorMessagePosition:"element",errorMessageTemplate:{container:'<div class="{errorMessageClass} alert alert-danger">{messages}</div>',messages:"<strong>{errorTitle}</strong><ul>{fields}</ul>",field:"<li>{msg}</li>"},errorMessageCustom:g,scrollToTopOnError:!0,dateFormat:"yyyy-mm-dd",addValidClassOnAll:!1,decimalSeparator:".",inputParentClassOnError:"has-error",inputParentClassOnSuccess:"has-success",validateHiddenInputs:!1}},validators:{},_events:{load:[],valid:[],invalid:[]},haltValidation:!1,isValidatingEntireForm:!1,addValidator:function(a){var b=0===a.name.indexOf("validate_")?a.name:"validate_"+a.name;void 0===a.validateOnKeyUp&&(a.validateOnKeyUp=!0),this.validators[b]=a},isLoadingModules:!1,loadedModules:{},loadModules:function(c,d,e){if(void 0===e&&(e=!0),a.formUtils.isLoadingModules)return void setTimeout(function(){a.formUtils.loadModules(c,d,e)});var f=!1,g=function(c,d){var g=a.split(c),h=g.length,i=function(){h--,0===h&&(a.formUtils.isLoadingModules=!1,e&&f&&("function"==typeof e?e():b.trigger("validatorsLoaded")))};h>0&&(a.formUtils.isLoadingModules=!0);var j="?_="+(new Date).getTime(),k=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];a.each(g,function(b,c){if(c=a.trim(c),0===c.length)i();else{var e=d+c+(".js"===c.slice(-3)?"":".js"),g=document.createElement("SCRIPT");e in a.formUtils.loadedModules?i():(a.formUtils.loadedModules[e]=1,f=!0,g.type="text/javascript",g.onload=i,g.src=e+(".dev.js"===e.slice(-7)?j:""),g.onerror=function(){"console"in window&&window.console.log&&window.console.log("Unable to load form validation module "+e)},g.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&(i(),this.onload=null,this.onreadystatechange=null)},k.appendChild(g))}})};if(d)g(c,d);else{var h=function(){var b=!1;return a('script[src*="form-validator"]').each(function(){return b=this.src.substr(0,this.src.lastIndexOf("/"))+"/","/"===b&&(b=""),!1}),b!==!1?(g(c,b),!0):!1};h()||a(h)}},validateInput:function(b,c,d,e,f){b.trigger("beforeValidation"),d=d||a.formUtils.defaultConfig(),c=c||a.formUtils.LANG;var g=b.val()||"",h={isValid:!0,shouldChangeDisplay:!0,errorMsg:""},i=b.valAttr("optional"),j=!1,k=!1,l=!1,m=b.valAttr("if-checked"),n=b.valAttr("if-checked-value");if(b.attr("disabled")||!b.is(":visible")&&!d.validateHiddenInputs)return h.shouldChangeDisplay=!1,h;null!=m&&(j=!0,l=e.find('input[name="'+m+'"]'),null!=n?l.each(function(b,c){a(c).prop("checked")&&a(c).val()===n&&(k=!0)}):l.prop("checked")&&(k=!0));var o=!g&&"number"===b[0].type;if(!g&&"true"===i&&!o||j&&!k)return h.shouldChangeDisplay=d.addValidClassOnAll,h;var p=b.attr(d.validationRuleAttribute),q=!0;return p?(a.split(p,function(h){0!==h.indexOf("validate_")&&(h="validate_"+h);var i=a.formUtils.validators[h];if(!i||"function"!=typeof i.validatorFunction)throw new Error('Using undefined validator "'+h+'"');"validate_checkbox_group"===h&&(b=e.find('[name="'+b.attr("name")+'"]:eq(0)'));var j=null;return("keyup"!==f||i.validateOnKeyUp)&&(j=i.validatorFunction(g,b,d,c,e)),j?void 0:(q=null,null!==j&&(q=b.attr(d.validationErrorMsgAttribute+"-"+h.replace("validate_","")),q||(q=b.attr(d.validationErrorMsgAttribute),q||(q=c[i.errorMessageKey],q||(q=i.errorMessage)))),!1)}," "),"string"==typeof q?(b.trigger("validation",!1),h.errorMsg=q,h.isValid=!1,h.shouldChangeDisplay=!0):null===q?h.shouldChangeDisplay=d.addValidClassOnAll:(b.trigger("validation",!0),h.shouldChangeDisplay=!0),"function"==typeof d.onElementValidate&&null!==q&&d.onElementValidate(h.isValid,b,e,q),h):(h.shouldChangeDisplay=d.addValidClassOnAll,h)},parseDate:function(b,c){var d,e,f,g,h=c.replace(/[a-zA-Z]/gi,"").substring(0,1),i="^",j=c.split(h||null);if(a.each(j,function(a,b){i+=(a>0?"\\"+h:"")+"(\\d{"+b.length+"})"}),i+="$",d=b.match(new RegExp(i)),null===d)return!1;var k=function(b,c,d){for(var e=0;e<c.length;e++)if(c[e].substring(0,1)===b)return a.formUtils.parseDateInt(d[e+1]);return-1};return f=k("m",j,d),e=k("d",j,d),g=k("y",j,d),2===f&&e>28&&(g%4!==0||g%100===0&&g%400!==0)||2===f&&e>29&&(g%4===0||g%100!==0&&g%400===0)||f>12||0===f?!1:this.isShortMonth(f)&&e>30||!this.isShortMonth(f)&&e>31||0===e?!1:[g,f,e]},parseDateInt:function(a){return 0===a.indexOf("0")&&(a=a.replace("0","")),parseInt(a,10)},isShortMonth:function(a){return a%2===0&&7>a||a%2!==0&&a>7},lengthRestriction:function(b,c){var d=parseInt(c.text(),10),e=0,f=function(){var a=b.val().length;if(a>d){var f=b.scrollTop();b.val(b.val().substring(0,d)),b.scrollTop(f)}e=d-a,0>e&&(e=0),c.text(e)};a(b).bind("keydown keyup keypress focus blur",f).bind("cut paste",function(){setTimeout(f,100)}),a(document).bind("ready",f)},numericRangeCheck:function(b,c){var d=a.split(c),e=parseInt(c.substr(3),10);return 1===d.length&&-1===c.indexOf("min")&&-1===c.indexOf("max")&&(d=[c,c]),2===d.length&&(b<parseInt(d[0],10)||b>parseInt(d[1],10))?["out",d[0],d[1]]:0===c.indexOf("min")&&e>b?["min",e]:0===c.indexOf("max")&&b>e?["max",e]:["ok"]},_numSuggestionElements:0,_selectedSuggestion:null,_previousTypedVal:null,suggest:function(c,d,e){var f={css:{maxHeight:"150px",background:"#FFF",lineHeight:"150%",textDecoration:"underline",overflowX:"hidden",overflowY:"auto",border:"#CCC solid 1px",borderTop:"none",cursor:"pointer"},activeSuggestionCSS:{background:"#E9E9E9"}},g=function(a,b){var c=b.offset();a.css({width:b.outerWidth(),left:c.left+"px",top:c.top+b.outerHeight()+"px"})};e&&a.extend(f,e),f.css.position="absolute",f.css["z-index"]=9999,c.attr("autocomplete","off"),0===this._numSuggestionElements&&b.bind("resize",function(){a(".jquery-form-suggestions").each(function(){var b=a(this),c=b.attr("data-suggest-container");g(b,a(".suggestions-"+c).eq(0))})}),this._numSuggestionElements++;var h=function(b){var c=b.valAttr("suggestion-nr");a.formUtils._selectedSuggestion=null,a.formUtils._previousTypedVal=null,a(".jquery-form-suggestion-"+c).fadeOut("fast")};return c.data("suggestions",d).valAttr("suggestion-nr",this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest",function(){a(this).trigger("keyup"),a.formUtils._selectedSuggestion=null}).unbind("keyup.suggest").bind("keyup.suggest",function(){var b=a(this),d=[],e=a.trim(b.val()).toLocaleLowerCase();if(e!==a.formUtils._previousTypedVal){a.formUtils._previousTypedVal=e;var i=!1,j=b.valAttr("suggestion-nr"),k=a(".jquery-form-suggestion-"+j);if(k.scrollTop(0),""!==e){var l=e.length>2;a.each(b.data("suggestions"),function(a,b){var c=b.toLocaleLowerCase();return c===e?(d.push("<strong>"+b+"</strong>"),i=!0,!1):void((0===c.indexOf(e)||l&&c.indexOf(e)>-1)&&d.push(b.replace(new RegExp(e,"gi"),"<strong>$&</strong>")))})}i||0===d.length&&k.length>0?k.hide():d.length>0&&0===k.length?(k=a("<div></div>").css(f.css).appendTo("body"),c.addClass("suggestions-"+j),k.attr("data-suggest-container",j).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-"+j)):d.length>0&&!k.is(":visible")&&k.show(),d.length>0&&e.length!==d[0].length&&(g(k,b),k.html(""),a.each(d,function(c,d){a("<div></div>").append(d).css({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"5px"}).addClass("form-suggest-element").appendTo(k).click(function(){b.focus(),b.val(a(this).text()),h(b)})}))}}).unbind("keydown.validation").bind("keydown.validation",function(b){var c,d,e=b.keyCode?b.keyCode:b.which,g=a(this);if(13===e&&null!==a.formUtils._selectedSuggestion){if(c=g.valAttr("suggestion-nr"),d=a(".jquery-form-suggestion-"+c),d.length>0){var i=d.find("div").eq(a.formUtils._selectedSuggestion).text();g.val(i),h(g),b.preventDefault()}}else{c=g.valAttr("suggestion-nr"),d=a(".jquery-form-suggestion-"+c);var j=d.children();if(j.length>0&&a.inArray(e,[38,40])>-1){38===e?(null===a.formUtils._selectedSuggestion?a.formUtils._selectedSuggestion=j.length-1:a.formUtils._selectedSuggestion--,a.formUtils._selectedSuggestion<0&&(a.formUtils._selectedSuggestion=j.length-1)):40===e&&(null===a.formUtils._selectedSuggestion?a.formUtils._selectedSuggestion=0:a.formUtils._selectedSuggestion++,a.formUtils._selectedSuggestion>j.length-1&&(a.formUtils._selectedSuggestion=0));var k=d.innerHeight(),l=d.scrollTop(),m=d.children().eq(0).outerHeight(),n=m*a.formUtils._selectedSuggestion;return(l>n||n>l+k)&&d.scrollTop(n),j.removeClass("active-suggestion").css("background","none").eq(a.formUtils._selectedSuggestion).addClass("active-suggestion").css(f.activeSuggestionCSS),b.preventDefault(),!1}}}).unbind("blur.suggest").bind("blur.suggest",function(){h(a(this))}),c},LANG:{errorTitle:"Form submission failed!",requiredFields:"You have not answered all required fields",badTime:"You have not given a correct time",badEmail:"You have not given a correct e-mail address",badTelephone:"You have not given a correct phone number",badSecurityAnswer:"You have not given a correct answer to the security question",badDate:"You have not given a correct date",lengthBadStart:"The input value must be between ",lengthBadEnd:" characters",lengthTooLongStart:"The input value is longer than ",lengthTooShortStart:"The input value is shorter than ",notConfirmed:"Input values could not be confirmed",badDomain:"Incorrect domain value",badUrl:"The input value is not a correct URL",badCustomVal:"The input value is incorrect",andSpaces:" and spaces ",badInt:"The input value was not a correct number",badSecurityNumber:"Your social security number was incorrect",badUKVatAnswer:"Incorrect UK VAT Number",badStrength:"The password isn't strong enough",badNumberOfSelectedOptionsStart:"You have to choose at least ",badNumberOfSelectedOptionsEnd:" answers",badAlphaNumeric:"The input value can only contain alphanumeric characters ",badAlphaNumericExtra:" and ",wrongFileSize:"The file you are trying to upload is too large (max %s)",wrongFileType:"Only files of type %s is allowed",groupCheckedRangeStart:"Please choose between ",groupCheckedTooFewStart:"Please choose at least ",groupCheckedTooManyStart:"Please choose a maximum of ",groupCheckedEnd:" item(s)",badCreditCard:"The credit card number is not correct",badCVV:"The CVV number was not correct",wrongFileDim:"Incorrect image dimensions,",imageTooTall:"the image can not be taller than",imageTooWide:"the image can not be wider than",imageTooSmall:"the image was too small",min:"min",max:"max",imageRatioNotAccepted:"Image ratio is not be accepted",badBrazilTelephoneAnswer:"The phone number entered is invalid",badBrazilCEPAnswer:"The CEP entered is invalid",badBrazilCPFAnswer:"The CPF entered is invalid"}},a.formUtils.addValidator({name:"email",validatorFunction:function(b){var c=b.toLowerCase().split("@"),d=c[0],e=c[1];if(d&&e){if(0===d.indexOf('"')){var f=d.length;if(d=d.replace(/\"/g,""),d.length!==f-2)return!1}return a.formUtils.validators.validate_domain.validatorFunction(c[1])&&0!==d.indexOf(".")&&"."!==d.substring(d.length-1,d.length)&&-1===d.indexOf("..")&&!/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(d)}return!1},errorMessage:"",errorMessageKey:"badEmail"}),a.formUtils.addValidator({name:"domain",validatorFunction:function(a){return a.length>0&&a.length<=253&&!/[^a-zA-Z0-9]/.test(a.slice(-2))&&!/[^a-zA-Z0-9]/.test(a.substr(0,1))&&!/[^a-zA-Z0-9\.\-]/.test(a)&&1===a.split("..").length&&a.split(".").length>1},errorMessage:"",errorMessageKey:"badDomain"}),a.formUtils.addValidator({name:"required",validatorFunction:function(b,c,d,e,f){switch(c.attr("type")){case"checkbox":return c.is(":checked");case"radio":return f.find('input[name="'+c.attr("name")+'"]').filter(":checked").length>0;default:return""!==a.trim(b)}},errorMessage:"",errorMessageKey:"requiredFields"}),a.formUtils.addValidator({name:"length",validatorFunction:function(b,c,d,e){var f=c.valAttr("length"),g=c.attr("type");if(void 0===f)return alert('Please add attribute "data-validation-length" to '+c[0].nodeName+" named "+c.attr("name")),!0;var h,i="file"===g&&void 0!==c.get(0).files?c.get(0).files.length:b.length,j=a.formUtils.numericRangeCheck(i,f);switch(j[0]){case"out":this.errorMessage=e.lengthBadStart+f+e.lengthBadEnd,h=!1;break;case"min":this.errorMessage=e.lengthTooShortStart+j[1]+e.lengthBadEnd,h=!1;break;case"max":this.errorMessage=e.lengthTooLongStart+j[1]+e.lengthBadEnd,h=!1;break;default:h=!0}return h},errorMessage:"",errorMessageKey:""}),a.formUtils.addValidator({name:"url",validatorFunction:function(b){var c=/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;if(c.test(b)){var d=b.split("://")[1],e=d.indexOf("/");return e>-1&&(d=d.substr(0,e)),a.formUtils.validators.validate_domain.validatorFunction(d)}return!1},errorMessage:"",errorMessageKey:"badUrl"}),a.formUtils.addValidator({name:"number",validatorFunction:function(a,b,c){if(""!==a){var d,e,f=b.valAttr("allowing")||"",g=b.valAttr("decimal-separator")||c.decimalSeparator,h=!1,i=b.valAttr("step")||"",j=!1;if(-1===f.indexOf("number")&&(f+=",number"),-1===f.indexOf("negative")&&0===a.indexOf("-"))return!1;if(f.indexOf("range")>-1&&(d=parseFloat(f.substring(f.indexOf("[")+1,f.indexOf(";"))),e=parseFloat(f.substring(f.indexOf(";")+1,f.indexOf("]"))),h=!0),""!==i&&(j=!0),","===g){if(a.indexOf(".")>-1)return!1;a=a.replace(",",".")}if(f.indexOf("number")>-1&&""===a.replace(/[0-9-]/g,"")&&(!h||a>=d&&e>=a)&&(!j||a%i===0))return!0;if(f.indexOf("float")>-1&&null!==a.match(new RegExp("^([0-9-]+)\\.([0-9]+)$"))&&(!h||a>=d&&e>=a)&&(!j||a%i===0))return!0}return!1},errorMessage:"",errorMessageKey:"badInt"}),a.formUtils.addValidator({name:"alphanumeric",validatorFunction:function(b,c,d,e){var f="^([a-zA-Z0-9",g="]+)$",h=c.valAttr("allowing"),i="";if(h){i=f+h+g;var j=h.replace(/\\/g,"");j.indexOf(" ")>-1&&(j=j.replace(" ",""),j+=e.andSpaces||a.formUtils.LANG.andSpaces),this.errorMessage=e.badAlphaNumeric+e.badAlphaNumericExtra+j}else i=f+g,this.errorMessage=e.badAlphaNumeric;return new RegExp(i).test(b)},errorMessage:"",errorMessageKey:""}),a.formUtils.addValidator({name:"custom",validatorFunction:function(a,b){var c=new RegExp(b.valAttr("regexp"));return c.test(a)},errorMessage:"",errorMessageKey:"badCustomVal"}),a.formUtils.addValidator({name:"date",validatorFunction:function(b,c,d){var e=c.valAttr("format")||d.dateFormat||"yyyy-mm-dd";return a.formUtils.parseDate(b,e)!==!1},errorMessage:"",errorMessageKey:"badDate"}),a.formUtils.addValidator({name:"checkbox_group",validatorFunction:function(b,c,d,e,f){var g=!0,h=c.attr("name"),i=a('input[type=checkbox][name^="'+h+'"]',f),j=i.filter(":checked").length,k=c.valAttr("qty");if(void 0===k){var l=c.get(0).nodeName;alert('Attribute "data-validation-qty" is missing from '+l+" named "+c.attr("name"))}var m=a.formUtils.numericRangeCheck(j,k);switch(m[0]){case"out":this.errorMessage=e.groupCheckedRangeStart+k+e.groupCheckedEnd,g=!1;break;case"min":this.errorMessage=e.groupCheckedTooFewStart+m[1]+e.groupCheckedEnd,g=!1;break;case"max":this.errorMessage=e.groupCheckedTooManyStart+m[1]+e.groupCheckedEnd,g=!1;break;default:g=!0}if(!g){var n=function(){i.unbind("click",n),i.filter("*[data-validation]").validateInputOnBlur(e,d,!1,"blur")};i.bind("click",n)}return g}})}(jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.options.arrows===!0&&(c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove())),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
!function(a,b){"function"==typeof define&&define.amd?define(["jQuery"],b):b("object"==typeof exports?require("jQuery"):a.jQuery)}(this,function(){var a=function(){var a={},b=4,c=new RegExp("{{([^}]+)}}","g"),d=function(a){for(var b,d=[];b=c.exec(a);)d.push(b);return d};return a.parse=function(a){var c={inpts:{},chars:{}},e=d(a),f=a.length,g=0,h=0,i=0,j=function(a){for(var d=a.length,e=0;d>e;e++)c.inpts[h]=a.charAt(e),h++;g++,i+=a.length+b-1};for(i;f>i;i++)g<e.length&&i===e[g].index?j(e[g][1]):c.chars[i-g*b]=a.charAt(i);return c.mLength=i-g*b,c},a}(),b=function(){{var a={};"undefined"!=typeof navigator?navigator.userAgent:null}return a.extend=function(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])a[c]=arguments[b][c];return a},a.addChars=function(a,b,c){return a.substr(0,c)+b+a.substr(c,a.length)},a.removeChars=function(a,b,c){return a.substr(0,b)+a.substr(c,a.length)},a.isBetween=function(a,b){return b.sort(function(a,b){return a-b}),a>b[0]&&a<b[1]},a.addListener=function(a,b,c){return"undefined"!=typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},a.preventDefault=function(a){return a.preventDefault?a.preventDefault():a.returnValue=!1},a.getClip=function(a){return a.clipboardData?a.clipboardData.getData("Text"):window.clipboardData?window.clipboardData.getData("Text"):void 0},a.getMatchingKey=function(a,b,c){for(var d in c){var e=c[d];if(a===e.which&&b===e.keyCode)return d}},a.isDelKeyDown=function(b,c){var d={backspace:{which:8,keyCode:8},"delete":{which:46,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isDelKeyPress=function(b,c){var d={backspace:{which:8,keyCode:8,shiftKey:!1},"delete":{which:0,keyCode:46}};return a.getMatchingKey(b,c,d)},a.isSpecialKeyPress=function(b,c){var d={tab:{which:0,keyCode:9},enter:{which:13,keyCode:13},end:{which:0,keyCode:35},home:{which:0,keyCode:36},leftarrow:{which:0,keyCode:37},uparrow:{which:0,keyCode:38},rightarrow:{which:0,keyCode:39},downarrow:{which:0,keyCode:40},F5:{which:116,keyCode:116}};return a.getMatchingKey(b,c,d)},a.isModifier=function(a){return a.ctrlKey||a.altKey||a.metaKey},a.forEach=function(a,b,c){if(a.hasOwnProperty("length"))for(var d=0,e=a.length;e>d&&b.call(c,a[d],d,a)!==!1;d++);else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===!1)break},a}(),c=function(a,b){function c(c){var e=[],f=[];b.forEach(c,function(c){b.forEach(c,function(b,c){var g=a.parse(b),h=d(c);return e.push(h),f.push(g),!1})});var g=function(a){var c;return b.forEach(e,function(b,d){return b.test(a)?(c=d,!1):void 0}),void 0===c?null:f[c]};return{getPattern:g,patterns:f,matchers:e}}var d=function(a){return"*"===a?/.*/:new RegExp(a)};return c}(a,b),d=function(){var a={};return a.get=function(a){if("number"==typeof a.selectionStart)return{begin:a.selectionStart,end:a.selectionEnd};var b=document.selection.createRange();if(b&&b.parentElement()===a){var c=a.createTextRange(),d=a.createTextRange(),e=a.value.length;return c.moveToBookmark(b.getBookmark()),d.collapse(!1),c.compareEndPoints("StartToEnd",d)>-1?{begin:e,end:e}:{begin:-c.moveStart("character",-e),end:-c.moveEnd("character",-e)}}return{begin:0,end:0}},a.set=function(a,b){if("object"!=typeof b&&(b={begin:b,end:b}),a.setSelectionRange)a.focus(),a.setSelectionRange(b.begin,b.end);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b.end),c.moveStart("character",b.begin),c.select()}},a}(),e=function(a,b,c){function d(b,d){var f=this;if(f.el=b,!f.el)throw new TypeError("Must provide an existing element");if(f.opts=c.extend({},e,d),"undefined"!=typeof f.opts.pattern&&(f.opts.patterns=f._specFromSinglePattern(f.opts.pattern),delete f.opts.pattern),"undefined"==typeof f.opts.patterns)throw new TypeError("Must provide a pattern or array of patterns");f.patternMatcher=a(f.opts.patterns),f._updatePattern(),f.hldrs={},f.focus=0,c.addListener(f.el,"keydown",function(a){f._keyDown(a)}),c.addListener(f.el,"keypress",function(a){f._keyPress(a)}),c.addListener(f.el,"paste",function(a){f._paste(a)}),f.opts.persistent&&(f._processKey("",!1),f.el.blur(),c.addListener(f.el,"focus",function(a){f._focus(a)}),c.addListener(f.el,"click",function(a){f._focus(a)}),c.addListener(f.el,"touchstart",function(a){f._focus(a)}))}var e={persistent:!1,repeat:!1,placeholder:" "},f={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/};return d.addInptType=function(a,b){f[a]=b},d.prototype.resetPattern=function(c){this.opts.patterns=c?this._specFromSinglePattern(c):this.opts.patterns,this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this._removeChars(),this.patternMatcher=a(this.opts.patterns);var d=this.patternMatcher.getPattern(this.val);this.mLength=d.mLength,this.chars=d.chars,this.inpts=d.inpts,this._processKey("",!1,!0)},d.prototype._updatePattern=function(){var a=this.patternMatcher.getPattern(this.val);a&&(this.mLength=a.mLength,this.chars=a.chars,this.inpts=a.inpts)},d.prototype._keyDown=function(a){var b=a.which||a.keyCode;return b&&c.isDelKeyDown(a.which,a.keyCode)?(this._processKey(null,b),c.preventDefault(a)):void 0},d.prototype._keyPress=function(a){var b,d;return b=a.which||a.keyCode,d=c.isSpecialKeyPress(a.which,a.keyCode),c.isDelKeyPress(a.which,a.keyCode)||d||c.isModifier(a)?void 0:(this._processKey(String.fromCharCode(b),!1),c.preventDefault(a))},d.prototype._paste=function(a){return this._processKey(c.getClip(a),!1),c.preventDefault(a)},d.prototype._focus=function(){var a=this;setTimeout(function(){var c=b.get(a.el),d=c.end>a.focus,e=0===c.end;(d||e)&&b.set(a.el,a.focus)},0)},d.prototype._processKey=function(a,d,e){if(this.sel=b.get(this.el),this.val=this.el.value,this.delta=0,this.sel.begin!==this.sel.end)this.delta=-1*Math.abs(this.sel.begin-this.sel.end),this.val=c.removeChars(this.val,this.sel.begin,this.sel.end);else if(d&&46===d)this._delete();else if(d&&this.sel.begin-1>=0)this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta-=1;else if(d)return!0;d||(this.val=c.addChars(this.val,a,this.sel.begin),this.delta+=a.length),this._formatValue(e)},d.prototype._delete=function(){for(;this.chars[this.sel.begin];)this._nextPos();this.sel.begin<this.val.length&&(this._nextPos(),this.val=c.removeChars(this.val,this.sel.end-1,this.sel.end),this.delta=-1)},d.prototype._nextPos=function(){this.sel.end++,this.sel.begin++},d.prototype._formatValue=function(a){this.newPos=this.sel.end+this.delta,this._removeChars(),this._updatePattern(),this._validateInpts(),this._addChars(),this.el.value=this.val.substr(0,this.mLength),("undefined"==typeof a||a===!1)&&b.set(this.el,this.newPos)},d.prototype._removeChars=function(){this.sel.end>this.focus&&(this.delta+=this.sel.end-this.focus);for(var a=0,b=0;b<=this.mLength;b++){var d,e=this.chars[b],f=this.hldrs[b],g=b+a;g=b>=this.sel.begin?g+this.delta:g,d=this.val.charAt(g),(e&&e===d||f&&f===d)&&(this.val=c.removeChars(this.val,g,g+1),a--)}this.hldrs={},this.focus=this.val.length},d.prototype._validateInpts=function(){for(var a=0;a<this.val.length;a++){var b=this.inpts[a],d=!f[b],e=!d&&!f[b].test(this.val.charAt(a)),g=this.inpts[a];(d||e)&&g&&(this.val=c.removeChars(this.val,a,a+1),this.focusStart--,this.newPos--,this.delta--,a--)}},d.prototype._addChars=function(){if(this.opts.persistent){for(var a=0;a<=this.mLength;a++)this.val.charAt(a)||(this.val=c.addChars(this.val,this.opts.placeholder,a),this.hldrs[a]=this.opts.placeholder),this._addChar(a);for(;this.chars[this.focus];)this.focus++}else for(var b=0;b<=this.val.length;b++){if(this.delta<=0&&b===this.focus)return!0;this._addChar(b)}},d.prototype._addChar=function(a){var b=this.chars[a];return b?(c.isBetween(a,[this.sel.begin-1,this.newPos+1])&&(this.newPos++,this.delta++),a<=this.focus&&this.focus++,this.hldrs[a]&&(delete this.hldrs[a],this.hldrs[a+1]=this.opts.placeholder),void(this.val=c.addChars(this.val,b,a))):!0},d.prototype._specFromSinglePattern=function(a){return[{"*":a}]},d}(c,d,b),f="formatter";$.fn[f]=function(a){return"object"==typeof a&&this.each(function(){$.data(this,"plugin_"+f)||$.data(this,"plugin_"+f,new e(this,a))}),this.resetPattern=function(a){return this.each(function(){var b=$.data(this,"plugin_"+f);b&&b.resetPattern(a)}),this},this},$.fn[f].addInptType=function(a,b){e.addInptType(a,b)}});
/**
 * Subbscribe.js (http://www.subbscribe.com)
 * Copyright (c) 2014 (v2.0) Shlomi Nissan, 1ByteBeta (http://www.1bytebeta.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 */


(function($) {

    $.fn.subbscribe = function(options) {

        var obj = this;

        // Default settings
        var settings = $.extend({

            list: 'MailChimp',
            url: '',
            title: 'Never miss a post!',
            text: 'Get our latest posts and announcements in your inbox. You won\'t regret it!',
            name: 'Subbscribe',
            color: '#ee6262',
            thumbnail: 'https://s3-ap-southeast-2.amazonaws.com/subbscribe/img/avatar.png',
            emailonly: false,
            width: 200,
            cm_mail_field: '',
            delay: 0,

        }, options);

        // Make sure a URL has been passed through
        if (settings.url == '') {

            console.log('Subbscribe Error: You must provide a valid MailChimp form URL.');
            return;

        };

        //make sure the cm_mail_field is set when using Campaign Monitor
        if (settings.list === 'CampaignMonitor' && !settings.cm_mail_field.length) {

            console.log('You must provide the mail input name. Found in the form code from Campaign Monitor');
            return;

        }

        var _name = '';
        var _email = '';
        var _url = '';

        // Make sure list is either set to MailChimp or CampaignMonitor
        // Change field names if yours donâ€™t match

        if (settings.list == 'MailChimp') {

            _name = 'NAME';
            _email = 'EMAIL';
            _action = settings.url.replace('/post?', '/post-json?').concat('&c=?');

        } else if (settings.list == 'CampaignMonitor') {

            _name = 'cm-name';
            _email = settings.cm_mail_field;
            _action = settings.url + "?callback=?";

        } else {

            console.log('Subbscribe Error: list value must be set to MailChimp or CampaignMonitor');
            return;

        }

        // Separate the input fields from the HTML
        // if emailonly is set, nameInput should be blank

        var emailInput = '<input type="email" name="' + _email + '" id="subb-EMAIL" placeholder="Email Address" />';
        var sourceInput = '<input type="hidden" name="SOURCE" id="SOURCE" value=' + '"' + settings.source + '"' +  '/>';


        //<input type="hidden" name="SIGNUP" id="SIGNUP" value="blog_page" />



        // HTML
        var html = '<div id="subbscribe" style="display: none">' +
                    '<div class="subb-title">' + settings.title + ' <img class="close-x" src="https://s3-ap-southeast-2.amazonaws.com/subbscribe/img/close.svg" />' + '</div>' +
                    '<div class="subb-body">' +
                    '<div class="subb-hidden">' +
                    '<div class="subb-hidden">' +
                    '</div>' +
                    '</div>' +
                    '<div class="subb-form">' +
                    // '<p>' + settings.text + '</p>' +
                    '<form id="mc-embedded-subbscribe-form" method="post" action="' + settings.url + '">' +
                    '<div class="subbscribe-alert subbscribe-error" style="display: none">' + 'Oops! Check your details and try again.' + '</div>' +
                    '<div class="subbscribe-alert subbscribe-success" style="display: none">' + 'Thanks! Check your email for confirmation.' + '</div>' +
                    '<div class="text-input"> ' + emailInput + ' </div>' +
                    sourceInput +
                    '<button class="subb-button submit-form" type="submit" style="width: 100%; margin-bottom: 10px;">Subscribe</button>' +
                    '</form> </div> </div> </div>';

        if (getCookie('subbscribe-hidden') != 1) {

            this.append(html);

            setTimeout(function() {

                $('#subbscribe').css('display', 'block');
                $('#subbscribe').css('width', settings.width);
                $('#subbscribe').addClass('animated slideInRight');

            }, settings.delay * 1000);

        }

        // Update CSS classes
        // $('#subbscribe .subb-button').css('background-color', settings.color);

        /*
        ===============================================================================
          Events
        ===============================================================================
        */

        $('#subbscribe .close-x').click(function() {

            $('#subbscribe').toggleClass('slideInRight fadeOut');
            $('#subbscribe').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

                $('#subbscribe').remove();
                setCookie('subbscribe-hidden', 1, 1); // Hide for a day

            });

        });

        $('#subbscribe .show-form').click(function() {

            $('#subbscribe .subb-hidden').hide();
            $('#subbscribe .subb-form').show();

        });

        $('#mc-embedded-subbscribe-form').submit(function(e) {

            e.preventDefault();

            if (formValidation()) {

                $('#subbscribe .subbscribe-error').slideUp();
                $('#subbscribe .submit-form').attr('disabled', 'disabled');

                $.ajax({

                    url: _action,
                    type: 'post',
                    data: $(this).serialize(),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",

                    success: function(data) {

                        if (isError(data)) {

                            console.log('Subbscribe Error: submission failed.');

                        } else {

                            //SUCCESS
                            resetFormFields()
                            $('.subbscribe-success').slideDown();

                            setTimeout(function() {
                                $('#subbscribe').addClass('animated fadeOut');
                            }, 2000);
                            $('#subbscribe').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {

                                $('#subbscribe').remove();
                                setCookie('subbscribe-hidden', 1, 365); // Hide for a year

                                if (typeof settings.onSubbscribe === 'function') {
                                    settings.onSubbscribe.call();
                                }

                            });

                        }
                    }

                });

            } else {

                $('#subbscribe .subbscribe-error').slideDown();

            }

        });

        /*
        ===============================================================================
          Helpers
        ===============================================================================
        */

        function isError(data) {

            console.log(data);

            if (settings.list == 'MailChimp') {

                if (data['result'] != "success") {

                    return true;

                }

                return false;

            } else if (settings.list == 'CampaignMonitor') {

                if (data.Status === 400) {

                    return true;

                }

                return false;

            }

            return true;

        }

        function resetFormFields() {

            $('#subbscribe input').each(function() {
                $(this).val('');
            });

        }

        function validateEmail(email) {

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);

        }

        function formValidation() {

            var valid = true;
            var email = $('#subb-EMAIL');

            if (!validateEmail(email.val())) {

                valid = false;
                email.addClass('error');

            } else {

                email.removeClass('error');

            }

            return valid;

        }

        function setCookie(cname, cvalue, exdays) {

            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";

        }

        function getCookie(cname) {

            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }

            return "";

        }

    }

}(jQuery));
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
;
jQuery(function($){
    'use strict';

    var step = 0;

    // Maps to the current slide index
    // steps[0] > "create_account"
    var steps = [ "create_account", "select_room", "membership_agreement", "check_out", "receipt", "finish" ]

    var app = {
        showMobileBackdrop: function(show) {
            if (show) {
                var $backdrop = $(document.createElement('div'))
                $backdrop.css({
                    'position': 'fixed',
                    'top': '0',
                    'bottom': '0',
                    'left': '0',
                    'right': '0',
                    'height': '100%',
                    'background': 'rgb(0,0,0)',
                    'opacity': '0',
                    'transition': 'all 0.6s ease 0ms',
                })
                $backdrop.attr('id', 'mob-backdrop')
                $('body').append($backdrop);

                // CSS transition needs a small delay
                // to work properly
                window.setTimeout(function() {
                    $backdrop.css('opacity', '0.6')
                }, 10)
            } else {
                $backdrop = $('#mob-backdrop')
                if ($backdrop) {
                    $backdrop.css('opacity', 0);
                    window.setTimeout(function() {
                        $backdrop.remove();
                    }, 600)
                }
            }

        },
        mobileNavigation: function () {
            var that = this;
            var offset;
            $('.mob.menu').on('click' , function(e){
                e.preventDefault();
                if ($('.mob-nav').hasClass('on')) {
                    $('.mob-nav').removeClass('on');
                    $(document).scrollTop(offset);
                    $('html').css('overflow','auto');
                    $('html').css('position','relative');
                    that.showMobileBackdrop(false);
                } else {
                    $('.mob-nav').addClass('on');
                    that.showMobileBackdrop(true);
                    offset = $(document).scrollTop();
                    $('html').css('overflow','hidden');
                    $('html').css('position','fixed');
                    $('html').scrollTop(offset);
                }
            });
        },
        crownHeightsSlider: function () {
            $('.crownheights-slider').on('init', function(event, slick){
                var $buttons = $('.slick-arrow', slick.$slider)
                    .add($('.slick-dots li', slick.$slider))
                    .add($('.slick-dots li button', slick.$slider))
                    .add($('[data-slide]', slick.$slider));
                $buttons.on('click', function(){
                    slick.$slider.slick('slickPause');
                });
            }).slick({
                dots: false,
                arrows: true,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 6000,
                adaptiveHeight: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            dots: true
                        }
                    }
                ],
                pauseOnHover: true,
                pauseOnDotsHover: true
            });
        },
        crownHeightsSliderImageToCover:function() {
            var img = $('.crownheights-slider .slick-slide .item-img');
            img.each(function() {
                $(this).css('visibility','hidden');
                var src = $(this).attr('src');
                $(this).wrap('<div class="slide-img" style="background-image:url('+ src +')" />');
            });
        },
        // jclay: this might still be used, but should be moved into onboarding js
       onboardingForm: function () {
            //Validation
            var elm = $('form').find('.step-1 .input-text input');
            elm.attr('data-pass-validation','false');
            elm.on('validation', function(evt, valid) {
                $(this).attr('data-pass-validation',valid);
            });

            function checkIfAllPassed(){
                var test = true;
                elm.each(function(){
                    if($(this).attr('data-pass-validation') == 'false'){
                        test = false;
                    }
                });
                return test;
            }
        },
        // jclay: this is used on website.
        switch3dTours: function() {
            var $iframeTours = $('.section-3d-tour .iframe-container iframe');
            var $viewButton = $('.section-3d-tour .views li a');
            $viewButton.click(function() {
                var $this = $(this);
                var immediateParent = $this.parent('li');
                var parentLis = immediateParent.siblings('li').andSelf();
                var idxOfSelection = parentLis.index(immediateParent);
                $viewButton.each(function(index) {
                    if(index === idxOfSelection) {
                        if (!$(this).hasClass('active')) {
                            $(this).addClass('active');
                            $iframeTours.eq(index).show();
                        }
                    } else {
                        $(this).removeClass('active');
                        $iframeTours.eq(index).hide();
                    }
                });
            });

        },
        init: function () {
            this.mobileNavigation();
            this.crownHeightsSlider();
            this.crownHeightsSliderImageToCover();
            this.onboardingForm();
            this.switch3dTours();
        }
    };

    app.init();
});





/*! URI.js v1.18.0 http://medialize.github.io/URI.js/ */
/* build contains: URI.js */

(function(n,v){"object"===typeof exports?module.exports=v(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],v):n.URI=v(n.punycode,n.IPv6,n.SecondLevelDomains,n)})(this,function(n,v,t,h){function d(a,b){var c=1<=arguments.length,f=2<=arguments.length;if(!(this instanceof d))return c?f?new d(a,b):new d(a):new d;if(void 0===a){if(c)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}this.href(a);return void 0!==b?this.absoluteTo(b):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function u(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function k(a){return"Array"===u(a)}function C(a,b){var c={},d,g;if("RegExp"===u(b))c=null;else if(k(b))for(d=0,g=b.length;d<g;d++)c[b[d]]=!0;else c[b]=!0;d=0;for(g=a.length;d<g;d++)if(c&&void 0!==c[a[d]]||!c&&b.test(a[d]))a.splice(d,
1),g--,d--;return a}function y(a,b){var c,d;if(k(b)){c=0;for(d=b.length;c<d;c++)if(!y(a,b[c]))return!1;return!0}var g=u(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===g){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function D(a,b){if(!k(a)||!k(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function z(a){return a.replace(/^\/+|\/+$/g,"")}function F(a){return escape(a)}function A(a){return encodeURIComponent(a).replace(/[!'()*]/g,
F).replace(/\*/g,"%2A")}function w(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}}function E(a,b){return function(c,d){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!d);return this}}var G=h&&h.URI;d.version="1.18.0";var e=d.prototype,p=Object.prototype.hasOwnProperty;d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,
port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:d.domAttributes[b]}};d.encode=A;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=A;d.decode=
decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",",
"%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");void 0===b&&(b=d.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};d.decodeQuery=function(a,b){a+="";void 0===b&&(b=d.escapeQuerySpace);try{return d.decode(b?a.replace(/\+/g,
"%20"):a)}catch(c){return a}};var r={encode:"encode",decode:"decode"},x,B=function(a,b){return function(c){try{return d[b](c+"").replace(d.characters[a][b].expression,function(c){return d.characters[a][b].map[c]})}catch(f){return c}}};for(x in r)d[x+"PathSegment"]=B("pathname",r[x]),d[x+"UrnPathSegment"]=B("urnpath",r[x]);r=function(a,b,c){return function(f){var g;g=c?function(a){return d[b](d[c](a))}:d[b];f=(f+"").split(a);for(var e=0,l=f.length;e<l;e++)f[e]=g(f[e]);return f.join(a)}};d.decodePath=
r("/","decodePathSegment");d.decodeUrnPath=r(":","decodeUrnPathSegment");d.recodePath=r("/","encodePathSegment","decode");d.recodeUrnPath=r(":","encodeUrnPathSegment","decode");d.encodeReserved=B("reserved","encode");d.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),
-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){a=a.replace(/\\/g,"/");var c=a.indexOf("/"),d;-1===c&&(c=a.length);if("["===a.charAt(0))d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null,"/"===b.port&&(b.port=null);else{var g=a.indexOf(":");d=a.indexOf("/");
g=a.indexOf(":",g+1);-1!==g&&(-1===d||g<d)?(b.hostname=a.substring(0,c)||null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null)}b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("/"),f=a.lastIndexOf("@",-1<c?c:a.length-1);-1<f&&(-1===c||f<c)?(c=a.substring(0,f).split(":"),b.username=c[0]?d.decode(c[0]):null,
c.shift(),b.password=c[0]?d.decode(c.join(":")):null,a=a.substring(f+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},f=a.split("&"),g=f.length,e,l,m=0;m<g;m++)if(e=f[m].split("="),l=d.decodeQuery(e.shift(),b),e=e.length?d.decodeQuery(e.join("="),b):null,p.call(c,l)){if("string"===typeof c[l]||null===c[l])c[l]=[c[l]];c[l].push(e)}else c[l]=e;return c};d.build=function(a){var b="";
a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)b=d.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};d.buildAuthority=
function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username));a.password&&(b+=":"+d.encode(a.password));b&&(b+="@");return b};d.buildQuery=function(a,b,c){var f="",g,e,l,m;for(e in a)if(p.call(a,e)&&e)if(k(a[e]))for(g={},l=0,m=a[e].length;l<m;l++)void 0!==a[e][l]&&void 0===g[a[e][l]+""]&&(f+="&"+d.buildQueryParameter(e,a[e][l],c),!0!==b&&(g[a[e][l]+""]=!0));else void 0!==a[e]&&(f+="&"+d.buildQueryParameter(e,a[e],c));return f.substring(1)};
d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var f in b)p.call(b,f)&&d.addQuery(a,f,b[f]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),k(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,c){var f;if(k(b))for(c=0,f=b.length;c<f;c++)a[b[c]]=
void 0;else if("RegExp"===u(b))for(f in a)b.test(f)&&(a[f]=void 0);else if("object"===typeof b)for(f in b)p.call(b,f)&&d.removeQuery(a,f,b[f]);else if("string"===typeof b)void 0!==c?"RegExp"===u(c)?!k(a[b])&&c.test(a[b])?a[b]=void 0:a[b]=C(a[b],c):a[b]!==String(c)||k(c)&&1!==c.length?k(a[b])&&(a[b]=C(a[b],c)):a[b]=void 0:a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};d.hasQuery=function(a,b,c,f){switch(u(b)){case "String":break;
case "RegExp":for(var g in a)if(p.call(a,g)&&b.test(g)&&(void 0===c||d.hasQuery(a,g,c)))return!0;return!1;case "Object":for(var e in b)if(p.call(b,e)&&!d.hasQuery(a,e,b[e]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(u(c)){case "Undefined":return b in a;case "Boolean":return a=!(k(a[b])?!a[b].length:!a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return k(a[b])?(f?y:D)(a[b],c):!1;case "RegExp":return k(a[b])?
f?y(a[b],c):!1:!(!a[b]||!a[b].match(c));case "Number":c=String(c);case "String":return k(a[b])?f?y(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.joinPaths=function(){for(var a=[],b=[],c=0,f=0;f<arguments.length;f++){var g=new d(arguments[f]);a.push(g);for(var g=g.segment(),e=0;e<g.length;e++)"string"===typeof g[e]&&b.push(g[e]),g[e]&&c++}if(!b.length||!c)return new d("");b=(new d("")).segment(b);
""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||b.path("/"+b.path());return b.normalize()};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==b.charAt(d)){d--;break}if(1>d)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(d)||"/"!==b.charAt(d))d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};d.withinString=function(a,b,c){c||(c={});var f=c.start||d.findUri.start,e=c.end||d.findUri.end,H=c.trim||d.findUri.trim,l=
/[a-z0-9-]=["']?$/i;for(f.lastIndex=0;;){var m=f.exec(a);if(!m)break;m=m.index;if(c.ignoreHtml){var k=a.slice(Math.max(m-3,0),m);if(k&&l.test(k))continue}var k=m+a.slice(m).search(e),h=a.slice(m,k).replace(H,"");c.ignore&&c.ignore.test(h)||(k=m+h.length,h=b(h,m,k,a),a=a.slice(0,m)+h+a.slice(k),f.lastIndex=m+h.length)}f.lastIndex=0;return a};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!n)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
if(n.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},h.URITemplate&&"function"===typeof h.URITemplate.noConflict&&(a.URITemplate=h.URITemplate.noConflict()),h.IPv6&&"function"===typeof h.IPv6.noConflict&&(a.IPv6=h.IPv6.noConflict()),h.SecondLevelDomains&&"function"===typeof h.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=h.SecondLevelDomains.noConflict()),
a;h.URI===this&&(h.URI=G);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new d(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=w("protocol");e.username=w("username");e.password=w("password");e.hostname=w("hostname");e.port=w("port");e.query=E("query","?");e.fragment=E("fragment","#");e.search=function(a,b){var c=
this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};e.hash=function(a,b){var c=this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};e.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?d.decodeUrnPath:d.decodePath)(c):c}this._parts.path=this._parts.urn?a?d.recodeUrnPath(a):"":a?d.recodePath(a):"/";this.build(!b);return this};e.path=e.pathname;e.href=function(a,b){var c;if(void 0===a)return this.toString();
this._string="";this._parts=d._parts();var f=a instanceof d,e="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(e=d.getDomAttribute(a),a=a[e]||"",e=!1);!f&&e&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=d.parse(String(a),this._parts);else if(f||e)for(c in f=f?a._parts:a,f)p.call(this._parts,c)&&(this._parts[c]=f[c]);else throw new TypeError("invalid input");this.build(!b);return this};e.is=function(a){var b=!1,c=!1,f=!1,e=!1,k=!1,
l=!1,m=!1,h=!this._parts.urn;this._parts.hostname&&(h=!1,c=d.ip4_expression.test(this._parts.hostname),f=d.ip6_expression.test(this._parts.hostname),b=c||f,k=(e=!b)&&t&&t.has(this._parts.hostname),l=e&&d.idn_expression.test(this._parts.hostname),m=e&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return h;case "absolute":return!h;case "domain":case "name":return e;case "sld":return k;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return f;
case "idn":return l;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return m}return null};var I=e.protocol,J=e.port,K=e.hostname;e.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(d.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return I.call(this,a,b)};e.scheme=e.protocol;e.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==
a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');return J.call(this,a,b)};e.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};if("/"!==d.parseHost(a,c))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=c.hostname}return K.call(this,a,b)};e.origin=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===
a){var c=this.protocol();return this.authority()?(c?c+"://":"")+this.authority():""}c=d(a);this.protocol(c.protocol()).authority(c.authority()).build(!b);return this};e.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";if("/"!==d.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.authority=function(a,b){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";if("/"!==d.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=d.buildUserinfo(this._parts);return c?c.substring(0,c.length-1):c}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};e.resource=function(a,
b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};e.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,
c);c=new RegExp("^"+q(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};e.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",
c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=new RegExp(q(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};e.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),
c=this._parts.hostname.substring(c+1);return!0!==b&&t&&t.list[c.toLowerCase()]?t.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(t&&t.is(a))c=new RegExp(q(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,
a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};e.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+
q(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};e.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&
(c=!0);var f=new RegExp(q(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(f,a);c?this.normalizePath(b):this.build(!b);return this};e.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),f=c.lastIndexOf(".");if(-1===f)return"";c=c.substring(f+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())f=
a?new RegExp(q(c)+"$"):new RegExp(q("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}f&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(f,a));this.build(!b);return this};e.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),h="/"===e.substring(0,1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');h&&e.shift();0>a&&(a=Math.max(e.length+
a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(k(b)){e=[];a=0;for(var l=b.length;a<l;a++)if(b[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(z(b[a]))}else{if(b||"string"===typeof b)b=z(b),""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b?e[a]=z(b):e.splice(a,1);h&&e.unshift("");return this.path(e.join(d),c)};e.segmentCoded=function(a,b,c){var e,g;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(k(a))for(e=
0,g=a.length;e<g;e++)a[e]=d.decode(a[e]);else a=void 0!==a?d.decode(a):void 0;return a}if(k(b))for(e=0,g=b.length;e<g;e++)b[e]=d.encode(b[e]);else b="string"===typeof b||b instanceof String?d.encode(b):b;return this.segment(a,b,c)};var L=e.query;e.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):L.call(this,a,b)};e.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var g in a)p.call(a,g)&&(e[g]=a[g]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,
this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():
this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&n?this._parts.hostname=n.toASCII(this._parts.hostname):this.is("IPv6")&&v&&(this._parts.hostname=v.best(this._parts.hostname)),this._parts.hostname=
this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=d.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var b=d.recodePath(b),c,e="",g,k;"/"!==b.charAt(0)&&(c=!0,
b="/"+b);if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");c&&(e=b.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){g=b.search(/\/\.\.(\/|$)/);if(-1===g)break;else if(0===g){b=b.substring(3);continue}k=b.substring(0,g).lastIndexOf("/");-1===k&&(k=g);b=b.substring(0,k)+b.substring(g+3)}c&&this.is("relative")&&(b=e+b.substring(1));this._parts.path=b;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=
function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;try{this.normalize()}finally{d.encode=
a,d.decode=b}return this};e.unicode=function(){var a=d.encode,b=d.decode;d.encode=A;d.decode=unescape;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};e.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&n?(b+=n.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");
b+=a.path(!0);if(a._parts.query){for(var c="",e=0,g=a._parts.query.split("&"),k=g.length;e<k;e++){var l=(g[e]||"").split("="),c=c+("&"+d.decodeQuery(l[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==l[1]&&(c+="="+d.decodeQuery(l[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a instanceof d||(a=new d(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(e=0;g=c[e];e++)b._parts[g]=a._parts[g];b._parts.path?".."===b._parts.path.substring(-2)&&(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(c=(c=a.directory())?c:0===a.path().indexOf("/")?"/":"",b._parts.path=(c?c+"/":"")+b._parts.path,b.normalizePath());b.build();return b};e.relativeTo=function(a){var b=
this.clone().normalize(),c,e,g;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new d(a)).normalize();c=b._parts;e=a._parts;g=b.path();a=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===
e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(g===a)return c.path="",b.build();g=d.commonPath(g,a);if(!g)return b.build();e=e.path.substring(g.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(g.length)||"./";return b.build()};e.equals=function(a){var b=this.clone();a=new d(a);var c={},e={},g={},h;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||
c.length!==e.length)return!1;c=d.parseQuery(c,this._parts.escapeQuerySpace);e=d.parseQuery(e,this._parts.escapeQuerySpace);for(h in c)if(p.call(c,h)){if(!k(c[h])){if(c[h]!==e[h])return!1}else if(!D(c[h],e[h]))return!1;g[h]=!0}for(h in e)if(p.call(e,h)&&!g[h])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
'use strict';

function utf8_to_b64(str) {
    return window.btoa(escape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(unescape(window.atob(str)));
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

"use strict";

var docCookies = {
  getItem: function getItem(sKey) {
    if (!sKey) {
      return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function removeItem(sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) {
      return false;
    }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function hasItem(sKey) {
    if (!sKey) {
      return false;
    }
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  },
  keys: function keys() {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  }
};"use strict";

window.debounce = function (func, wait, immediate) {
  var timeout = undefined;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Navbar = (function () {
  function Navbar($header) {
    _classCallCheck(this, Navbar);

    this.$header = $header;
    this.$mobileHomesNav = this.$header.find('.homes-nav.mob-tab');
    this.$desktopHomesNav = this.$header.find('.homes-nav.desktop');
    this.originalNavbarHeight = this.$header.height();
    this.$homesNavToggle = this.$header.find('.homes');
    this.$hamburgerButton = this.$header.find('#hamburger-menu');
    this.$mainNav = this.$header.find('.main-nav');
    this.$homesNavContainer = this.$mainNav.find('.mob-homes-nav-container');
    this.$applyForm = this.$header.find('#header-apply-form');
    $('#site-main').prepend('<div id="overlay"></div>');
    this.$overlay = $('#site-main').find('#overlay');
    this.mobileHeaderLinksHeight = 46;
    this.mobileHeaderHomeLinksHeight = 34;
    this.desktopHeaderHomeLinksHeight = 36;
    this.desktopApplyInputGroupHeight = 45;
    this.offsetToFadeInNav = 10;
    this.heightOfMainMenu = this.$mainNav.find('li.header-link').length * this.mobileHeaderLinksHeight + 12;
    this.$window = $(window);
    this.setRelevantHomeNav();
    this.attachHandlers();
  }

  _createClass(Navbar, [{
    key: 'attachHandlers',
    value: function attachHandlers() {
      var _this = this;

      this.$homesNavToggle.click(function (e) {
        e.preventDefault();
        _this.setRelevantHomeNav();
        _this.toggleHomesNav();
      });
      this.$hamburgerButton.click(function (e) {
        e.preventDefault();
        _this.setRelevantHomeNav();
        _this.toggleMainNav();
      });
      this.$applyForm.find("input[type='email']").focus(function (originalEvent) {
        // Bug in Safari's implementation of autofill requires using `focus` instead of `click`
        // for a form that has autofill elements
        originalEvent.preventDefault();
        if (!_this.$header.hasClass('apply-expanded')) {
          _this.expandHeaderApplyForm(originalEvent);
        }
      });
      $(document).click(function (e) {
        var clickInHeader = e.target.id === 'header' || $(e.target).parents('#header').size();
        if (!clickInHeader && _this.anyNavsOpen()) {
          _this.closeAllDropdowns();
        }
      });
      this.$window.scroll(window.debounce(this.fadeInOrOutNav.bind(this)));
      this.$window.resize(window.debounce(this.closeAllDropdowns.bind(this)));
    }
  }, {
    key: 'anyNavsOpen',
    value: function anyNavsOpen() {
      this.setRelevantHomeNav();
      return this.$relevantHomesNav.hasClass('show') || this.$header.hasClass('apply-expanded') || this.$mainNav.hasClass('show');
    }
  }, {
    key: 'expandHeaderApplyForm',
    value: function expandHeaderApplyForm(originalEvent) {
      if (this.$relevantHomesNav.hasClass('show')) {
        this.hideHomesNav();
      }
      if (this.$header.hasClass('apply-expanded')) {
        return;
      }
      var inputGroups = this.$header.find('.inputs-container .input-group');
      var inputContainerHeight = inputGroups.length * this.desktopApplyInputGroupHeight + 5;
      this.$header.css('height', inputContainerHeight + 50 + 'px');
      this.$header.find('.inputs-container').css('height', inputContainerHeight + 'px');
      this.$overlay.css('top', inputContainerHeight + 50 + 'px');
      this.$header.addClass('apply-expanded');
      this.$overlay.addClass('visible');
      originalEvent.stopPropagation();
    }
  }, {
    key: 'closeAllDropdowns',
    value: function closeAllDropdowns() {
      this.hideMainNav();
      this.hideHomesNav();
      this.collapseHeaderApplyForm();
    }
  }, {
    key: 'collapseHeaderApplyForm',
    value: function collapseHeaderApplyForm() {
      if (!this.$header.hasClass('apply-expanded')) {
        return;
      }
      this.$applyForm.find("input[type='email']").blur();
      this.$header.removeClass('apply-expanded');
      this.$overlay.removeClass('visible');
      this.$header.css('height', this.originalNavbarHeight + 'px');
      this.$header.find('.inputs-container').css('height', this.desktopApplyInputGroupHeight + 'px');
    }
  }, {
    key: 'fadeInOrOutNav',
    value: function fadeInOrOutNav() {
      this.closeAllDropdowns();
      if (this.$header.hasClass('product-page')) {
        if (this.$window.scrollTop() > this.$window.height() - this.offsetToFadeInNav) {
          this.$header.addClass('fixed');
          $('#site-main').addClass('fixed-header');
        } else {
          $('#site-main').removeClass('fixed-header');
          this.$header.removeClass('fixed');
        }
      }
    }
  }, {
    key: 'setRelevantHomeNav',
    value: function setRelevantHomeNav() {
      if ($(window).width() > 1024) {
        this.$relevantHomesNav = this.$desktopHomesNav;
      } else {
        this.$relevantHomesNav = this.$mobileHomesNav;
      }
    }
  }, {
    key: 'toggleHomesNav',
    value: function toggleHomesNav() {
      if (this.$relevantHomesNav.hasClass('show')) {
        this.hideHomesNav();
      } else {
        this.showHomesNav();
      }
    }
  }, {
    key: 'toggleMainNav',
    value: function toggleMainNav() {
      if (this.$mainNav.hasClass('show')) {
        this.hideMainNav();
      } else {
        this.showMainNav();
      }
    }
  }, {
    key: 'showMainNav',
    value: function showMainNav() {
      if (this.$mainNav.hasClass('show')) {
        return;
      }
      this.$mainNav.addClass('show');
      this.$hamburgerButton.addClass('is-active');
      var heightOfContainer = this.heightOfMainMenu + this.originalNavbarHeight;
      this.$header.css('height', heightOfContainer + 'px');
    }
  }, {
    key: 'hideMainNav',
    value: function hideMainNav() {
      if (!this.$mainNav.hasClass('show')) {
        return;
      }
      this.$mainNav.removeClass('show');
      this.$hamburgerButton.removeClass('is-active');
      this.hideHomesNav();
      this.$header.css('height', this.originalNavbarHeight + 'px');
    }
  }, {
    key: 'showHomesNav',
    value: function showHomesNav() {
      if (this.$relevantHomesNav.hasClass('show')) {
        return;
      }
      this.collapseHeaderApplyForm();
      this.$relevantHomesNav.addClass('show');
      this.$homesNavToggle.addClass('open');
      if (this.$relevantHomesNav.hasClass('mob-tab')) {
        var amountToPushDown = this.$relevantHomesNav.find('li.city').length * this.mobileHeaderHomeLinksHeight + 15;
        var newNavbarHeight = this.$header.height() + amountToPushDown;
        this.$homesNavContainer.css('height', amountToPushDown + 'px');
        this.$header.css('height', newNavbarHeight + 'px');
      } else {
        var amountToPushDown = this.desktopHeaderHomeLinksHeight;
        var newNavbarHeight = this.originalNavbarHeight + amountToPushDown;
        this.$homesNavContainer.css('height', '0');
        this.$header.css('height', newNavbarHeight + 'px');
        this.$relevantHomesNav.css('height', amountToPushDown + 'px');
      }
    }
  }, {
    key: 'hideHomesNav',
    value: function hideHomesNav() {
      if (!this.$relevantHomesNav.hasClass('show')) {
        return;
      }
      this.$relevantHomesNav.removeClass('show');
      this.$homesNavToggle.removeClass('open');
      if (this.$relevantHomesNav.hasClass('mob-tab')) {
        var navbarAndMainNavHeight = this.heightOfMainMenu + this.originalNavbarHeight;
        this.$homesNavContainer.css('height', '0');
        this.$header.css('height', navbarAndMainNavHeight + 'px');
      } else {
        this.$relevantHomesNav.css('height', '0');
        this.$header.css('height', this.originalNavbarHeight + 'px');
      }
    }
  }]);

  return Navbar;
})();


$(document).ready(function () {
  'use strict';
  // set timout is necessary beause we need to wait for react to perform a render
  //  which will happen after the next tick
  setTimeout(function() {
    var $header = $('#header');
    new Navbar($header);
  }, 0)
});'use strict';

$('form#footer-newsletter').keyup(function (e) {
    var $form = $(this);
    var $submitButton = $form.find('.input-group-newsletter input[type=submit]');
    var $emailInput = $form.find('input[type=email]');

    if ($emailInput.val()) {
        $submitButton.prop('disabled', false);
    } else {
        $submitButton.prop('disabled', true);
    }
});

$('form#footer-newsletter').on('submit', function (e) {
    e.preventDefault();

    var $form = $(this);
    var data = $form.serialize();
    var email = $form.find('input[type=email]')[0];

    $.ajax({
        url: $form.attr('action'),
        data: data,
        method: 'post'
    });

    email.value = "ALL SET!";

    setTimeout(function () {
        email.value = '';
    }, 1000);
});'use strict';

function analyticsEvent(eventName, metadata) {
  if (typeof analytics !== 'undefined') {
    analytics.track(eventName, metadata);
  }
}
if (typeof $ !== 'undefined') {
  $('video').on('play pause ended', function (e) {
    var metadata = {
      title: $(this).attr('data-title') || 'No Title'
    };
    if (this.currentTime === 0) {
      e.type = 'started';
    } else if (e.type !== 'ended' && e.type !== 'started') {
      metadata.currentTime = Math.round(this.currentTime * 100) / 100 + 's';
      metadata.duration = Math.round(this.duration * 100) / 100;
      metadata.percentageComplete = Math.round(this.currentTime / this.duration * 100) + '%';
    }
    analyticsEvent('Video ' + e.type, metadata);
  });
};
'use strict';

var $emailInput = $('#waitlist-signup input');
var $submitButton = $('#waitlist-signup a');
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

$emailInput.keydown(function (e) {
  if (e.keyCode === 13) {
    submit(e);
  } else {
    var $this = $(this);
    if ($this.hasClass('invalid')) {
      $this.css('color', '#272827');
      $this.removeClass('invalid');
    }
  }
});

$submitButton.click(submit);

function submit(e) {
  e.preventDefault();

  var email = $emailInput.val();
  var path = $submitButton.attr('href');

  if (!!email) {
    if ($emailInput.hasClass('invalid')) {
      $emailInput.removeClass('invalid');
    }

    if (!$emailInput[0].checkValidity()) {
      if (!isIE11) {
        $emailInput.addClass('invalid');
        $emailInput.css('color', '#d34d35');
      }
      return;
    }

    var lastCharacter = path[path.length - 1];
    if (lastCharacter === '/') {
      path += '?e=' + btoa(email);
    } else if (lastCharacter === '?') {
      path += 'e=' + btoa(email);
    } else {
      path += '&e=' + btoa(email);
    }
  }

  window.location = path;
};
'use strict';

$(function () {
    FastClick.attach(document.body);
});

// Set cookie if from_newsletter=true
if (getUrlParameter('from_newsletter')) {
    docCookies.setItem('cmn-disable-email-prompt', 'true', Infinity, '/');
}

// Attach code to submit email
// this is for the enter email to apply form
// that is featured on some of the homes page
$('#start-apply').on('click', function (evt) {
    evt.preventDefault();
    var url = evt.currentTarget.getAttribute('href');
    var $applySect = $(evt.currentTarget).parents('.section-apply');
    var email = $applySect.find('input[type=email]').val();
    if (typeof email !== 'undefined' && email.length) {
        // base64 and append email
        url = URI(url).addQuery('e', utf8_to_b64(email));
    }
    window.location = url.toString();
});

// Dropdown header
// TODO may need to disable on mobile
$('#site-header .dropdown').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    var $dropdown = $('#site-header .homes-dropdown');

    if (!$this.hasClass('dropdown-open')) {
        $this.addClass('dropdown-open');
        $dropdown.addClass('show');

        $('body').on('click', function () {
            console.log('closing');
            $this.removeClass('dropdown-open');
            $dropdown.removeClass('show');
            $('#site-header').css('z-index', '1000');
        });

        // Prevent clicking dropdown from closing.
        $('.homes-dropdown').on('click', function (e) {
            e.stopPropagation();
        });
    } else {
        $('body').off('click');
        $('.homes-dropdown').off('click');
        $this.removeClass('dropdown-open');
        $dropdown.removeClass('show');
        $('#site-header').css('z-index', '1000');
    }
});
