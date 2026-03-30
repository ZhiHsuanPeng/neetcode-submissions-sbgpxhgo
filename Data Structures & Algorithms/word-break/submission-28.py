class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool: 
        wordSet = set(wordDict)
        n = len(s) + 1 

        dp = [False] * n 
        dp[0] = True 

        for i in range(n): 
            for j in range(i): 
                if dp[j] and s[j: i] in wordSet: 
                    dp[i] = True 
                    break 

        return dp[-1]
