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

        def bfs(pos): 
            visited = set() 
            q = deque() 

            for r, c in pos: 
                visited.add((r, c)) 
                q.append((r, c))

            while q: 
                curR, curC = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = curR + dr, curC + dc 

                    if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited and heights[nr][nc] >= heights[curR][curC]: 
                        visited.add((nr, nc)) 
                        q.append((nr, nc)) 

            return visited 

        return list(bfs(pac).intersection(bfs(atl)))
        