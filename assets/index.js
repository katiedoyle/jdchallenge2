$(document).ready(function() {

	//part 1
	var studentNames = ['Ralph', 'Zack', 'Tony'];
	var studentGrades = [90, 80, 100];
	for (var i = 0; i < 3; i++) {
			console.log(studentNames[i] + " got " + studentGrades[i] + "% on the test.");
	}

	//part 2
	$('#age-form').submit(function(event) {
		$('#error').text('');
		$('#calculated-age').text('');
		var birthYear = $('#birth-year').val();
		if ((1885 < birthYear) && (birthYear < 2015)) {
			var age = new Date().getFullYear() - birthYear;
			$('#calculated-age').html("You are " + age + " years old.");
		}
		else {
			$('#error').html("Error: Please enter a valid number between 1885 and 2015.");
		}
		event.preventDefault();
	});
	
});