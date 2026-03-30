class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if n > m: 
            n, m = m, n 
            
        dp = [1] * n

        for i in range(1, m): 
            for j in range(1, n): 
                dp[j] += dp[j - 1] 

        return dp[-1]


