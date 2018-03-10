/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Article Share */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function(){
	document.addEventListener("DOMContentLoaded", function(){
		var articleShare = document.querySelector(".article-share");
		
		
		// Share link clicked
		function shareLinkClicked(__evt) {
			var _windowSize     = { width: 600, height: 500 },
				_windowPosition = { top: screen.availHeight / 2 - _windowSize.width / 2, left: screen.availWidth / 2 - _windowSize.height / 2 },
				_evt            = __evt ? __evt : window.event;
			
			if (_evt.preventDefault) _evt.preventDefault();
			_evt.returnValue = false;
			
			window.open(this.getAttribute("href"), this.className.replace(/\s/, "-"), "width=" + _windowSize.width + ",height=" + _windowSize.height + ",top=" + _windowPosition.top + ",left=" + _windowPosition.left);
		}
		
		
		
		
		// Snaps the sharing module if content is scrolled below the element
		function snapShare() {
			if ( articleShare.getBoundingClientRect().top - document.querySelector("header").getBoundingClientRect().height <= 0 ) {
				articleShare.classList.add("article-share-fixed");
			} else {
				articleShare.classList.remove("article-share-fixed");
				articleShare.querySelector("div").style.setProperty("top", String(document.querySelector("#content .main-content").getBoundingClientRect().top) + "px");
			}
		}
		
		
		if ( articleShare ) {
			// Handles the links
			var shareLinks = articleShare.querySelectorAll("a"),
				i;
			
			for (i = 0; i < shareLinks.length; i++) {
				shareLinks[i].addEventListener("click", shareLinkClicked);
			}
			
			
			// Handles the sharing module
			articleShare.classList.add("article-share-first-module");
			
			snapShare();
			
			window.addEventListener("scroll", snapShare);
			window.addEventListener("resize", snapShare);
		}
	});
})();