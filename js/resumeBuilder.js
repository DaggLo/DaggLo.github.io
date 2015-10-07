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