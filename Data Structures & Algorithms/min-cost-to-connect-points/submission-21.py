class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points) 
        dist = [float('inf')] * n 
        visited = [False] * n 
        dist[0] = 0 

        for _ in range(n): 
            cur = -1 
            for i in range(n): 
                if not visited[i] and (cur == -1 or dist[i] < dist[cur]): 
                    cur = i 

            visited[cur] = True 
            x1, y1 = points[cur] 

            for j in range(n): 
                if visited[j] or j == cur: 
                    continue 

                x2, y2 = points[j] 
                dist[j] = min(dist[j], abs(x1 - x2) + abs(y1 - y2)) 

        return sum(dist)