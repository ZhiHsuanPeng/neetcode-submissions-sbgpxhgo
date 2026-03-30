class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        cols = len(matrix[0]) 
        rows = len(matrix) 
        dp = [ [ 0 for _ in range(cols) ] for _ in range(rows) ]  
        dirs = [ [1, 0], [-1, 0], [0, 1], [0, -1] ]

        def dfs(r, c): 
            if dp[r][c] != 0: 
                return dp[r][c] 

            best = 1
            for dr, dc in dirs: 
                nr, nc = r + dr, c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c]: 
                    best = max(best, 1 + dfs(nr, nc)) 
            dp[r][c] = best
            return best 

        for r in range(rows): 
            for c in range(cols): 
                dfs(r, c) 

        return max( max(r) for r in dp )