class Solution:
    def numDecodings(self, s: str) -> int:
        if s and s[0] == '0': 
            return 0 

        if len(s) == 1: 
            return 1 

        dp = [0] * (len(s) + 1) 
        dp[0] = 1 
        dp[1] = 1 

        for i in range(2, len(dp)): 
            cur = 0 

            if s[i - 1: i] != '0': 
                cur = dp[i - 1] 

            if '10' <= s[i - 2:i] <= '26': 
                cur += dp[i - 2] 

            dp[i] = cur 

        return dp[-1]