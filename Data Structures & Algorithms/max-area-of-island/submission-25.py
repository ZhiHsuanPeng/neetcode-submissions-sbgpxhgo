class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int: 
        rows = len(grid) 
        cols = len(grid[0])
        
        def bfs(r, c): 
            cnt = 0 

            if grid[r][c] == 0: 
                return cnt

            q = deque([(r, c)]) 
            grid[r][c] = 0

            while q: 
                cr, cc = q.popleft()  
                cnt += 1

                for dr, dc in [(1, 0), (0, 1), (-1, 0), (0, -1)]: 
                    nr, nc = cr + dr, cc + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1: 
                        grid[nr][nc] = 0 
                        q.append((nr, nc)) 

            return cnt 

        res = 0 

        for r in range(rows): 
            for c in range(cols): 
                res = max(res, bfs(r, c)) 

        return res