class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        dist = [ float('inf') ] * n 
        visited = set() 
        dist[0] = 0 

        for _ in range(n): 

            cur = -1 
            for i in range(n): 
                if i not in visited and (cur == -1 or dist[i] < dist[cur]):
                    cur = i 

            visited.add(cur) 
            x1, y1 = points[cur] 

            for i in range(n): 
                if i == cur or i in visited: 
                    continue 

                x2, y2 = points[i]    
                dist[i] = min(dist[i], abs(x1 - x2) + abs(y1 - y2)) 
        
        return sum(dist)