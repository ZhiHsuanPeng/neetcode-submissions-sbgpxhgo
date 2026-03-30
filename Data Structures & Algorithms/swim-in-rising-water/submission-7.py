class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        rows = len(grid) 
        cols = len(grid[0])  
        visited = set()
        q = [(grid[0][0], 0, 0)]  
        dir = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        while q: 
            curH, r, c = heapq.heappop(q) 

            if r == rows - 1 and c == cols - 1: 
                return curH 

            for dr, dc in dir: 
                nr = r + dr 
                nc = c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited: 
                    visited.add((nr, nc)) 
                    heapq.heappush(q, (max(curH, grid[nr][nc]), nr, nc))
