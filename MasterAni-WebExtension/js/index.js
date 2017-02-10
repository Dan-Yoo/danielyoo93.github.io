function credentials(){
	$.ajax({
		type: "GET",
		url: "https://myanimelist.net/api/account/verify_credentials.xml",
		success: function(data) {
			alert("SUCCESS");
		}
	});
}

var autocomplete = new autoComplete({
    selector: 'input[name=search]',
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['ActionScript', 'Acewqgweg', 'achththht', 'acthrtbb', 'regerac', 'AppleScript', 'Asp'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

document.getElementById("button1").addEventListener("click", credentials);

$(document).ready(function() {

	//add listeners.
	$(".remove").on("click", function(e) {
		// disables the parent click event.
		e.stopPropagation();
		alert('remove');
	});

	$(".add").on("click", function(e) {
		// disables the parent click event.
		e.stopPropagation();
		alert('add');

		//add this row with title input
	});

	$(".column-row:not('.search')").on("click", function() {
		alert("column row clicked");
	});

});