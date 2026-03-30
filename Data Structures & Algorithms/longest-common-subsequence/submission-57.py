class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        if len(text1) > len(text2): 
            text1, text2 = text2, text1 

        dp = [0] * ( len(text1) + 1 ) 

        for r in range(len(text2) -1, -1, -1): 
            prev = 0 
            for c in range(len(text1) - 1, -1, -1):  
                temp = dp[c]
                if text2[r] == text1[c]: 
                    dp[c] = 1 + prev 
                else: 
                    dp[c] = max(dp[c], dp[c + 1]) 
                prev = temp 

        return dp[0]

                 

