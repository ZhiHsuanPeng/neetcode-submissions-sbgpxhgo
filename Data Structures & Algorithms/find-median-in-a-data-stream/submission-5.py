class MedianFinder:

    def __init__(self):
        self.small = [] 
        self.large = []         

    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]: 
            heapq.heappush(self.large, num) 
        else: 
            heapq.heappush(self.small, -1 * num) 

        smallLen = len(self.small) 
        largeLen = len(self.large) 

        if smallLen > largeLen + 1: 
            val = heapq.heappop(self.small) 
            heapq.heappush(self.large, val * -1)  

        if largeLen > smallLen + 1: 
            val = heapq.heappop(self.large) 
            heapq.heappush(self.small, val * -1)

    def findMedian(self) -> float:
        smallLen = len(self.small) 
        largeLen = len(self.large) 

        if smallLen > largeLen: 
            return self.small[0] * -1 
        elif largeLen > smallLen: 
            return self.large[0] 
        else: 
            return (self.small[0] * -1 + self.large[0]) / 2
        