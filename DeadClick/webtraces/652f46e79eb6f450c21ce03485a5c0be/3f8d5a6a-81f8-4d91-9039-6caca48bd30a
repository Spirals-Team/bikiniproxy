  function compareNew(obj, action) {
    $('#compareProducts').load('ajax_compare.php', {'compare_id': obj, 'action': action});
  }
  
  function compareNew(obj, action) {
	  var jqno=jQuery.noConflict();
	                jqno.ajax({
					   type: "POST",
					     cache: false,
					    data:{'compare_id': obj, 'com_action': action,'msg':'yes'},
					   url: "mb_ajax_compare.php",
					   success: function(msg){
						   alert(msg);
						//jqno('#compareProducts').html(msg);
					   }
	});
   // jqno('#compareProducts').load('trg_ajax_compare.php', {'compare_id': obj, 'com_action': action});
  }