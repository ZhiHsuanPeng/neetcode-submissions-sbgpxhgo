class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * ( len(s) + 1 ) 
        dp[0] = True  

        for i in range(len(dp)): 
            if not dp[i]: 
                continue 

            match = s[i: ]
            for word in wordDict: 
                if match.startswith(word): 
                    dp[i + len(word)] = True 

        return dp[-1]


















       