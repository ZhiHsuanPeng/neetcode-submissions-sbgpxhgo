class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[0])
        curEnd = float('-inf')
        res = 0

        for interval in intervals:
            start, end = interval 

            if start >= curEnd:
                curEnd = end 
            else: 
                res += 1 
                curEnd = min(curEnd, end) 

        return res