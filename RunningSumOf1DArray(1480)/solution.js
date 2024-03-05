var runningSumSlow = function (nums) {
	let sums = []
	for (let i = 0; i < nums.length; i++) {
		if (sums.length === 0) {
			sums = [nums[i]]
		}
		else {
			sums = [...sums, sums[sums.length - 1] + nums[i]]
		}
		console.log(sums)
	}
	return sums
}

var runningSumFaster = function (nums) {
	// for each item in nums, add previous result of map, but leave first item as is
	return nums.map((num, index, array) => {
		if (index === 0) return num
		else return array[index] = num + array[index - 1]
	})
}

var runningSumFastest = function (nums) {
	nums.reduce((acc, cur, i, arr) => arr[i] += a)
	return nums
}