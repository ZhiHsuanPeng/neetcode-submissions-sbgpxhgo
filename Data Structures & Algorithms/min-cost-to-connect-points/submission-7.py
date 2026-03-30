class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        pq = [(0, 0)]
        res = 0 
        visited = set() 

        while len(visited) < len(points):
            dist, point = heapq.heappop(pq)  
            if point in visited: 
                continue
            visited.add(point)  
            res += dist 

            x1, y1 = points[point] 

            for i in range(len(points)): 
                if i not in visited:
                    x2, y2 = points[i] 
                    newDist = abs(x1 - x2) + abs(y1 - y2) 
                    heapq.heappush(pq, (newDist, i)) 

        return res 
