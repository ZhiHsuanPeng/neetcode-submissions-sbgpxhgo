class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool: 
        memo = {} 

        def dfs(i): 
            if i in memo: 
                return memo[i] 

            if i == len(s):
                return True 

            for word in wordDict: 
                wordLen = len(word) 
                if i + wordLen <= len(s) and s[i: i + wordLen] == word: 
                    if dfs(i + wordLen): 
                        memo[i] = True 
                        return True 
            
            memo[i] = False
            return False 

        return dfs(0)