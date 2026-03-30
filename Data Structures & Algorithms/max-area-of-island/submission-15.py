class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 
        visited = set()

        def bfs(r, c): 
            q = deque([(r, c)]) 
            visited.add((r, c)) 
            count = 0
            while q: 
                r, c = q.popleft()  
                count += 1
                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                    nr, nc = r + dr, c + dc 

                    if (0 <= nr < rows and 
                        0 <= nc < cols and 
                        (nr, nc) not in visited and 
                        grid[nr][nc] == 1): 
                        q.append((nr, nc)) 
                        visited.add((nr, nc)) 
            return count 

        maxArea = 0 
        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 1 and (r, c) not in visited: 
                    maxArea = max(maxArea, bfs(r,c)) 

        return maxArea