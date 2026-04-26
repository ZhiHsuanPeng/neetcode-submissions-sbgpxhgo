class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        rows = len(word1) 
        cols = len(word2) 

        dp = [ 0 for _ in range(cols + 1) ]   

        for c in range(cols): 
            dp[c] = cols - c
        
        for r in range(rows -1, -1, -1):  
            prev = dp[cols] 
            dp[cols] = rows - r

            for c in range(cols -1, -1, -1):
                temp = dp[c]   
                if word1[r] == word2[c]: 
                    dp[c] = prev
                else: 
                    dp[c] = 1 + min(dp[c], dp[c + 1], prev) 

                prev = temp  

        return dp[0]   