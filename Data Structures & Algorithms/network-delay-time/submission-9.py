class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list) 

        for src, tar, dist in times:
            graph[src].append((tar, dist)) 

        # (dist, node)
        pq = [(0, k)]  
        visited = set() 
        res = 0
        
        while pq: 
            cur_dist, cur_node = heapq.heappop(pq) 

            if cur_node in visited: 
                continue  
            visited.add(cur_node) 
            res = cur_dist

            for nei, dist in graph[cur_node]:  
                if nei not in visited: 
                    heapq.heappush(pq, (cur_dist + dist, nei)) 

        return res if len(visited) == n else -1 