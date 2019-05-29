var sha1 = require("sha1");

// 1.)

var animal = "Wolf";
var animalsTried = ["Dog", "Cat", "Wolf", "Cheetah", "Hippopotamus", "Whale", "Dolphin", "Beaver", "Bird", "Gecko"];
var animaldb = sha1("Wolf");


for (var i = 0; i < animalsTried.length; i++) {
	console.log(animalsTried[i]);
	if(sha1(animalsTried[i]) == animaldb) {
		console.log("Yes, the animal is found in the array!");
	} else {
		console.log("No, that animal doesn't exist!");
	}
}


// 2.)
var password = "abraCalabra";
var passworddb= sha1("abraCalabra");
if(sha1(password)  == passworddb ) {
   console.log("Your password is correct!");
} else {
   console.log("Your password is incorrect!");
}


// // 3.)

var winNumber = sha1(53675283)
var numbers = [65898135, 86886285, 53675283, 32865895, 75387268, 34586258, 67852357, 80247217, 56885789, 95347285];

for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	if(sha1(numbers[i]) == winNumber) {
		console.log("Yes, the number is a lotto Winner!"); 
		} else { 
		console.log("Sorry, the number is not a Winner."); 		
	}
}

