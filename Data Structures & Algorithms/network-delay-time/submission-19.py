class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
         
        graph = defaultdict(list) 
        for src, tar, time in times: 
            graph[src].append((time, tar)) 


        pq = [(0, k)]  
        visited = set()  
        res = 0
        while pq: 
            cur_time, cur_node = heapq.heappop(pq) 

            if cur_node in visited: 
                continue;  

            visited.add(cur_node) 
            res = cur_time

            for time, nei in graph[cur_node]: 
                if nei not in visited: 
                    heapq.heappush(pq, (cur_time + time, nei)) 


        return res if len(visited) == n else -1

    