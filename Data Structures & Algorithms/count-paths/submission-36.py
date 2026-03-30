class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = m + 1 
        col = n + 1 

        dp = [ [ 0 for _ in range(col) ] for _ in range(row) ] 
        dp[1][1] = 1  

        for i in range(1, len(dp)): 
            for j in range(1, len(dp[0])): 
                dp[i][j] += dp[i - 1][j] 
                dp[i][j] += dp[i][j - 1] 

        print(dp) 

        return dp[m][n]