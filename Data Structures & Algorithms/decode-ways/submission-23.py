class Solution:
    def numDecodings(self, s: str) -> int:
        if len(s) == 0 or s[0] == '0': 
            return 0 

        dp = [0] * (len(s) + 1) 

        dp[0] = 1 
        dp[1] = 1 

        for i in range(2, len(dp)): 
            one = int(s[i - 1: i]) 
            two = int(s[i - 2: i]) 

            if one >= 1 and one <= 9: 
                dp[i] += dp[i - 1] 

            if two >= 10 and two <= 26: 
                dp[i] += dp[i - 2] 

        return dp[len(dp) - 1] 
