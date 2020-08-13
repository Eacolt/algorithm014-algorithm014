/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   var rotateArr = [];//旋转好后的数组
   //遍历所有数组元素，让每一个元素进行位移
	for(let i=0;i<nums.length;i++)
	{
		let n = i;//位移的最终位置
		for(let j=0;j<k;j++)
		{
			n+=1;
			if(n>=nums.length)
			{
				n=0;
			}
		}
		rotateArr[n] = nums[i];
	}
    //改变元素组的内容为旋转后的元素值
	for(let i=0;i<nums.length;i++)
	{
		nums[i] = rotateArr[i];
	}

};