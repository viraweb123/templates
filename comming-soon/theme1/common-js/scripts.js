(function($){"use strict";if($.isFunction($.fn.fluidbox)){$('a').fluidbox();}
if(isExists('#rounded-countdown')){var remainingSec=$('.countdown').data('remaining-sec');$('.countdown').ClassyCountdown({theme:"flat-colors-very-wide",end:$.now()+remainingSec});}
if(isExists('#normal-countdown')){var date=$('#normal-countdown').data('date');$('#normal-countdown').countdown(date,function(event){var $this=$(this).html(event.strftime(''
+'<div class="time-sec"><h3 class="main-time">%D</h3> <span>روز</span></div>'
+'<div class="time-sec"><h3 class="main-time">%H</h3> <span>ساعت</span></div>'
+'<div class="time-sec"><h3 class="main-time">%M</h3> <span>دقیقه</span></div>'
+'<div class="time-sec"><h3 class="main-time">%S</h3> <span>ثانیه</span></div>'));});}
$('a[href="#"]').on('click',function(event){return;});countdownTime();$('[data-nav-menu]').on('click',function(event){var $this=$(this),visibleHeadArea=$this.data('nav-menu');$(visibleHeadArea).toggleClass('visible');});var winWidth=$(window).width();dropdownMenu(winWidth);$(window).on('resize',function(){dropdownMenu(winWidth);});var isAnimated=false;})(jQuery);function countdownTime(){if(isExists('#clock')){$('#clock').countdown('2022/01/01',function(event){var $this=$(this).html(event.strftime(''
+'<div class="time-sec"><span class="title">%D</span> روز </div>'
+'<div class="time-sec"><span class="title">%H</span> ساعت </div>'
+'<div class="time-sec"><span class="title">%M</span> دقیقه </div>'
+'<div class="time-sec"><span class="title">%S</span> ثانیه </div>'));});}}
function dropdownMenu(winWidth){if(winWidth>767){$('.main-menu li.drop-down').on('mouseover',function(){var $this=$(this),menuAnchor=$this.children('a');menuAnchor.addClass('mouseover');}).on('mouseleave',function(){var $this=$(this),menuAnchor=$this.children('a');menuAnchor.removeClass('mouseover');});}else{$('.main-menu li.drop-down > a').on('click',function(){if($(this).attr('href')=='#')return false;if($(this).hasClass('mouseover')){$(this).removeClass('mouseover');}
else{$(this).addClass('mouseover');}
return false;});}}
function isExists(elem){if($(elem).length>0){return true;}
return false;}
function initMap(){var styledMapType=new google.maps.StyledMapType([{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}],{name:'Styled Map'});var uluru={lat:56.946285,lng:24.105078};var map=new google.maps.Map(document.getElementById('map'),{zoom:4,center:uluru});var image='images/google-marker.png';var marker=new google.maps.Marker({position:uluru,map:map,icon:image});map.mapTypes.set('styled_map',styledMapType);map.setMapTypeId('styled_map');}
