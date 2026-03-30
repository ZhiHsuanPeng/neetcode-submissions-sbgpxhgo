class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [False] * (n + 1) 

        dp[0] = True 

        for i in range(0, n + 1):  
            if not dp[i]: 
                continue 

            for word in wordDict: 
                wordLen = len(word) 

                if i + wordLen < n + 1 and s[i: i + wordLen] == word: 
                    dp[i + wordLen] = True 

        return dp[n] 
