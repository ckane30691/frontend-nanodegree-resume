/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$('#main').append("Cory Kane");
 var formattedName =  HTMLheaderName.replace("%data%", "Cory Kane");
 var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
 


$('#header').prepend(formattedRole);
 $('#header').prepend(formattedName);
 
 //var skills = ["HTML","CSS","JavaScript","Python"]
 var bio = {
 	"name":"Cory Kane",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "760-596-2078",
 		"email" : "ckane30691@gmail.com",
 		"github": "ckane30691",
 		"location": ["Irvine"]
 	},
 	"welcomeMessage": "Lorem Ipsum",
 	"skills": ["HTML","CSS","JavaScript","Python"],
 	"bioPic": "images/fry.jpg"
 };
 
 var projects = {
 	"projects": [
 		{
		 	"title" : "Personal Site",
		 	"dates" : "Dates go here",
		 	"desc" : "Blah Blah Blah",
		 	"images" : ["images/Test.jpg"]
		},
		{
			"title" : "JavaScript Resume",
		 	"dates" : "Dates go here",
		 	"desc" : "Blah Blah Blah",
		 	"images" : ["images/Test.jpg"]
		}
	]
 };

 var work = {
 	"jobs" : [
	 	{
		 	"employer": "The Man",
		 	"titles" : "The Terminator",
			"location": ["Lake Forest"],
			"workDates": "2011 - Present",
			"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
		 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
		 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \
		 	aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
		 	nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
		 	officia deserunt mollit anim id est laborum."
		},
		{
			"employer": "Dog The Bounty Hunter",
			"titles" : "Wall-E",
			"location": ["Irvine"],
			"workDates": "2009 - 2011",
			"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
		 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
		 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \
		 	aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
		 	nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
		 	officia deserunt mollit anim id est laborum."	
		}
	]
 };

 var education = {
 	"schools":[
	 	{
	 		"college": "Victor Valley College", 
	 		"dates": "2009 - 2011", 
	 		"location": ["Victorville"],
	 		"major" : "Major Goes Here"
	 	}
 	],
 	"onlineClasses":[
 		{
 			"courseName": "Web Developer NanoDegree",
 			"dates": "2015",
 			"onlineSchool":"Udacity",
 			"courseURL" : "URL goes here"
 		},
 		{
 			"courseName": "Intro To Computer Science",
 			"dates": "2015",
 			"onlineSchool":"Udacity",
 			"courseURL" : "URL goes here"
 		}
 	]
 };


bio.display = function(){ 
	$("#header").append(HTMLskillsStart);
	for (entry in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[entry]);
		$("#skills").append(formattedSkills);
	}

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locations);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
	$('#lets-connect:last').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
	$("#header").append(formattedPic);
}

bio.display();
 
work.display = function(){
 for (job in work.jobs){
 	$('#workExperience').append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].desc);
 	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].titles);
 	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates)
 	$(".work-entry:last").append(formattedEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription);
 }
}

work.display();

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].college);
		$('.education-entry:last').append(formattedSchoolName);

		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDate);

		for (locations in education.schools[school].location) {
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location[locations]);
				$(".education-entry:last").append(formattedSchoolLocation);
		}

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$('.education-entry:last').append(formattedSchoolMajor);

	}
	
	$('.education-entry').append(HTMLonlineClasses);

	for (course in education.onlineClasses){
		var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].courseName);
		var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].onlineSchool);
		$('.education-entry:last').append(formattedCourseName + formattedOnlineSchoolName);

		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
		$('.education-entry:last').append(formattedCourseDates);
	}
}


education.display();



$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  	logClicks(x,y)
});



/*function inName(name){
	name = name.split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);*/



 /*var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
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
$("#header").append(formattedPic);*/