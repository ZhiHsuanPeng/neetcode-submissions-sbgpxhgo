class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list) 
        
        for u, v, t in times: 
            adj[u].append((v, t)) 
       
        q = [(0, k)] 
        visited = set() 
        res = 0

        while q: 
            cur_time, cur_node = heapq.heappop(q) 

            if cur_node in visited: 
                continue 

            res = max(res, cur_time)
            visited.add(cur_node) 

            for nei, nei_time in adj[cur_node]: 
                new_time = cur_time + nei_time 
                heapq.heappush(q, (new_time, nei))  

        return res if len(visited) == n else -1

        