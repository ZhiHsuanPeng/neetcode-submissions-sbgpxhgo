class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 
        heap = [(0, k)] 

        while heap: 
            t, node = heapq.heappop(heap) 

            if t > dist[node]: 
                continue 

            for nei, neiTime in adj[node]: 
                time = t + neiTime 

                if time < dist[nei]: 
                    dist[nei] = time 
                    heapq.heappush(heap, (time, nei)) 

        res = max(dist.values()) 
        return res if res != float('inf') else -1