class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks) 
        heap = [ -cnt for cnt in count.values() ] 
        heapq.heapify(heap) 

        q = deque() 
        time = 0 

        while heap or q: 
            time += 1

            if heap:
                cur = heapq.heappop(heap) 
                cur += 1 
                
                if cur != 0: 
                    q.append([time + n, cur]) 

            if q and q[0][0] == time: 
                _, count = q.popleft() 
                heapq.heappush(heap, count) 

        return time