$('body').on('click', '.expandingContentClosed .headingexpanding', function(event){
  var that = this.parentNode;
  
  $(that).children('.expandingSubText').animate({
		top: '-=50',
		height: 'show'
	  }, 100, function() {
		that.setAttribute("class", "expandingContentOpen");

		//set the 'plus' image to 'minus'
		that.getElementsByClassName("headingexpanding")[0].getElementsByTagName("img")[0].src = "../images/slidingContent/minus.png";
	  });
});

$('body').on('click', '.expandingContentOpen .headingexpanding', function(event){
  var that = this.parentNode;
  
  /*if(this.getElementByTagName("img") == null){
  		this.prepend("<img src=../images/slidingContent/plus.png>");
  }*/

  $(that).children('.expandingSubText').animate({
		top: '-=50',
		height: 'hide'
	  }, 100, function() {
		that.setAttribute("class", "expandingContentClosed");

		//set the 'minus' image to 'plus'
		that.getElementsByClassName("headingexpanding")[0].getElementsByTagName("img")[0].src = "../images/slidingContent/plus.png";
	  });
});

(function() {
	var nodes;
	var innerData;

	nodes = document.getElementsByClassName("expandingContentClosed");
	for(node in nodes) {
		if(node < nodes.length) {
			var heading = nodes[node].getElementsByClassName("headingexpanding")[0];
			if(heading.getElementsByTagName("img").length == 0){
				innerData = nodes[node].getElementsByClassName("headingexpanding")[0].innerHTML
				heading.innerHTML = "<img src=../images/slidingContent/plus.png>" + innerData;
	  		}
	  	}
	}

	nodes = document.getElementsByClassName("expandingContentOpen");
	for(node in nodes) {
		if(node < nodes.length) {
			var heading = nodes[node].getElementsByClassName("headingexpanding")[0];
			if(heading.getElementsByTagName("img").length == 0){
				innerData = nodes[node].getElementsByClassName("headingexpanding")[0].innerHTML
				heading.innerHTML = "<img src=../images/slidingContent/minus.png>" + innerData;
	  		}
	  	}
	}
	
})()

/*$('.expandingContentClosed .heading').(function(event){
	console.log(this.getElementsByTagName("img"));
});*/