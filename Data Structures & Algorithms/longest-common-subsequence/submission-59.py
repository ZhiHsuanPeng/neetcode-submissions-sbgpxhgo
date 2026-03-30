class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        if len(text1) > len(text2): 
            text1, text2 = text2, text1 

        dp = [0] * (len(text1) + 1) 

        for r in range(len(text2) - 1, -1, -1):  
            temp = dp[-1]
            for c in range(len(text1) - 1, -1, -1):  
                nxt = dp[c]
                if text1[c] == text2[r]: 
                    dp[c] = 1 + temp 
                else: 
                    dp[c] = max(dp[c], dp[c + 1]) 

                temp = nxt 

        return dp[0]