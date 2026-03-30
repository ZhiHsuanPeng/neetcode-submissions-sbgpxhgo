class Solution:
    def numDecodings(self, s: str) -> int:  
        if s[0] == '0': 
            return 0 
            
        if len(s) == 1: 
            return 1 

        dp = [0] * (len(s) + 1) 

        dp[0] = 1 
        dp[1] = 1 

        for i in range(2, len(dp)): 
            if s[i - 1: i] != '0': 
                dp[i] = dp[i - 1] 

            if '10' <= s[i - 2: i] <= '26': 
                dp[i] += dp[i - 2] 

        return dp[-1]