var yes = $("#yes");
var no = $("#no");
var string = $("#recordedString")
var submitter = $("#stringSubmitter");

//standard form submit function
function submitAThing() {
	var val = string.val();

	console.log(val);
	document.getElementById("demo").innerHTML = val;
	$.post('/', {user: val});
}

//using the button
submitter.click(submitAThing);
//using the enter key
string.keypress(function(e) {
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












