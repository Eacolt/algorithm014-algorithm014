/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//比较简单粗暴的方法比较笨
var moveZeroes = function(nums) {
    let n = 0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===0)
        {
            nums.splice(i,1);
            n+=1;
            i-=1;
        }
    }
    for(let i=0;i<n;i++)
    {
        nums.push(0);
    }

};