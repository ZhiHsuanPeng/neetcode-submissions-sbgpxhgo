class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 
        visited = set() 

        def bfs(r, c): 
            q = deque([(r, c)])  
            visited.add((r, c))

            while q: 
                cr, cc = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = cr + dr, cc + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited and grid[nr][nc] == '1': 
                        q.append((nr, nc)) 
                        visited.add((nr, nc)) 

        cnt = 0 

        for r in range(rows): 
            for c in range(cols): 
                if (r, c) not in visited and grid[r][c] == '1': 
                    bfs(r, c) 
                    cnt += 1 

        return cnt
