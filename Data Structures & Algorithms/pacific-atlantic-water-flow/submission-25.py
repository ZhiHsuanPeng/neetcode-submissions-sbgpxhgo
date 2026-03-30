class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pac = [] 
        atl = [] 
        rows = len(heights) 
        cols = len(heights[0])

        for r in range(rows): 
            for c in range(cols): 
                if r == 0 or c == 0: 
                    pac.append((r, c)) 

                if r == rows - 1 or c == cols - 1: 
                    atl.append((r, c)) 

        def bfs(src): 
            visited = set(src) 
            q = deque(src) 

            while q: 
                r, c = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = r + dr, c + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and heights[nr][nc] >= heights[r][c] and (nr ,nc) not in visited: 
                        q.append((nr, nc)) 
                        visited.add((nr, nc)) 

            return visited 

        visited_atl = bfs(atl) 
        visited_pac = bfs(pac) 

        return list(visited_atl.intersection(visited_pac))