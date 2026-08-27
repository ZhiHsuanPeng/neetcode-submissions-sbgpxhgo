class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x:x[0]) 

        cnt = 0 
        curEnd = intervals[0][1] 

        for i in range(1, len(intervals)): 
            if intervals[i][0] < curEnd: 
                cnt += 1 
                curEnd = min(curEnd, intervals[i][1]) 
            else: 
                curEnd = intervals[i][1]

        return cnt