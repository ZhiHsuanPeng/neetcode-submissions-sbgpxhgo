class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 

        def bfs(r, c): 
            q = deque([(r, c)])  
            grid[r][c] = '0'

            while q: 
                rr, cc = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = rr + dr, cc + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1': 
                        grid[nr][nc] = '0' 
                        q.append((nr, nc)) 

        cnt = 0 
        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == '1': 
                    bfs(r, c) 
                    cnt += 1 

        return cnt