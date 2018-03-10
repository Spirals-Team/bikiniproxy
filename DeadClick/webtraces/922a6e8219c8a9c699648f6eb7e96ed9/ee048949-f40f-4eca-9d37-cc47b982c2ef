jQuery(document).ready(function($) {
	/* find google search bar input and add placeholder text */
	$("#google-cse").find(".form-item>input").attr("placeholder", "Search WSU Vancouver");
	/* find and check width of html tag (accounts for scroll bar) */
  var htmlWidth = $('html').width();
  if (htmlWidth <= 739) {
  	/* swap hamburger for search icon */
    $('#nav-toggle').html(
      "<img class='search-icon' src='https://vancouver.wsu.edu/sites/www.vancouver.wsu.edu/themes/omegawsuv/search-crimson.png' alt='Search'>"
    );
    /* set width of search bar (-34px for search icon) */
    $('#google-cse').find(".form-item>input").width((0.90 *
        htmlWidth) -
      34);
  }
/* do it all again if the window is resized */
  $(window).resize(function() {
    var htmlWidth = $('html').width();
    if (htmlWidth <= 739) {
    	$('#nav-toggle').html(
      "<img class='search-icon' src='https://vancouver.wsu.edu/sites/www.vancouver.wsu.edu/themes/omegawsuv/search-crimson.png' alt='Search'>"
    );
      $('#google-cse').find(".form-item>input").width((0.90 *
          htmlWidth) -
        34);
    } else {
      $('#google-cse').find(".form-item>input").width(200);
    }
  });
});
