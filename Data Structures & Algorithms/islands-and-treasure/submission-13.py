class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        rows = len(grid) 
        cols = len(grid[0]) 

        q = deque() 

        for r in range(rows): 
            for c in range(cols): 
                if grid[r][c] == 0: 
                    q.append((r, c)) 


        distance = 1 

        while q: 
            for _ in range(len(q)): 
                r, c = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = r + dr, c + dc 

                    if (0 <= nr < rows and 
                        0 <= nc < cols and  
                        grid[nr][nc] == 2147483647): 
                        grid[nr][nc] = distance 
                        q.append((nr, nc)) 

            distance += 1
