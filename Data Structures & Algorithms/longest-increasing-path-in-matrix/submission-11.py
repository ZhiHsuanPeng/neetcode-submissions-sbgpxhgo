class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        rows = len(matrix) 
        cols = len(matrix[0]) 

        dp = [ [ -1 for _ in range(cols) ] for _ in range(rows) ] 

        def dfs(r, c): 
            if dp[r][c] != -1: 
                return dp[r][c] 

            best = 1 

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                nr, nc = r + dr, c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c]: 
                    best = max(best, 1 + dfs(nr, nc)) 

            dp[r][c] = best 

            return best 

        for r in range(rows): 
            for c in range(cols): 
                dfs(r, c) 

        res = 0 

        for r in range(rows): 
            for c in range(cols): 
                res = max(res, dp[r][c]) 

        return res