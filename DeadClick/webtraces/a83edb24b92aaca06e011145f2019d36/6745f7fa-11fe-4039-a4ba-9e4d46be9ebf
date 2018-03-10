jQuery(document).ready(function($)
{
	//	Toggle
	$('.toggle_wrapper .toggle_header span').click(function()
	{
		var span_status = $(this).attr('class');
		var id = $(this).parent().parent().attr('id');

		if (span_status == 'open')
		{
			$('.toggle_wrapper #'+id+'_content').slideDown();
			$(this).removeClass('open');
			$(this).addClass('close');
			$(this).text(ltw_function.toggle_close);
		}
		else
		{
			$('.toggle_wrapper #'+id+'_content').slideUp();
			$(this).removeClass('close');
			$(this).addClass('open');
			$(this).text(ltw_function.toggle_open);
		}
	});

	//	Tabs code
	//	Main function that shows and hides the requested tabs and their content
	var set_tab = function(tab_container_id, tab_id)
	{
		//	Remove class "tab_active" from currently active tab
		$('#'+tab_container_id+' .tabs_list li').removeClass('tab_active');

		//	Now add class "tab_active" to the selected/clicked tab
		$('#'+tab_container_id+' .tabs_list a[rel="'+tab_id+'"]').parent().addClass('tab_active');

		//	Hide contents for all the tabs.
		$('#'+tab_container_id+' .tab_content_container .content_tab').hide();

		//	Show the selected tab content
		$('#'+tab_container_id+' .tab_content_container #content_'+tab_id).fadeIn();
	}

	//	Function that gets the hash from URL for tabs
	var get_hash = function()
	{
		if (window.location.hash)
		{
			//	Get the hash from URL
			var url = window.location.hash;

			//	Remove the #
         	var current_hash = url.substring(1);

			//	Split the IDs with comma
			var current_hashes = current_hash.split(",");

			//	Loop over the array and activate the tabs if more then one in URL hash
			$.each(current_hashes, function(i, v)
			{
				set_tab($('a[rel="'+v+'"]').parent().parent().parent().attr('id'), v);
			});
		}
	}

	//	Called when page is first loaded or refreshed
	get_hash();

	//	Looks for changes in the URL hash for tabs
	$(window).bind('hashchange', function()
	{
		get_hash();
	});
	
	//	Called when we click on the tab itself
	$('.tabs_container .tabs_list li').click(function()
	{
		var tab_id = $(this).children('a').attr('rel');

		//	Update the hash in the url
		window.location.hash = tab_id;

		//	Do nothing when tab is clicked
		return false;
	});

	//	Do nothing if the button has only # as href
	$('.button').click(function(){
		if ($(this).attr('href') == '#') {
			return false;
		}
	});
});