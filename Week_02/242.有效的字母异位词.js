/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var m = [];
  //填充数组全部为0；
  for (var n = 0; n < 26; n++) {
    m[n] = 0;
  }
  //遍历字符串，每一个字符串的unicode值-97，转换为当前索引位置，存在m数组里，让它自增1
  for (let i = 0; i < s.length; i++) {
    let key = s[i].charCodeAt(0) - 97;
    m[key]++;
  }
  //同上，减去相同的值所在的索引，如果重复，就递减，这样一来，如果有一个索引位置出现负数，说明t字符串里和s具有不一样的值

  for (let i = 0; i < t.length; i++) {
    let key = t[i].charCodeAt(0) - 97;
    m[key]--;
    if (m[key] < 0) return false;
  }

  return true;
};
function main() {
  console.log(isAnagram("ssdd", "dsds"));
}
export default main;
