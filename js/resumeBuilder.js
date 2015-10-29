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
 		"locations": "Lake Forest",
 	},
 	"welcomeMessage": "Lorem Ipsum",
 	"skills": skills,
 	"bioPic": "images/fry.jpg"
 };

 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locations);
 var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$('#lets-connect').append(formattedMobile);
$('#lets-connect').append(formattedEmail);
$('#lets-connect').append(formattedGithub);
$("#lets-connect").append(formattedLocation);
$("#header").append(formattedPic);