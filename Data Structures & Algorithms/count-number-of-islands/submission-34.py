class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 

        def bfs(r, c):
            q = deque([(r, c)]) 
            grid[r][c] = '0' 

            while q: 
                cr, cc = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = cr + dr, cc + dc 

                    if (0 <= nr < rows and     
                        0 <= nc < cols and 
                        grid[nr][nc] == '1'): 
                        q.append((nr, nc)) 
                        grid[nr][nc] = '0' 


        res = 0 
        for i in range(rows): 
            for j in range(cols): 
                if grid[i][j] == '1': 
                    bfs(i, j) 
                    res += 1 

        return res 