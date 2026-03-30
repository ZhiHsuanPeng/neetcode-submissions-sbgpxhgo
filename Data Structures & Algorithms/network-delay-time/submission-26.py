class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        
        adj = defaultdict(list) 
        for u, v, time in times: 
            adj[u].append((time, v)) 

        q = [(0, k)] 
        visited = set()  
        res = 0

        while q: 
            cur_time, cur = heapq.heappop(q) 

            if cur in visited: 
                continue 

            res = cur_time
            visited.add(cur) 

            for time, nei in adj[cur]: 
                if nei not in visited: 
                    heapq.heappush(q, (cur_time + time, nei)) 

        return res if len(visited) == n else -1  

        