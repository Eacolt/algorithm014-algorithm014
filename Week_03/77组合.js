let res = [];
function dfs(n, k, start, path) {
	path = path.concat();
	if (path.length == k) {
		res.push(path);
		return;
	}
	for (let i = start; i <= n - (k - path.length) + 1; ++i) {
		path.push(i);
		dfs(n, k, i + 1, path);
		path.pop();
	}
}
function combine(n, k) {
	if (n <= 0 || k > n) {
		return res;
	}
	if (k <= 0) {
		return res.concat([])
	}
	let path = [];
	dfs(n, k, 1, path);
	return res;
}
var aa = combine(4, 2);
console.log(aa)
