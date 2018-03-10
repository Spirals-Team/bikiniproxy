/*
	Appelee par le body onload, cette fonction affiche les players mp3/flv et genere les playlistes associees
	Auteur : BoOz <booz CHEZ rezo POINT net>
	Licence : GNU/GPL

	compatibilite firefox par Vincent Ramos <www-lansargues CHEZ kailaasa POINT net> et erational <http://www.erational.org>
*
* Fonctionne avec jQuery.
* sounmanager2 : http://www.schillmania.com/projects/soundmanager2/
**/


var track_index = 0;
var playa='';

live_track = 'stop' ; 
live_video = 'stop' ; 
isVideoPlaying = false ; 
videoPause = false ;
isPlaying = false ;
     
soundManager.consoleOnly = true;
soundManager.debugMode = false;

//tableau des mp3 de la page
mp3Array = new Array();
mp3Titles = new Array();

flvArray = new Array();
flvTitles = new Array();
	
function Player_init(url_player) {

soundManager.onload = function() {
  // soundManager is initialised, ready to use. Create a sound for this demo page.
  soundManager.createSound('aDrumSound',url_player);
  }
  
}

// Nouvelle methode pour les tableaux// Retourne la premiere occurence correspondant, sinon falseArray.prototype.contains = function (ele) {	for (var i = 0; i < this.length; i++) {		if (this[i] == ele) {			return true;		}	}	return false;};




