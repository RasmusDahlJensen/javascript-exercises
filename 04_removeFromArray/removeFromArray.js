const removeFromArray = function (arr, ...args) {
	// const newArr = [];
	return arr.filter((e) => !args.includes(e));
	// return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
