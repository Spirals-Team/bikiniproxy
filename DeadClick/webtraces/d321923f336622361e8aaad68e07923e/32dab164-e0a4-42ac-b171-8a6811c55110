
(function () {
	
	// import library
	eval( JELLY.unpack() );

	addDomReady( function () {
	
		// Load our css
		
		// Create a reusable tweening object
		var tween = new Tween,
	
			// event handlers, including blur/focus to 
			// restore keyboard navigation
			onUploadChange = function ( e ) {

				var status = retrieveData( this, 'upload-status' );
				
				if ( this.value ) {
					// IE shows the whole system path, we're reducing it 
					// to the filename for consistency
					var value = '';
					var files = this.files;
					for (var i = 0; i < files.length-1; i++)
						value =value+( browser.ie ? files[i].name.split('\\').pop() : files[i].name)+', ';
					i = files.length-1;	
					value =value+( browser.ie ? files[i].name.split('\\').pop() : files[i].name);
					status.innerHTML = value;
          
					insertAfter( status, this.parentNode );
					// Only tween if we're responding to an event
					if ( e ) { 
						tween.setElement( status ).
							setOpacity( 0 ).
							start({ 
								opacity: 1, duration: 500 
							});
					}
				}
				else if ( status && status.parentNode ) {
					removeElement( status );
				}
			}, 
			onUploadFocus = function () { 
				addClass( this.parentNode, 'focus' ); 
			},
			onUploadBlur = function () { 
				removeClass( this.parentNode, 'focus' ); 
			};
		
		
		Q( '.file-upload input[type=file]' ).each( function ( field ) {
			
			// Create a status element, and store it
			storeData( field, 'upload-status', createElement( 'span.file-upload-status' ) );
			
			// Bind events
			addEvent( field, 'focus', onUploadFocus );
			addEvent( field, 'blur', onUploadBlur );
			addEvent( field, 'change', onUploadChange );
			
			// Set current state 
			onUploadChange.call( field );
			
			// Move the file input in Firefox / Opera so that the button part is
			// in the hit area. Otherwise we get a text selection cursor
			// which you cannot override with CSS
			if ( browser.firefox || browser.opera ) {
				field.style.left = '-800px';
			}
			else if ( browser.ie ) {
				// Minimizes the text input part in IE
				field.style.width = '0';
			}
		});
	});

})();