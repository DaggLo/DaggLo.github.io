//Objects and arrays with data .replace and .append to.
var work = {
	"jobs": [
		{
			"employer": "rab1.1",
			"title": "rab1.2",
			"location": "rab1.3",
			"dates": "rab1.4",
			"description": "rab1.5"
		},
		{
			"employer": "rab2.1",
			"title": "rab2.2",
			"location": "rab2.3",
			"dates": "rab2.4",
			"description": "rab2.5"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "bla",
			"dates": "bla",
			"description": "bla",
			"images": ["bla/bla.jpg", "bla/bla.jpg"]
		},
		{
			"title": "bla",
			"dates": "bla",
			"description": "bla",
			"images": ["bla/bla.jpg", "bla/bla.jpg"]
		}
	]
};

var bio = {
	"name": "bla",
	"role": "bla",
	"contacts": {
		"mobile": "mobile",
		"email": "email",
		"github": "github",
		"twitter": "twitter",
		"location": "location"
		},
	"skills": ["bla1", "bla2", "bla3", "bla4"]
};

var education = {
	"schools": [
		{
			"name": "bla",
			"location": "bla",
			"degree": "bla",
			"majors": ["bla", "bla"],
			"dates": "bla",
			"url": "http://"
		}
	],
	"onlineCourses": [
		{
			"title": "bla",
			"school": "bla",
			"dates": "bla",
			"url": "http://"
		}
	]
};

//My name.
$("#header").append(HTMLheaderName.replace("%data%", "Evgeny Degtev"));

//Bio section.
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}

$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));

//Jobs section.
for (var key1 in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var FormattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key1].employer);
	var FormattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key1].title);
	
	$(".work-entry:last").append(FormattedEmployer + FormattedTitle);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[key1].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[key1].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[key1].description));
}