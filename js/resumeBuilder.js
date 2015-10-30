/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$('#main').append("Cory Kane");
 var formattedName =  HTMLheaderName.replace("%data%", "Cory Kane");
 var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$('#header').prepend(formattedRole);
 $('#header').prepend(formattedName);
 
 var skills = ["HTML","CSS","JavaScript","Python"]
 var bio = {
 	"name":"Cory Kane",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "760-596-2078",
 		"email" : "ckane30691@gmail.com",
 		"github": "ckane30691",
 		"locations": "Lake Forest"
 	},
 	"welcomeMessage": "Lorem Ipsum",
 	"skills": skills,
 	"bioPic": "images/fry.jpg"
 };
 
 var projects = {
 	"title" : [],
 	"dates" : [],
 	"desc" : [],
 	"image" : []
 };

 var work = {
 	"employer": "The Man",
	"locations": "Lake Forest",
	"workDates": "2011 - Present",
	"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \
 	aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
 	nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
 	officia deserunt mollit anim id est laborum."
 };

 var education = {
 	"schools":{
 		"college": "Victor Valley College", 
 		"dates": "2009 - 2011", 
 		"locations": "Victorville"},
 	"onlineClasses":{
 		"courseName": "Udacity",
 		"dates": "Dates Go Here",
 		"desc":"Course Description Goes Here"
 	}
 };

 
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
 var formattedWorkDates = HTMLworkDates.replace("%data%", work.workDates);
 var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.locations);
 var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.desc);

 var formattedSchool = HTMLschoolName.replace("%data%", education.schools.college);
 var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.locations);


 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locations);
 var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedEmployer);
$('#workExperience').append(formattedWorkDates);
$('#workExperience').append(formattedWorkLocation);
$('#workExperience').append(formattedWorkDescription);

$("#workExperience").append(HTMLschoolStart);
$("#education").append(formattedSchool);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);


$('#lets-connect').append(formattedMobile);
$('#lets-connect').append(formattedEmail);
$('#lets-connect').append(formattedGithub);
$("#lets-connect").append(formattedLocation);
$("#header").append(formattedPic);