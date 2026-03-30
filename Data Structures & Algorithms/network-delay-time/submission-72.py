class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list)

        for u, v, t in times: 
            adj[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 
        heap = [(0, k)] 

        while heap: 
            curDist, node = heapq.heappop(heap)

            if dist[node] < curDist: 
                continue 

            for nei, time in adj[node]:  
                calDist = curDist + time 
                if dist[nei] > calDist: 
                    dist[nei] = calDist 
                    heapq.heappush(heap, (calDist, nei)) 

        res = max(dist.values()) 
        return res if res != float('inf') else -1                        