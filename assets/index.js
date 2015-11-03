$(document).ready(function() {

	//part 1
	var studentNames = ['Ralph', 'Zack', 'Tony'];
	var studentGrades = [90, 80, 100];
	for (var i = 0; i < 3; i++) {
			console.log(studentNames[i] + " got " + studentGrades[i] + "% on the test.");
	}

	//part 2
	$("form").submit(function(event) {
		$("span").text( "This person is " + (2015 - "yearborn") + " years old.").show();
		event.preventDefault();
	});
});