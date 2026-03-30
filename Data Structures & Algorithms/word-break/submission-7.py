class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        memo = {}
        def dfs(cur): 
            if cur in memo: 
                return memo[cur] 
            if cur == '': 
                return True

            for word in wordDict: 
                if cur.startswith(word): 
                    nextCur = cur[len(word):] 
                    if dfs(nextCur): 
                        memo[cur] = True 
                        return True 

            memo[cur] = False
            return False 

        return dfs(s)

            