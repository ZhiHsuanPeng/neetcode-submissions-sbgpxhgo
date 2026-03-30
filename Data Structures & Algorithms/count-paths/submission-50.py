class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m > n: 
            m, n = n, m 

        dp = [0] * (m + 1)  
        dp[1] = 1 

        for _ in range(n): 
            for i in range(1, m + 1): 
                dp[i] = dp[i] + dp[i - 1] 

        return dp[-1]