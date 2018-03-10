gloader.load(["glow", "1", "glow.dom", "glow.embed"], {
    onLoad: function(glow){
    
		/**
		* @namespace Namespace for legacy EMP_FMTJ. This is now <b>deprecated</b>
		* and is now only supported for legacy applications.  New application
		* <b>MUST</b> use {@link bbc.fmtj.av.emp} 
		*
		**/	
        emp_load = {};
		
		/**
		 * @deprecated supported only for legacy applications.
		 * 
		 * array to hold the id's of players created using
		 * the legacy method getEmpEmbeddedParams()
		 */
		emp_load.playerInstances = [];
        
		/**
		 * @deprecated supported only for legacy applications.
		 * 
		 * This is a legacy property that defines whether emp's are 
		 * written when the dom is ready. This was always
		 * set to true.
		 */
        emp_load.isEmpWrittenOnLoad = true;
		
		
		
		/**
		 * @deprecated supported only for legacy applications.
		 * 
		 * @name emp_load.getEmpEmbeddedParams
		 * @function
		 * @description adds a dom id to the list of legacy player instances
		 * 			  
		 * @param {string} domId 
		 * 
		 */
    emp_load.getEmpEmbeddedParams = function(domId){
    
        emp_load.playerInstances.push(domId);
        
    }
        
    /**
		 * @deprecated supported only for legacy applications.
		 * 
		 * @name emp_load.isFlashVersionValid
		 * @function
		 * @description Determines whether the flash version in the browser meets
		 * a minimum version.
		 * 			  
		 * @param version {String} The minimum version of flash. [Default is 8]
		 * 
		 */
      emp_load.isFlashVersionValid = function( version ) {
        var v       = version || "8"; // The min version of flash supported
        var valid   = true;
			
        if(v != null) {
            var detection = glow.embed.Flash.version(); 
            var assets = [ detection.major, detection.minor, detection.release ];
				
            if (typeof(v) == 'number') {
							v = v.toString()
						}
				
            var targets = v.split(".");
				
            for(var i = 0; i < targets.length; ++i) {
                var target = parseInt(targets[i]);
				
					
                if(i < assets.length) {
                    // asset versioning contains this index
                    // do comparison
                    // if they're equal, continue to check subsequent indices
                    var asset = parseInt(assets[i]);
                    if(target > asset) {
                        valid = false;
                        break;
                    } else if (asset > target) {
                        // valid = true; (default)
                        break;
                    }	
                } else {
                    // asset versioning doesn't contain this particular index
                    // so if targets[i] > 0, the asset isn't valid
                    // if it's valid, continue to check subsequent indices
                    if(target > 0) {
                      valid = false;
                      break;
                    }
                }
					
					// if whole loop is ending and valid has not been set to false,
					// then valid=true (default)
				}
			}
			
			return valid;
		}
    
		/**
		 * @deprecated supported only for legacy applications.
		 * 
		 * @name emp_load.writeAllEmpContent
		 * @function
		 * @description iterates through the player instances array and invokes
		 * 				the loadEmp method to grab the object/param tags from the
		 * 				page and embed them.
		 * 
		 */
        emp_load.writeAllEmpContent = function(){
            bbc.fmtj.av.emp.load(function(){
                for (var i = 0; i < emp_load.playerInstances.length; i++) {
                    bbc.fmtj.av.emp.loadEmp(emp_load.playerInstances[i]);
                }
            })
            
        }
    
    /**
		 * @deprecated supported only for legacy applications.
		 * 
		 * @name emp_load.displayEMP
		 * @function
		 * @description Loads an EMP based on an object of properties.
		 *
		 * @param empToLoad {Object} Object of properties for EMP. Currently
		 *  supported properties are:
		 * @param empToLoad.domId       {String} The container of the EMP
		 * @param empToLoad.id          {String} The id that the object/embed tag will have
		 * @param empToLoad.width       {String} Width of EMP
		 * @param empToLoad.height      {String} Height of EMP
		 * @param empToLoad.playlist    {String} Playlist XML URL
		 * @param empToLoad.companionId {String} The DOM id of a companion element.
		 *                                       If this is passed in then the DOM element is deleted as
		 *                                       the new emp.js also creates companion banners.
		 * 
		 */   
    emp_load.displayEMP = function( empToLoad ){
	
        bbc.fmtj.av.emp.load(function(){
            
            var emp = new bbc.fmtj.av.emp.Player();
                emp.setDomId( empToLoad.domId );
                emp.setId( empToLoad.id );
                emp.setWidth( empToLoad.width );
                emp.setHeight( empToLoad.height );
                emp.setPlaylist( empToLoad.playlist );
                if( empToLoad.companionId ) {
                    glow.dom.get( "#" + empToLoad.companionId ).destroy();
                }
                emp.setMediator('href', '{protocol}://{host}/mediaselector/5/select/version/2.0/mediaset/{mediaset}/vpid/{id}');
                emp.write();
        })
    }
		/**
		 * @deprecated supported only for legacy applications.
		 * 
		 * @name emp_load.changeStreamInEmp
		 * @function
		 * @description gets the player instance from the emp.playerInstances
		 * 				array and changes the playlist using the setPlaylist()
		 * 				method. Then calls write() to rewrite the flash embed
		 * 				to the dom.
		 * 
		 * @param {string} playlist The playlist you wish to change within the emp
		 * @param {string} domId The domId of the emp you wish to change
		 * 
		 * @example
       	 *      emp_load.changeStreamInEmp( "http://path/to/playlist.xml" , "#myEmp");
		 * 
		 */
		emp_load.changeStreamInEmp = function(playlist,domId){
			var player = bbc.fmtj.av.emp.playerInstances[domId];
			player.setPlaylist(playlist);
			player.setWidth(player.width);
			player.setHeight(player.height);
			player.setMediator('href', '{protocol}://{host}/mediaselector/5/select/version/2.0/mediaset/{mediaset}/vpid/{id}');
			player.write();
		}
        
        glow.ready(function(){
			/**
			 * @deprecated supported only for legacy applications.
			 * 
			 * emp_load.writeAllEmpContent() should be called when the dom
			 * is ready in order to proxy all legacy write calls to fmtj.av.emp
			 */
			if (emp_load.isEmpWrittenOnLoad) {
                emp_load.writeAllEmpContent();
            }
        });
        
    }
});