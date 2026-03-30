class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        rows = len(heights) 
        cols = len(heights[0]) 

        atl = [] 
        pac = [] 

        for r in range(rows): 
            for c in range(cols): 
                if r == 0 or c == 0: 
                    atl.append((r, c)) 

                if r == rows - 1 or c == cols - 1: 
                    pac.append((r, c)) 

        def bfs(nodes): 
            q = deque(nodes) 
            visited = set(nodes) 
            

            while q: 
                r, c = q.popleft() 

                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]: 
                    nr, nc = r + dr, c + dc 

                    if (0 <= nr < rows and 
                        0 <= nc < cols and 
                        heights[r][c] <= heights[nr][nc] and  
                        (nr, nc) not in visited): 
                        visited.add((nr, nc)) 
                        q.append((nr, nc)) 

            return visited 

        return list(bfs(atl).intersection(bfs(pac)))