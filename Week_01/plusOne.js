function plusOne(digits) {
	//从后向前一次遍历元素，加1，如果结果除以10有余数，说明该数小于9，直接返回即可，否则直接变为0。
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i]++;
		digits[i] = digits[i] % 10;
		if (digits[i] != 0) return digits;
	}
	//如果三个数都是9【999】，则直接写成[1,0,0,0]即可。
	digits.splice(0, 0, 1);

	return digits;

}

var a = plusOne([9, 7, 9]);
console.log(a);
