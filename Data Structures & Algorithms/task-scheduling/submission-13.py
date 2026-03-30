class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = [-i for i in Counter(tasks).values()] 
        heapq.heapify(count) 


        deq = deque() 
        time = 0 

        while count or deq: 
            time += 1
            if count: 
                cnt = heapq.heappop(count) 
                cnt += 1 
                if cnt != 0: 
                    deq.append([cnt, time + n]) 

            if deq and deq[0][1] == time: 
                cnt, _ = deq.popleft() 
                heapq.heappush(count, cnt) 

        return time 
