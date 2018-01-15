/**
 * Created by bong on 2017/2/4.
 */
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    window.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

})( window );














/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend( jQuery.easing,
    {
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });












/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
    if(sd>settings.min)
        $(containerIDhash).fadeIn(settings.inDelay);else
        $(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);












/*
 Inspired by the lightbox plugin adapted to jquery by Leandro Vieira Pinho (http://leandrovieira.com)

 @author  : Nicolas Turlais : nicolas-at-insipi.de
 @version : V0.3.1 - June 2012
 @license : Licensed under CCAttribution-ShareAlike
 @website : http://chocolat.insipi.de

 */
(function($) {
    images = [];
    var calls = 0;
    $.fn.Chocolat = function(settings) {
        settings = $.extend({
            container             : $('body'),
            displayAsALink        : false,
            linkImages            : true,
            linksContainer        : 'Choco_links_container',
            overlayOpacity        : 0.9,
            overlayColor          : '#fff',
            fadeInOverlayduration : 500,
            fadeInImageduration   : 500,
            fadeOutImageduration  : 500,
            vache                 : true,
            separator1            : ' | ',
            separator2            : '/',
            leftImg               : 'images/left.gif',
            rightImg              : 'images/right.gif',
            closeImg              : 'images/close.gif',
            loadingImg            : 'images/loading.gif',
            currentImage          : 0,
            setIndex              : 0,
            setTitle              : '',
            lastImage             : 0
        },settings);

        calls++;
        settings.setIndex = calls;
        images[settings.setIndex] = [];

        //images:
        this.each(function(index){
            if(index == 0 && settings.linkImages && settings.setTitle == ''){
                settings.setTitle = isSet($(this).attr('rel'), ' ');
            }
            $(this).each(function() {
                images[settings.setIndex]['displayAsALink'] = settings.displayAsALink;
                images[settings.setIndex][index]            = [];
                images[settings.setIndex][index]['adress']  = isSet($(this).attr('href'), ' ');
                images[settings.setIndex][index]['caption'] = isSet($(this).attr('title'), ' ');
                if(!settings.displayAsALink){
                    $(this).unbind('click').bind('click', {
                        id  : settings.setIndex,
                        nom : settings.setTitle,
                        i   : index
                    }, _initialise);
                }
            })
        });

        //setIndex:
        for(var i = 0; i < images[settings.setIndex].length; i++)
        {
            if(images[settings.setIndex]['displayAsALink']){
                if($('#'+settings.linksContainer).size() == 0){
                    this.filter(":first").before('<ul id="'+settings.linksContainer+'"></ul>');
                }
                $('#'+settings.linksContainer).append('<li><a href="#" id="Choco_numsetIndex_'+settings.setIndex+'" class="Choco_link">'+settings.setTitle+'</a></li>');
                e = this.parent();
                $(this).remove();
                if($.trim(e.html()) == ""){//If parent empty : remove it
                    e.remove();
                }
                return $('#Choco_numsetIndex_'+settings.setIndex).unbind('click').bind('click', {id: settings.setIndex, nom : settings.setTitle, i : settings.currentImage}, _initialise);
            }
        }

        function _initialise(event) {

            settings.currentImage = event.data.i;
            settings.setIndex     = event.data.id;
            settings.setTitle     = event.data.nom;
            settings.lastImage    = images[settings.setIndex].length - 1;
            showChocolat();
            return false;
        }
        function _interface(){
            //html
            clear();
            settings.container.append('<div id="Choco_overlay"></div><div id="Choco_content"><div id="Choco_close"></div><div id="Choco_loading"></div><div id="Choco_container_photo"><img id="Choco_bigImage" src="" /></div><div id="Choco_container_description"><span id="Choco_container_title"></span><span id="Choco_container_via"></span></div><div id="Choco_left_arrow" class="Choco_arrows"></div><div id="Choco_right_arrow" class="Choco_arrows"></div></div>');
            $('#Choco_left_arrow').css('background-image', 'url('+settings.leftImg+')');
            $('#Choco_right_arrow').css('background-image', 'url('+settings.rightImg+')');
            $('#Choco_close').css('background-image', 'url('+settings.closeImg+')');
            $('#Choco_loading').css('background-image', 'url('+settings.loadingImg+')');
            if(settings.container.get(0).nodeName.toLowerCase() !== 'body'){
                settings.container.css({'position':'relative','overflow':'hidden','line-height':'normal'});//yes, yes
                $('#Choco_content').css('position','relative');
                $('#Choco_overlay').css('position', 'absolute');
            }
            //events
            $(document).unbind('keydown').bind('keydown', function(e){
                switch(e.keyCode){
                    case 37:
                        changePageChocolat(-1);
                        break;
                    case 39:
                        changePageChocolat(1);
                        break;
                    case 27:
                        close();
                        break;
                };
            });
            if(settings.vache){
                $('#Choco_overlay').click(function(){
                    close();
                    return false;
                });
            }
            $('#Choco_left_arrow').unbind().bind('click', function(){
                changePageChocolat(-1);
                return false;
            });
            $('#Choco_right_arrow').unbind().bind('click', function(){
                changePageChocolat(1);
                return false;
            });
            $('#Choco_close').unbind().bind('click', function(){
                close();
                return false;
            });
            $(window).resize(function() {
                load(settings.currentImage,true);
            });

        }
        function showChocolat(){
            _interface();
            load(settings.currentImage, false);
            $('#Choco_overlay')
                .css({
                    'background-color' : settings.overlayColor,
                    'opacity'          : settings.overlayOpacity
                })
                .fadeIn(settings.fadeInOverlayduration);
            $('#Choco_content').fadeIn(settings.fadeInImageduration,function(){});

        }
        function load(image,resize){
            settings.currentImage = image;
            $('#Choco_loading').fadeIn(settings.fadeInImageduration);
            var imgPreloader = new Image();
            imgPreloader.onload = function(){
                $('#Choco_bigImage').attr('src',images[settings.setIndex][settings.currentImage]['adress']);
                var ajustees = iWantThePerfectImageSize(imgPreloader.height,imgPreloader.width);
                ChoColat(ajustees['hauteur'],ajustees['largeur'],resize);
                $('#Choco_loading').stop().fadeOut(settings.fadeOutImageduration);
            };
            imgPreloader.src = images[settings.setIndex][settings.currentImage]['adress'];
            preload();
            upadteDescription();
        }
        function changePageChocolat(signe){
            if(!settings.linkImages || (settings.currentImage == 0 && signe == -1) || (settings.currentImage == settings.lastImage && signe == 1))
            {
                return false;
            }
            else{
                //$('#Choco_container_description').fadeTo(settings.fadeOutImageduration,0); making a weird bug with firefox 17
                $('#Choco_container_description').css('visibility','hidden');
                $('#Choco_bigImage').fadeTo(settings.fadeOutImageduration, 0, function(){
                    load(settings.currentImage + parseInt(signe), false);
                });
            }
        }
        function ChoColat(hauteur_image,largeur_image,resize){

            if(resize){
                $('#Choco_container_photo, #Choco_content, #Choco_bigImage').stop(true,false).css({'overflow':'visible'});
                $('#Choco_bigImage').animate({
                    'height' : hauteur_image+'px',
                    'width'  : largeur_image+'px'
                },settings.fadeInImageduration);
            }
            $('#Choco_container_photo').animate({
                'height' : hauteur_image,
                'width'  : largeur_image
            },settings.fadeInImageduration);
            $('#Choco_content').animate({
                'height'     : hauteur_image,
                'width'      : largeur_image,
                'marginLeft' : -largeur_image/2,
                'marginTop'  : -(hauteur_image)/2
            },settings.fadeInImageduration, 'swing', function(){
                $('#Choco_bigImage').fadeTo(settings.fadeInImageduration, 1).height(hauteur_image).width(largeur_image);
                if(!resize)
                {
                    arrowsManaging();
                    //$('#Choco_container_description').fadeTo(settings.fadeInImageduration,1); making a weird bug with firefox 17
                    $('#Choco_container_description').css('visibility','visible');
                    $('#Choco_close').fadeIn(settings.fadeInImageduration);
                }
            }).
            css('overflow', 'visible');
        }
        function arrowsManaging(){
            if(settings.linkImages){
                var what = ['Choco_right_arrow','Choco_left_arrow'];
                for(var i=0; i < what.length; i++){
                    hide = false;
                    if(what[i] == 'Choco_right_arrow' && settings.currentImage == settings.lastImage){
                        hide = true;
                        $('#'+what[i]).fadeOut(300);
                    }
                    else if(what[i] == 'Choco_left_arrow' && settings.currentImage == 0){
                        hide = true;
                        $('#'+what[i]).fadeOut(300);
                    }
                    if(!hide){
                        $('#'+what[i]).fadeIn(settings.fadeOutImageduration);
                    }
                }
            }
        }
        function preload(){
            if(settings.currentImage !== settings.lastImage){
                i = new Image;
                z = settings.currentImage + 1;
                i.src = images[settings.setIndex][z]['adress'];
            }
        }
        function upadteDescription(){
            var current = settings.currentImage + 1;
            var last = settings.lastImage + 1;
            $('#Choco_container_title').html(images[settings.setIndex][settings.currentImage]['caption']);
            $('#Choco_container_via').html(settings.setTitle+settings.separator1+current +settings.separator2+last);
        }
        function isSet(variable,defaultValue){
            // return variable === undefined ? defaultValue : variable; ?
            if (variable === undefined) {
                return defaultValue;
            }
            else{
                return variable;
            }
        }
        function iWantThePerfectImageSize(himg,limg){
            //28% = 14% + 14% margin
            var lblock             = limg + (limg*28/100);
            var heightDescAndClose = $('#Choco_container_description').height()+$('#Choco_close').height();
            var hblock             = himg + heightDescAndClose;
            var k                  = limg/himg;
            var kk                 = himg/limg;
            if(settings.container.get(0).nodeName.toLowerCase() == 'body'){
                windowHeight = $(window).height();
                windowWidth  = $(window).width();
            }
            else{
                windowHeight = settings.container.height();
                windowWidth  = settings.container.width();
            }
            notFitting = true;
            while (notFitting){
                var lblock = limg + (limg*28/100);
                var hblock = himg + heightDescAndClose;
                if(lblock > windowWidth){
                    limg = windowWidth*100/128;

                    himg = kk * limg;
                }else if(hblock > windowHeight){
                    himg = (windowHeight - heightDescAndClose);
                    limg = k * himg;
                }else{
                    notFitting = false;
                };
            };
            return {
                largeur:limg,
                hauteur:himg
            };

        }
        function clear(){
            $('#Choco_overlay').remove();
            $('#Choco_content').remove();
        }
        function close(){
            $('#Choco_overlay').fadeOut(900, function(){$('#Choco_overlay').remove()});
            $('#Choco_content').fadeOut(500, function(){$('#Choco_content').remove()});
            settings.currentImage = 0;
        }

    };
})(jQuery);
