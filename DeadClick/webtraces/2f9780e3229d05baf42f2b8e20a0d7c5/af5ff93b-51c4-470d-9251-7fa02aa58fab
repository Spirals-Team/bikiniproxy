/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* -- Audio Player -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

(function(){




/* -- Private Global Variables -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	var globals = {
		currentPlayer : {
			playing : null,
			dragged : null
		},
		cssClasses : {
			container       : "ark-audio-player",
			playing         : "ark-audio-player-playing",
			seeking         : "ark-audio-player-seeking",
			paused          : "ark-audio-player-paused",
			error           : "ark-audio-player-error",
			media           : "ark-audio-player--media",
			controller      : "ark-audio-player--controller",
			playPauseButton : "ark-audio-player--controller--play-pause-button",
			progress        : "ark-audio-player--controller--progress",
			progressBar     : "ark-audio-player--controller--progress--bar",
			progressBarFill : "ark-audio-player--controller--progress--bar--fill",
			progressBarKnob : "ark-audio-player--controller--progress--bar--knob",
			currentTime     : "ark-audio-player--controller--current-time",
			remainingTime   : "ark-audio-player--controller--remaining-time",
		},
		dataAttributes : {
			url         : "data-ark-audio-player-url",
			autoplay    : "data-ark-audio-player-autoplay",
			mediaType   : "data-ark-audio-player-media-type",
			title       : "data-ark-audio-player-media-title",
			articleType : "data-ark-audio-player-media-article-type"
		}
	};




/* !-- Static Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Initializes all unitialized audio players -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	AudioPlayer_V2.initAll = function() {
		var audioPlayers = document.querySelectorAll("." + globals.cssClasses.container + "[" + globals.dataAttributes.url + "]"),
			audioPlayer,
			i;
		
		for ( i = 0; i < audioPlayers.length; i++ ) {
			audioPlayer = new AudioPlayer_V2(audioPlayers[i]);
		}
	};




/* !-- Constructor -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function AudioPlayer_V2(__container) {
		// Private Variables
		var _container = __container,
			_defaultAutoplay = _container.getAttribute(globals.dataAttributes.autoplay) === "true" ? true : false;
		
		
		// Public Properties
		this.source      = _container.getAttribute(globals.dataAttributes.url) ? _container.getAttribute(globals.dataAttributes.url) : null;
		this.title       = _container.getAttribute(globals.dataAttributes.title) ? _container.getAttribute(globals.dataAttributes.title) : "";
		this.articleType = _container.getAttribute(globals.dataAttributes.articleType) ? _container.getAttribute(globals.dataAttributes.articleType).toUpperCase() : "";
		this.tracked     = {};
		
		
		// Getters and Setters
		this.getContainer       = function() { return _container; };
		this.getDefaultAutoplay = function() { return _defaultAutoplay; }
		
		
		// Initializations
		_container.removeAttribute(globals.dataAttributes.url);
		_container.removeAttribute(globals.dataAttributes.autoplay);
		
		if ( !_container.ark ) {
			_container.ark = {};
		}
		
		_container.ark.audioPlayer = this;
		
		createPlayerHTML(this);
		var that = this;

		// If image, add a play/pause trigger on it
		var imageLink = __container.parentNode.parentNode.querySelector("figure.audio a");
		if(imageLink != undefined) {
			// Two levels up
			imageLink.addEventListener("click", function() { that.playPause(); })
		}
		else {
			imageLink = __container.parentNode.parentNode.parentNode.querySelector("figure.audio a");
			if(imageLink != undefined) {
				// Three levels up
				imageLink.addEventListener("click", function() { that.playPause(); })
			}
		}
	}




/* !-- Private Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Creates the HTML for the player -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function createPlayerHTML(__context) {
		
		// Media Container
		var media = document.createElement("div");
			media.classList.add(globals.cssClasses.media);
		
		
		// Audio Element
		var audio = document.createElement("audio");
			audio.autoplay = __context.getDefaultAutoplay();
			
			audio.addEventListener("loadeddata", function(__event) { loadedDataEvent(__context, __event); });
			audio.addEventListener("play"      , function(__event) { playEvent(__context, __event); });
			audio.addEventListener("pause"     , function(__event) { pauseEvent(__context, __event); });
			audio.addEventListener("timeupdate", function(__event) { timeupdateEvent(__context, __event); });
			audio.addEventListener("ended"     , function(__event) { endedEvent(__context, __event); });
		
		media.appendChild(audio);
		
		
		// Controller Container
		var controller = document.createElement("div");
			controller.classList.add(globals.cssClasses.controller);
		
		
		// Progress
		var progress = document.createElement("div");
			progress.classList.add(globals.cssClasses.progress);
		
		
		// Progress Bar
		var progressBar = document.createElement("div");
			progressBar.classList.add(globals.cssClasses.progressBar);
			progressBar.addEventListener("mousedown", function(__event) { startSeeking(__context, __event); });
		
		
		// Progress Bar Fill
		var progressBarFill = document.createElement("div");
			progressBarFill.classList.add(globals.cssClasses.progressBarFill);
			progressBarFill.style.setProperty("pointer-events", "none");
		
		
		// Progress Bar Knob
		var progressBarKnob = document.createElement("div");
			progressBarKnob.classList.add(globals.cssClasses.progressBarKnob);
			progressBarKnob.style.setProperty("pointer-events", "none");

		
		progressBar.appendChild(progressBarFill);
		progressBar.appendChild(progressBarKnob);
		progress.appendChild(progressBar);
		controller.appendChild(progress);
		
		
		
		// Play Button
		var playPauseButton = document.createElement("button");
			playPauseButton.classList.add(globals.cssClasses.playPauseButton);
			playPauseButton.setAttribute("type", "button");
			playPauseButton.addEventListener("click", function(__event) { __context.playPause(__event); });
		controller.appendChild(playPauseButton);
		
		
		// Current Time
		var currentTime = document.createElement("div");
			currentTime.classList.add(globals.cssClasses.currentTime);
		controller.appendChild(currentTime);
		
		
		// Time Left
		var remainingTime = document.createElement("div");
			remainingTime.classList.add(globals.cssClasses.remainingTime);
		controller.appendChild(remainingTime);
			
		
		__context.getMedia           = function() { return media; };
		__context.getAudio           = function() { return audio; };
		__context.getController      = function() { return controller; };
		__context.getPlayButton      = function() { return playButton; };
		__context.getProgress        = function() { return progress; };
		__context.getProgressBar     = function() { return progressBar; };
		__context.getProgressBarFill = function() { return progressBarFill; };
		__context.getProgressBarKnob = function() { return progressBarKnob; };
		__context.getCurrentTime     = function() { return currentTime; };
		__context.getRemainingTime   = function() { return remainingTime; };
		
		
		__context.getContainer().appendChild(media);
		__context.getContainer().appendChild(controller);
		
		
		var source = document.createElement("source");
			source.setAttribute("type", getMediaType(__context));
			source.setAttribute("src", __context.source);
			source.addEventListener("error", function(__event) { errorEvent(__context, __event); });
		audio.appendChild(source);
	}
	
	
	
	
	/* -- Returns the media type from the element or the source extension -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function getMediaType(__context) {
		mediaType = __context.getContainer().getAttribute(globals.dataAttributes.mediaType) ? __context.getContainer().getAttribute(globals.dataAttributes.mediaType) : null;
		
		if (mediaType === null) {
			switch(__context.source.substring(__context.source.lastIndexOf(".") + 1).toLowerCase()) {
				case "mp3":
					mediaType = "mpeg";
					break;
				
				case "mp4":
					mediaType = "mp4";
					break;
				
				case "ogg":
					mediaType = "ogg";
					break;
				
				case "webm":
					mediaType = "webm";
					break;
				
				case "wav":
					mediaType = "wav";
					break;
				
				default:
					mediaType = "mp4";
					break;
			}
		}
		
		mediaType = "audio/" + mediaType.toLowerCase();
		
		return mediaType;
	}
	
	
	
	
	/* -- Returns time in seconds as string -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function getStringForTime(__time) {
		__time = Math.round(__time);
		
		var timeValues = {
			second : 1,
			minute : 1 * 60,
			hour   : 1 * 60 * 60,
			day    : 1 * 60 * 60 * 24
		};
		
		var time = {
		    hours   : Math.floor((__time % timeValues.day) / timeValues.hour),
		    minutes : Math.floor((__time % timeValues.hour) / timeValues.minute),
		    seconds : Math.floor((__time % timeValues.minute) / timeValues.second)
	    };
		
		var displayTime = "";
		
		if (time.hours > 0) {
			displayTime += (time.hours < 10 ? "0" : "") + String(time.hours) + ":";
		}
		
		displayTime += (time.minutes < 10 ? "0" : "") + String(time.minutes) + ":";
		displayTime += (time.seconds < 10 ? "0" : "") + String(time.seconds);
		
		return displayTime;
	}
	
	
	
	
	/* -- Loadeddata event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function loadedDataEvent(__context, __event) {
		setProgress(__context);
	}
	
	
	
	
	/* -- Play event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function playEvent(__context, __event) {
		if ( globals.currentPlayer.playing !== null && globals.currentPlayer.playing !== __context ) {
			globals.currentPlayer.playing.pause();
		}
		globals.currentPlayer.playing = __context;
		__context.getContainer().classList.remove(globals.cssClasses.paused);
		__context.getContainer().classList.add(globals.cssClasses.playing);
		track(__context, "Play");
	}
	
	
	
	/* -- Pause event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function pauseEvent(__context, __event) {
		__context.getContainer().classList.remove(globals.cssClasses.playing);
		__context.getContainer().classList.add(globals.cssClasses.paused);
	}
	
	
	
	
	/* -- Timeupdate event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function timeupdateEvent(__context, __event) {
		setProgress(__context);
	}
	
	
	
	
	/* -- Ended event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function endedEvent(__context, __event) {
		setProgress(__context);
	}
	
	
	
	
	/* -- Error event handler -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function errorEvent(__context, __event) {
		__context.getContainer().classList.add(globals.cssClasses.error);
		__context.getMedia().style.setProperty("pointer-events", "none");
		__context.getController().style.setProperty("pointer-events", "none");
		
		var errors = {
			0 : "NETWORK_EMPTY - audio/video has not yet been initialized",
			1 : "NETWORK_IDLE - audio/video is active and has selected a resource, but is not using the network",
			2 : "NETWORK_LOADING - browser is downloading data",
			3 : "NETWORK_NO_SOURCE - no audio/video source found"
		};
		
		console.error("Unable to load audio for AudioPlayer_V2 ('" + errors[__context.getAudio().networkState] + "').", __context.getContainer());
	}
	
	
	
	
	/* -- Sets the progress of the audio -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function setProgress(__context) {
		setProgressBar(__context);
		setProgressTime(__context);
	}
	
	
	
	
	/* -- Sets the progress bar -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function setProgressBar(__context) {
		var percentage = String((__context.getAudio().currentTime / __context.getAudio().duration) * 100) + "%";
		
		if ( __context.getProgressBarFill() ) {
			__context.getProgressBarFill().style.setProperty("width", percentage);
		}
		
		
		if ( __context.getProgressBarKnob() ) {
			__context.getProgressBarKnob().style.setProperty("left", percentage)
		}
	}
	
	
	
	/* -- Sets the current time and time remaining -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function setProgressTime(__context) {
		var currentTime = getStringForTime(__context.getAudio().currentTime),
			remainingTime = getStringForTime(__context.getAudio().duration - __context.getAudio().currentTime);
		
		__context.getCurrentTime().textContent = currentTime;
		__context.getRemainingTime().textContent = "-" + remainingTime;
	}
	
	
	
	
	/* -- Starts the seeking -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function startSeeking(__context, __event) {
		if (__context.getAudio().isSeeking !== true) {
			globals.currentPlayer.dragged = __context;
			__context.getContainer().classList.add(globals.cssClasses.seeking);
			__context.getAudio().isSeeking = true;
			__context.getAudio().wasPlaying = !__context.getAudio().paused;
			__context.pause();
			seek(__event);
			
			document.documentElement.addEventListener("mouseup", stopSeeking);
			document.documentElement.addEventListener("mousemove", seek);
		}
	}
	
	
	
	
	/* -- Ends the seeking -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function stopSeeking(__event) {
		if ( globals.currentPlayer.dragged ) {
			globals.currentPlayer.dragged.getContainer().classList.remove(globals.cssClasses.seeking);
			globals.currentPlayer.dragged.getAudio().isSeeking = false
			if ( globals.currentPlayer.dragged.getAudio().wasPlaying === true ) {
				globals.currentPlayer.dragged.play();
			}
			
			document.documentElement.removeEventListener("mousemove", seek);
			document.documentElement.removeEventListener("mouseup", stopSeeking);
		}
	}
	
	
	
	
	/* -- Seeking -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function seek(__event) {
		if ( globals.currentPlayer.dragged ) {
			var currentProgressRect = globals.currentPlayer.dragged.getProgress().getBoundingClientRect(),
				position = __event.clientX - currentProgressRect.left;
			
			if (position < 0) {
				position = 0;
			} else if (position > currentProgressRect.width) {
				position = currentProgressRect.width;
			}
			
			globals.currentPlayer.dragged.getAudio().currentTime = (position / currentProgressRect.width) * globals.currentPlayer.dragged.getAudio().duration;
		}
	}
	
	
	
	
	/* -- Tracking -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	function track(__context, __eventName) {
		if (!__context.tracked[__eventName]) {
			
			// Stops tracking for an event
			__context.tracked[__eventName] = true;
			
			if (__context.title.length ) {
				// Sets the title of the item to track
				var title = __context.title.toLowerCase().trim().replace(/\s|'|’|\"|“|”|\(|\)|\{|\}|\&amp;/g, "-").replace(/\&/g, "-").replace(/\.|\,|\;/g, "").replace(/À|Â|Á|Ä|Ã|Å|Ā/gi, "a").replace(/É|È|Ê|Ë|Ę|Ė|Ē/gi, "e").replace(/Î|Ï|Ì|Í|Į|Ī/gi, "i").replace(/Ô|Ö|Ò|Ó|Õ|Ø|Ō/gi, "o").replace(/Û|Ù|Ü|Ú|Ū/gi, "u").replace(/Ÿ/gi, "y").replace(/Ç|Ć|Č/gi, "c").replace(/Æ/gi, "ae").replace(/Œ/gi, "oe").replace(/^\-/, "").replace(/\-$/, "");
				while ((/\-\-/).test(title)) {
					title = title.replace(/\-\-/g, "-")
				}
				
				// Tracks the data
				ga( "send",
					"event",
					"Podcasts",
					__eventName + "-" + ( __context.articleType === "ARCHIVE" ? "Archive" : "Article" ),
					title + "-" + (document.documentElement.lang ? document.documentElement.lang.split("-")[0].toLowerCase() : "")
				);
			}
		}
	}





/* !-- Public Methods -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	
	/* -- Plays the audio -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	AudioPlayer_V2.prototype.play = function() {
		if (this.getAudio()) {
			this.getAudio().play();
		}
	};
	
	
	
	
	/* -- Pauses the audio -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	AudioPlayer_V2.prototype.pause = function() {
		if (this.getAudio()) {
			this.getAudio().pause();
		}
	};
	
	
	
	
	/* -- Play or pauses the audio -- */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	AudioPlayer_V2.prototype.playPause = function() {
		if (this.getAudio()) {
			if ( this.getAudio().paused ) {
				this.play();
			} else {
				this.pause();
			}
		}
	};




/* -- Adds the object -- */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	if (!window.ark) window.ark = {};
	
	if (!window.ark.AudioPlayer_V2) {
		window.ark.AudioPlayer_V2 = AudioPlayer_V2;
	}
	
	
	document.addEventListener("DOMContentLoaded", function(){
		window.ark.AudioPlayer_V2.initAll();
	});


}());