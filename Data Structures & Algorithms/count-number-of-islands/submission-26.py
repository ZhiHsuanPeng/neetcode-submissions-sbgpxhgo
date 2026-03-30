class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = set()  
        rows = len(grid) 
        cols = len(grid[0])

        def bfs(r, c): 
            q = deque([(r, c)]) 

            while q:  
                r, c = q.popleft() 
                visited.add((r, c)) 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = r + dr, c + dc 
                    if ( 0 <= nr < rows and 
                        0 <= nc < cols and 
                        grid[nr][nc] == '1' and 
                        (nr, nc) not in visited ):
                        q.append((nr, nc)) 

        count = 0
        for i in range(rows): 
            for j in range(cols): 
                if grid[i][j] == '1' and (i, j) not in visited: 
                    count += 1
                    bfs(i, j) 

        return count
                