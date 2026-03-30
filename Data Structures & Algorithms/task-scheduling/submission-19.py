class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks) 
        maxH = [ -i for i in count.values() ] 

        cycle = 0 
        q = deque() 
        while maxH or q:
            cycle += 1
            if maxH: 
                cur = heapq.heappop(maxH) 
                cur += 1 
                if cur != 0: 
                    q.append([cycle + n, cur]) 

            if q and q[0][0] == cycle: 
                _, cur = q.popleft() 
                heapq.heappush(maxH, cur) 

        return cycle 


