let newArr = [];
const getTheTitles = function (books) {
	books.map((elements) => {
		newArr.push(elements.title);
	});
	return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
