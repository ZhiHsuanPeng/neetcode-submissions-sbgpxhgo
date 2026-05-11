class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        dist = [float('inf')] * len(points) 
        dist[0] = 0 
        visited = set()  
        res = 0

        for _ in range(len(points)): 
            index = -1 

            for i in range(len(points)):
                if i not in visited and ( index == -1 or dist[i] < dist[index] ): 
                    index = i 
 
            visited.add(index)  
            res += dist[index]

            x1, y1 = points[index]
            for j in range(len(points)): 
                if j in visited or index == j: 
                    continue 

                x2, y2 = points[j] 
                distance = abs(x1 - x2) + abs(y1 - y2) 
                if distance < dist[j]: 
                    dist[j] = distance  

        return res

        