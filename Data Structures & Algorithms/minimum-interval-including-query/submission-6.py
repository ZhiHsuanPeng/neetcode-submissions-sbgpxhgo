class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals.sort(key=lambda x: x[0]) 

        heap = [] 
        index = 0 
        n = len(intervals) 
        res = {}
        for q in sorted(queries): 

            while index < n and intervals[index][0] <= q: 
                start, end = intervals[index]
                heapq.heappush(heap, (end - start + 1, end)) 
                index += 1 

            while heap and heap[0][1] < q: 
                heapq.heappop(heap) 

            if heap: 
                res[q] = heap[0][0] 
            else: 
                res[q] = -1 

        return [res[q] for q in queries]