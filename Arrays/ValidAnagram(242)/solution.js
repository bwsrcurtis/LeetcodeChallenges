var isAnagram = function (s, t) {
	// Check for empty string
	if (s.length == 0 && t.length == 0) {
		return true
	}
	if (s.length == t.length && s.length > 0) {
		// Initialize to empty objects to hold values
		let sCharCounter = {}
		let tCharCounter = {}
		// Count the amount for each character and add to object
		for (let i = 0; i < s.length; i++) {
			let char = s[i]
			if (sCharCounter[char]) {
				sCharCounter[char]++
			}
			else {
				sCharCounter[char] = 1
			}
		}
		for (let i = 0; i < t.length; i++) {
			let char = t[i]
			if (tCharCounter[char]) {
				tCharCounter[char]++
			}
			else {
				tCharCounter[char] = 1
			}
		}
		console.log(sCharCounter)
		console.log(tCharCounter)
		// Compare the two objects
		for (let key in sCharCounter) {
			if (!tCharCounter[key] || tCharCounter[key] !== sCharCounter[key]) {
				return false
			}

		}
		return true
	}
	return false
};