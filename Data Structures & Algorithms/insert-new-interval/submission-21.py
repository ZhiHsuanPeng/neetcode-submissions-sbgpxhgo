class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []  
        i = 0  

        start, end = newInterval

        while i < len(intervals): 
            cur = intervals[i] 

            if cur[1] < start: 
                res.append(cur) 
                i += 1 
                continue 

            if end >= cur[0]: 
                start = min(start, cur[0]) 
                end = max(end, cur[1])  
                i += 1 
                continue  

            break

        res.append([start, end]) 

        while i < len(intervals): 
            res.append(intervals[i]) 
            i += 1 

        return res

