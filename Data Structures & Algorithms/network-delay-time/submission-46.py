class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((t, v)) 

        q = [(0, k)] 
        dist = { i: float('inf') for i in range(1, n + 1) }  

        while q: 
            cur_time, cur_node = heapq.heappop(q) 

            if cur_time > dist[cur_node]: 
                continue 

            dist[cur_node] = cur_time 

            for time, nei in adj[cur_node]: 
                next_time = time + cur_time 
                heapq.heappush(q, (next_time, nei)) 

        result = max(dist.values()) 
        return result if result != float('inf') else -1