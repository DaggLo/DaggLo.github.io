//My name.
$("#header").append(HTMLheaderName.replace("%data%", "Evgeny Degtev"));
$("#header").append(HTMLheaderRole.replace("%data%", "Web Developer"));

//Bio section.
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}

$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));

//Jobs section.
for (var key in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var FormattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
	var FormattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
	
	$(".work-entry:last").append(FormattedEmployer + FormattedTitle);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[key].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[key].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[key].description));
}

//Internationalize button.
$("#main").append(internationalizeButton);

function inName() {
	var name = bio.name.split(" ");
	
	return name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase() + 
		" " + name[1].toUpperCase();
}

//Project section.
projects.display = function display() {

	for (var key in projects.projects) {	
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[key].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[key].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[key].description));
		
		if (projects.projects[key].images.length > 0) {
		
			for (var key1 in projects.projects[key].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[key].images[key1]));
			}
		}
	}
}

projects.display();