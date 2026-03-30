class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        q = [(0, k)] 
        dist = { i: float('inf') for i in range(1, n + 1) }  

        while q: 
            cur_dist, cur_node = heapq.heappop(q) 

            if dist[cur_node] < cur_dist: 
                continue  

            dist[cur_node] = cur_dist

            for nei, time in adj[cur_node]: 
                new_dist = cur_dist + time 
                heapq.heappush(q, (new_dist, nei)) 

        res = max(dist.values()) 

        return res if res != float('inf') else -1