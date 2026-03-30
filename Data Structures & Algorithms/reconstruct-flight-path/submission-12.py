class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list) 

        for u, v in sorted(tickets): 
            adj[u].append(v) 

        result = []
        def dfs(cur): 
            while adj[cur]: 
                next_airport = adj[cur].pop(0) 
                dfs(next_airport) 

            result.append(cur)  

        dfs('JFK') 

        return result[::-1]