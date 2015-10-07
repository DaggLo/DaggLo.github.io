/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /* $("#main").append("Evgeny Degtev"); */
 
 var awesomeThoughts = "My name is Evgeny and I am AWESOME!";
 
 console.log(awesomeThoughts);
 
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 
 console.log(funThoughts);
 
 $("#main").append(funThoughts);
 
 var formattedName, formattedRole;
 formattedName = HTMLheaderName.replace("%data%", "Evgeny");
 formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var skills = ["HTML, CSS, JS, BootStrap, jQuery"];
 
 var bio = {
	"name": "Evgeny",
	"role": "Web developer",
	"contacts": {
		"mobile": "bla bla bla",
		"email": "bla bla",
		"github": "bla",
		"location": "bl"
	},
	"pictureURL": "images/fry.jpg",
	"welcomeMessage": "I am evil",
	"skills": skills
};

/* $("#topContacts").append(bio.contact_info);
$("#main").append(bio.skills); */

var work = {};
work.position = "Admin";
work.employer = "FKP";
work.yearsWorked = 1,5;
work.cityOfBusiness = "Ptz";

/* var education = {};
education["lastSchoolName"] = "#30";
education["yearsInSchool"] = 10;
education["school'sSity"] = "Ptz";

$("#main").append(work["position"]);
$("#main").append(education.lastSchoolName); */

var education = {
	"schools": [
		{
			"name":  "bla",
			"city": "bla",
			"degree": "bla",
			"major": "bla"
		},
		{
			"name":  "bla",
			"city": "bla",
			"degree": "bla",
			"major": "bla"
		}
	]
};