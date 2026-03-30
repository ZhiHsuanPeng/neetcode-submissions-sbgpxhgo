class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        q = [ -s for s in stones ] 
        heapq.heapify(q) 

        while len(q) > 1: 
            first = heapq.heappop(q) * -1
            second = heapq.heappop(q) * -1 

            remaining = first - second 
            if remaining > 0: 
                heapq.heappush(q, -1 * remaining) 

        return 0 if len(q) == 0 else q[0] * -1
