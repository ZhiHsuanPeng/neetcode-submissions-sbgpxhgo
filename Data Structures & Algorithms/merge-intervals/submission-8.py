class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key= lambda x: x[0]) 
        n = len(intervals)
        res = [] 
        for i in range(n): 
            if len(res) == 0: 
                res.append(intervals[i]) 
                continue 

            curStart, curEnd = intervals[i] 
             
            if curStart > res[-1][1]: 
                res.append(intervals[i]) 
                continue 
            
            lastStart, lastEnd = res.pop() 
            newEnd = max(lastEnd, curEnd) 
            res.append([lastStart, newEnd]) 

        return res