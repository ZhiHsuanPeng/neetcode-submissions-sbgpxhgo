class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points) 
        visited = [False] * n 
        dist = [float('inf')] * n 
        dist[0] = 0 

        for _ in range(n): 
            cur = -1 
            for i in range(n): 
                if not visited[i] and (cur == -1 or dist[cur] > dist[i]): 
                    cur = i 

            visited[cur] = True 
            x1, y1 = points[cur] 

            for j in range(n): 
                if j == cur or visited[j]: 
                    continue 

                x2, y2 = points[j] 
                cal_dist = abs(x1 - x2) + abs(y1 - y2) 
                dist[j] = min(dist[j], cal_dist)  

        return sum(dist)

            
