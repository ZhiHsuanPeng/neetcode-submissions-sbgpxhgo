class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        rows = len(grid) 
        cols = len(grid[0]) 

        pq = [[grid[0][0], 0, 0]]  
        visited = set()
        visited.add((0, 0))  

        while pq: 
            cur, r, c = heapq.heappop(pq) 

            if r == rows - 1 and c == cols - 1: 
                return cur 

            for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                nr = r + dr 
                nc = c + dc 

                if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited: 
                    visited.add((nr, nc))
                    heapq.heappush(pq, [max(cur, grid[nr][nc]), nr, nc]) 

     




