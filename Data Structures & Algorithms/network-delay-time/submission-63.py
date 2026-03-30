class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        
        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 

        q = [(0, k)] 

        while q: 
            cur_time, cur_node = heapq.heappop(q) 

            if cur_time > dist[cur_node]: 
                continue 

            for nei, time in adj[cur_node]: 
                next_time = cur_time + time 
                if dist[nei] > next_time: 
                    dist[nei] = next_time 
                    heapq.heappush(q, (next_time, nei)) 

        res = max(dist.values()) 

        return res if res != float('inf') else -1