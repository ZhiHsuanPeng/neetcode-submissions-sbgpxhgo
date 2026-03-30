class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        edges = defaultdict(list) 

        for u, v, t in times: 
            edges[u].append((v, t)) 

        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 

        q = [(0, k)] 

        while q: 
            cur_dist, cur_node = heapq.heappop(q) 

            if cur_dist > dist[cur_node]: 
                continue 

            for nei, w in edges[cur_node]: 
                next_dist = cur_dist + w 
                if next_dist < dist[nei]: 
                    dist[nei] = next_dist 
                    heapq.heappush(q, (next_dist, nei)) 

        res = max(dist.values()) 
        return res if res != float('inf') else -1