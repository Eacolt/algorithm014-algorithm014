var firstUniqChar = function (s) {
	let hash = {};
	let result = new Map();
	for (let i = 0; i < s.length; i++) {
		if (!hash[s[i]]) {
			hash[s[i]] = 1;
			result.set(s[i], i);
		} else {
			result.delete(s[i]);
		}
	}
	if (result.size == 0) {
		return -1;
	}
	return result.values().next().value;
};
