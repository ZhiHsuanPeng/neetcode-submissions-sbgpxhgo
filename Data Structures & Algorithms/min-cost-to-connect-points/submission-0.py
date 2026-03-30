class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        pq = [(0, 0)] 
        res = 0  
        visited = set()

        while len(visited) < n: 
            dist, point = heapq.heappop(pq)  

            if point in visited: 
                continue 

            visited.add(point)
            res += dist   
            x1, y1 = points[point]

            for j in range(n):  
                if j not in visited:  
                    x2, y2 = points[j]
                    distance = abs(x1 - x2) + abs(y1 - y2) 
                    heapq.heappush(pq, (distance, j)) 

        return res
