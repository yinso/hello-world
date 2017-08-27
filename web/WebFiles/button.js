var yes = $("#yes");
var no = $("#no");
var string = {
	userName:"",
	firstName:"",
	lastName:"",
	email:"",
	phone:"",
}
var submitter = $("#stringSubmitter");

$(".userFormItem").blur(function() {
	var id = this.id; 
	var val = this.value;
	string[id] = val;
	console.log(string);
})

//standard form submit function
function submitAThing() {
	console.log(string)
	document.getElementById("demo").innerHTML = string;
	$.post('/', string);
}

//using the button
submitter.click(submitAThing);

//using the enter key

$(".userFormItem").keypress(function(e) {
	if (e.which == 13) {
		submitAThing();
		return false;
	}
});

yes.click(function() {
	console.log("Heck yes!");
})

no.click(function() {
	console.log("Nope.");
})












