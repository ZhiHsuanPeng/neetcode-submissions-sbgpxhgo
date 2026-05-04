class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 

        q = [(0, k)]

        while q: 
            curDist, curNode = heapq.heappop(q)   

            if dist[curNode] < curDist: 
                continue

            for nei, neiDist in adj[curNode]: 
                nextDist = curDist + neiDist 

                if dist[nei] > nextDist:
                    dist[nei] = nextDist 
                    heapq.heappush(q, (nextDist, nei)) 

        res = max(dist.values())

        return res if res != float('inf') else -1