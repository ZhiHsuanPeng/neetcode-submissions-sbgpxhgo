class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        maxPQ = [] 

        for point in points:  
            x1 = point[0] 
            y1 = point[1]
            dist = -(x1 * x1 + y1 * y1)  
            heapq.heappush(maxPQ, (dist, x1, y1)) 

            if len(maxPQ) > k: 
                heapq.heappop(maxPQ) 

        return [ [x1, y1] for _, x1, y1 in maxPQ]