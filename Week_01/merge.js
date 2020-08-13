function merge(nums1,m,nums2,n)
{
	//计算两个列表个数之和,-1是为了表示下标数
	let t = m+n-1;
	--m;//m先减去1,为了表示下标
	--n;//n先减去1
	while(m>=0 && n>=0)
	{
		if(nums1[m] > nums2[n])
		{
			nums1[t--] = nums1[m--];
		}else{
			nums1[t--] = nums2[n--];
		}
	}
	//多余的元素插入进去
	while(n>=0)
	{
		nums1[t--] = nums2[n--];
	}
}
var nums1 = [1,2,3,0,0,0], m = 3
var nums2 = [2,5,6],   n = 3
merge(nums1,m,nums2,n);
console.log(nums1)