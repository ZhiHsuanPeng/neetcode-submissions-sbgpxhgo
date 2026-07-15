class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list) 

        for u, v in tickets: 
            adj[u].append(v) 

        for f in adj: 
            adj[f].sort(reverse = True) 

        res = [] 

        def dfs(node): 

            while adj[node]: 
                nxt = adj[node].pop() 
                dfs(nxt) 

            res.append(node) 

        dfs('JFK') 
        return res[::-1]