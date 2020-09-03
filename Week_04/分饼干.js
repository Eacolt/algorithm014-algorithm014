function findContentChildren(arr1, arr2) {
 
  Array.prototype.sort.call(arr1, function (a, b) {
    return a - b;
  });
  Array.prototype.sort.call(arr2, function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = 0;
  let result = 0;
  while (i != arr1.length && j != arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result++;
      i++;
      j++;
    } else {
      j++;
    }

  }
  return result;
}

var a1 = [1, 2 ];
var b1 = [1,2,3];

var result = findContentChildren(a1, b1);

console.log(result);

/**
 * 思路：贪心算法
 * 胃口和饼干是一一对应的，大胃口对应大饼干，小胃口对应小饼干，大饼干一定会满足小胃口，
 * 但是大胃口不满足小饼干，因此可以用贪心算法
 * 首先对饼干和胃口进行排序，依次将胃口和饼干进行对比，如果饼干大于小胃口，则满足，result+1,
 * 否则跳过，到下一个胃口比较
 */

 var myset = new Set([2,2,4,5])

 console.log(...myset);
