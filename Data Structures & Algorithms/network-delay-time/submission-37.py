class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list) 
        for u, v, t in times: 
            graph[u].append((v, t)) 

        dist = {i: float('inf') for i in range(1, n + 1)} 

        dist[k] = 0 
        q = [(0, k)] 

        while q: 
            cur_distance, cur = heapq.heappop(q) 

            if cur_distance > dist[cur]: 
                continue  

            dist[cur] = cur_distance

            for nei, time in graph[cur]:  
                new_dist = cur_distance + time
                if new_dist < dist[nei]: 
                    heapq.heappush(q, (new_dist, nei)) 

        res = max(dist.values()) 
        return res if res != float('inf') else -1
            