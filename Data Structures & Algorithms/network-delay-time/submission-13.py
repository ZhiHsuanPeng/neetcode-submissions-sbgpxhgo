class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
         
        graph = defaultdict(list) 
        for u, v, t in times: 
            graph[u].append((t, v)) 

        
        pq = [(0, k)] 
        distance = { i: float('inf') for i in range(1, n + 1) }  
        distance[k] = 0

        while pq: 
            cur_dist, cur_node = heapq.heappop(pq) 

            if cur_dist > distance[cur_node]: 
                continue; 

            for t, v in graph[cur_node]: 
                if cur_dist + t < distance[v]: 
                    distance[v] = cur_dist + t 
                    heapq.heappush(pq, (cur_dist + t, v)) 

        res = max(distance.values()) 

        return res if res != float('inf') else -1  
