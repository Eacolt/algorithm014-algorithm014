var toLowerCase = function (str) {
	let ret = "";
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code <= 90 && code >= 65) {
			ret += String.fromCharCode(code + 32);
		} else {
			ret += str[i];
		}
	}
	return ret;
}
