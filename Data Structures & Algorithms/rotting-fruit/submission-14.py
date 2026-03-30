class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0]) 

        q = deque()  
        freshCount = 0
        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 1: 
                    freshCount += 1 
                if grid[r][c] == 2: 
                    q.append((r, c)) 

        time = 0 
        while q and freshCount > 0: 
            for _ in range(len(q)): 
                r, c = q.popleft() 

                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                    nr, nc = r + dr, c + dc 

                    if (0 <= nr < rows and 
                        0 <= nc < cols and 
                        grid[nr][nc] == 1): 
                        freshCount -= 1 
                        grid[nr][nc] = 2 
                        q.append((nr, nc)) 

            time += 1  

        return time if freshCount == 0 else -1
        
        
        