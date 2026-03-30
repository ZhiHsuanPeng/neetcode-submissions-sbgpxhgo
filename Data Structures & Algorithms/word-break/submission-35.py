class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordSet = set(wordDict) 
        maxLen = max([ len(w) for w in wordSet ]) 

        dp = [False] * ( len(s) + 1 ) 
        dp[0] = True 

        for i in range(len(dp)): 
            if not dp[i]: 
                continue 

            for j in range(1, maxLen + 1):
                if i + j < len(s) + 1 and s[i: i + j] in wordSet: 
                    dp[i + j] = True 

        return dp[-1]