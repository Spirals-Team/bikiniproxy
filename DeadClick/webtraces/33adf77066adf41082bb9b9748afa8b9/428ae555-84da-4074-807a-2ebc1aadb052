(function ($) {
  Drupal.behaviors.qtip = {
    attach: function (context, settings) {
      $(function () {
        var instances = $.parseJSON(settings.instances);
        var debug = $.parseJSON(settings.qtipDebug);

        $('.qtip-link:not(.qtip-processed)', context).each(function() { // Call .each() so we can access $(this) in the settings/config
          // Check for a sibling .qtip-tooltip containing the tooltip information, otherwise (for forms)
          // go to the element's parent and look for .qtip-tooltip container as a sibling of the parent
          if ($(this, context).next('.qtip-tooltip').length) {
            var tooltipElement = $(this).next('.qtip-tooltip');
          }
          else {
            var tooltipElement = $(this).parent().siblings('.qtip-tooltip');
          }
          var tooltip = tooltipElement;

          if (!debug.leaveElement) {
            // Remove the tooltip element to keep the DOM clean
            tooltipElement.remove();
          }

          var text     = tooltip.html();
          var title    = (tooltip.data('qtip-title') != undefined) ? tooltip.data('qtip-title') + '' : ''; // Concatenate an empty string to make sure that the value being passed as the title is a string, otherwise it will not display
          var instance = (tooltip.data('qtip-instance') != undefined) ? tooltip.data('qtip-instance') : '';
          var settings = (instances[instance] != undefined) ? instances[instance] : '';

          if (settings) {
            $(this).qtip(settings);
            $(this).qtip('option', 'content.text', text);
            if (title) {
              $(this).qtip('option', 'content.title', title);
            }
          }
          // If no settings have been passed through, we still want to display a tooltip
          else {
            $(this).qtip({
              content: {
                text: text,
                title: title,
              }
            });
          }

          // Add instance class to the container to aid in styling
          $(this).addClass('qtip-instance-' + instance);

          // Add processed class to not process again on AJAX calls.
          $(this).addClass('qtip-processed');
        });
      });
    }
  };
})(jQuery);
