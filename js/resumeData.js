//Objects and arrays with data .replace and .append to.
var work = {
	"jobs": [
		{
			"employer": "rab1.1",
			"title": "rab1.2",
			"location": "Tobolsk, Russian Federation",
			"dates": "rab1.4",
			"description": "bla bla bla bla bla"
		},
		{
			"employer": "rab1.1",
			"title": "rab1.2",
			"location": "Moscow, Russian Federation",
			"dates": "rab1.4",
			"description": "bla bla bla bla bla"
		},
		{
			"employer": "rab2.1",
			"title": "rab2.2",
			"location": "Petrozavodsk, Russian Federation",
			"dates": "rab2.4",
			"description": "bla bla bla bla bla"
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
			"description": "bla",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title": "Interactive Resume",
			"dates": "22.09.15 - 19.10.15",
			"description": "bla",
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
	"skills": ["HTML", "CSS", "JS", "BootStrap", "jQuery", "Git and GitHub"],
	"biopic": "images/fry.jpg",
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
			}
		}
		
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		
		$("#header").append(HTMLskillsStart);
		
		for (var i = 0; i < bio.skills.length; i++) {
			$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

var education = {
	"schools": [
		{
			"name": "bla",
			"location": "Petrozavodsk, Russian Federation",
			"degree": "bla",
			"majors": ["bla", "bla"],
			"dates": 2005,
			"url": "http://"
		}
	],
	"onlineCourses": [
		{
			"title": "bla",
			"school": "bla",
			"dates": "integer (graduation date)",
			"url": "http://"
		}
	],
	"display": function() {
		for (var i = 0; i < education.schools.length; i++) {
		
			$("#education").append(HTMLschoolStart);
			
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + 
				HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			
			for (var j = 0; j < education.schools[i].majors.length; j++) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
			}
			
			if (education.schools[i].url) {
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
			}
		}
	}
};