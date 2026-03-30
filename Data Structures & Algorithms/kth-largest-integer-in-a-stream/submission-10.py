class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.q = nums
        heapq.heapify(self.q) 
        self.limit = k 

        while len(self.q) > self.limit: 
            heapq.heappop(self.q) 

    def add(self, val: int) -> int:
        heapq.heappush(self.q, val) 

        while len(self.q) > self.limit: 
            heapq.heappop(self.q) 

        return self.q[0]
