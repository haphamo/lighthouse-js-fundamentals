//Create a function to determine age based of DOB

function ageCalculator (name, yearOfBirth, currentYear){
	let calculatedAge = currentYear - yearOfBirth
	
	return name + " is " + calculatedAge + " years old."
}
console.log(ageCalculator("Ha", 1992, 2019));