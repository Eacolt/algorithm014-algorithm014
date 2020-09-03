function maxProfit(prices)
{
	let res = 0;
	for(let i=1;i<prices.length;i++)
	{
		if(prices[i]> prices[i-1])
		{
			res+= prices[i] - prices[i-1];
		}
		
	}
	return res;
}
console.log(maxProfit([7,1,5,3,6,4]));

/**
 * 思路：贪心算法
 * 遍历列表，对每一个元素两两之间进行对比查找，如果今天的比昨天的收入大，就把今日的利润累加
 * 进变量res里，最后得出res的结果就是最大值。
 */