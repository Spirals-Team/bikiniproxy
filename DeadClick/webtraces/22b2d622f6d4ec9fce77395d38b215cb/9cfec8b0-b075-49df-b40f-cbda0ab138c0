
function doWidgetSearch(searchPhrase, deptId) {
	if (searchPhrase != '') {
		if (deptId > 0) {
			window.location.href = "/Search?searchPhrase=" + encodeURIComponent(searchPhrase) + "&departmentId=" + encodeURIComponent(deptId);
		} else {
			window.location.href = '/Search?searchPhrase=' + encodeURIComponent(searchPhrase);
		}
	}
}

//Prevents issue that happens on ios devices where search icon will not load after searching and hitting back button
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $( document ).ready(function() {
		$('.imageHover').removeClass('imageHover');
	});
}
