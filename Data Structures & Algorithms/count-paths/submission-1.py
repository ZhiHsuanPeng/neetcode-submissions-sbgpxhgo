class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = {}
        def dfs(m, n): 
            if (m, n) in memo: 
                return memo[(m, n)] 

            if m == 0 or n == 0: 
                return 0 

            if m == 1 and n == 1: 
                return 1 

            memo[(m,n)] = dfs(m - 1, n) + dfs(m, n - 1) 
            return memo[(m, n)] 

        return dfs(m, n)