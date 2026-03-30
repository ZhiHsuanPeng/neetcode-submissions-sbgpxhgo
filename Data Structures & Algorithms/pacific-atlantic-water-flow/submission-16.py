class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows, cols = len(heights), len(heights[0])
        pac = [] 
        atl = []   

        for r in range(rows): 
            for c in range(cols): 
                if r == 0 or c == 0: 
                    pac.append((r, c)) 
                if r == rows - 1 or c == cols - 1:
                    atl.append((r, c)) 

        def bfs(islands): 
            visited = set(islands) 
            
            q = deque(islands) 
            while q: 
                r, c = q.popleft() 

                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]: 
                    nr, nc = r + dr, c + dc 
                    if (nr in range(rows) and 
                        nc in range(cols) and 
                        heights[r][c] <= heights[nr][nc] and 
                        (nr, nc) not in visited): 
                        visited.add((nr, nc)) 
                        q.append((nr, nc)) 

            return visited 

        atlVisited = bfs(atl) 
        pacVisited = bfs(pac) 

        return list(atlVisited.intersection(pacVisited))

