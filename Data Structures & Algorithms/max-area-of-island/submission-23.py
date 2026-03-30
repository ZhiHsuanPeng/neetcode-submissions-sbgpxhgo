class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid)  
        cols = len(grid[0]) 
        visited = set() 

        def bfs(r, c): 
            visited.add((r, c))
            q = deque([(r, c)])  

            res = 0

            while q: 
                res += 1 
                cr, cc = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = cr + dr, cc + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited and grid[nr][nc] == 1: 
                        q.append((nr, nc)) 
                        visited.add((nr, nc)) 
            
            return res 

        max_area = 0 

        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 1 and (r, c) not in visited: 
                    area = bfs(r, c) 
                    max_area = max(area, max_area) 

        return max_area
            