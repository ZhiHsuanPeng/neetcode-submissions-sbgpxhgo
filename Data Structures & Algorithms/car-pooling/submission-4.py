class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips.sort(key = lambda x: x[1]) 
        heap = []  

        cur = 0

        for n, u, v in trips: 
            while heap and heap[0][0] <= u: 
                _, count = heapq.heappop(heap) 
                cur -= count

            heapq.heappush(heap, (v, n)) 
            cur += n 

            if cur > capacity: 
                return False 

        return True