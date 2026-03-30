class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 
        visited = set() 

        def bfs(r, c): 
            q = deque([(r, c)])  
            area = 0

            while q: 
                cr, cc = q.popleft()  
                area += 1

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc =  cr + dr, cc + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1 and (nr ,nc) not in visited: 
                        q.append((nr, nc)) 
                        visited.add((nr, nc))  

            return area 

        res = 0 

        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 1 and (r, c) not in visited: 
                    visited.add((r, c)) 
                    area = bfs(r, c) 
                    res = max(res, area) 

        return res

