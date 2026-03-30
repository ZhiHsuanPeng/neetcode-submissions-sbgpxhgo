class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s) + 1 

        dp = [False] * n 
        dp[0] = True 

        for i in range(n): 
            if not dp[i]: 
                continue 

            for word in wordDict: 
                wordLen = len(word) 
                cur = s[i: i + wordLen] 
                if word == cur: 
                    dp[i + wordLen] = True

        return dp[-1] 
