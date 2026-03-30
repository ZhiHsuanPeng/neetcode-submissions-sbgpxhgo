class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1)}

        q = [(0, k)] 
        dist[k] = 0 

        while q: 
            curT, curNode = heapq.heappop(q) 

            for nei, neiT in adj[curNode]: 
                nextTime = curT + neiT 

                if nextTime < dist[nei]: 
                    dist[nei] = nextTime 
                    heapq.heappush(q, (nextTime, nei))  

        res = max(dist.values()) 

        return res if res != float('inf') else -1

