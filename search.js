// function to search for the word against entered letters
function search_word() {
	var count=0;
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('words');
	
	for (i = 0; i < x.length; i++) {
        //here includes function check for word that match with entered substring
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
			var matchedWords = document.getElementById("match");
            matchedWords.innerHTML = "Matched Words: " + count;
		}
		else {
			count++;
			x[i].style.display="list-item";
			var matchedWords = document.getElementById("match");
            matchedWords.innerHTML = "Matched Words: " + count;			
		}
	}
}