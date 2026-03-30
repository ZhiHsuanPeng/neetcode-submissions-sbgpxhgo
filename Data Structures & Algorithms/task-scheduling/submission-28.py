class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks) 
        maxHeap = [ -cnt for cnt in count.values() ]  
        heapq.heapify(maxHeap)

        res = 0 
        q = deque() 
        
        while maxHeap or q:   
            res += 1 

            if maxHeap: 
                cnt = heapq.heappop(maxHeap) + 1 
                if cnt != 0: 
                    q.append((res + n, cnt)) 

            if q and q[0][0] == res: 
                _, cnt = q.popleft() 
                heapq.heappush(maxHeap, cnt) 
            
        return res