class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[0]) 

        curEnd = intervals[0][1] 
        cnt = 0 

        for i in range(1, len(intervals)): 
            start, end = intervals[i] 

            if start < curEnd:  
                cnt += 1 
                curEnd = min(curEnd, end) 
            else: 
                curEnd = end 

        return cnt