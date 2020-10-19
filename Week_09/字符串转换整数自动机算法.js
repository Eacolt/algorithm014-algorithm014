function Automaton() {
	this.state = "start";
	this.sign = 1;
	this.answer = 0;
	this.map = new Map([
		["start", ["start", "signed", "in_number", "end"]],
		["signed", ["end", "end", "in_number", "end"]],
		["in_number", ["end", "end", "in_number", "end"]],
		["end", ["end", "end", "end", "end"]]
	]);
}
Automaton.prototype.getIndex = function (char) {
	if (char === " ") {
		return 0;
	} else if (char === "-" || char === "+") {
		return 1;
	} else if (typeof Number(char) === "number" && !isNaN(char)) {
		return 2;
	} else {
		return 3;
	}
};
Automaton.prototype.get = function (char) {
	this.state = this.map.get(this.state)[this.getIndex(char)];
	if (this.state === "in_number") {
		this.answer = this.answer * 10 + (char - 0);
		this.answer =
			this.sign === 1
				? Math.min(this.answer, Math.pow(2, 31) - 1)
				: Math.min(this.answer, -Math.pow(-2, 31));
	} else if (this.state === "signed") {
		this.sign = char === "+" ? 1 : -1;
	}
};

var myAtoi = function (str) {
	let automaton = new Automaton();
	for (let char of str) {
		automaton.get(char);
	}
	return automaton.sign * automaton.answer;
};
