

        jQuery(function() {
            var $module = jQuery('#m-1548384628972').children('.module');
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
                }
            });
            if(mode == 'dev') {
                var moduleId = "1548384628972";
                var moduleIdSlug = moduleId.toString().replace(/-/g, '');
                if (moduleIdSlug == "1548384628972") {
                    window.getTab1548384628972 = function() {
                        return $module.data('gfv3restabs');
                    }
                }
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1543283145545').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') { 
                $module.find('button[type="submit"]').on('mouseover', function() {
                    try {
                        localStorage.setItem('gemId', '#m-1543283145545');
                    } catch(err) {}
                });

                var gemId = '';
                try {
                    var gemId = localStorage.getItem('gemId');
                } catch(err) {}

                if(gemId != '') {
                    var moduleId = '#' + $module.parent().attr('id');
                    if(gemId == moduleId) {
                        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

                        if(cbLink && cbLink != '') {
                            try {
                                localStorage.setItem('gemId', 'redirected');
                            } catch(err) {}

                            window.location.href = cbLink;
                        }
                    }
                } else {
                    var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

                    if(cbLink && cbLink != '') {
                        window.location.href = cbLink;
                    }
                }
            } 
        });
    
jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1611744945238').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1611744945238').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1611744945238');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1611744945238').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1611744945238').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1611744945238').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
        jQuery(function() {
            var $module = jQuery('#m-1543284879242').children('.module');
            var btnLabel = $module.attr('data-btnlabel');
            $module.gfSocialShare({
                btnLabel: btnLabel
            });
        });
    