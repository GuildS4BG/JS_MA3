//Use RegEx to validate form

/*Create a contact form. It should have an input for name, last name, telephone number, email address and submit button.
Validate that 'name' and 'last name' inputs are not empty and use regex expressions to validate the telephone and email addresses respectively.
Call a function when the submit button is clicked to test these.*/

function submit(){
	document.getElementById("message").innerHTML = "";
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	
	var namePat =  /^([a-zæøå]+)(([ ]|[-])?[a-zæøå]+)?$/i /*Must start and end with a letter, and could be a one letter name.
	Included "æøå", not letters like ö and so on).
	"-" and " " could be used, but only between letters*/
	var phonePat = /^\d{8}$/;
	var emailPat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
	/*email pattern source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	because i didnt know all the things that could be allowed or not in an email address.
	Used the RFC 2822 standard, but without the syntax using double quotes and square brackets.*/	
	
	if (namePat.test(firstName) == false) {
		document.getElementById("message").innerHTML = "Your first name doesn't seem to be correct";
	}
	else if (namePat.test(lastName) == false) {
		document.getElementById("message").innerHTML = "Your last name doesn't seem to be correct";
	}	
	else if (phonePat.test(phone) == false) {
		document.getElementById("message").innerHTML = "Your phone number doesn't seem to be correct";
	}		
	else if (emailPat.test(email) == false) {
		document.getElementById("message").innerHTML = "Your e-mail address doesn't seem to be correct";
	}
	else {
		document.getElementById("message").innerHTML = "You have correctly entered your information";
	}
}