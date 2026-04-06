class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        i = 0 
        start, end = newInterval 
        res = []

        while i < len(intervals) and intervals[i][1] < start: 
            res.append(intervals[i])
            i += 1 

        while i < len(intervals) and end >= intervals[i][0]: 
            start = min(intervals[i][0], start) 
            end = max(intervals[i][1], end) 
            i += 1 

        res.append([start, end]) 

        while i < len(intervals): 
            res.append(intervals[i]) 
            i += 1 

        return res