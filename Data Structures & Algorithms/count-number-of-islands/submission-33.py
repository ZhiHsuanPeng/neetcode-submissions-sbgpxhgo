class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid) 
        cols = len(grid[0])
        visited = set() 

        def bfs(r, c): 
            q = deque([(r, c)])  
            visited.add((r, c))

            while q: 
                curR, curC = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = curR + dr, curC + dc 

                    if ( 0 <= nr < rows and  
                        0 <= nc < cols and 
                        grid[nr][nc] == '1' and 
                        (nr, nc) not in visited ): 
                        q.append((nr, nc)) 
                        visited.add((nr, nc))  

        res = 0 

        for i in range(rows): 
            for j in range(cols): 
                if (i, j) not in visited and grid[i][j] == '1': 
                    bfs(i, j) 
                    res += 1 


        return res

