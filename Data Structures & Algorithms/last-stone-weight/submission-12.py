class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = [ -1 * s for s in stones ] 
        heapq.heapify(maxHeap) 

        while len(maxHeap) > 1: 
            first = heapq.heappop(maxHeap) 
            second = heapq.heappop(maxHeap) 

            if first == second: 
                continue 

            remaining = first - second 
            heapq.heappush(maxHeap, remaining) 

        return maxHeap[0] * -1 if len(maxHeap) == 1 else 0