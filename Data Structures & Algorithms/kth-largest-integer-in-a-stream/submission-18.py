class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.minHeap = nums 
        self.size = k 

        heapq.heapify(self.minHeap) 
        while len(self.minHeap) > k: 
            heapq.heappop(self.minHeap)

    def add(self, val: int) -> int: 
        q = self.minHeap  
        k = self.size

        heapq.heappush(q, val) 
        if len(q) > k: 
            heapq.heappop(q) 

        return q[0]
        
