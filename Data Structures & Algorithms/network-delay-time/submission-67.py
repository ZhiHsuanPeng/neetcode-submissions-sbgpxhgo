class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list)
 
        for u, v, t in times: 
            adj[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 
        heap = [(0, k)] 

        while heap: 
            cur_time, node = heapq.heappop(heap) 

            if dist[node] < cur_time: 
                continue 

            for nei, nei_time in adj[node]: 
                next_time = cur_time + nei_time 
                if dist[nei] > next_time: 
                    dist[nei] = next_time 
                    heapq.heappush(heap, (next_time, nei)) 

        res = max(dist.values()) 
        return res if res != float('inf') else -1