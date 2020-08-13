//删除数组重复元素
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = null;
    let j=0;
    while(j<nums.length)
    {
        if(a === nums[j])
        {
            npms.splice(j,1);
            j-=1;
        }
        a = nums[j];
        j++;
    }
};
/**
 * 思路：
 * 用一个变量a 记录数组中所出现的元素，
 * 用Loop依次查找数组中的元素，如果发现当前元素和a中的值一样，则表示出现过，那么删除这个元素(splice数组删除)
 * 
 */