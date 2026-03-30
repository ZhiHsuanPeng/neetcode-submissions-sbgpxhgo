class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
         
        def dfs(m, n):  
            if m == 0 or n == 0: 
                return 0 

            if m == 1 and n == 1: 
                return 1 

            return dfs(m - 1, n) + dfs(m, n - 1) 

        return dfs(m, n)