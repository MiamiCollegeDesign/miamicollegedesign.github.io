/* General Website JavaScript */

var website = {
    run: function() {
        website.header();
		website.scroll();
		website.sidebar();
		website.hamburger();
		jQuery( "img" ).unveil( 0, function() {
			jQuery( this ).load( function() {
				this.style.opacity = 1;
			});
		});
		jQuery( window ).scroll( function( event ) {
			var scroll = jQuery( this ).scrollTop();
			if ( scroll > 10 ) {
				jQuery( "div#header" ).addClass( "fixed" );
			}
			else {
				jQuery( "div#header" ).removeClass( "fixed" );
			}
		});
    },
	header: function() {
		var height = jQuery( window ).height();
		if ( height < 500 ) {
			height = 500;
		}
		jQuery( "header, header .gradient-fix, header .content, header" ).css( { "height": height } );
	},
	scroll: function() {
		var root = jQuery( "html, body" );
		jQuery( "a.scroll" ).click( function() {
			var href = jQuery( this ).attr( "href" );
			root.animate({
				scrollTop: jQuery( href ).offset().top
			}, 500, function() {
				window.location.hash = href;
			});
			return false;
		});
	},
	sidebar: function() {
		if ( jQuery( ".sidebar-menu" ).size() > 0 ) {
			var root = jQuery( "html, body" );
			jQuery( ".sidebar-menu a[href^=#]" ).click( function() {
				var href = jQuery( this ).attr( "href" );
				root.animate({
					scrollTop: jQuery( href ).offset().top - 100
				}, 500 );
				return false;
			});
		}
	},
	hamburger: function() {
		jQuery( ".hamburger" ).data( { "click": true } ).click( function( e ) {
			e.preventDefault();
			var object = jQuery( this );
			if ( object.data( "click" ) == true ) {
				object.addClass( "click" );
				jQuery( "div#header" ).addClass( "activated" ).removeClass( "hidden" );
			}
			else {
				object.removeClass( "click" );
				jQuery( "div#header" ).addClass( "hidden" ).removeClass( "activated" );
			}
			object.data( { "click": !object.data( "click" ) } );
		});
	}
}

/* Query Object */

var query = function() {
    var string = {};
    var q = window.location.search.substring( 1 );
    var vars = q.split( "&" );
    for ( var i = 0; i < vars.length; i++ ) {
        var pair = vars[ i ].split( "=" );
        if ( typeof string[ pair[ 0 ] ] === "undefined" ) {
            string[ pair[ 0 ] ] = pair[ 1 ];
        }
        else {
            if ( typeof string[ pair[ 0 ] ] === "string" ) {
                var arr = [ string[ pair[ 0 ] ], pair[ 1 ] ];
                string[ pair[ 0 ] ] = arr;
            }
            else {
                string[ pair[ 0 ] ].push( pair[ 1 ] );
            }
        }
    } 
    return string;
}();

/* Cookie Object */

var cookie = {
	create: function( name, value, days, path ) {
		var date = new Date();
		date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		var expires = date.toUTCString();
		document.cookie = name + "=" + value + ";" + "expires=" + expires + ";" + "path=" + path + ";";
	},
	read: function( name ) {
		var value = "",
		current = "",
		expression = name + "=", cookies = document.cookie.split( ";" ), n = cookies.length;
		for ( var i = 0; i < n; i++ ) {
			current = cookies[ i ].trim();
			if ( current.indexOf( expression ) == 0 ) {
				value = current.substring( expression.length, current.length );
				break;
			}
		}
		return value;
	},
	delete: function( name ) {
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	}
}
