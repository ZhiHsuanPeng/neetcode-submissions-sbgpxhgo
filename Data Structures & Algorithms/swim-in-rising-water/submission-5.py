class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 

        visited = set()
        q = [(grid[0][0], 0, 0)] 
        visited.add((0, 0)) 

        while q: 
            cur, r, c = heapq.heappop(q) 

            if r == rows - 1 and c == cols - 1: 
                return cur 

            for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                nr, nc = r + dr, c + dc 

                if  0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited: 
                    heapq.heappush(q, (max(cur, grid[nr][nc]), nr, nc)) 
                    visited.add((nr, nc))
                    