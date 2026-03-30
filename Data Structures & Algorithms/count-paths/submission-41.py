class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        
        def dfs(r, c): 
            if r == 1 or c == 1: 
                return 1 

            return dfs(r - 1, c) + dfs(r, c - 1) 

        return dfs(m, n)