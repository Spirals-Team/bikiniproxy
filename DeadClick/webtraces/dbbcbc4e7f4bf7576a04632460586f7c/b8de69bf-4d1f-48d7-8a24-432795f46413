// Inititalize data tables
jQuery('.data-table.basic').dataTable( {
  "bPaginate": false,
  "bLengthChange": false,
  "bFilter": false,
  "bSort": true,
  "bInfo": false,
  "bAutoWidth": false
});
jQuery('.data-table.full').dataTable( {
  "bSort": true,
  "bInfo": false,
  "bAutoWidth": false,
  "sPaginationType": "full_numbers"
});

(function ($) {

Drupal.behaviors.templatron = {
  attach: function (context, settings) {
    // Hide colorbox titles when empty
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == true) {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);