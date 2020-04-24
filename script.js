var database = [
	{
		username: "a",
		password: "1"
	}
];


var newsFeed = [
	{
		username: "andrei",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function singIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	}else {
		alert("Sorry, wrong username or password")
	}
}

// var userNamePrompt = prompt("What's your username");
// var passwordPrompt = prompt("What's your password");
// singIn(userNamePrompt, passwordPrompt);
//---------------------------------------------------- 

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");

// var ul = document.querySelector("ul");

//  button.addEventListener("click", function(){
//  	if (input.value.length > 0) { 
//  	var li = document.createElement("li");
//  	li.appendChild(document.createTextNode(input.value));
//  	ul.appendChild(li);
//  	input.value = "";
//  	}
// });

//  input.addEventListener("keypress", function(){
//  	if (input.value.length > 0 && event.which ===13) { 
//  	var li = document.createElement("li");
//  	li.appendChild(document.createTextNode(input.value));
//  	ul.appendChild(li);
//  	input.value = "";
//  	}
// });

 //---------------------------------------------------- 

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("boody");

// console.log(css);
// console.log(color1);
// console.log(color2);
color1.addEventListener("input",function(){
	//console.log(color1.value);
	body.style.background = "linear-gradient(to right,"
	+ color1.value + "," + color2.value +")";

});
color2.addEventListener("input",function(){
	console.log(color2.value);
	
})
