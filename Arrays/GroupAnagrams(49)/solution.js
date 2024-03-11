var groupAnagrams = function (stringsArr) {
	grouped = {};

	for (let x = 0; x < stringsArr.length; x++) {
		let word = stringsArr[x];
		let sorted = stringsArr[x].split("").sort().join("");

		if (grouped[sorted] === undefined) {
			grouped[sorted] = [word];
		} else {
			grouped[sorted].push(word)
		}

	}

	return Object.values(grouped);
}