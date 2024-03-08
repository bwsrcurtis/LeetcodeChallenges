var twoSum = function (nums, target) {
	// Initialize empty object to hold previous values of loop
	let map = {}

	for (let i = 0; i < nums.length; i++) {
		// Check if difference between target and value of current index of nums exists, 
		// if so, return as array of indices
		let diff = target - nums[i]
		if (diff in map) {
			return [map[diff], i]
		}
		// Update object if value does not yet exist
		map[nums[i]] = i
	}
	return
};