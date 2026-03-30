class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list) 

        for u, v in tickets: 
            adj[u].append(v)  

        for u in adj: 
            adj[u].sort(reverse = True)

        result = []
        def dfs(cur): 
            while adj[cur]: 
                next_airport = adj[cur].pop() 
                dfs(next_airport) 

            result.append(cur)  

        dfs('JFK') 

        return result[::-1]