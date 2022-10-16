const palindromes = function (word) {
	let original = word
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
		.replace(/\s{2,}/g, " ")
		.replace(/\s+/g, "");
	console.log("original", original);

	string = word.split("").reverse().join("");
	let newString = string
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
		.replace(/\s{2,}/g, " ")
		.replace(/\s+/g, "");
	console.log("Reversed", newString);

	return newString.toLowerCase() == original.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
