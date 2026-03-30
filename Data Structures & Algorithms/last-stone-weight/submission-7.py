class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = [i * -1 for i in stones]  
        heapq.heapify(maxHeap) 

        while(len(maxHeap) > 1): 
            first, second = heapq.heappop(maxHeap), heapq.heappop(maxHeap) 
            remaining = (first * -1) - (second * -1) 
            if remaining > 0: 
                heapq.heappush(maxHeap, remaining * -1) 

        return -maxHeap[0] if len(maxHeap) == 1 else 0 
