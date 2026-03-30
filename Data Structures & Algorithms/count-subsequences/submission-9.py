class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        dp = [ [ 0 for _ in range(len(t) + 1)] for _ in range(len(s) + 1) ] 

        for r in range(len(s) + 1): 
            dp[r][len(t)] = 1 

        for r in range(len(s) - 1, -1, -1): 
            for c in range(len(t) - 1, -1, -1): 

                dp[r][c] += dp[r + 1][c] 

                if s[r] == t[c]: 
                    dp[r][c] += dp[r + 1][c + 1] 

        return dp[0][0]