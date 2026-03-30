class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 

        for u, v, t in times: 
            adj[u].append((v, t)) 

        q = [(0, k)] 
        dist = { i: float('inf') for i in range(1, n + 1) } 
        dist[k] = 0 
        visited = set() 

        while q: 
            cur_time, cur_node  = heapq.heappop(q) 

            if cur_node in visited: 
                continue 

            visited.add(cur_node) 

            for nei, time in adj[cur_node]: 
                next_time = time + cur_time  
                if next_time < dist[nei]: 
                    dist[nei] = next_time
                    heapq.heappush(q, (next_time, nei)) 

        result = max(dist.values()) 
        return result if result != float('inf') else -1