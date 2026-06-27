class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort() 

        lastEnd = intervals[0][1] 
        cnt = 0 

        for i in range(1, len(intervals)): 
            if intervals[i][0] < lastEnd: 
                lastEnd = min(lastEnd, intervals[i][1]) 
                cnt += 1 
            else: 
                lastEnd = intervals[i][1] 

        return cnt 