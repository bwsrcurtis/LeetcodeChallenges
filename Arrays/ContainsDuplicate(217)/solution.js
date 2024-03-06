var containsDuplicateSetSolution = function (nums) {
	let set = new Set(nums)
	return set.size !== nums.length
};

var containsDuplicateSortAndLoop = function (nums) {
	let uniqueNums = []
	nums = nums.sort()
	for (let x = 0; x < nums.length; x++) {
		if (x > 0 && nums[x] === nums[x - 1]) {
			return true
		}
	}
	return false
};