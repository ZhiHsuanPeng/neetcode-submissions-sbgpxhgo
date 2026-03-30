class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        n = len(intervals)
        res = []  

        newStart, newEnd = newInterval 
        i = 0 

        while i < n and newStart > intervals[i][1]: 
            res.append(intervals[i]) 
            i += 1 

        while i < n and newEnd >= intervals[i][0]: 
            newStart = min(newStart, intervals[i][0]) 
            newEnd = max(newEnd, intervals[i][1]) 
            i += 1 

        res.append([newStart, newEnd]) 

        while i < n: 
            res.append(intervals[i]) 
            i += 1 

        return res