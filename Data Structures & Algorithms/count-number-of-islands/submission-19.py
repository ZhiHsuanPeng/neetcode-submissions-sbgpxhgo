class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = set()  
        rows = len(grid) 
        cols = len(grid[0])

        def bfs(r, c): 
            q = deque([(r, c)]) 
            visited.add((r, c)) 

            while q : 
                r, c = q.popleft() 
                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                    nr, nc = r + dr, c + dc 
                    if (0 <= nr < rows and 
                        0 <= nc < cols and 
                        grid[nr][nc] == '1' and 
                        not (nr, nc) in visited): 
                            q.append((nr, nc)) 
                            visited.add((nr, nc))
                        

        count = 0
        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == '1' and not (r, c) in visited: 
                    bfs(r, c) 
                    count += 1 

        return count