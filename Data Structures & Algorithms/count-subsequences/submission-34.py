class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        rows = len(s) 
        cols = len(t) 

        dp = [ 0 for _ in range(cols + 1) ]

        for r in range(rows - 1, -1, -1):  
            dp[-1] = 1
            diag = 1 

            for c in range(cols - 1, -1, -1): 
                res = 0 
                res += dp[c]

                if s[r] == t[c]: 
                    res += diag

                diag = dp[c]
                dp[c] = res 

        return dp[0]