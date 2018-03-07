//set 2 arrays with female and male names

var femaleNames = ['Aneta', 'Kasia', 'Gosia', 'Zosia', 'Barbara'];
var maleNames = ['Tomek', 'Piotr', 'Albert', 'Kazik', 'Staś'];


//set function getTriangleArea(a,h)

var allNames = femaleNames.concat(maleNames);

console.log(allNames); 

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName); 
	console.log(allNames);

} else {
	console.log("Imię już istnieje w tablicy.");
} 
