function parallax(){if($("#js-parallax-window").length>0){var e=$("#js-parallax-background"),s=$("#js-parallax-window"),r=$(s).offset().top,o=$(window).scrollTop(),a=r-o,i=$(e).offset().top,t=window.innerHeight,n=i-o,l=t-n,u=.35;e.css("top",-(a*u)+"px")}}!function(){for(var e,s=function(){},r=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=r.length,a=window.console=window.console||{};o--;)e=r[o],a[e]||(a[e]=s)}();var emailOctopus={successMessage:"Thanks for subscribing!",missingEmailAddressMessage:"Your email address is required.",invalidEmailAddressMessage:"Your email address looks incorrect, please try again.",botSubmissionErrorMessage:"This doesn't look like a human submission.",unknownErrorMessage:"Sorry, an unknown error has occurred. Please try again later.",isBotPost:function(){return $(".email-octopus-form-row-hp input").val()},basicValidateEmail:function(e){var s=/\S+@\S+\.\S+/;return s.test(e)},ajaxSuccess:function(){$(".email-octopus-success-message").text(emailOctopus.successMessage),$(".email-octopus-form").hide()},ajaxError:function(e){var s=$.parseJSON(e.responseText);if(s&&s.error&&s.error.code)switch(s.error.code){case"INVALID_PARAMETERS":return void $(".email-octopus-error-message").text(emailOctopus.invalidParametersErrorMessage);case"BOT_SUBMISSION":return void $(".email-octopus-error-message").text(emailOctopus.botSubmissionErrorMessage)}$(".email-octopus-error-message").text(emailOctopus.unknownErrorMessage)},ajaxSubmit:function(){var e=$(".email-octopus-form");$.ajax({type:e.attr("method"),url:e.attr("action"),data:e.serialize(),success:function(){emailOctopus.ajaxSuccess()},error:function(e){emailOctopus.ajaxError(e)}})}};$(function(){$(".email-octopus-form").submit(function(e){$(".email-octopus-error-message").empty();var s=$(".email-octopus-email-address").val();return emailOctopus.isBotPost()?$(".email-octopus-error-message").text(emailOctopus.botSubmissionErrorMessage):$.trim(s)?emailOctopus.basicValidateEmail(s)?emailOctopus.ajaxSubmit():$(".email-octopus-error-message").text(emailOctopus.invalidParametersErrorMessage):$(".email-octopus-error-message").text(emailOctopus.missingEmailAddressMessage),!1})});
//# sourceMappingURL=./plugins-min.js.map