/* General Website JavaScript */

const FUTUREEVENTSLIST = [
    {
	'title': 'MIAMI 2040',
        'link': 'https://miamicollegeofdesign.com/miami2040',
        'image': 'miami2040.png',
	'date': 'Beginning March 4, 2017 at LAB Miami',

	'description': "MIAMI 2040 is an opportunity not just to talk about climate change but to do something about it. Miami College of Design and high school students from South Florida will design solutions for the most daunting challenges for South Florida facing the next generation. At the end of a series of workshops, in which the students will have worked in teams with world-renowned industrial designers, their proposed solutions will be presented in June at the DEEP SEE, a two-week public art installation on the shores of Miami Beach, adjacent to the US Conference of Mayors."

    },

    {
	'title': 'Portfolio Workshop Series',
        'link': './workshop.html',
        'image': 'portfolio4.jpg',
	'date': 'Beginning February 15, 2017 at LAB Miami',

	'description': "As your personal portfolio is <em>the key criterion</em> for admission to the College, we offer a series of workshops on how to develop your portfolio. We suggest you take advantage of this resource, come meet the team, and ask your questions."
    },

    {
	'title': 'Erik Mortenson: The Ghost of Humanism: Rethinking the Subjective Turn in Postwar American Photography',
	'date': '8 March 2017 4PM at LAB Miami',
        'image': 'robert-frank.jpeg',
	'description': 'This talk will examine the use of shadow, blur, graininess, and reflection in the work of the postwar photographers Robert Frank, William Klein, and Ralph Eugene Meatyard as a response to the rhetoric of Cold War containment. In contrast to the more comforting images in Edward Steichen’s popular exhibit The Family of Man, which sought to downplay Cold War anxieties, the photographs of Frank, Klein, and Meatyard challenged viewer expectation by presenting human figures in varying states of disintegration and disappearance. The term ‘subjective’ has long been used to describe a return to personal and private concerns during the postwar years, but discussion has focused mainly on the subjectivity of the artist rather than the viewer. By challenging the sanctity of the human figure, Frank, Klein, and Meatyard force viewers to confront such difficult images and, in the process, re-examine the fears and anxieties that lay dormant during the tense years of the early Cold War.'
    }
];

const PASTEVENTSLIST = [
    {
	'title': 'LAB.ID',
        'link': 'https://www.eventbrite.com/e/product-council-dermasensor-carecloud-tickets-30664948687',
        'image': 'lifesync.jpg',
	'date': 'January 24, 2017 at LAB Miami',
	'description': "Lab.ID is excited to bring New York's The Product Council to Miami on January 24th. Product Council provides startups and existing companies a fresh new outlet for critical feedback, ideation, and improvement of their products. Join product makers, (designers, developers, etc.) and founders to learn valuable lessons and insights from experienced product owners as they dive deep into the challenge, success and failure of product design. This is no demo or pitch, rather it’s an open examination of how to execute an idea. Join us for your opportunity to exchange product stories, network, and learn valuable lessons from seasoned product veterans."
    },

    {
	'title': 'Masters of Tomorrow',
        'link': 'https://www.facebook.com/MOTSummit/',
        'image': 'mot.png',
	'date': 'November 30, 2016 at LAB Miami',
	'description': 'Masters of Tomorrow (MOT) Summit is tech and art conferences that takes place in Miami during Art Basel week. It gathers global thought-leaders, artists, technologists and entrepreneurs from around the world to learn, network and inspire each other.'
    },
    {
	'title': "Nature’s Inventions and Industrial Innovations",
        'link': 'http://MOTSummit.com',
        'image': 'shell.jpg',
	'date': 'Thursday, November 10, 2016 / 7:00 PM – 8:00 PM',
	'description': '<b>An Introduction to the Bionic Principles and Methods of Biomimicry</b><br>As a preview of the Masters of Design conference curated by IAM Foundation, which is part of the Masters of Tomorrow Summit (MOTSummit.com), taking place on November 30th in Wynwood, industrial designer Franco Lodato will give an insightful presentation on his experience around nature-inspired Industrial Design.<br><br>Venture Cafe (CIC Miami, 1951 NW 7th Ave, Miami, FL, 33136)'
    },

    {
	'title': 'Creativity Society Event',
	'link': 'https://eventos.paraguay.gov.py/sociedaddelacreatividad/',
	'image': 'paraguay.png',
	'date': 'October 20th-22th, 2016 in Asunción and Caacupé, Paraguay',
	'description': 'eduJAM-Uruguay and Paraguay Educa are organizing an International Summit of Information Technology and Communication and the Future of Education with support from the National Secretariat of Information Technology and communication (SENATICs). The event consists of four days of activities, two lectures, educational workshops with environment activities using Sugar Sugar Labs and international Turtle Art Day.'
    },

    {
	'title': 'Evento Sociedad de la Creatividad',
	'link': 'https://eventos.paraguay.gov.py/sociedaddelacreatividad/',
	'image': 'paraguay.png',
	'description': 'En el mes de octubre del año 2013 el grupo EduJam-Uruguay junto con la Asociación Paraguay Educa, han organizado la Cumbre Internacional de Tecnologías de la Información y Comunicación y el Futuro de la Educación con apoyo de la Secretaría Nacional de Tecnologías de la Información y Comunicación (SENATICs). El evento consistió en 4 días de actividades, dos conferencias magistrales, talleres educativos con uso de actividades del Entorno Sugar de Sugar Labs y el día internacional de TortugArte.'
    },

    {
	'title': 'Singularity University Miami Salons',
	'link': 'http://www.singularityumiamisalon.com/',
	'image': 'su2016.png',
	'date': 'October 19th, 2016, 7:00PM<br>MIAMI THEATRE CENTER<br>9806 NE 2nd Ave., Miami Shores, FL 33138<br><br><em>THE UNIVERSITY</em>, a documentary by Matt Rutherford',
	'description': 'Come join us as we celebrate the launch of our Salons with a special treat: the only private preview screening in the United States of <em>The University</em>, a feature documentary about Singularity University by film director Matt Rutherford, who will be there with us that night.'
    },

    {
	'title': 'IDEATION: Design Thinking Course',
        'link': 'http://theideacenter.co/',
        'image': 'ibionics.png',
	'date': 'October 18, 2016,  6:30–10:30PM',
        'description': 'Definition of ideation: the capacity for or the act of forming or entertaining ideas<br><b>Franco Lodato</b>, President, Miami College of Design<br><br>The Idea Center<br>315 NE 2nd Ave<br>Miami, FL 33132, USA'
    },

    {
	'title': 'Libre Learn Lab',
	'link': 'http://librelearnlab.org',
	'image': 'll2016.png',
	'date': 'October 8th-9th, 2016 at the Sloan School of Management at MIT in Cambridge, Massachusetts',
	'description': 'Libre Learn Lab is a two-day summit  for people who create, use and implement freely licensed resources for K-12 education, bringing together educators, policy experts, software developers, hardware hackers, and activists to share best practices and address the challenges of widespread adoption of these resources in education.'
    },

    {'title': 'Jurnid Sessions// Digiartefacto',
     'link': 'https://www.eventbrite.com/e/jurnid-sessions-digiartefacto-tickets-26914911224',
     'image': 'Digiartefacto.png',
     'date': 'Miami Center for Architecture &amp; Design<br>100 NE 1st Ave, Miami, FL 33132<br>Wednesday, August 31, 2016&nbsp;6:00 PM to 8:00 PM',
     'description': 'Digiartefacto:&nbsp;Intersections of Technology, Art, and Architecture<br>Join us at&nbsp;Miami Center for Architecture &amp; Design.'
    },

];

