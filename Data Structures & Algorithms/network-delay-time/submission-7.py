class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list) 

        for src, tar, dist in times:
            graph[src].append((tar, dist)) 

        # (dist, node)
        pq = [(0, k)]  
        distance = { i: float('inf') for i in range(1, n + 1) } 
        distance[k] = 0

        while pq: 
            cur_dist, cur_node = heapq.heappop(pq) 

            if cur_dist > distance[cur_node]: 
                continue; 

            for nei, dist in graph[cur_node]: 
                if cur_dist + dist < distance[nei]: 
                    distance[nei] = cur_dist + dist 
                    heapq.heappush(pq, (distance[nei], nei)) 

        res = max(distance.values()) 

        return res if res != float('inf') else -1