class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        rows = len(s) 
        cols = len(t) 

        dp = [ [ 0 for _ in range(cols + 1) ] for _ in range(rows + 1) ] 

        for r in range(rows + 1): 
            dp[r][cols] = 1 

        for r in range(rows - 1, -1, -1): 
            for c in range(cols - 1, -1, -1): 
                res = 0 
                res += dp[r + 1][c] 
                if s[r] == t[c]: 
                    res += dp[r + 1][c + 1] 

                dp[r][c] = res 

        return dp[0][0]