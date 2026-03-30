class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)  
        maxHeap = [ -i for i in count.values() ] 
        heapq.heapify(maxHeap) 
        deq = deque() 

        time = 0
        while len(maxHeap) or len(deq): 
            time += 1  

            if maxHeap: 
                cnt = heapq.heappop(maxHeap) 
                cnt += 1 
                if cnt != 0: 
                    deq.append([time + n, cnt])

            if deq and deq[0][0] == time: 
                ready_time, cnt = deq.popleft()
                heapq.heappush(maxHeap, cnt)

        return time
        