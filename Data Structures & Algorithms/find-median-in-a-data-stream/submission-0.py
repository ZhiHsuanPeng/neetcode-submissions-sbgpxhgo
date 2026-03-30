class MedianFinder:

    def __init__(self):  
        # this is max heap 
        self.small = []  
        # this is min heap
        self.large = []
        

    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]: 
            heapq.heappush(self.large, num) 
        else: 
            heapq.heappush(self.small, -1 * num) 

        if len(self.small) > len(self.large) + 1: 
            cur = heapq.heappop(self.small) 
            heapq.heappush(self.large, -1 * cur) 

        if len(self.large) > len(self.small) + 1: 
            cur = heapq.heappop(self.large) 
            heapq.heappush(self.small, -1 * cur) 

    def findMedian(self) -> float: 
        if len(self.small) > len(self.large):  
            return -1 * self.small[0] 
        
        if len(self.large) > len(self.small):  
            return self.large[0] 

        return (-1 * self.small[0] + self.large[0]) / 2
        
        