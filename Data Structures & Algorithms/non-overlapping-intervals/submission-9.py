class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key= lambda x: x[0]) 

        prevEnd = intervals[0][1] 
        count = 0
        for i in range(1, len(intervals)): 
            cur = intervals[i] 

            if cur[0] >= prevEnd: 
                prevEnd = cur[1]  
            else: 
                count += 1 
                prevEnd = min(prevEnd, cur[1]) 
        return count