jQuery(document).ready(function(){

//lecteur_debug();

lecteur_multimedia_init();});function lecteur_multimedia_init(){

var aff= jQuery("a[@rel='enclosure'][@hrefjQuery=mp3]").size(); 

	//jQuery("body").css({background:"#FF0000"});
	// preparer un plan B si flash < 8
	playa  =  '<div id="musicplayer" style="">' +
	         '</div>';
			
	jQuery('body').append(playa);
	jQuery('div#musicplayer').css({position:"fixed",top:"10px", right:"10px",width:"0",height:"0"});
	
	// lister les mp3 de la page 
	jQuery("a[@rel='enclosure'][@href$=mp3]").each(
		function(i) {	 
				// we store mp3 links in an array
				mp3Array.push(this.href);
				mp3Titles.push(jQuery(this).html());

				//demarrer le lecteur lors d'un click
				jQuery(this).click(
		             function(e)
		             {
		                 e.preventDefault();
		                 player_play(i);
		                 jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/pause.png');		
		                 
		              }
		         );
		         
		         // activer le click sur un parent de class "play_"
		         if ( jQuery(this).parent().attr("class") ) 
		               		if(  jQuery(this).parent().attr("class").split(" ").contains("play_") )
		               	 		jQuery(this).parent().click(
		             					function(e)
		             							{
												player_play(i);
		                 						jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/pause.png');																	}		
		                		);
		         // ajouter un bouton "play" devant les liens hors player - 
		         //a passer en .ajoute_musicplayer()	
				//jQuery(this).before('<span class="play_">play</span>&nbsp;');
				jQuery(this).before('<span class="play_"><img src="' + image_play + '"/></span>&nbsp;');

		}
	);


	jQuery("a[@rel='video']").each(
		function(i) {	 
				// we store flv links in an array
				flvArray.push(this.href);
				flvTitles.push(jQuery(this).html());

				//demarrer le lecteur lors d'un click
				jQuery(this).click(
		             function(e)
		             {
		                e.preventDefault();
		                video_play(i);	
						// jQuery("#now_playing").html(jQuery(this).html());                
		             }
		         );
		        
		}
	);


	// css playliste
	// du player
	jQuery(".playliste").find("span").remove(); // traiter a par le player

	jQuery(".playliste li").hover(function(){
	  jQuery(this).addClass("over");
	},function(){
	  jQuery(this).removeClass("over");
	});	




	// liens mp3 hors player avec bouton	
	// toggle play / pause
	jQuery("span.play_").each(
	function(i) {
	 
		jQuery(this).toggle(
			             function(e){ 
			            if(live_track !=='stop'){
			              player_stop();
			             }else{
			            player_play(i) ;
			            jQuery(this).html("<img src='" + image_pause + "'/>").addClass("play_on");	
			            // i c pas forcemment bon si t'as un player avant le lien cf plus bas
			            }  						
						 },function(e){
			              player_stop(); // ou pause ?		              
						 }		
			         );
	
	}
	);



 // le bouton play/pause du player
 
	    jQuery('#bouton_play').click(function(e){
	    //console.log(isPlaying);
	    if(!isPlaying){
	    	jQuery(this).attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/pause.png');	    	   
		    if(live_track =='stop') {
		   		player_play(0) ;
		   	}else{
		    	player_togglePause();
		    }	
	    }else{	
	    	jQuery(this).attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/play.png');		
	   		player_togglePause();
	    }
	    });

	
	
	
	
	// chopper les coordonn�es du clic dans la barre de progression
	jQuery("#scrollbar").click(function(e){
	var x = Math.round((e.pageX - this.offsetLeft) / jQuery(this).width() * 100);
     if(live_track !== 'stop'){
     var mySound = soundManager.getSoundById('son_' + track_index);
     var newposition = Math.round(mySound.durationEstimate * x / 100) ;
     soundManager.setPosition('son_' + track_index , newposition) ;
     }
     // pareil pour les videos
     if(isVideoPlaying){
     var position = Math.round(myListener.duration * x / 100) ;
     getFlashObject().SetVariable("method:setPosition", position);
     }

  	 });

  	 jQuery("#now_playing").change(function(){
  	      	 scroller_init();
	 });
	 
	 
}


// .play() plugin jquery

function player_play(i){
	player_stop();
	jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/pause.png');

	track_index = i ;
	live_track = i ;

	//jQuery("span.play_:eq("+i+")").html("stop").addClass("play_on");		
	jQuery("span.play_:eq("+i+")").html("<img src='" + image_pause + "'/>").addClass("play_on");	// i c pas forcemment bon si t'as un player avant le lien, il faut retrancher le nb d'item de la playlist du lecteur (ne pas mettre enclosure aux deux ?)	
	jQuery(".play_:eq("+i+")").addClass("play_on");

	if(soundManager.url != 'undefined'){
		soundManager.createSound({
	  	id:'son_'+i,url:mp3Array[i],
	 	  onfinish:function(){
	 	  /*console.log(this.sID+' finished playing'),*/
	 	  player_play(i+1)
	 	  },     
		  onid3:function(){
		  /*console.log(this.id3['songname'])*/
		  },                
		  onload:function(){
		  /*console.log(this.sID+' finished loading')*/
		  },              
		  whileloading:function(){
		  /*console.log('sound '+this.sID+' loading, '+this.bytesLoaded+' of '+this.bytesTotal);*/
		  var timer = this.bytesLoaded / this.bytesTotal * 100 ;
		  var minutes = Math.floor(this.durationEstimate / 1000 / 60) ;
		  var secondes = Math.floor((this.durationEstimate - minutes*1000*60) /1000);
		  jQuery(".duration").html(minutes + "'" + secondes +"''");
		  jQuery("#loading").css({width:Math.round(timer) +"%"});
		  },          // callback function for "download progress update" (X of Y bytes received)
		  onplay:function(){
		  jQuery("#loading").css("cursor","hand");
		  var minutes = Math.floor(this.durationEstimate / 1000 / 60) ;
		  var secondes = Math.floor((this.durationEstimate - minutes*1000*60) /1000);
		  jQuery(".duration").html(minutes + "'" + secondes +"''");		 
		  },                // callback for "play" start
		  whileplaying:function(){
		  var minutes = Math.floor(this.position / 1000 / 60) ;
		  var secondes = Math.floor((this.position - minutes*1000*60) /1000);
		  var timer2 = this.position / this.durationEstimate * 100 ;
		  jQuery("#position").css({width:Math.round(timer2) +"%"});
		  jQuery(".position").html(minutes + "'" + secondes +"''");
		  },          // callback during play (position update)
		  //'onstop':unLoad(this.sID),                // callback for "user stop"
		  //'onbeforefinish': null,        // callback for "before sound finished playing (at [time])"
		  //'onbeforefinishtime': 5000,    // offset (milliseconds) before end of sound to trigger beforefinish..
		  //'onbeforefinishcomplete':null, // function to call when said sound finishes playing
		  //'onjustbeforefinish':null,     // callback for [n] msec before end of current sound
		  //'onjustbeforefinishtime':200,  // [n] - if not using, set to 0 (or null handler) and event will not fire.
		  //'multiShot': true,             // let sounds "restart" or layer on top of each other when played multiple times..
		  //'pan': 0,                      // "pan" settings, left-to-right, -100 to 100
		  'volume': 100    	
	 	 });
	  
	  	//jQuery("span#now_playing").html(i+"("+mp3Array[i]+")"+track_index);
	  	//jQuery("span#now_playing").append("son_"+i.id3.artist);
		file1 = mp3Titles[track_index];
		file1 = file1.replace(/(%20)/g,' ');
		file1 = file1.substr(0,90);
		file1 = file1.replace(/(.mp3)/g,' ');
		file1 = file1.replace(/(_|-)/g,' ');
		//jQuery("img[@alt='play']").attr()
		var taille = file1.length;
		jQuery("#now_playing").css("width", taille*6) ;
		jQuery("#scroller").css("width", taille*6) ;
		jQuery("#now_playing").html(file1) ;
		var taille =  jQuery("#scroller").width();
  		var min_taille = jQuery("#scroller_container").width();

	   // adapter le defilement a la taille du texte
       jQuery.extend({scroller: {
       interval:     0,
       refresh:      300,  // Refresh Time in ms
       direction:    "left", // down,right,left,up
       speed:        2,
       id:           "#scroller",
       cont_id:      "#scroller_container",
       height:       30,
       width:        taille,
       min_height:   15,
       min_width:    min_taille
        }});
       jQuery("#scroller").css("left", min_taille-taille) ;

	    soundManager.play('son_'+i,{volume:100}) ;
	    isPlaying = true ;
	    
 		//lecteur_debug();
	    
	}else{
	
	//Ajouter le musicplayer de secours
	playlist='';
	deb=0;
	for(j=i; j < mp3Array.length ; j++) {
		if(deb > 0){
// Modification du code original. Voir ci-dessous.
			playlist = playlist + '|' + mp3Array[j];
// Fin modification
		}else{
			playlist = mp3Array[j];
			deb=1;
		}
	}

jQuery("#musicplayer").html('<object '+
	'type="application/x-shockwave-flash" '+
	'data="'+musicplayerurl+'" '+
	'width="1" height="1" align="middle">'+
	'<param name="FlashVars" value="song_url='+playlist+'" />'+
	'<param name="wmode" value="transparent" />'+
	'<param name="movie" value="'+musicplayerurl+'" />'+
	'</object>');
// Fin modification

}

}
	

function player_stop(){
						//reinit d'un autre play
						isPlaying = false ;

						//jQuery("span.play_on").html('play');
						jQuery("span.play_on").html('<img src="' + image_play + '"/>');
						jQuery("span.play_on").removeClass("play_on");
						live_track = 'stop' ;
						
						jQuery(".playliste li.play_on").removeClass("play_on");
						reset_boutons();
						soundManager.destroySound("son_" + track_index);
						soundManager.stopAll();
						//stop le musicplayer en flash < 8
						jQuery("#musicplayer").html('');
						jQuery("#now_playing").html('');
}	


function unLoad(i){
	soundManager.unload(i);
	/*console.log(i+' unload hop');*/

}

	
	function player_next()
	{	
		unLoad("son_" + track_index);
		track_index++;
		//file1=(mp3Array[track_index].split("/"))[(mp3Array[track_index].split("/")).length-1];
		//jQuery("#now_playing").html(file1) ;
		player_play(track_index);
		
	}
	

	
	function player_prev()
	{	
		unLoad("son_" + track_index);
		track_index--;	
		//file1=(mp3Array[track_index].split("/"))[(mp3Array[track_index].split("/")).length-1];
		//jQuery("#now_playing").html(file1) ;
		player_play(track_index);
		
	}
	
	
	function player_togglePause()
	{	
		
	 soundManager.togglePause('son_'+live_track) ;
	 //console.log(isPlaying);
	 if(isPlaying == true){ 
	 	isPlaying = false ;
	 }else{ 
	 	isPlaying = true ;
	 	} 
	
	}




	function reset_boutons(){
	jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER + 'skins/blogo/play.png');
	jQuery(".position").html("0'00''");
	jQuery("#position,#loading").width(0);
	}






	// lecteur video
	// doc : http://flv-player.net/players/js/documentation/






 function video_play(i){

	track_index = i ;
	live_video = i ;
	
			if (!videoPause) {
			video_stop();
  	 		getFlashObject().SetVariable("method:setUrl", flvArray[i]);
  	 		}          
     		getFlashObject().SetVariable("method:play", "");
     		videoPause = false ; 
     		jQuery(".playliste li:eq("+i+")").addClass("play_on");

 }

function video_pause()
            {
                if(videoPause){ videoPause = false } else { videoPause = true }
                getFlashObject().SetVariable("method:pause", "");
            }

function video_next()
	{	
		track_index++;
		video_play(track_index);
		
	}
	
	
	function video_prev()
	{	
		track_index--;	
		video_play(track_index);
		
	}
	
	function video_stop()
	{	
   	 jQuery(".playliste li.play_on").removeClass("play_on");
	 getFlashObject().SetVariable("method:stop", "");
	 getFlashObject().SetVariable("method:setUrl", videoNullUrl);          
     getFlashObject().SetVariable("method:play", "");
     getFlashObject().SetVariable("method:stop", "");
     getFlashObject().SetVariable("method:setPosition", 0);
	}


	function video_setVolume()
            {
            	var volume = document.getElementById("inputVolume").value;
            	getFlashObject().SetVariable("method:setVolume", volume);
            }
   
   
   function lecteur_debug(){
   	
  	var content = jQuery("#debug").html() ; 	
	$("#debug").html(content + "<br />live_track = " +live_track ) ; 
   	
 	};