class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [ [0] * (n + 1) for _ in range(m + 1) ] 

        dp[1][1] = 1 

        for i in range(1, m + 1): 
            for j in range(1, n + 1): 
                current = dp[i][j] 
                if i + 1 <= m: 
                    dp[i + 1][j] += current 
                if j + 1 <= n: 
                    dp[i][j + 1] += current 
        
        return dp[m][n]
        