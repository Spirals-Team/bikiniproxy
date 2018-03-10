define(function () {
	return [
		'<ul class="tabgroup-tabs">',
			'<% _.each( tabs, function ( tab, index ) { %>',
			'<li class="tabgroup-tab <%= index === 0 ? "current" : "" %>">',
				'<a href="#"><%= tab %></a>',
			'</li>',
			'<% }); %>',
		'</ul>'
	].join( "\n" );
});