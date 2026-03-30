class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x: x[0]) 
        res = [intervals[0]]
        for i in range(1, len(intervals)): 
            interval = intervals[i] 
            lastEnd = res[-1][1] 

            if interval[0] <= lastEnd: 
                res[-1][1] = max(interval[1], res[-1][1]) 
            else: 
                res.append(interval) 


        return res