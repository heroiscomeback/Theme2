

      
      
      
      
      
    
      
      
      
      
      
    
      
      
          jQuery(function() {
  var $module = jQuery('#m-1602587100991').children('.module');
  var activeTab = parseInt($module.attr('data-activeTab')) - 1;
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  $module.gfV3ResTabs({
      'activeTab': activeTab,
      'mode': mode,
      tabSelected: function(index) {
        var tabInactiveBgColor = $module.attr('data-inactiveTabBgColor');
        var tabInactiveColor = $module.attr('data-inactiveTabColor');
        var tabBgColor = $module.attr('data-tabBgColor');
        var tabColor = $module.attr('data-tabColor');
        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        var $gfTabs = $module.find('>ul>li.gf_tab');
        var $gfTabActive = $module.find('>ul>li.gf_tab-active');
        var $gfTabPanels = $module.find('>.gf_tab-panel');

        if($module.hasClass('style1')) {
          $gfTabs
            .css('margin-left', '-' + borderSize)
            .css('border', borderSize + ' solid ' + borderColor)
            .css('border-bottom', borderSize + ' solid ' + borderColor);

          $module.find('>ul>li.gf_tab:first').css('margin-left', '0px');

        } else if($module.hasClass('style3')) {
          $gfTabs.css('border-bottom', borderSize + ' solid ' + tabBgColor);
        }

        if(!$module.hasClass('style3')) {
          $gfTabs.css('background-color', tabInactiveBgColor);
          $gfTabActive.css('background-color', tabBgColor);
        }

        $gfTabs.css('color', tabInactiveColor);
        $gfTabActive.css('color', tabColor);

        if($module.hasClass('style1')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', tabBgColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        } else if($module.hasClass('style3')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', borderColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        }
        $gfTabPanels
        .css('top', '-' + borderSize)
        .css('background-color', tabBgColor)
        .css('border', '1px solid ' + borderColor);

        if($module.hasClass('style1')) {
          $gfTabPanels.css('border', borderSize + ' solid ' + borderColor);
        } else {
          $gfTabPanels.css('border', 'none');
        }
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
            if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
                jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
            }	
        });
      }
  });
  if(mode == 'dev') {
    var moduleId = "1602587100991";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1602587100991") {
      window.getTab1602587100991 = function() {
        return $module.data('gfv3restabs');
      }
    }
  }
});
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          jQuery(function() {
    var $hero = jQuery('#m-1602572993517');
    var $module = jQuery('#m-1602572993517').children('.module');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    
    $hero.removeAttr('style');

    var collectionImg = $module.attr('data-collection-image');
    if (collectionImg != undefined && collectionImg != "") {
        $hero.css('background-image', 'url(' + collectionImg + ')');
    } else {
        var defaultImg = $module.attr('data-image');
        $hero.css('background-image', 'url(' + defaultImg + ')');
    }

    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    $hero.removeClass('effect-zoom').removeClass('effect-parallax');
    if (effect != 'none') {
        $hero.addClass(effect);
    }
    
    if (effect == 'effect-zoom') {   
        $hero.css('background-attachment', 'initial');  

        setTimeout(function() {
            var backgroundImage = $hero.css('background-image');
            var backgroundSize = $hero.css('background-size');
            var backgroundPosition = $hero.css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image'      : 'inherit',
                'background-size'       : 'inherit',
                'background-position'   : 'inherit',
                '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                'transition'            : 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else if (effect == 'effect-parallax') {
        $hero.css('background-attachment', 'fixed');
    } else {
        $hero.css('background-attachment', 'initial');
    }
});
      
          jQuery(function() {
    var $module = jQuery('#m-1602572993517-0');
    
}); 
      
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}