var maximalSquare = function(matrix)
{
    if(matrix.length ===0 || matrix.length === 0)
    {
        return 0;
    }
    let maxSide = 0;
    let rows = matrix.length,columns = matrix[0].length;
    let dp = [];
    for(let i=0;i<rows;i++)
    {
        dp[i] = [];
        for(let j=0;j<columns;j++)
        {
            dp[i].push(0);
        }
    }
 
    for(let i =0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(matrix[i][j] == '1')
            {
                if(i==0 || j==0)
                {
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(Math.min(dp[i-1][j], dp[i][j-1]),
                     dp[i-1][j-1]
                    )+1;
                }
                maxSide = Math.max(maxSide,dp[i][j]);
            }
        }
    }
    let maxSquare = maxSide * maxSide;
    return maxSquare;


}
var d = maximalSquare([[1,1,1],[1,1,1],[1,2,3]])
