class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[0]) 
        n = len(intervals)
        res = 0 

        for i in range(1, n): 
            _, lastEnd = intervals[i - 1] 
            curStart, curEnd = intervals[i] 

            if curStart >= lastEnd: 
                continue 
            else: 
                intervals[i][1] = min(curEnd, lastEnd) 
                res += 1 

        return res