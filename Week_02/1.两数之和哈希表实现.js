function twoSum(nums,target)
{
    let sumMap = new Map();//创建一个哈希表
    for(let i=0;i<nums.length;i++)
    {
        let result = target - nums[i];
        if(sumMap.has(result))
        {
            return [sumMap.get(result),i]
        }
        else{
            sumMap.set(nums[i],i);
        }
    }
    
}