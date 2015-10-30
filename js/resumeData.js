//Objects and arrays with data .replace() and .append() to.
var bio = {
	"name": "Evgeny Degtev",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+7 921-013-6676",
		"email": "e.a.degtev@gmail.com",
		"github": "DaggLo",
		"twitter": null,
		"location": "Petrozavodsk, Russian Federation"
		},
	"welcomeMessage": "The Emperor protects!",
	"skills": ["HTML", "CSS", "JS", "jQuery", "BootStrap", "Polymer", "Google Maps API", "Git and GitHub"],
	"biopic": "images/sm_1.jpg",
	"display": function () {
		var name = bio.name.split(" ");
		name = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase() +
			" " + name[1].toUpperCase();

		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", name));

		for (var key in bio.contacts) {

			if (bio.contacts[key]) {
				var replacer = HTMLcontactGeneric.replace ("%contact%", key + ":");
				$("#topContacts").append(replacer.replace("%data%", bio.contacts[key]));
				$("#footerContacts").append(replacer.replace("%data%", bio.contacts[key]));
			}
		}

		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "TBS RAS",
			"title": "Research technician",
			"location": "Tobolsk, Russian Federation",
			"dates": "November, 2005 - November, 2008",
			"description": "Ichthyological researches."
		},
		{
			"employer": "A.N. Severtsov IEE RAS",
			"title": "Junior research scientist",
			"location": "Moscow, Russian Federation",
			"dates": "November, 2008 - December, 2012",
			"description": "Ichthyological researches."
		},
		{
			"employer": "PromHydroacoustic, ltd",
			"title": "Research technician",
			"location": "Petrozavodsk, Russian Federation",
			"dates": "January, 2013 - March, 2014",
			"description": "Ichthyological researches."
		},
		{
			"employer": "Kadastrovaya palata of the Republic of Karelia",
			"title": "Programmer",
			"location": "Petrozavodsk, Russian Federation",
			"dates": "March, 2014 - present moment",
			"description": "Delphi, SQL, C#, C++, Visual Basic, XML, HTML, CSS, JS."
		}
	],
	"display": function() {
		for (var i = 0; i < work.jobs.length; i++) {

			$("#workExperience").append(HTMLworkStart);

			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
				HTMLworkTitle.replace("%data%", work.jobs[i].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Portfolio Page",
			"dates": "20.08.15 - 21.09.15",
			"description": "bla bla bla bla",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title": "Interactive Resume",
			"dates": "22.09.15 - 19.10.15",
			"description": "bla bla bla bla",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	"display": function() {
		for (var i = 0; i < projects.projects.length; i++) {

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

			for (var j = 0; j < projects.projects[i].images.length; j++) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Petrozavodsk State University",
			"location": "Petrozavodsk, Russian Federation",
			"degree": "Specialist",
			"majors": ["Biology", "Ecology"],
			"minors": ["Teacher of a biology and a chymistry"],
			"dates": 2005,
			"url": null
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer",
			"school": "Udacity.com",
			"dates": 2016,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	"display": function() {
		for (var i = 0; i < education.schools.length; i++) {

			$("#education").append(HTMLschoolStart);

			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) +
				HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));

			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", ") + "."));
			$(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[i].minors.join(", ") + "."));

			if (education.schools[i].url) {
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
			}
		}

		for (var x = 0; x < education.onlineCourses.length; x++) {

			$("#education").append(HTMLonlineClasses);

			$(".course-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title) +
				HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school));
			$(".course-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates));

			if (education.onlineCourses[x].url) {
				$(".course-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[x].url));
			}
		}
	}
};