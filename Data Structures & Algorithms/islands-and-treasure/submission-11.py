class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        rows, cols = len(grid), len(grid[0]) 
        land = 2147483647
        q = deque() 

        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 0: 
                    q.append((r, c)) 

        count = 0
        while q:    
            count += 1
            for _ in range(len(q)): 
                r, c = q.popleft() 

                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                    nr, nc = r + dr, c + dc 

                    if (0 <= nr < rows and 
                        0 <= nc < cols and 
                        grid[nr][nc] == land): 
                        grid[nr][nc] = count
                        q.append((nr, nc)) 
        