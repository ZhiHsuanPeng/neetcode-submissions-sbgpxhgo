class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points) 
        pq = [(0, 0)] 
        visited = set()  
        res = 0

        while pq: 
            dist, point = heapq.heappop(pq)  
            x1, y1 = points[point]

            if point in visited: 
                continue; 

            visited.add(point) 
            res += dist 

            for i in range(n): 
                if i not in visited: 
                    x2, y2 = points[i] 
                    distance = abs(x1 - x2) + abs(y1 - y2) 
                    heapq.heappush(pq, (distance, i)) 

        return res