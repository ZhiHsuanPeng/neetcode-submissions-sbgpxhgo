class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        visited = set() 
        q = [(0, points[0][0], points[0][1])] 
        res = 0 

        while q: 
            cur_dist, x1, y1 = heapq.heappop(q) 

            if (x1, y1) in visited: 
                continue 

            res += cur_dist 
            visited.add((x1, y1)) 

            for i in range(len(points)): 
                x2, y2 = points[i] 
                dist = abs(x1 - x2) + abs(y1 - y2) 
                heapq.heappush(q, (dist, x2, y2)) 

        return res