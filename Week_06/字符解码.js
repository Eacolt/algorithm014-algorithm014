var numDecodings = function (s) {
  if (s[0] == "0") return 0;
  let pre = 1, //上一次解码总数
    curr = 1; //解码的总数，至少1次；
  //从字符的第二位开始遍历
  for (let i = 1; i < s.length; i++) {
    //临时变量，记录当前的步数
    let tmp = curr;
    if (s[i] == "0") {
      if (s[i - 1] == "1" || s[i - 1] == "2") {
        curr = pre;
      } else {
        return 0;
      }
    }
    //如果当前位不超过6，且大于1，而且前一位是2执行， 或者前一位是1也执行
    else if (
      s[i - 1] == "1" ||
      (s[i - 1] == "2" && s[i] >= "1" && s[i] <= "6")
    ) {
      curr = curr + pre;
    }

    pre = tmp;
  }
  return curr;
};

var dp = numDecodings("226");
console.log(dp);
