/* Standard page footer JavaScript */

const MCDCONNECTED = [
    {
	'link': 'https://twitter.com/search?q=IAM%20Design%20Method',
        'class': 'fa fa-twitter'
    },

    {
	'link': 'https://www.facebook.com/MiamiCollegeOfDesign/',
	'class': 'fa fa-facebook'
    },

    {
	'link': 'https://github.com/MiamiCollegeDesign',
	'class': 'fa fa-github'
    },
    
    {
//	'link': 'https://www.google.com',
//	'class': 'fa fa-google-plus'
    },
    
    {
//	'link': 'https://youtube.com',
//	'class': 'fa fa-youtube-play'
    },
    
    {
//	'link': 'https://instagram.com',
//	'class': 'fa fa-instagram'
    },
];

const MCDABOUT = [
    {
        'link': './calendar.html',
        'title': 'Academic Calendar',
        'item': '7'
    },

    {
	'link': './program.html',
        'title': 'Degree Programs',
        'item': '2'
    },

    {
	'link': './courses.html',
        'title': 'Course Descriptions',
        'item': '3'
    },

    {
	'link': './admissions.html',
        'title': 'Admissions',
        'item': '4'
    },

    {
	'link': './financial-aid.html',
        'title': 'Financial Aid',
        'item': '5'
    },

    {
	'link': './docs/Catalog.pdf',
        'title': 'Catalog',
        'item': '1'
    },
];

const MCDINVOLVED = [
    {
	'link': './campus.html',
        'title': 'Campus',
        'item': '9'
    },

    {
	'link': './events.html',
        'title': 'Upcoming Events',
        'item': '6'
    },

    {
        'link': './miami2040.html',
        'title': 'Miami 2040',
        'item': '8'
    },

    {
	'link': './contact.html',
        'title': 'Contact Us',
        'item': '10'
    },
];

const MCDADMIN = [
    {
	'link': './about.html',
        'title': 'About',
        'item': '11'
    },

    {
        'link': './students.html',
        'title': 'Students',
        'item': '12'
    },

    {
        'link': './faculty.html',
        'title': 'Faculty',
        'item': '13'
    },

    {
        'link': './staff.html',
        'title': 'Staff',
        'item': '14'
    },
];


var footer = {
    pageFooter: function() {
        var footerElement = document.getElementById('footer');
        var content = '<footer>';
        content += '<div class="grid-12 content">';
	content += '<div class="grid-12-2">';
	content += '<p><a class="logo hover" href="./index.html"><img width="288" height="136" src="./images/logo-footer-large.svg" data-src="./images/logo-footer-large.svg"></a>';
	content += '</p>';
	content += '</div>';

        // MCD CONNECTED
        content += '<div class="grid-12-10">';
	content += '<div class="menu">';
	content += '<div><h4 class="uppercase color-white">CONNECT</h4>';
	content += '<p class="social font-0">';

        for (var i = 0; i < MCDCONNECTED.length; i++) {
            // class is the only required field
            if ('class' in MCDCONNECTED[i]) {
		if ('link' in MCDCONNECTED[i]) {
		    content += '<a target="_blank" ';
		    content += 'href="';
                    content += MCDCONNECTED[i]['link'];
                    content += '">';
		}

		content += '<i class="';
                content += MCDCONNECTED[i]['class'];
		content += '"></i>';
		if ('link' in MCDCONNECTED[i]) {
		    content += '</a>';
		}
	    }
	}

        content += '</p>'
	content += '</div>';

        // MCD ABOUT
        content += '<div><h4 class="uppercase color-white">PROGRAM</h4>';
        content += '<div class="menu-i-am-container">';
	content += '<ul id="footer-column-3" class="footer-menu">';

        for (var i = 0; i < MCDABOUT.length; i++) {
            // title is the only required field
            if ('title' in MCDABOUT[i]) {
                if ('item' in MCDABOUT[i]) {
                    var item = MCDABOUT[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in MCDABOUT[i]) {
		    content += '<a href="';
                    content += MCDABOUT[i]['link'];
                    content += '">';
		}

                content += MCDABOUT[i]['title'];
		if ('link' in MCDABOUT[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';
	content += '</div>';

        // MCD INVOLVED
        content += '<div><h4 class="uppercase color-white">ACTIVITIES</h4>';
        content += '<div class="menu-i-am-involved-container">';
	content += '<ul id="footer-column-2" class="footer-menu">';

        for (var i = 0; i < MCDINVOLVED.length; i++) {
            // title is the only required field
            if ('title' in MCDINVOLVED[i]) {
                if ('item' in MCDINVOLVED[i]) {
                    var item = MCDINVOLVED[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in MCDINVOLVED[i]) {
		    content += '<a href="';
                    content += MCDINVOLVED[i]['link'];
                    content += '">';
		}

                content += MCDINVOLVED[i]['title'];
		if ('link' in MCDINVOLVED[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';
	content += '</div>';

	// MCD ADMIN
        content += '<div><h4 class="uppercase color-white">PEOPLE</h4>';
        content += '<div class="menu-i-am-involved-container">';
	content += '<ul id="footer-column-1" class="footer-menu">';

        for (var i = 0; i < MCDADMIN.length; i++) {
            // title is the only required field
            if ('title' in MCDADMIN[i]) {
                if ('item' in MCDADMIN[i]) {
                    var item = MCDADMIN[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in MCDADMIN[i]) {
		    content += '<a href="';
                    content += MCDADMIN[i]['link'];
                    content += '">';
		}

                content += MCDADMIN[i]['title'];
		if ('link' in MCDADMIN[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';
	content += '</div>';

        // Close footer divs
	content += '</div>';
	content += '</div>';
	content += '</div>';

        // Copyright
	content += '<div class="content copyright color-white">';
        content += '<p class="float-left"><b><span>© 2016 Miami College of Design</span></b></p>';
        content += '<p class="float-right"><b><span><i class="fa fa-phone"></i> &nbsp; <a href="tel:+1 (800) 848-0398">+1 (800) 848-0398</a></span><span class="no-mobile no-tablet"> &nbsp; &nbsp; &nbsp; </span><span><i class="fa fa-envelope"></i> &nbsp; <a href="mailto:hello@miamicollegeofdesign.com">hello@miamicollegeofdesign.com</a></b> &nbsp; &nbsp; &nbsp; <b><a href="">Last modified 1 November 2016</a></b></span></p>';
	content += '</div>';

	content += '</footer>';

        footerElement.innerHTML = content;
    },

}
