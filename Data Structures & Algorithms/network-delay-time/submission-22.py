class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
         
        graph = defaultdict(list) 
        for src, tar, time in times: 
            graph[src].append((time, tar)) 


        pq = [(0, k)]   
        dist = { i: float('inf') for i in range(1, n + 1) }  
        dist[k] = 0

        while pq: 
            cur_time, cur_node = heapq.heappop(pq) 

            if cur_time > dist[cur_node]: 
                continue 

            for time, nei in graph[cur_node]: 
                if time + cur_time < dist[nei]: 
                    dist[nei] = time + cur_time 
                    heapq.heappush(pq, (time + cur_time, nei)) 

        res = max(dist.values())
        return res if res != float('inf') else -1

    