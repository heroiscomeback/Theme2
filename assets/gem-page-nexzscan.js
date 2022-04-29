

        jQuery(function() {
            var $module = jQuery('#m-1546058421484');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            $module.css({
                'height': 'auto'
            });
            jQuery(window).resize(function(){
                $module.css('height', 'auto');
            });
            $module.children('.module').removeClass('full-height');

            var image = $module.children('.module').data('image') || '';
            if ($module.children('.module').data('speed') || $module.children('.module').data('speed') == 0) {
                var speed = parseFloat($module.children('.module').data('speed'));
            } else {
                var speed = 0.2;
            }
            if($module.data('gfv3parallax') != undefined) {
                $module.removeData('gfv3parallax');
            }
            $module.gfV3Parallax({
                'image': image,
                'speed': speed,
                'mode': mode
            });
            if(mode == 'dev') {
                var moduleId = "1546058421484";
                var moduleIdSlug = moduleId.toString().replace(/-/g, '');
                if (moduleIdSlug == "1546058421484") {
                    window.getParallax1546058421484 = function() {
                        return $module.data('gfv3parallax');
                    }
                }
            }
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1546058421479').children('.module');   
            var navspeed = $module.data('navspeed'),
                autoplaytimeout = $module.data('autoplaytimeout'),
                autoplayhoverpause = $module.data('autoplayhoverpause'),
                navlg = $module.data('navlg'),
                navmd = $module.data('navmd'),
                navsm = $module.data('navsm'),
                navxs = $module.data('navxs'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs'),
                dotslg = $module.data('dotslg'),
                dotsmd = $module.data('dotsmd'),
                dotssm = $module.data('dotssm'),
                dotsxs = $module.data('dotsxs'),
                marginlg = parseInt($module.data('marginlg')),
                marginmd = parseInt($module.data('marginmd')),
                marginsm = parseInt($module.data('marginsm')),
                marginxs = parseInt($module.data('marginxs'));

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') {
                var autoplay = $module.data('autoplay'), 
                    loop = $module.data('loop');
            } else {
                var autoplay = 0, 
                    loop = 0;
            }
        
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:colxs,
                        nav: navxs,
                        dots:dotsxs,
                        margin: marginxs
                    },
                    768:{
                        items:colsm,
                        nav: navsm,
                        dots:dotssm,
                        margin: marginsm
                    },
                    992:{
                        items:colmd,
                        nav: navmd,
                        dots:dotsmd,
                        margin: marginmd
                    },
                    1200:{
                        items:collg,
                        nav: navlg,
                        dots:dotslg,
                        margin: marginlg
                    }
                }
            }); 
        }); 
    
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}