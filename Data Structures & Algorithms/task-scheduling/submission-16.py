class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks) 
        maxHeap = [ -i for i in count.values() ] 
        heapq.heapify(maxHeap) 

        q = deque() 
        time = 0
        while maxHeap or q:  
            time += 1 
            
            if maxHeap: 
                cnt = heapq.heappop(maxHeap)  
                cnt += 1 
                if cnt != 0: 
                    q.append((cnt, time + n)) 
             
            if q and q[0][1] == time: 
                cnt, _ = q.popleft() 
                heapq.heappush(maxHeap, cnt) 

        return time