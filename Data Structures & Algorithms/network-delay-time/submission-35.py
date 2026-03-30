class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        
        adj = defaultdict(list) 
        for u, v, time in times: 
            adj[u].append((time, v)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0  
        q = [(0, k)] 
        while q: 
            cur_time, cur = heapq.heappop(q) 

            if cur_time > dist[cur]: 
                continue  

            dist[cur] = cur_time

            for time, nei in adj[cur]: 
                heapq.heappush(q, (time + cur_time, nei))  

        res = max(dist.values()) 
        return res if res != float('inf') else -1

        