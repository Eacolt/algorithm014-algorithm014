function lemonadeChange(bills) {
  if (bills.length == 0) return true;
  let map = {
      5:0,
      10:0,
      20:0
  };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      map[5]++;
      
    } else if (bills[i] === 10) {
      map[5]--;
      map[10]++;
      if (map[5] < 0) {
        return false;
      }
    } else if (bills[i] === 20) {
      let temp = 15;
      if (map[10] > 0) {
        temp -= 10;
        map[10]--;
      }
      while (temp > 0) {
        temp -= 5;
        map[5]--;
      }
      if (map[5] < 0) return false;
    }
  }
  console.log(map)
  return true;
}

/**
 * 思路：贪心算法
 * 用一个哈希对象存储5,10,20元出现次数，遍历列表，如果找到5元，让哈希对象中5元的次数加一
 * 如果出现10元，让哈希对象10元次数加1，且5元次数减1，如果得出负数，直接返回false
 */

console.log(lemonadeChange([20]));
