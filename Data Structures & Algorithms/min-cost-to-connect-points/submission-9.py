class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        visited = set() 
        q = [(0, points[0][0], points[0][1])] 
        res = 0 

        while len(visited) < len(points): 
            cur_dist, x1, y1 = heapq.heappop(q)  

            if (x1, y1) in visited: 
                continue 

            visited.add((x1, y1)) 
            res += cur_dist

            for i in range(len(points)): 
                x2, y2 = points[i] 

                heapq.heappush(q, (abs(x1 - x2) + abs(y1 - y2), x2, y2)) 

        return res