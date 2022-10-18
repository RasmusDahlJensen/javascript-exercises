const arr = [1, 2, 3, 4, 5];

const arrMulti = (arr) => {
	let results = arr.map((number) => number * 10);

	console.log(results);
};

arrMulti(arr);