var eventPage = {
    futureEvents: function() {
        var content = "<div class='grid-12 content'><p>&nbsp;<br>&nbsp;<br>&nbsp;</p></div>"
        var future = document.getElementById('future');
        for (var i = 0; i < FUTUREEVENTSLIST.length; i++) {

            content += "<div class='grid-12 content'><div class='grid-12-6'>";
            // Title is the only required field
	    content += "<h2 class='uppercase'>";
            content += FUTUREEVENTSLIST[i]['title'];
            content += '</h2><p>';

            if ('link' in FUTUREEVENTSLIST[i]) {
                content += '<a href="';
                content += FUTUREEVENTSLIST[i]['link'];
                content += '">';
	    }

            if ('image' in FUTUREEVENTSLIST[i]) {
                content += '<img src="./event-images/';
                content += FUTUREEVENTSLIST[i]['image'];
                content += '" data-src="./event-images/';
                content += FUTUREEVENTSLIST[i]['image'];
		content += ' class="unveil block" width="386">'
	    }

            if ('link' in FUTUREEVENTSLIST[i]) {
                content += '</a></p><p>';
            } else {
                content += '</p><p>';
	    }

            if ('date' in FUTUREEVENTSLIST[i]) {
                content += FUTUREEVENTSLIST[i]['date'];
                content += '<br><br>';
	    }

            if ('description' in FUTUREEVENTSLIST[i]) {
                content += FUTUREEVENTSLIST[i]['description'];
	    }

            content += '</p><h3 class="uppercase"><br></h3></div>';

            if (i === 0) {
		content += '<div class="grid-12-3"><ul class="sidebar-menu sidebar-block"><li>Future Events</li><li><a href="./events.html#past">Past Events</a></li></ul></div>';
            }

            content += '</div>';

            if (i === FUTUREEVENTSLIST.length - 1) {
                content += '<div class="grid-12 content"><div class="grid-12-9"><hr><p>&nbsp;</p></div></div></section>';
	    } else {
		content += '</div>';
	    }
	}

        future.innerHTML = content;
    },

    pastEvents: function() {
        var content = "<div class='grid-12 content'><p>&nbsp;<br>&nbsp;<br>&nbsp;</p></div>"
        var past = document.getElementById('past');
        for (var i = 0; i < PASTEVENTSLIST.length; i++) {

            content += "<div class='grid-12 content'><div class='grid-12-6'>";
            // Title is the only required field
	    content += "<h2 class='uppercase'>";
            content += PASTEVENTSLIST[i]['title'];
            content += '</h2><p>';

            if ('link' in PASTEVENTSLIST[i]) {
                content += '<a href="';
                content += PASTEVENTSLIST[i]['link'];
                content += '">';
	    }

            if ('image' in PASTEVENTSLIST[i]) {
                content += '<img src="./event-images/';
                content += PASTEVENTSLIST[i]['image'];
                content += '" data-src="./event-images/';
                content += PASTEVENTSLIST[i]['image'];
		content += ' class="unveil block" width="386">'
	    }

            if ('link' in PASTEVENTSLIST[i]) {
                content += '</a></p><p>';
            } else {
                content += '</p><p>';
	    }

            if ('date' in PASTEVENTSLIST[i]) {
                content += PASTEVENTSLIST[i]['date'];
                content += '<br><br>';
	    }

            if ('description' in PASTEVENTSLIST[i]) {
                content += PASTEVENTSLIST[i]['description'];
	    }

            content += '</p><h3 class="uppercase"><br></h3></div>';

            if (i === 0) {
		content += '<div class="grid-12-3"><ul class="sidebar-menu sidebar-block"><li><a href="./events.html#future">Future Events</a></li><li>Past Events</li></ul></div>';
            }

            content += '</div></div>';
	}

        past.innerHTML = content;
    }
}
