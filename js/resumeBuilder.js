/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$('#main').append("Cory Kane");
 var formattedName =  HTMLheaderName.replace("%data%", "Cory Kane");
 var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$('#header').prepend(formattedRole);
 $('#header').prepend(formattedName);
 