class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        dp = {} 
        def dfs(i): 
            if i in dp: 
                return dp[i] 

            if i == len(s): 
                return True 

            match = s[i: ] 

            res = False 
            for word in wordDict: 
                if match.startswith(word): 
                    res = res or dfs(i + len(word)) 

            dp[i] = res 
            
            return res 

        return dfs(0)