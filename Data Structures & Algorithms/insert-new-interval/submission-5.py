class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        intervals.append(newInterval) 
        intervals.sort(key= lambda x: x[0]) 

        merged = [intervals[0]] 

        for i in range(1, len(intervals)): 
            start, end = intervals[i] 
            lastMerged = merged[-1] 
            
            if start <= lastMerged[1]: 
                lastMerged[1] = max(lastMerged[1], end) 
            else: 
                merged.append([start, end]) 

        return merged
