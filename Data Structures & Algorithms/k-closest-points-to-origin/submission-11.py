class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        maxPQ = [] 

        for x1, y1 in points:
            dist = -(math.pow(x1, 2) +  math.pow(y1, 2))  
            heapq.heappush(maxPQ, (dist, x1, y1)) 

            if len(maxPQ) > k: 
                heapq.heappop(maxPQ)

        return [[x1, y1] for _, x1, y1 in maxPQ]