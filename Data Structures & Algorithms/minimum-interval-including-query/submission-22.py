class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals.sort(key = lambda x: x[0]) 
        sorted_queries = sorted(queries) 

        heap = [] 
        i = 0 
        res = {}  
        n = len(intervals)
        
        for q in sorted_queries:
            while i < n and q >= intervals[i][0]:  
                l, r = intervals[i]
                heapq.heappush(heap, (r - l + 1, r))  
                i +=1 

            while heap and heap[0][1] < q: 
                heapq.heappop(heap) 

            if heap: 
                res[q] = heap[0][0] 
            else: 
                res[q] = -1 

        return [ res[q] for q in queries ]